
function unhide (showDivName, hideDivName1, hideDivName2, hideDivName3) {
	document.getElementById(showDivName).style.display = "block";
	document.getElementById(hideDivName1).style.display = "none";
	document.getElementById(hideDivName2).style.display = "none";
	document.getElementById(hideDivName3).style.display = "none";

	if (showDivName == "summaryDiv") {
		document.getElementById('summary').className += " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "experienceDiv") {
		document.getElementById('experience').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "skillsDiv") {
		document.getElementById('education').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('portfolio').className -= " currentTab";
	} else if (showDivName == "portfolioDiv") {
		document.getElementById('portfolio').className += " currentTab";
		document.getElementById('summary').className -= " currentTab";
		document.getElementById('experience').className -= " currentTab";
		document.getElementById('education').className -= " currentTab";
	}
}

$(window).resize(function() {
	if (window.innerWidth < 1150) {
		document.getElementById('nav').style.width = '450px';
	} else if (window.innerWidth > 1150) {
		document.getElementById('nav').style.width = null;
	}
});

$(document).ready(function() {
	$("#mugShot").click(function() {
		if (document.getElementById('mugShot').className != "welcomed") {
			document.getElementById('mugShot').className = undefined;
			document.getElementById('mugShot').className = "welcomed";
			setTimeout(function() {
				document.getElementById('drake').style.display = "none";
				document.getElementById('details').style.display = "inline-block"
				document.getElementById('main').style.display = "inline-block";
			},2000);
		} else {
			document.getElementById('mugShot').className -= " welcomed";
			document.getElementById('main').style.display = "none";
			setTimeout(function() {
				document.getElementById('details').style.display = "none"
				document.getElementById('drake').style.display = "block";
			},2000);
		}
	});

	if (window.innerWidth < 1150) {
		document.getElementById('nav').style.width = '450px';
	}

});