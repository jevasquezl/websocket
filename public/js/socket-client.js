// console.log('Hola Mundo');
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');
const mrecibido = document.querySelector('#mrecibido');

//este es el cliente
const socket = io();


socket.on('connect', () => {
    // console.log('conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})


socket.on('disconnect', () => {
    // console.log('Desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) => {
    // mrecibido.value = payload;
    console.log( payload );
} )

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
            mensaje,
            id : '123213',
            fecha : new Date().getTime()
    };

    socket.emit('enviar-mensaje',payload, ( id ) => {
        console.log('Desde server id', id);
    });

})

