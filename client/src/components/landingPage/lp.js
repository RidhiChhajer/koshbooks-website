const header = document.getElementById('header')
const nav = document.getElementById('nav-bar')
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0)
    header.classList.add('header-active')
  else
    header.classList.remove('header-active')
})

window.addEventListener('click', e => {
  if (e.target.matches('.btn-menu'))
    nav.classList.add('nav-open')
  if (e.target.matches('.btn-close'))
    nav.classList.remove('nav-open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => nav.classList.remove('nav-open'), 200)
  })
})