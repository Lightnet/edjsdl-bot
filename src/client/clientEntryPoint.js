console.log("test");

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
