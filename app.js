const app = Vue.createApp({
    // data, fuctions
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'https://github.com/goncaloelisio',
            showBooks: true,
            books: [
                { title: 'The Final Empire', author: 'Brandon Sanderson', age: 45, isFav: true},
                { title: 'The way of kings', author: 'Gonçalo Elísio', age: 37, isFav: false},
                { title: 'The into wild', author: 'Nuno Roque', age: 35, isFav: true}
            ],
            x: 0,
            y: 0
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Words of Radiance'        //when is a single key
        },
        
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(book) {
            book.isFav = !book.isFav
        },

        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})                                                         

app.mount('#app')                               //root component