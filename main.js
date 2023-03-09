import contactos from "./Personajes.js";


console.log(contactos[1].apellido)










let btn_buscar=document.getElementById('btn_buscar').addEventListener('click',()=>{
    let aBuscar=document.getElementById('nombre').value
    console.log(aBuscar)
    let index = contactos.map(object => object.nombre).indexOf(aBuscar)
    console.log(index)
    document.querySelector('.conteinerImg').innerHTML=`
    <img src="${contactos[index].foto}" alt="">`
    if (document.getElementById('selection').value=="apellido"){
        document.querySelector('.conteinerInfo').innerHTML=`
            Apellido: ${contactos[index].apellido}
        `
    }else if(document.getElementById('selection').value=="numero"){
        document.querySelector('.conteinerInfo').innerHTML=`
            Número: ${contactos[index].numero}
        `

    }else if(document.getElementById('selection').value=="gustos"){
        document.querySelector('.conteinerInfo').innerHTML=`
            Gustos: ${contactos[index].gustos}
        `

    }else{
        document.querySelector('.conteinerInfo').innerHTML=`
        Nombre: ${contactos[index].nombre} <br>
        Apellido: ${contactos[index].apellido}<br>
        Número: ${contactos[index].numero}<br>
        Gustos: ${contactos[index].gustos}
        `
    }
})