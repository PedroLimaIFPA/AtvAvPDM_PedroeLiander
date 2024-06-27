const theme = document.querySelector('.theme')
const circle = document.querySelector('.circle')

theme.addEventListener('click', () => {
    circle.classList.toggle('theme-active')
})