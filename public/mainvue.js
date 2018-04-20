var app = new Vue({
    el: '#app',
    data: {
        user: user
        //message: 'Hello Vue!'
    },
    beforeMount(){
        //this.message ="hello";
        setTimeout( ()=> {
        this.el = '#app';
        },100);
    },
    mounted(){
        this.el = '#app';
    }
});