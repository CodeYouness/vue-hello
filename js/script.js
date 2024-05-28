const { createApp } = Vue

createApp({
    data() {
        return {
            img: 'https://www.cavouresoterica.it/wp-content/uploads/2017/12/Pillola-rossa-o-pillola-blu.jpg',
            message: 'Hello Vue'
        }
    }
}).mount('#output')