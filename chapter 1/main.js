new Vue({
  el: '#app',
  data: {
    letter: '',
    people: [
      'Me',
      'You',
      'We'
    ],
    night: false,
    counter: 0,
    increased: '',
    name: 'Sasha',
    google: 'https://google.com',
    link: '<a href="https://ya.ru">go to yandex....</a>',
  },
  computed: {
    getClasses: function() {
      return {
        black: this.night,
      }
    },
    getStyles: function() {
      return {
        color: this.night ? 'white' : '',
      }
    },
  },
  methods: {
    increaseCounter: function(event, num) {
      this.counter = this.counter + num;
      this.increased = ' +' + num;

      event.target.classList.add('clicked');
      setTimeout(function() {
        event.target.classList.remove('clicked');
      }, 500)
    },
    sayHello: function() {
      alert('Hello ' + this.name + '!');
    },
    onHover: function(e) {
      console.log(e.target);
      e.target.style.color = 'red';
    },
  },
});
