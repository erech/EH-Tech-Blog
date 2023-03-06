const forms = document.querySelector(".forms"),
    links = document.querySelectorAll(".link");

const loginForm = document.getElementById('loginForm')
const signUpForm = document.getElementById('signUpForm')

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");

    })
})

/* Login In */
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("err").textContent = '';
    await fetch("controllers/routes/user.js", {
        method: 'POST',
        body: JSON.stringify({ email, password, }),
        headers: { 'Content-Type': 'application/json'},
        
    }).then((result) => {
        if (result.ok) {
           window.location.replace('/')
        } else {
            document.getElementById("err").textContent = "Unable to login";
            return null;
            
        }
    });
});

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("emailSU").value;
    const password = document.getElementById("passwordSU").value;
    const newPasswordC = document.getElementById("passwordSU2").value;

    if (password != newPasswordC){
        console.log('incorrect');
    }else{
        document.getElementById("signUpErr").textContent = '';
        fetch("controllers/routes/user.js", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        }).then((result) => {
            if (!result.ok) {
                document.getElementById("signUpErr").textContent = "Unable to create user";
                return null;
            } else {
                window.location.replace('/login')
                return result.json();
            }
        })
    }
});