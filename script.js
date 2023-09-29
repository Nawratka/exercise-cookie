const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const cookieHandle = () => {
	const cookie = localStorage.getItem("cookie")
	if (cookie) {
		cookieBox.classList.add('hide')
	}
}

cookieBtn.addEventListener('click', () => {
		localStorage.setItem('cookie', true);
		cookieBox.classList.add('hide')
})
cookieHandle();




// const showCookie = () => {
// 	const cookieEaten = localStorage.getItem('cookie')
	
// 	if (cookieEaten) {
// 		cookieBox.classList.add('hide')
// 	}
// }

// const handleCookieBox = () => {
// 	localStorage.setItem('cookie', 'true')
// 	cookieBox.classList.add('hide')
// }

// cookieBtn.addEventListener('click', handleCookieBox)
// showCookie()