new Vue({
  el: '#app',
  data: {
    name: 'Sasha',
    google: 'https://google.com',
    link: '<a href="https://ya.ru">go to yandex....</a>'
  },
  methods: {
    sayHello: function() {
      alert('Hello ' + this.name + '!');
    },
    onHover: function(e) {
      console.log(e.target);
      e.target.style.color = 'red';
    }
  }
});
