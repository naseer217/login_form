// ==========================
// SELECT ELEMENTS
// ==========================

// Main Container
const container = document.getElementById("container");


// ==========================
// NAVIGATION BUTTONS
// ==========================

const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const forgotBtn = document.getElementById("forgotBtn");
const backLogin = document.getElementById("backLogin");


// ==========================
// FORMS
// ==========================

const forms = document.querySelectorAll("form");

const loginForm = document.querySelector(".sign-in form");

const signupForm = document.querySelector(".sign-up form");

const forgotForm = document.querySelector(".forgot-password form");


// ==========================
// LOGIN INPUTS
// ==========================

const emailInput = document.querySelector(
    '.sign-in input[type="email"]'
);

const loginPassword = document.getElementById("loginPassword");


// ==========================
// SIGNUP INPUTS
// ==========================

const signupPassword =
    document.getElementById("signupPassword");

const confirmPassword =
    document.getElementById("confirmPassword");


// ==========================
// PASSWORD EYES
// ==========================

const loginEye =
    document.getElementById("loginEye");

const signupEye =
    document.getElementById("signupEye");

const confirmEye =
    document.getElementById("confirmEye");


// ==========================
// PASSWORD STRENGTH
// ==========================

const strengthBar =
    document.querySelector(".strength-bar");

const strengthText =
    document.querySelector(".strength-text");


// ==========================
// CONFIRM PASSWORD MESSAGE
// ==========================

const confirmMessage =
    document.getElementById("confirmMessage");


// ==========================
// TOAST
// ==========================

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


// ==========================
// THEME BUTTON
// ==========================

const themeToggle =
    document.getElementById("themeToggle");


// ==========================
// SHOW / HIDE PASSWORD
// ==========================

function togglePassword(input, eye) {

    if (!input || !eye) return;


    eye.addEventListener("click", () => {


        if (input.type === "password") {

            input.type = "text";

            eye.classList.remove("fa-eye");

            eye.classList.add("fa-eye-slash");

        }


        else {

            input.type = "password";

            eye.classList.remove("fa-eye-slash");

            eye.classList.add("fa-eye");

        }

    });

}


// ==========================
// TOAST NOTIFICATION
// ==========================

function showToast(message) {

    if (!toast || !toastMessage) return;


    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// ==========================
// SHOW ERROR
// ==========================

function showError(input, message) {

    if (!input) return;


    const box = input.parentElement;


    box.style.border =
        "2px solid #e74c3c";


    showToast(message);

}


// ==========================
// CLEAR ERROR
// ==========================

function clearError(input) {

    if (!input) return;


    const box = input.parentElement;


    box.style.border = "none";

}


// ==========================
// PASSWORD STRENGTH
// ==========================

function checkPasswordStrength() {

    if (
        !signupPassword ||
        !strengthBar ||
        !strengthText
    ) return;


    const value =
        signupPassword.value;


    let strength = 0;


    // 6 Characters
    if (value.length >= 6) {

        strength++;

    }


    // Capital Letter
    if (/[A-Z]/.test(value)) {

        strength++;

    }


    // Number
    if (/[0-9]/.test(value)) {

        strength++;

    }


    // Special Character
    if (/[^A-Za-z0-9]/.test(value)) {

        strength++;

    }


    switch (strength) {


        case 1:

            strengthBar.style.width =
                "25%";

            strengthBar.style.background =
                "red";

            strengthText.textContent =
                "🔴 Weak";

            break;


        case 2:

            strengthBar.style.width =
                "50%";

            strengthBar.style.background =
                "orange";

            strengthText.textContent =
                "🟠 Medium";

            break;


        case 3:

            strengthBar.style.width =
                "75%";

            strengthBar.style.background =
                "#f1c40f";

            strengthText.textContent =
                "🟡 Good";

            break;


        case 4:

            strengthBar.style.width =
                "100%";

            strengthBar.style.background =
                "#2ecc71";

            strengthText.textContent =
                "🟢 Strong";

            break;


        default:

            strengthBar.style.width =
                "0%";

            strengthText.textContent =
                "Password Strength";

            break;

    }

}


// ==========================
// CONFIRM PASSWORD
// ==========================

function checkPasswordMatch() {

    if (
        !signupPassword ||
        !confirmPassword ||
        !confirmMessage
    ) return;


    if (
        confirmPassword.value === ""
    ) {

        confirmMessage.textContent =
            "";

        return;

    }


    if (
        signupPassword.value ===
        confirmPassword.value
    ) {

        confirmMessage.textContent =
            "✅ Passwords Match";

        confirmMessage.style.color =
            "#2ecc71";

    }


    else {

        confirmMessage.textContent =
            "❌ Passwords Do Not Match";

        confirmMessage.style.color =
            "red";

    }

}


// ==================================================
// NAVIGATION
// ==================================================


// ==========================
// OPEN SIGNUP
// ==========================

if (registerBtn) {

    registerBtn.addEventListener(
        "click",
        () => {

            container.classList.remove(
                "forgot-active"
            );

            container.classList.add(
                "active"
            );

        }
    );

}


// ==========================
// OPEN LOGIN
// ==========================

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        () => {

            container.classList.remove(
                "active"
            );

            container.classList.remove(
                "forgot-active"
            );

        }
    );

}


