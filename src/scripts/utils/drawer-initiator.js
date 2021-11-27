const DrawerInitiator = {
  init({ menuButton, closeButton, sideBar }) {
    menuButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, sideBar);
    });

    closeButton.addEventListener('click', (event) => {
      this._closeDrawer(event, sideBar);
    });
  },

  _toggleDrawer(event, sideBar) {
    event.stopPropagation();
    sideBar.classList.toggle('open');
  },

  _closeDrawer(event, sideBar) {
    event.stopPropagation();
    sideBar.classList.remove('open');
  },
};


export default DrawerInitiator;
