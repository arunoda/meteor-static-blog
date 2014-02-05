if (Meteor.isClient) {
  Template.blog.content = function() {
    var slug = Router.current().params.slug;
    var templateFunc = Template[slug];
    if(typeof templateFunc == 'function') {
      return templateFunc();
    } else {
      return "404";
    }
  };

  Template.blogHome.posts = function() {
    return PostList;
  };
}
