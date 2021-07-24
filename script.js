document.addEventListener("DOMContentLoaded", () => {
    
    const initValidation= function() {
        const emailField = document.querySelector("#email");
        const emailInvalid = document.querySelector("#email + .invalid");
        const passwordField = document.querySelector("#password");
        const passwordInvalid = document.querySelector("#password + .invalid");
        const tigerField = document.querySelector("#tiger-type");
        const tigerInvalid = document.querySelector("#tiger-type + .invalid");

        fields = [emailField,passwordField,tigerField];
        messages = [emailInvalid,passwordInvalid,tigerInvalid];

        const submitBtn = document.querySelector("#form-submit");

        submitBtn.addEventListener("click", (event) => {
            fields.forEach((field,index) => {
                if (!field.validity.valid) {
                    messages[index].style.display = "block";
                    messages[index].clientHeight;
                    messages[index].style.opacity = 1;
                    event.preventDefault();
                } else {
                    messages[index].style.display = "none";
                    messages[index].style.opacity = 0;
                }
            })
        });
    }

    const initSecretFields = function() {
        const trigger = document.querySelector("#tiger");
        const tigerSecret = document.querySelector("#tiger-secret");
        const tigerField = document.querySelector("#tiger-type");
        trigger.addEventListener("change", () => {
            if (trigger.checked) {
                tigerSecret.style.display = "flex";
                tigerSecret.clientHeight;
                tigerSecret.style.opacity = 1;
                tigerField.required = true;
            } else {
                tigerSecret.style.display = "none";
                tigerSecret.style.opacity = 0;
                tigerField.required = false;
            }
        });
    }

    initValidation();
    initSecretFields();

});