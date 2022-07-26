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