const app = Vue.createApp({
    // template: `
    //     <h1> Hello World! </h1>
    //     <p> {{ 1 + 1 }} </p>
    // `

    data() {
        return {
            quote: "I'm Iron Man",
            author: 'Tony Stark'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo')
            this.author = 'Salvador Hernandez'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')