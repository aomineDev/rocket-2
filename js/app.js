(() => {
	const count = 25
	const scene = document.querySelector('.scene')
	let i = 0

	while (i < count) {
		const star = document.createElement('i')
		const x = Math.floor(Math.random() * window.innerWidth)
		
		const duration = Math.random() * 1
		const h = Math.random() * 100

		star.style.left = x + 'px'
		star.style.width = 1 + 'px'
		star.style.height = 50 + h + 'px'
		star.style.animationDuration = duration + 's'

		scene.appendChild(star)
		i++
	}
})()