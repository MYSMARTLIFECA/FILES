function div1() {
	var x = document.getElementById("myDIV1");
	var icon = document.getElementById("icon1");
	var div2 = document.getElementById("myDIV2");
	var div3 = document.getElementById("myDIV3");
	var div4 = document.getElementById("myDIV4");
	var div5 = document.getElementById("myDIV5");
	if(x.style.display === "none") {
		x.style.display = "block";
		icon.className = "fas fa-sync-alt green-refund";
		div2.style.display = "none";
		div3.style.display = "none";
		div4.style.display = "none";
		div5.style.display = "none";
	} else {
		x.style.display = "none";
		icon.className = "fas fa-sync-alt";
	}
}

function div2() {
	var x = document.getElementById("myDIV2");
	var icon = document.getElementById("icon2");
	var div1 = document.getElementById("myDIV1");
	var div3 = document.getElementById("myDIV3");
	var div4 = document.getElementById("myDIV4");
	var div5 = document.getElementById("myDIV5");
	if(x.style.display === "none") {
		x.style.display = "block";
		icon.className = "fa fa-truck green-truck";
		div1.style.display = "none";
		div3.style.display = "none";
		div4.style.display = "none";
		div5.style.display = "none";
	} else {
		x.style.display = "none";
		icon.className = "fa fa-truck";
	}
}

function div3() {
	var x = document.getElementById("myDIV3");
	var icon = document.getElementById("icon3");
	var div1 = document.getElementById("myDIV1");
	var div2 = document.getElementById("myDIV2");
	var div4 = document.getElementById("myDIV4");
	var div5 = document.getElementById("myDIV5");
	if(x.style.display === "none") {
		x.style.display = "block";
		icon.className = "fa fa-star yellow-review";
		div1.style.display = "none";
		div2.style.display = "none";
		div4.style.display = "none";
		div5.style.display = "none";
	} else {
		x.style.display = "none";
		icon.className = "fa fa-star";
	}
}

function div4() {
	var x = document.getElementById("myDIV4");
	var div1 = document.getElementById("myDIV1");
	var div2 = document.getElementById("myDIV2");
	var div3 = document.getElementById("myDIV3");
	var div5 = document.getElementById("myDIV5");
	if(x.style.display === "none") {
		x.style.display = "block";
		div1.style.display = "none";
		div2.style.display = "none";
		div3.style.display = "none";
		div5.style.display = "none";
	} else {
		x.style.display = "none";
	}
}

function div5() {
	var x = document.getElementById("myDIV5");
	var div1 = document.getElementById("myDIV1");
	var div2 = document.getElementById("myDIV2");
	var div3 = document.getElementById("myDIV3");
	var div4 = document.getElementById("myDIV4");
	if(x.style.display === "none") {
		x.style.display = "block";
		div1.style.display = "none";
		div2.style.display = "none";
		div3.style.display = "none";
		div4.style.display = "none";
	} else {
		x.style.display = "none";
	}
}

function div6() {
	var x = document.getElementById("myDIV6");
	var icon = document.getElementById("icon6");
	var div1 = document.getElementById("myDIV1");
	var div2 = document.getElementById("myDIV2");
	var div3 = document.getElementById("myDIV3");
	var div4 = document.getElementById("myDIV4");
	var div5 = document.getElementById("myDIV5");
	if(x.style.display === "none") {
		x.style.display = "block";
		icon.classList.add("green-lock");
		div1.style.display = "none";
		div2.style.display = "none";
		div3.style.display = "none";
		div4.style.display = "none";
		div5.style.display = "none";
	} else {
		x.style.display = "none";
		icon.classList.remove("green-lock");
	}
}