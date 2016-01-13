Template.profileFeed.events({
    'click .new-post': function(e) {
        e.preventDefault();

        var profileUser = Meteor.users.findOne({username: Router.current().params.username});
        var currentUser = Meteor.user();
        var story = $('textarea[name="new-post"]').val();

        if (story.length) {
            Stories.insert({
                createdBy: currentUser._id, // the Meteor.userId()
                createdFor: profileUser._id, // the owner of the profile
                storyImage: null, // for the future we can add images in our story
                storyText: story, // the text that is the story
                creatorName: currentUser.profile.firstname + " " + currentUser.profile.lastname, // the creator
                creatorUsername: currentUser.profile.username, // so we can link to the creator's profile
                creatorThumbnail: currentUser.profile.picture ? currentUser.profile.picture.thumbnail : null, // so we can have a picture in the story
                createdForName: profileUser.profile.firstname + " " + profileUser.profile.lastname, // the person receiving the post
                createdForUsername: profileUser.profile.username, // so we can link to the receiver's profile
                createdForThumbnail: profileUser.profile.picture ? profileUser.profile.picture.thumbnail : null, // so we can see the receiver's picture
                likes: [], // so we can see who's liked the post
                createdAt: new Date(), // good practice IMO
                comments: [], // comment array
            });    
        }

        $('textarea[name="new-post"]').val(""); // reset the text box when done
    }
});

Template.profileFeed.helpers({
    statusPlaceholder: function() {
        var profileUser = Meteor.users.findOne({username: Router.current().params.username});
        if (profileUser && profileUser._id === Meteor.userId()) {
            return "Update your status";
        } else {
            return "Post to their wall!";
        }
    }
});
