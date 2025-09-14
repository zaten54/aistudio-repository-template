import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createFeatures } from './components/features.js'
import { createFooter } from './components/footer.js'

document.querySelector('#app').innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createFeatures()}
  ${createFooter()}
`

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

document.querySelectorAll('.feature-card, .hero-content').forEach(el => {
  observer.observe(el)
})