import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.json'

let menuButton = document.getElementById('menu-button')
let closeButton = document.getElementById('close-button')

menuButton.addEventListener('click', () => {
    document.getElementById("sidebar-menu").style.width = "70%";
})

closeButton.addEventListener('click', () => {
    document.getElementById("sidebar-menu").style.width = "0";
})

let postList = document.getElementById('post-list')
let post = ''

restaurants.restaurants.forEach(restaurant => {
    post += `
        <article class="post-item">
            <div class="post-thumbnail">
                <img src="${restaurant.pictureId}" alt="Thumbnail ${restaurant.name}">
            </div>
            <div class="post-content">
                <div class="post-header">
                    <span><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</span>
                    <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
                </div>
                <h3 class="post-title"><a href="#">${restaurant.name}</a></h3>
                <p class="post-description">${restaurant.description}</p>
            </div>
        </article>
    `
})

postList.innerHTML = post