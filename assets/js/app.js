let divSection = {
    data() {
        return {
            yonkos: [{
                    id: 1,
                    name: 'Red hair Shanks',
                    complete: false
                },
                {
                    id: 2,
                    name: 'Marshal D. Teach',
                    complete: false
                },
                {
                    id: 3,
                    name: 'Buggy The Clown',
                    complete: false
                },
                {
                    id: 4,
                    name: 'Monkey D. Luffy',
                    complete: false
                },
            ]
        }
    },

    computed: {
        whoStrongestEmperorOfTheSea() {
            return this.yonkos.filter(pirate => !pirate.complete);
        },

        strongestEmperorOfTheSea() {
            return this.yonkos.filter(pirate => pirate.complete);
        }
    }
}

Vue.createApp(divSection).mount('#app')