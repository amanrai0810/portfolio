var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
	bar.setAttribute("data-visited", false);
	bar.style.width = 0 + "%";
}

for (let bar of progressBars) {
	initialiseBar(bar);
}

function fillBar(bar) {
	let currentWidth = 0;
	let targetWidth = bar.getAttribute("data-bar-width");
	let interval = setInterval(function () {
		if (currentWidth >= targetWidth) {
			clearInterval(interval);
			return;
		}
		currentWidth++;
		bar.style.width = currentWidth + "%";
	}, 5);
}

function checkScroll() {
	for (let bar of progressBars) {
		let barCoordinates = bar.getBoundingClientRect();
		if (
			bar.getAttribute("data-visited") == "false" &&
			barCoordinates.top <= window.innerHeight - barCoordinates.height
		) {
			bar.setAttribute("data-visited", true);
			fillBar(bar);
		} else if (barCoordinates.top > window.innerHeight) {
			bar.setAttribute("data-visited", false);
			initialiseBar(bar);
		}
	}
}

window.addEventListener("scroll", checkScroll);

window.addEventListener("load", checkScroll);
