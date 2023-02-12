// deposit btn handler
document.getElementById("btn-deposit").addEventListener("click", function () {
	const depositAmountValue = document.getElementById("deposit-input");
	const depositAmount = depositAmountValue.value;
	depositAmountValue.value = "";

	const depositValue = document.getElementById("deposit-value");
	const deposit = depositValue.innerText;
	depositValue.innerText = depositAmount;
});
