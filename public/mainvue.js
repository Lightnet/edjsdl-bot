var app = new Vue({
    el: '#app',
    data: {
        message: user
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