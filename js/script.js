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

    colorSelect.disabled = false;

    switch (design.value) {

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

activities.addEventListener('change', function(){
    const checkbox = event.target;
    const cost = parseInt(checkbox.dataset.cost)


    const restCheckboxes = Array.from(activities.getElementsByTagName('input')).filter(function(checkbox) {
      return checkbox.name !== 'all';
    });

    const mainCheckbox = activities.querySelector('input[name="all"]');

     if (checkbox.name === 'all') {

    restCheckboxes.forEach(function(checkbox) {
      if (checkbox.checked === true) {
        checkbox.checked = false;


      }
    });

    activities_total_cost.innerHTML = `Total: $${cost}`;

  } else {

         mainCheckbox.checked = false;
         const eventDate = checkbox.nextElementSibling.nextElementSibling;
         restCheckboxes.forEach(function(otherCheckbox){

             if (checkbox !== otherCheckbox) {

                 if (eventDate.textContent === otherCheckbox.nextElementSibling.nextElementSibling.textContent){

                     otherCheckbox.checked = false;

                 }

             }

         })

         restCheckboxes.forEach(function(otherCheckbox) {

             let partialCost = parseInt(otherCheckbox.dataset.cost)

             if (otherCheckbox.checked) {

                 partial_costs.push(partialCost)


             }


         })

         let sum = 0;
         for (let i=0; i<partial_costs.length; i++) {

        sum += partial_costs[i];

    }

          activities_total_cost.innerHTML = `Total: $${sum}`;
          partial_costs = [];
     }
});


// End of the activities section







// Payment Methods

const payment_method = document.querySelector('.payment-methods #payment');
const credit_card = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const card_Number = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expYear = document.getElementById('exp-year');
const expDate = document.getElementById('exp-month')

credit_card.style.display= "block";
paypal.style.display = "none";
bitcoin.style.display = "none";
card_Number.disabled = true;
zipCode.disabled = true;
cvv.disabled = true;
expDate.disabled = true;
expYear.disabled = true;



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






// Form Validation


const submitButton = document.querySelector('form button[type="submit"]');
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

submitButton.addEventListener('click', function(event){

    clickCount++;

    if (nameInput.value === '') { // Managing Errors associated with name

         event.preventDefault();
         nameInput.parentElement.classList.add('not-valid');
         nameInput.parentElement.classList.remove('valid');
         const hintElement = nameInput.parentElement.querySelector('.hint');
         hintElement.style.display = 'block';
         if (clickCount===1) {
         currentErrorMessage = 'It looks like you are not ready to submit yet';
      } else {
       currentErrorMessage = 'Please pay attention to each field';
       }
         errorMessage.textContent = currentErrorMessage;
         submitButton.insertAdjacentElement('beforebegin', errorMessage);

    } else {

        nameInput.parentElement.classList.add('valid');
        nameInput.parentElement.classList.remove('not-valid');
        const hintElement = nameInput.parentElement.querySelector('.hint');
        hintElement.style.display = 'none';

    }

        if (isEmailValid(emailInput.value) === false) { // Managing the email errors

        event.preventDefault();
        emailInput.parentElement.classList.add('not-valid');
        emailInput.parentElement.classList.remove('valid');
        const hintElement = emailInput.parentElement.querySelector('.hint');
        hintElement.style.display = 'block';


    } else {

            emailInput.parentElement.classList.add('valid');
            emailInput.parentElement.classList.remove('not-valid');
            const hintElement = emailInput.parentElement.querySelector('.hint');
            hintElement.style.display = 'none';



        }


        if (anyChecked === false) { // Managing the checkboxes activities Errors

        event.preventDefault();
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        const hintElement = activities.querySelector('.hint');
        hintElement.style.display = 'block';


    } else {

            activities.classList.add('valid');
            activities.classList.remove('not-valid');
            const hintElement = activities.querySelector('.hint');
            hintElement.style.display = 'none';


        }


        if (payment_method.value === 'select method') { // Managing the payment method Errors

            event.preventDefault();
            payment_method.parentElement.classList.add('not-valid');
            payment_method.parentElement.classList.remove('valid');



        }  else {

            payment_method.parentElement.classList.add('valid');
            payment_method.parentElement.classList.remove('not-valid');

            if (payment_method.value === 'credit-card' && isCardNumberValid(card_Number.value) === false) { // Managing Card Numbers Errors

        event.preventDefault();
        card_Number.parentElement.classList.add('not-valid');
        card_Number.parentElement.classList.remove('valid');
        const hintElement = card_Number.parentElement.querySelector('.hint');
        hintElement.style.display = 'block';


    } else {

            card_Number.parentElement.classList.add('valid');
            card_Number.parentElement.classList.remove('not-valid');
            const hintElement = card_Number.parentElement.querySelector('.hint');
            hintElement.style.display = 'none';

        }

        if (payment_method.value === 'credit-card' && isZipValid(zipCode.value) === false) { // Managing Zip Code Errors

        event.preventDefault();
        zipCode.parentElement.classList.add('not-valid');
        zipCode.parentElement.classList.remove('valid');
        const hintElement = zipCode.parentElement.querySelector('.hint');
        hintElement.style.display = 'block';



    } else {

            zipCode.parentElement.classList.add('valid');
            zipCode.parentElement.classList.remove('not-valid');
            const hintElement = zipCode.parentElement.querySelector('.hint');
            hintElement.style.display = 'none';


        }


        if (payment_method.value === 'credit-card' && isCVValid(cvv.value) === false) { // Managing the cvv Errors

        event.preventDefault();
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.classList.remove('valid');
        const hintElement = cvv.parentElement.querySelector('.hint');
        hintElement.style.display = 'block';

    } else {

            cvv.parentElement.classList.add('valid');
            cvv.parentElement.classList.remove('not-valid');
            const hintElement = cvv.parentElement.querySelector('.hint');
            hintElement.style.display = 'none';

        }



        }


})

// End of the function that manages the submition




// Notifying in real time if the data you are entering the credit card number box is wrong



card_Number.addEventListener('keyup', function (event) {


    const userInput = event.target.value;
    const pattern1 = /^\d{0,16}$/;
    const pattern2 = /^[\d]{13,16}$/m;

    if (!pattern1.test(userInput)) {

        card_Number.parentElement.classList.add('not-valid');
        card_Number.parentElement.classList.remove('valid');
        const hintElement = card_Number.parentElement.querySelector('.hint');
        hintElement.style.display = 'block';


    }  else if (pattern2.test(userInput)) {

        card_Number.parentElement.classList.add('valid');
        card_Number.parentElement.classList.remove('not-valid');
        const hintElement = card_Number.parentElement.querySelector('.hint');
        hintElement.style.display = 'none';

    } else if (pattern1.test(userInput)) {

        card_Number.parentElement.classList.remove('not-valid');
        const hintElement = card_Number.parentElement.querySelector('.hint');
        hintElement.style.display = 'none';


    }

});








// Auxiliary functions for submitting

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








