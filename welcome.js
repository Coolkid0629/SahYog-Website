var loaded;

function websiteLoaded() {
	loaded = setTimeout(showPage, 3000);
}

function showPage() {
	document.querySelector(".middle").style.display = "none";
	document.querySelector(".main").style.display = "block";
}
