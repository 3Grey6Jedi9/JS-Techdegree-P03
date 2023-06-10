document.addEventListener("DOMContentLoaded", function() {

const nameInpupt = document.getElementById("name");
nameInpupt.focus();

})

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
    if (checkbox.checked) {

        partial_costs.push(cost)
    } else  {
        const index = partial_costs.indexOf(cost);

      partial_costs.splice(index, 1);

    }

    let sum = 0;
    for (let i=0; i<partial_costs.length; i++) {

        sum += partial_costs[i];

    }
    activities_total_cost.innerHTML = `$ ${sum}`


})

// Payment Methods

const payment_method = document.querySelector('.payment-methods #payment');
const credit_card = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

credit_card.style.display= "block";
paypal.style.display = "none";
bitcoin.style.display = "none";


payment_method.addEventListener('change', function(){

    switch (payment_method.value) {


        case "credit-card":
            credit_card.style.display= "block";
            paypal.style.display = "none";
            bitcoin.style.display = "none";
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
        default:
            credit_card.style.display= "block";
            paypal.style.display = "none";
            bitcoin.style.display = "none";
            break;

}

})



