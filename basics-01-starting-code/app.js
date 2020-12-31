const app = Vue.createApp({
    data() {
        return {
            goal1: 'Finish the course',
            goal2: 'Other goal',
            vueLink: 'http://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randNum = Math.random();
            if (randNum < .5) {
                return this.goal1;
            } else {
                return this.goal2;
            }
        }
    }
});

app.mount('#user-goal')