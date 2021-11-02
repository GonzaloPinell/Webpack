import '../css/estilos.css';
import  image  from '../assets/img/rick.png';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, como estas?`

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = image;

    document.body.append(img);
}