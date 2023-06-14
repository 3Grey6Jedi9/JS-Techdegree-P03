document.addEventListener("DOMContentLoaded", function() {

const nameInpupt = document.getElementById("name");
nameInpupt.focus();

})


// Other job block

const other_job = document.getElementById("title");

const other_job_role = document.getElementById("other-job-role");

other_job_role.style.display = "none";

other_job.addEventListener("change", function(){

    const selectedOption = other_job.value;

    switch (selectedOption) {

        case "other":
            other_job_role.style.display = "block";
            break;
        default:
            other_job_role.style.display = "none";

    }


})







// T-shirt Info Section

const colorSelect = document.getElementById("color");
colorSelect.disabled = true;

const design = document.getElementById('design');

const color = document.getElementById('color');

color.innerHTML = `<option selected hidden>Select a design theme above</option>`;

design.addEventListener("change", function(){

    colorSelect.disabled = false; // Once I choose a design I will be able to select the color

    switch (design.value) { // I will display a set of options according to the design value

        case "js puns":
            color.innerHTML = '';
            let html1 =`<option selected hidden>Select a color for the theme selected</option>
                <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
                <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>`

            color.insertAdjacentHTML("beforeend",html1);
            break;

        case "heart js":
            color.innerHTML = '';
            let html2 =`
            <option selected hidden>Select a color for the theme selected</option>
            <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
                <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
              `
            color.insertAdjacentHTML("beforeend",html2);
            break;
    }


})







// Providing life to the 'Activities Section'

const activities = document.getElementById('activities');
const activities_total_cost = document.getElementById('activities-cost');
let partial_costs = [];
const activitiesCheckboxes = Array.from(activities.getElementsByTagName('input')); // This will be useful when calculating the total prize



activities.addEventListener('change', function(){
    const checkbox = event.target;
    const cost = parseInt(checkbox.dataset.cost)


    const restCheckboxes = Array.from(activities.getElementsByTagName('input')).filter(function(checkbox) {
      return checkbox.name !== 'all';
    }); // I will need this to compare those date's events later

    const mainCheckbox = activities.querySelector('input[name="all"]');


    // Here I am going to make sure that I do not generate a conflict because of the schedules
    const eventDate = checkbox.nextElementSibling.nextElementSibling;
    restCheckboxes.forEach(function(otherCheckbox){

        if (checkbox !== otherCheckbox) {

            if (eventDate.textContent === otherCheckbox.nextElementSibling.nextElementSibling.textContent){

                otherCheckbox.checked = false;

                 }

             }

         })

                    // Calculating the total prize

         activitiesCheckboxes.forEach(function(Checkbox) {

             let partialCost = parseInt(Checkbox.dataset.cost)

             if (Checkbox.checked) {

                 partial_costs.push(partialCost)


             }

         })

         let sum = 0;
         for (let i=0; i<partial_costs.length; i++) {

        sum += partial_costs[i];

    }

          activities_total_cost.innerHTML = `Total: $${sum}`;
          partial_costs = [];

});


// End of the activities section







// Payment Methods

const payment_method = document.querySelector('.payment-methods #payment');
payment_method.value = "credit-card";
const credit_card = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const card_Number = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expYear = document.getElementById('exp-year');
const expDate = document.getElementById('exp-month')

credit_card.style.display= "block"; // // By default
paypal.style.display = "none"; // By default
bitcoin.style.display = "none"; // // By default
// I want to disable by default the credit card elements, so they only activate when the user select credit card as the method of payment.
// I think it looks better this way. Otherwise, the 'Select Payment Method' won't play any role.
// I will put them as false as a default value, but I am leaving the code just in case someone wants to change it.
card_Number.disabled = false;
zipCode.disabled = false;
cvv.disabled = false;
expDate.disabled = false;
expYear.disabled = false;


// Managing the payment methods

