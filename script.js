var image1 = document.getElementById("box1")
var image2 = document.getElementById("box2")
var image3 = document.getElementById("box3")
var image4 = document.getElementById("box4")
var image5 = document.getElementById("box5")
var image6 = document.getElementById("box6")
var left1 = document.getElementById("left1")
var left2 = document.getElementById("left2")
var left3 = document.getElementById("left3")
var right1 = document.getElementById("right1")
var right2 = document.getElementById("right2")
var right3 = document.getElementById("right3")
var bigbox = document.getElementById("bigbox")
var left = [ "images/pathfinder1.png", "images/bloodhound.png", "images/bangalore.png" ]
var right = [ "images/wraith.png", "images/gibraltar.png", "images/lifeline.png" ]
var m1 = 0
var m2 = 1
var m3 = 2
var c1 = 0
var c2 = 1
var o1 = 0
var o2 = 1
var o3 = 2
var leftCol = document.getElementById("left-column")
var rightCol = document.getElementById("right-column") 
var columns = [ "leftCol", "rightCol" ]

function cycleLeft () {
	m1++;
	console.log(m1)
	image1.src =  left[m1%3]
}

function cycleLeft2 () {
	m2++
	console.log(m2)
	image2.src =  left[m2%3]
}

function cycleLeft3 () {
	m3++
	console.log(m3)
	image3.src =  left[m3%3]
}

function cycleRight () {
	o1++
	console.log(o1)
	image4.src =  right[o1%3]
}

function cycleRight2 () {
	o2++
	console.log(o2)
	image5.src =  right[o2%3]
}

function cycleRight3 () {
	o3++
	console.log(o3)
	image6.src =  right[o3%3]
}

function alertUser () {
	setTimeout(function(){ alert("Choose your team by clicking the images on the left or right side of the screen! When you're finished composing both teams (or by randomizing them with the TEAM buttons), press the BATTLE button in order to see which side wins!"); }, 1000);
}

function resetPage () {
	location.reload()
}

function randomSelection () {
	var rng = Math.floor(Math.random() * (2))
	console.log(rng)
	if (rng === 0) {
		left1.classList.remove("orange")
		left2.classList.remove("blue")
		left3.classList.remove("green")
		
		left1.classList.add("gray")
		left2.classList.add("darkgray")
		left3.classList.add("gray")
		
		right1.classList.remove("orange")
		right2.classList.remove("blue")
		right3.classList.remove("green")
		
		right1.classList.add("brightgreen")
		right2.classList.add("green")
		right3.classList.add("brightgreen")
		
		bigbox.classList.remove("align-text2")
		bigbox.classList.add("align-text3")
		bigbox.classList.add("no-cursor")
		bigbox.removeAttribute("onclick")
	}
	
	else if (rng === 1) {
		left1.classList.remove("orange")
		left2.classList.remove("blue")
		left3.classList.remove("green")
		
		left1.classList.add("brightgreen")
		left2.classList.add("green")
		left3.classList.add("brightgreen")
		
		right1.classList.remove("orange")
		right2.classList.remove("blue")
		right3.classList.remove("green")
		
		right1.classList.add("gray")
		right2.classList.add("darkgray")
		right3.classList.add("gray")
		
		bigbox.classList.remove("align-text2")
		bigbox.classList.add("align-text3")
		bigbox.classList.add("no-cursor")
		bigbox.removeAttribute("onclick")
	}
}

//function cycleLeft3 () {
	//Math.floor(Math.random() * (3))
	//console.log(m)
	//image3.src =  left[m]
//} 