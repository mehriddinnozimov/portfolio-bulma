// const images = document.querySelectorAll(".click-image")
// const showImage = document.getElementById("show-image")
// const showImageSrc = document.getElementById("show-image-src")
// const showImageButton = document.getElementById("show-image-top")
// for(let i = 0; i < images.length; i++){
// 	imageDiv = images[i]
// 	imageDiv.addEventListener("click", (e) => {
// 		if(e.target.classList.contains("image")){
// 			const imageSrc = e.target.getAttribute("src")
// 			const img = document.createElement("img")
// 			img.src = imageSrc
// 			img.style.width = "80%"
// 			showImageSrc.append(img)
// 			showImage.classList.toggle("disable")
// 		}
// 	})
// }

// showImageButton.addEventListener("click", () => {
// 	showImage.classList.toggle("disable")
// 	showImageSrc.removeChild(showImageSrc.lastChild)
// })


const fix_navbar = document.getElementById("fix-navbar")
const navbar = document.getElementById("navbar")
fix_navbar.style.height = getComputedStyle(navbar).height
fix_navbar.style.content = ""

const navbar_menu = document.getElementById("navbarBasicExample")
const navbar_items = document.getElementsByClassName("navbar-item")

const navbar_button = document.getElementById("navbar-button")
navbar_button.addEventListener("click", () => {
	navbar_menu.classList.toggle("bg-half-dark")
	for(let i = 0; i < navbar_items.length; i++) {
		navbar_item = navbar_items[i]
		navbar_item.classList.toggle("navbar-primary")
	}

	navbar_button.classList.toggle("is-active")
	navbar_menu.classList.toggle("is-active")
})

const cards = document.getElementsByClassName("tech-card")

for(let i = 0; i < cards.length; i++){
	const star = cards[i].children[0].children[0]
	star.addEventListener("mouseleave", () => {
		star.classList.toggle("out")
	})
}