payment_method.addEventListener('change', function(){

    switch (payment_method.value) {


        case "credit-card":
            credit_card.style.display= "block";
            paypal.style.display = "none";
            bitcoin.style.display = "none";
            card_Number.disabled = false;
            zipCode.disabled = false;
            cvv.disabled = false;
            expDate.disabled = false;
            expYear.disabled = false;
            break;
        case "paypal":
            credit_card.style.display= "none";
            paypal.style.display = "block";
            bitcoin.style.display = "none";
            break;
        case "bitcoin":
            credit_card.style.display= "none";
            paypal.style.display = "none";
            bitcoin.style.display = "block";
            break;

}

})





                                                    //  *** FORM VALIDATION ***


const submitForm = document.querySelector('form');
const nameInput = document.getElementById("name");
const emailInput = document.getElementById('email')
const activities_checkboxes = document.querySelectorAll('#activities input[type="checkbox"]');
let anyChecked = false;




// Checking if there is at least one activity checked

activities_checkboxes.forEach(function (checkbox){

    checkbox.addEventListener('change', function(){

        anyChecked = Array.from(activities_checkboxes).some(function(checkbox){

            return checkbox.checked;

        });

    })

})








// Submitting the form and  Visual Validation Errors



let clickCount = 0;
let errorMessage = document.createElement('span');
errorMessage.classList.add('error-message');
let currentErrorMessage = '';
const submitButton = document.querySelector('button');

submitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let errorFound = false;

  // Checking Name's field
  if (nameInput.value === '') {
    nameInput.parentElement.classList.add('not-valid');
    nameInput.parentElement.classList.remove('valid');
    const hintElement = nameInput.parentElement.querySelector('.hint');
    hintElement.style.display = 'block';
    errorFound = true;
  } else {
    nameInput.parentElement.classList.add('valid');
    nameInput.parentElement.classList.remove('not-valid');
    const hintElement = nameInput.parentElement.querySelector('.hint');
    hintElement.style.display = 'none';
  }

  // Checking Email's field
  if (isEmailValid(emailInput.value) === false) {
    emailInput.parentElement.classList.add('not-valid');
    emailInput.parentElement.classList.remove('valid');
    const hintElement = emailInput.parentElement.querySelector('.hint');
    hintElement.style.display = 'block';
    errorFound = true;
  } else {
    emailInput.parentElement.classList.add('valid');
    emailInput.parentElement.classList.remove('not-valid');
    const hintElement = emailInput.parentElement.querySelector('.hint');
    hintElement.style.display = 'none';
  }

  // Checking Checkbox activities
  if (anyChecked === false) {
    activities.classList.add('not-valid');
    activities.classList.remove('valid');
    const hintElement = activities.querySelector('.hint');
    hintElement.style.display = 'block';
    errorFound = true;
  } else {
    activities.classList.add('valid');
    activities.classList.remove('not-valid');
    const hintElement = activities.querySelector('.hint');
    hintElement.style.display = 'none';
  }

  // Checking Payment Method
  if (payment_method.value === 'select method') {
    payment_method.parentElement.classList.add('not-valid');
    payment_method.parentElement.classList.remove('valid');
    errorFound = true;
  } else {
    payment_method.parentElement.classList.add('valid');
    payment_method.parentElement.classList.remove('not-valid');
  }

  // Checking Credit Card fields
  if (payment_method.value === 'credit-card') {
    if (isCardNumberValid(card_Number.value) === false) {
      card_Number.parentElement.classList.add('not-valid');
      card_Number.parentElement.classList.remove('valid');
      const hintElement = card_Number.parentElement.querySelector('.hint');
      hintElement.style.display = 'block';
      errorFound = true;
    } else {
      card_Number.parentElement.classList.add('valid');
      card_Number.parentElement.classList.remove('not-valid');
      const hintElement = card_Number.parentElement.querySelector('.hint');
      hintElement.style.display = 'none';
    }

    if (isZipValid(zipCode.value) === false) {
      zipCode.parentElement.classList.add('not-valid');
      zipCode.parentElement.classList.remove('valid');
      const hintElement = zipCode.parentElement.querySelector('.hint');
      hintElement.style.display = 'block';
      errorFound = true;
    } else {
      zipCode.parentElement.classList.add('valid');
      zipCode.parentElement.classList.remove('not-valid');
      const hintElement = zipCode.parentElement.querySelector('.hint');
      hintElement.style.display = 'none';
    }

    // Checking CVV field
    if (isCVValid(cvv.value) === false) {
      cvv.parentElement.classList.add('not-valid');
      cvv.parentElement.classList.remove('valid');
      const hintElement = cvv.parentElement.querySelector('.hint');
      hintElement.style.display = 'block';
      errorFound = true;
    } else {
      cvv.parentElement.classList.add('valid');
      cvv.parentElement.classList.remove('not-valid');
            const hintElement = cvv.parentElement.querySelector('.hint');
      hintElement.style.display = 'none';
    }
  }

  if (errorFound) {
    if (clickCount === 1) {
      currentErrorMessage = 'It looks like you are not ready to submit yet';
    } else {
      currentErrorMessage = 'Please pay attention to each field';
    }
    errorMessage.textContent = currentErrorMessage;
    submitButton.insertAdjacentElement('beforebegin', errorMessage);
  } else {
    // If there are no errors, we can proceed with the form submission
    submitForm.submit();
  }
});


