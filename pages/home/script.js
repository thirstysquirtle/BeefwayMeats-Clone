const navHeader = document.getElementById("nav-header");
const heroSection = document.getElementById("hero");

function stickHeader() {
	if (!navHeader.classList.contains("hamburg-open")) {
		if (heroSection.getBoundingClientRect().bottom > 0 && !navHeader.classList.contains("unfix-header-js")) {
			navHeader.classList.add("unfix-header-js");
			//250ms is the midpoint of the fade duration
			setTimeout(() => {
				navHeader.classList.remove("fixed-header-js");
			}, 250);
		} else if (heroSection.getBoundingClientRect().bottom <= 0) {
			navHeader.classList.add("fixed-header-js");
			navHeader.classList.remove("unfix-header-js");
		}
	}
}

document.addEventListener("scroll", stickHeader);

function getMobileMenu() {}

if (window.matchMedia("(max-width: 947px)").matches) {
	const desktopMenu = document.getElementsByClassName("menu-options");
	console.log(desktopMenu);

	const mobileMenu = document.createElement("ul");
	for (let i = 0; i < desktopMenu.length; i++) {
		Array.from(desktopMenu[i].children).forEach((listItem) => {
			mobileMenu.append(listItem);
		});
	}
	Array.from(desktopMenu).forEach((ul) => {
		ul.remove();
	});
	mobileMenu.setAttribute("id", "mobile-menu");
	// mobileMenu.classList.add("mobile-menu-open");

	console.log(mobileMenu);
	navHeader.append(mobileMenu);

	const mobileHamburg = document.getElementById("mobile-hamburg");
	mobileHamburg.addEventListener("click", () => {
		navHeader.classList.toggle("hamburg-open");
		document.documentElement.classList.toggle("hideOverflow")

		// document.body.classList.toggle("hideOverflow");
		// document.body.setAttribute("disabled","")
	});
}

console.log("start");
