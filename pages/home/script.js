const navHeader = document.getElementById("nav-header");
const heroSectionHeight = document.getElementById("hero").getBoundingClientRect().height;
const heroSection = document.getElementById("hero");

function stickHeader() {
	if (heroSection.getBoundingClientRect().bottom > 0 && !navHeader.classList.contains("unfix-header-js")) {
		navHeader.classList.add("unfix-header-js");
		//250ms is the midpoint of the fade duration 
		setTimeout(()=>{navHeader.classList.remove("fixed-header-js");}, 250);
	}
	else if(heroSection.getBoundingClientRect().bottom <= 0){
		navHeader.classList.add("fixed-header-js")
		navHeader.classList.remove("unfix-header-js")
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
