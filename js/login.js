// submit btn click event handler
document
	.getElementById("btn-submit")
	.addEventListener("click", function (event) {
		// user email value
		const emailValue = document.getElementById("user-email");
		const email = emailValue.value;
		// user password value
		const passwordValue = document.getElementById("user-password");
		const password = passwordValue.value;

		// DANGER: Do not verify email and password on client side. Send email nd password value into server end end then verify
		if (email === "user@gmail.com" && password === "secret") {
			console.log("valid user");
		} else {
			console.log("invalid user");
		}
	});
