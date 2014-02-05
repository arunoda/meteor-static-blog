Router.configure({
  autoRender: false
});

Router.map(function() {
  this.route('blogHome', {
    path: '/',
    template: 'blogHome'
  });

  this.route('blog', {
    path: '/blog/:slug',
    template: 'blog'
  });
});