// ==========================
// OPEN FORGOT PASSWORD
// ==========================

if (forgotBtn) {

    forgotBtn.addEventListener(
        "click",
        (e) => {

            e.preventDefault();


            container.classList.remove(
                "active"
            );

            container.classList.add(
                "forgot-active"
            );

        }
    );

}


// ==========================
// BACK TO LOGIN
// ==========================

if (backLogin) {

    backLogin.addEventListener(
        "click",
        () => {

            container.classList.remove(
                "forgot-active"
            );

        }
    );

}


// ==================================================
// PASSWORD EVENTS
// ==================================================


// Login Password
togglePassword(
    loginPassword,
    loginEye
);


// Signup Password
togglePassword(
    signupPassword,
    signupEye
);


// Confirm Password
togglePassword(
    confirmPassword,
    confirmEye
);


// Password Strength
if (signupPassword) {

    signupPassword.addEventListener(
        "input",
        checkPasswordStrength
    );

}


// Confirm Password
if (signupPassword) {

    signupPassword.addEventListener(
        "input",
        checkPasswordMatch
    );

}


if (confirmPassword) {

    confirmPassword.addEventListener(
        "input",
        checkPasswordMatch
    );

}


// ==================================================
// LOGIN VALIDATION
// ==================================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();


            const email =
                emailInput.value.trim();


            const password =
                loginPassword.value.trim();


            // Empty Email
            if (email === "") {

                showError(
                    emailInput,
                    "Please enter your email"
                );

                return;

            }


            // Invalid Email
            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                showError(
                    emailInput,
                    "Please enter a valid email"
                );

                return;

            }


            // Empty Password
            if (password === "") {

                showError(
                    loginPassword,
                    "Please enter your password"
                );

                return;

            }


            clearError(emailInput);

            clearError(loginPassword);


            showToast(
                "Login Successful!"
            );

        }
    );

}


// ==================================================
// SIGNUP VALIDATION
// ==================================================

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();


            const nameInput =
                signupForm.querySelector(
                    'input[type="text"]'
                );


            const emailInputSignup =
                signupForm.querySelector(
                    'input[type="email"]'
                );


            const password =
                signupPassword.value.trim();


            const confirm =
                confirmPassword.value.trim();


            // Name
            if (
                nameInput.value.trim() === ""
            ) {

                showError(
                    nameInput,
                    "Please enter your name"
                );

                return;

            }


            // Email
            if (
                emailInputSignup.value.trim()
                === ""
            ) {

                showError(
                    emailInputSignup,
                    "Please enter your email"
                );

                return;

            }


            // Password
            if (password === "") {

                showError(
                    signupPassword,
                    "Please enter a password"
                );

                return;

            }


            // Minimum Password
            if (password.length < 6) {

                showError(
                    signupPassword,
                    "Password must be 6 characters"
                );

                return;

            }


            // Confirm Password
            if (confirm === "") {

                showError(
                    confirmPassword,
                    "Confirm your password"
                );

                return;

            }


            // Password Match
            if (password !== confirm) {

                showError(
                    confirmPassword,
                    "Passwords do not match"
                );

                return;

            }


            showToast(
                "Account Created Successfully!"
            );

        }
    );

}


// ==================================================
// FORGOT PASSWORD
// ==================================================

if (forgotForm) {

    forgotForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();


            const forgotEmail =
                forgotForm.querySelector(
                    'input[type="email"]'
                );


            if (
                forgotEmail.value.trim()
                === ""
            ) {

                showError(
                    forgotEmail,
                    "Please enter your email"
                );

                return;

            }


            if (
                !forgotEmail.value.includes("@")
            ) {

                showError(
                    forgotEmail,
                    "Enter a valid email"
                );

                return;

            }


            showToast(
                "Reset link sent successfully!"
            );

        }
    );

}


// ==================================================
// REMEMBER ME
// ==================================================

const rememberMe =
    document.querySelector(
        '.sign-in input[type="checkbox"]'
    );


if (
    emailInput &&
    rememberMe
) {


    const savedEmail =
        localStorage.getItem(
            "rememberedEmail"
        );


    if (savedEmail) {

        emailInput.value =
            savedEmail;

        rememberMe.checked =
            true;

    }

}


// ==================================================
// DARK / LIGHT MODE
// ==================================================

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {


            document.body.classList.toggle(
                "dark-mode"
            );


            const icon =
                themeToggle.querySelector(
                    "i"
                );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                icon.classList.remove(
                    "fa-moon"
                );

                icon.classList.add(
                    "fa-sun"
                );

            }


            else {

                icon.classList.remove(
                    "fa-sun"
                );

                icon.classList.add(
                    "fa-moon"
                );

            }

        }
    );

}