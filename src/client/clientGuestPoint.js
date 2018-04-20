var app = new Vue({
    el: '#app',
    data: {
        user: user
        //message: 'Hello Vue!'
    },
    beforeMount(){
        //this.message ="hello";
        //console.log("beforeMount");
        //setTimeout( ()=> {
        //this.el = '#app';
        //},100);
    },
    mounted(){
        //this.el = '#app';
    }
});

var socket = io();

socket.on('connect', function(){
    console.log('server connection');
});

socket.on('disconnect', function(){
    console.log('server disconnected');
});

socket.on('chat message', function(msg){
    //$('#messages').append($('<li>').text(msg));
    console.log(msg);
});