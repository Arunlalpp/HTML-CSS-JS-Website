const openMenu = () => {
	document.querySelector("#backdrop").className = "backdrop active";
	document.querySelector("#aside-menu").className = "active";
};

const closeMenu = () => {
	document.querySelector("#backdrop").className = "backdrop";
	document.querySelector("#aside-menu").className = "";
};

document.getElementById("menuBtn").onclick = (e) => {
	e.preventDefault();
	openMenu();
};
document.getElementById("closeBtn").onclick = (e) => {
	e.preventDefault();
	closeMenu();
};