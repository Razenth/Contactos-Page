import contactos from "./Personajes.js";
let personas=''

if (localStorage.getItem('contactos')!=null){
    personas=JSON.parse(localStorage.getItem('contactos'))

}else{
    personas=contactos
}

personas.forEach(fotico=>{
    document.querySelector('.imagenesPersonajes').innerHTML+=
    `<img src="${fotico.foto}" alt="">`
})


let btn_buscar=document.getElementById('btn_buscar').addEventListener('click',()=>{ 
    if(personas.find(persona=>(persona.nombre).toUpperCase()==(nombre.value).toUpperCase())){
        let index=personas.findIndex(persona=>(persona.nombre).toUpperCase()==(nombre.value).toUpperCase())
        console.log(index)
        document.querySelector('.conteinerImg').innerHTML=`
        <img src="${personas[index].foto}" alt="">`
        if (document.getElementById('selection').value=="apellido"){
            document.querySelector('.conteinerInfo').innerHTML=`
                Apellido: ${personas[index].apellido}
            `
        }else if(document.getElementById('selection').value=="numero"){
            document.querySelector('.conteinerInfo').innerHTML=`
                Número: ${personas[index].numero}
            `

        }else if(document.getElementById('selection').value=="gustos"){
            document.querySelector('.conteinerInfo').innerHTML=`
                Gustos: ${personas[index].gustos}
            `

        }else if(document.querySelector('#selection').value=='todo'){
            document.querySelector('.conteinerInfo').innerHTML=`
            Nombre: ${personas[index].nombre} <br>
            Apellido: ${personas[index].apellido}<br>
            Número: ${personas[index].numero}<br>
            Gustos: ${personas[index].gustos}
            `
        }
    }else{
        alert('Esta persona no existe')
        nombre.value=''
    }
})

const btn_agregar=document.querySelector('.btn_agregar').addEventListener('click',()=>{
    location.href='../HTML/Añadir.html'
})

