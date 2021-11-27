import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/creator-template';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <h2 class="content-title">Your Favorite Restaurant</h2>
      <div id="loading"></div>
      <div id="restaurants" class="restaurants post-list">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.innerHTML = '<div class="loader"></div>';

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = `
      You don't have any Favorite Cafe or Restaurant
      `;
      }

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      restaurantsContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Favorite;
