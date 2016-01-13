Meteor.publish("userData", function(username) {
    return Meteor.users.find({username: username});
});
