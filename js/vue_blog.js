Vue.component('blog-post', {
  props: ['title','description'],
  template: '<li ><h3>{{ title }}</h3><p> {{description}}</p></li>'
})

Vue.component('blog-content',{
  props: ['key2', 'description2'] ,
  template: '<div :id="key2"> <p>{{description2}} </p> </div>'
});

var app = new Vue({
	el: "#blog-post-demo",
	data: {
		posts: [
			{id: 1, title: 'Blog post 1', description: 'this is the blog 1 post description', content:'this is the full content for the post 1'},
			{id: 2, title: 'Blog post 2', description: 'this is the blog 2 post description', content:'this is the full content for the post 2'},
			{id: 3, title: 'Blog post 3', description: 'this is the blog 3 post description', content:'this is the full content for the post 3'}
		]
	} 
})

var app_main_content = new Vue({
	el: "#main_content",
	data:{id: 1,
		  description2: 'this is the description' 
		 }
})