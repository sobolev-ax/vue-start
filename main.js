Vue.component('todo-item', {
  template: '<li>Static element</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'To Do',
    todos: [
      {title: 'Learn JS'},
      {title: 'Learn Angular JS'},
      {title: 'Learn React'},
      {title: 'Learn Vue'},
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split(' ').reverse().join(' ');
    }
  }
});
