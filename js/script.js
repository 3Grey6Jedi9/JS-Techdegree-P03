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

