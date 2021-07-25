document.addEventListener("DOMContentLoaded", () => {
    
    const initValidation= function(fields) {
        let validates = [];
        fields.forEach(field => {
            validates.push({
                input: document.querySelector(`#${field}`),
                message: document.querySelector(`#${field} + .invalid`)
            })
        });

        const submitBtn = document.querySelector("#form-submit");

        submitBtn.addEventListener("click", (event) => {
            validates.forEach(field => {
                if (!field.input.validity.valid) {
                    field.message.style.display = "block";
                    field.message.clientHeight;
                    field.message.style.opacity = 1;
                    event.preventDefault();
                } else {
                    field.message.style.display = "none";
                    field.message.style.opacity = 0;
                }
            })
        });
    }

    const initSecretFields = function(secrets) {
        secrets.forEach(secret => {
            const trigger = document.querySelector(secret.trigger);
            const tigerSecret = document.querySelector(secret.secret);
            const tigerField = document.querySelector(secret.field);
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
        });
    }

    initValidation(["email","password","tiger-type"]);
    const tigerSecret = {
        trigger: "#tiger",
        secret: "#tiger-secret",
        field: "#tiger-type"
    };
    initSecretFields([tigerSecret]);

});