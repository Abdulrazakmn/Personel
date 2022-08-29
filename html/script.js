const form = document.getElementById("form1");
const username = document.getElementById("name1");
const email = document.getElementById("email");
const sub = document.getElementById("subject");
const msg = document.getElementById("message");

var emailflag=0,nameflag=0,messageflag=0,subflag=0;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	if (usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
        nameflag = 0;
	} else {
		setSuccessFor(username);
        nameflag = 1;
	}

	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
        emailflag = 0;
	} else {
		setSuccessFor(email);
        emailflag = 1;
	}

	if (sub.value.length == 0) {
		setErrorFor(sub, "Subject cannot be blank");
        subflag = 0;
	} else {
		setSuccessFor(sub);
        subflag = 1;
	}

    if (msg.value.length == 0) {
		setErrorFor(msg, "Message cannot be blank");
        messageflag = 0;
	} else {
		setSuccessFor(msg);
        messageflag = 1;
	}

	if(emailflag == 1 && nameflag == 1 && messageflag == 1){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycby1JC7vx4tFC27qIcHH2O_v-NWDGh9rtjLGHr4LaFw-402EX034CfNWM6V7-5FCPQIRfQ/exec",
            data:$("#form1").serialize(),
            method:"post",
            success:function (response){
                alert("Thank you for contacting me")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
            }
        })
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
    small.style.color = "red";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = "";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
