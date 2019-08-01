Vue.component('my-counter', {
    template:
        `<div>
            <h3>{{ counter }}</h3>
            <button @click="addToCounter">Add to counter</button>
        </div>`,
    data: function() {
        return {
            counter: 0
        };
    },
    methods: {
        addToCounter: function() {
            this.counter++;
        },
    },
});

new Vue({
    el: '#app'
});
