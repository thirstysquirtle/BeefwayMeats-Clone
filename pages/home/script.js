const navHeader = document.getElementById("nav-header");
const heroSectionHeight = document.getElementById("hero").getBoundingClientRect().height;

function stickHeader() {
	if (navHeader.getBoundingClientRect().top * -1 >= heroSectionHeight) {
		navHeader.classList.add("fixed-header-js");
		document.removeEventListener("scroll", stickHeader);
	}
}

document.addEventListener("scroll", stickHeader);

if(window.matchMedia("(max-width: 947px)").matches) {
	const mobileHamburg = document.getElementById("mobile-hamburg");
	mobileHamburg.addEventListener("click", ()=> {
		mobileHamburg.children[0].classList.toggle("hamburg-svg-close")
	})
	
}

console.log("start");
