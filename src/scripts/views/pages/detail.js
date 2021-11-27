import UrlParser from '../../routes/url-parser';
import ResrtaurentSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/creator-template';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="loading"></div>
      <div id="restaurant" class="restaurant container"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    loading.innerHTML = '<div class="loader"></div>';

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await ResrtaurentSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
          address: restaurant.address,
          description: restaurant.description,
          menus: restaurant.menus,
          customerReview: restaurant.customerReview,
        },
      });
      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      restaurantsContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Detail;
