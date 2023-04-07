let comuni = document.querySelector('#comuniquemonos');
let reserv = document.getElementById('reservas');
let comuniForm = document.getElementById('contact-form');
let reservForm = document.getElementById('reservation')

comuni.addEventListener('click', function(){
    comuniForm.style.display = 'flex';
});

reserv.addEventListener('click', function(){
    reservForm.style.display = 'flex';
});

////// contact
let contactName = document.getElementById('contact-name');
let contactMail = document.getElementById('contact-mail');
let contactTel = document.getElementById('contact-tel');
let contactMotiv = document.getElementById('contact-motiv');
let contactForm = document.getElementById('contact-form');
let contactBtn = document.getElementById('contact-btn');

contactForm.addEventListener('submit', (e) =>{
    let messages = [];
    if (contactName.value === "" || contactName.value == null) {
        messages.push("Nombre es requerido")}
    if (contactMail.value === "" || contactMail.value == null) {
        messages.push("E-mail es requerido")}
    if (contactTel.value === "" || contactTel.value == null) {
        messages.push("Telefono es requerido")}
    if (contactMotiv.value === "" || contactMotiv.value == null) {
        messages.push("Su opinion es necesaria")}
    if(messages.length > 0) {
        e.preventDefault();
        alert(messages.join(', '));
    } else {
        alert(`Muchas Gracias ${document.getElementById('contact-name').value}, hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${document.getElementById('contact-mail').value}` );
        console.log(document.getElementById('contact-tel').value);   
}
}
)

//// reservations
$(()=> {

    $('#reservation-btn').click(function(){


        let reservationMessage = [];
        if ($('#reservation-name').val() == "" || $('#reservation-name').val() == null){
            reservationMessage.push("Nombre es requerido")}
        if ($('#reservation-mail').val() === "" || $('#reservation-mail').val() == null){
            reservationMessage.push("E-mail es requerido")}
        if ($('#reservation-tel').val() === "" || $('#reservation-tel').val() == null){
            reservationMessage.push("Telefono es requerido")}        
        if ($('#reservation-date').val() === "" || $('#reservation-date').val() == null){
            reservationMessage.push("Fecha es requerido")}      
        if ($('#reservation-time').val() === "" || $('#reservation-time').val() == null){
            reservationMessage.push("Horario es requerido")}        
        if ($('#reservation-assistants').val() === "" || $('#reservation-assistants').val() == null){
            reservationMessage.push("Cantidad de asistentes es requerido")}     
        if(reservationMessage.length > 0) {
            event.preventDefault();
            alert(reservationMessage.join(', '));  
        } else {
           alert(`Estimado ${$('#reservation-name').val()}, agradecemos por reservar con nosotros. Hemos registrado ${$('#reservation-assistants').val()} asistentes. Se ha enviado el codigo de confirmacion al correo ${$('#reservation-mail').val()}.`

            );}
});

});

///// modals

const openModal1 = document.querySelector('#open1');
const modal1 = document.querySelector('#modal1');
const closeModal1 = document.querySelector('#modal1');

openModal1.addEventListener('click', () => {
    modal1.showModal();
})

closeModal1.addEventListener('click', () => {
    modal1.close();
})

const openModal2 = document.querySelector('#open2');
const modal2 = document.querySelector('#modal2');
const closeModal2 = document.querySelector('#modal2');

openModal2.addEventListener('click', () => {
    modal2.showModal();
})

closeModal2.addEventListener('click', () => {
    modal2.close();
})

const openModal3 = document.querySelector('#open3');
const modal3 = document.querySelector('#modal3');
const closeModal3 = document.querySelector('#modal3');

openModal3.addEventListener('click', () => {
    modal3.showModal();
})

closeModal3.addEventListener('click', () => {
    modal3.close();
})

