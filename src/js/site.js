/*
 * SIDEBAR
 */
let sidebar = new function() {
    this.navItems = document.querySelector('.nav__item');
    this.sidebar = document.querySelector('.sidebar');
    this.toggle = document.querySelector('.sidebar__toggle');

    // toggle mobile navbar
    function toggle() {
        sidebar.sidebar.classList.toggle('is-open');
        sidebar.toggle.classList.toggle('is-active');
    }
    this.toggle.addEventListener('click', toggle);

    // close navbar if item clicked
    function close() {
        sidebar.sidebar.classList.remove('is-open');
        sidebar.toggle.classList.remove('is-active');
    }
    if (this.navItems && this.navItems.length > 0) {
        Array.prototype.forEach.call(this.navItems, function (item) {
            item.addEventListener('click', close);
        }.bind(this));
    }
};
