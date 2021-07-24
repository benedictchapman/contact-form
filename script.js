document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    const form = document.querySelector("form");

    const emailField = document.querySelector("#email");
    const emailInvalid = document.querySelector("#email + .invalid");
    const passwordField = document.querySelector("#password");
    const passwordInvalid = document.querySelector("#password + .invalid");
    const tigerField = document.querySelector("#tiger-type");
    const tigerInvalid = document.querySelector("#tiger-type + .invalid");

    fields = [emailField,passwordField,tigerField];
    invalidMessages = [emailInvalid,passwordInvalid,tigerInvalid];

    const submitBtn = document.querySelector("#form-submit");

    emailField.setAttribute("border-color", "red");

    submitBtn.addEventListener("click", (event) => {
        console.log("clicked");
        fields.forEach((field,index) => {
            console.log(field);
            console.log(field.validity);
            if (!field.validity.valid) {
                invalidMessages[index].style.display = "block";
                invalidMessages[index].clientHeight;
                invalidMessages[index].style.opacity = 1;
                event.preventDefault();
            } else {
                invalidMessages[index].style.display = "none";
                invalidMessages[index].style.opacity = 0;
            }
        })
    });

});