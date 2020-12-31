const app = Vue.createApp({
    data() {
        return {
            fullName: "My Full Name",
            age: 1,
            futureAge: 6,
            randomNumber: .35,
            imgLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg?crop=1.00xw:0.751xh;0,0.202xh&resize=980:*"
        }
    },
    methods: {
        getFullName() {
            return "Ben Kent";
        },
        getAge() {
            return 37;
        },
        getFutureAge() {
            return this.getAge() + 5
        },
        getRandNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment')