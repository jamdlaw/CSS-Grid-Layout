Vue.component('blog-post', {
  props: ['title','description'],
  template: '<li style="list-style-type:none;"><h3>{{ title }}</h3><p> {{description}}</p></li>'
})

var app = new Vue({
	el: "#blog-post-demo",
	data: {
		posts: [
			{id: 1, title: 'Blog post 1', description: 'this is the blog 1 post description'},
			{id: 2, title: 'Blog post 2', description: 'this is the blog 2 post description'},
			{id: 3, title: 'Blog post 3', description: 'this is the blog 3 post description'}
		]
	} 
})