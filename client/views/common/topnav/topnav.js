// @description: This is where top nav stuff happens

// Template Event Map
Template.topnav.events({
    'click .logout': function() {
        Meteor.logout(function(err) {
            if (!err) {
                Router.go("/");
            }
        });
    }
});

// Template Helper Map
Template.topnav.helpers({
    fullname: function(user) {
        return (user && user.profile && user.profile.name) ?
            user.profile.name.first + " " + user.profile.name.last : null;
    },
    friendRequestCount: function() {
        return 0;
    }
});
