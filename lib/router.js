Router.route('/register', {
    template: "register"
});

Router.route('/login', {
    template: "login"
});

Router.route('/profile/:username', {
    template: "profileFeed"
});
