// fetch views count with lambda function - getViewsCount
/** const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = "5"; //await fetch("https://rsgnbbm4uhk7ilvcwo544ieevq0rquak.lambda-url.us-east-1.on.aws/");
	//let data = await response.json();
	counter.innerHTML = ` Views: ${response}`;
}
updateCounter(); */

async function updateCounter() {
	let response = await fetch("https://rsgnbbm4uhk7ilvcwo544ieevq0rquak.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
    document.getElementById("count").textContent = ` ${data}`;
}
updateCounter();