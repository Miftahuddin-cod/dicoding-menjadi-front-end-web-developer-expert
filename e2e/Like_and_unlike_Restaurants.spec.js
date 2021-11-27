const assert = require('assert');
Feature('Like and Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(`You don't have any Favorite Restaurant`, '#restaurants');
});

Scenario('like and unlike one restaurant', async ({ I }) => {
  I.see(`You don't have any Favorite Restaurant`, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.post-title a');

  const firstRestaurant = locate('.post-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement(firstRestaurant);

  I.see(`You don't have any Favorite Restaurant`, '#restaurants');
});