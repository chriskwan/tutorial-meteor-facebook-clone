Template.profileDetails.helpers({
    fullname: function() {
        var username = Router.current().params.username;
        var user = Meteor.users.findOne({username: username});
        return user ? user.profile.firstname + " " + user.profile.lastname : null;
    },
    profilePicture: function() {
        var username = Router.current().params.username;
        var user = Meteor.users.findOne({username: username});
        return user ? user.profile.picture.larger : null;
    },
    friendCount: function() {
        return 0;
    },
    newFriends: function() {
        return [];
    },
    about: function() {
        var username = Router.current().params.username;
        var user = Meteor.users.findOne({username: username});
        return (user && user.profile && user.profile.location) ? 
            user.profile.location.street + " " +
            user.profile.location.city + ", " + user.profile.location.state + " " +
            user.profile.location.zip : "";
    },
    storyCount: function() {
        return 0;
    }
});

Template.profileDetails.events({
    'click .add-friend': function() {
        alert("Soon!");
    }
});

Template.profileDetails.onCreated(function() {
    var self = this;
    var username = Router.current().params.username;
    // When the template is crated,
    // an autorun function is called once to subscribe on the current user's profile
    // Anytime the username in the router changes,
    // it is going to resubscribe because we are going to need the new user's profile info
    self.autorun(function() {
        username = Router.current().params.username;
        self.subscribe("userData", username, {
            onReady: function() {
                var user = Meteor.users.findOne({username: username});
                if (!user) {
                    Router.go("/");
                }
            }
        });
    });
});
