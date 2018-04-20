/*
    Created by: Lightnet
    Information: Prototype

*/

console.log("client entry point!");
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
        user : user
        //user: 'Guest'
        //message: 'Hello Vue!'
    },
    beforeMount(){
        //this.message ="hello";
        setTimeout( ()=> {
            //this.user = user;
            this.el = '#app';
        },100);
    },
    mounted(){
        this.el = '#app';
    }
});
