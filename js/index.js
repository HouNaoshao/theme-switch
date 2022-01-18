const input = document.getElementById("input");
const submitTip = document.getElementById("submit-tip");

function clear() {
	// input
	input.classList.remove("border-error-color");
	input.classList.remove("outline-success-color");
	input.classList.remove("outline-error-color");

	// tip
	submitTip.classList.remove("display-block");
	submitTip.classList.remove("text-success-color");
	submitTip.classList.remove("text-error-color");
	submitTip.textContent = "";
}

// success submit
const successSubmit = document.getElementById("success-submit");
successSubmit.addEventListener("click", submitSuccessfully);

function submitSuccessfully() {
	clear();

	// input
	input.classList.add("outline-success-color");

	// tip
	submitTip.classList.add("display-block");
	submitTip.classList.add("text-success-color");
	submitTip.textContent = "提交成功！";
}

// failed submit
const failedSubmit = document.getElementById("failed-submit");
failedSubmit.addEventListener("click", submitFailed);

function submitFailed() {
	clear();

	// input
	input.classList.add("border-error-color");
	input.classList.add("outline-error-color");

	// tip
	submitTip.classList.add("display-block");
	submitTip.classList.add("text-error-color");
	submitTip.textContent = "提交失败！";
}

// switch-theme
const html = document.querySelector("html");
const lightTheme = document.getElementById("light")
const darkTheme = document.getElementById("dark")

lightTheme.addEventListener("change", () => switchTheme("light"));
darkTheme.addEventListener("change", () => switchTheme("dark"));

function switchTheme(theme) {
	html.dataset.theme = theme;
}