const navHeader = document.getElementById("nav-header");
const heroSection = document.getElementById("hero");

function stickHeader() {
	if (!navHeader.classList.contains("hamburg-open")) {
		if (heroSection.getBoundingClientRect().bottom > 0 && navHeader.classList.contains("fixed-header-js")) {
			navHeader.classList.add("unfix-header-js");
			setTimeout(() => {
				navHeader.classList.contains("unfix-header-js") ? navHeader.classList.remove("fixed-header-js") : void 0;
			}, 250);
		} 
		else if (heroSection.getBoundingClientRect().bottom <= 0 && !navHeader.classList.contains("fixed-header-js")) {
			navHeader.classList.add("fixed-header-js");
			navHeader.classList.remove("unfix-header-js");
		}
	}
}

document.addEventListener("scroll", stickHeader);
const mobileHamburg = document.getElementById("mobile-hamburg");
mobileHamburg.addEventListener("click", () => {
	navHeader.classList.toggle("hamburg-open");
});


console.log("start");

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
