if(Meteor.isClient) {
  Template.blog.helpers({
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  });

  Template.blogHome.helpers({
    posts: function() {
      return PostList;
    }
  });
}
