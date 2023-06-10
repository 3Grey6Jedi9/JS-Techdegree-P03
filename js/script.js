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