// End of the eventlistener that manages the form submission











// Notifying in real time if the data you are entering the credit card number box is wrong


const newHintElement = document.createElement('span');
newHintElement.id = 'w-hint';
newHintElement.classList.add('hint');
newHintElement.textContent = 'Please you can not enter any letters or symbols only numbers';
const hintElement = card_Number.parentElement.querySelector('.hint');
hintElement.insertAdjacentElement('afterend', newHintElement);
const SelectnewHintElement =  hintElement.nextElementSibling;


card_Number.addEventListener('keyup', function (event) {


    const userInput = event.target.value;
    const pattern1 = /^\d{17,}$/; // If you enter too much numbers
    const pattern2 = /^[\d]{13,16}$/m; // If you enter the right amount of numbers
    const pattern3 = /[^\d]+/; // If you enter a wrong character



    if (pattern1.test(userInput)) {

        card_Number.parentElement.classList.add('not-valid');
        card_Number.parentElement.classList.remove('valid');
        hintElement.style.display = 'block';
        SelectnewHintElement.style.display = 'none';


    }  else if (pattern2.test(userInput)) {

        card_Number.parentElement.classList.add('valid');
        card_Number.parentElement.classList.remove('not-valid');
        hintElement.style.display = 'none';
        SelectnewHintElement.style.display = 'none';

    } else if (pattern3.test(userInput)) {

        card_Number.parentElement.classList.add('not-valid');
        card_Number.parentElement.classList.remove('valid');
        SelectnewHintElement.style.display = 'block';
        hintElement.style.display = 'none';


    } else {

        card_Number.parentElement.classList.remove('not-valid');
        card_Number.parentElement.classList.remove('valid');
        SelectnewHintElement.style.display = 'none';
        hintElement.style.display = 'none';

    }

});






// Auxiliary functions for submitting. Here I define the patterns that the inputs must verify.

function isEmailValid(email) {

    const email_pattern = /[\w\-.]+@[a-zA-Z\d\-]+(\.[a-zA-Z\d\-]+)*\.[a-zA-Z]{2,}/;
    return email_pattern.test(email);

}

function isCardNumberValid(cardNumber){

    const cardNumber_pattern = /^[\d]{13,16}$/m;
    return cardNumber_pattern.test(cardNumber);

}

function isZipValid(zip){

    const zip_pattern = /^[\d]{5}$/m;
    return zip_pattern.test(zip);

}

function isCVValid(cvv){

    const cvv_pattern = /^[\d]{3}$/m;
    return cvv_pattern.test(cvv);


}









// Making the Activities Section more accessible

activities_checkboxes.forEach(function(checkbox){

    checkbox.addEventListener('focus', function(){

        checkbox.parentNode.classList.add('focus');

    })

    checkbox.addEventListener('blur', function(){

        checkbox.parentNode.classList.remove('focus');

    })


})








