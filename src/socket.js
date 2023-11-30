import {
    io
} from 'socket.io-client';

const socket = io('https://sufian-bles.onrender.com');

// console.log(socket)

export default socket;