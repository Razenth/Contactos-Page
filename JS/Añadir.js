import contactos from "./Personajes.js";

let contactoOtro=''
let contenedor=document.querySelector('.conteinerTodo')
let nombre=document.querySelector('#nombre')
let apellido=document.querySelector('#apellido')
let numero=document.querySelector('#numero')
let gustos=document.querySelector('#gustos')
let foto=document.querySelector('#foto')
let fotico=document.querySelector('.fotico')

contenedor.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.id=='añadir'){
        if(localStorage.getItem('contactos')==null){
            contactoOtro=[...contactos]

        }else{
            contactoOtro=JSON.parse(localStorage.getItem('contactos'))

        }
        let gusticos=(gustos.value).split(',')
        contactoOtro.push({nombre:nombre.value,apellido:apellido.value,numero:numero.value,gustos:gusticos,foto:`${foto.value}`})
        localStorage.setItem('contactos',JSON.stringify(contactoOtro))
        setTimeout(()=>{location='../index.html'})

    }else if (e.target.id=='cancel'){
        location.href='../index.html'
    }

})

foto.addEventListener('input',()=>{
    fotico.src=foto.value
})

