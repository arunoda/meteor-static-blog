Router.route('/', {
  template: "blogHome"
});

Router.route('/blog/:slug', {
  template: 'blog'
});