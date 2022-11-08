var data = {};
var viajes = [
    {
        nombre: 'Laguna de pacucha',
        detalles: 'La laguna de pacucha es uno de los atractivos principales de la provincia de andahuaylas en la region apurimac, se encuentra sobre los 3100 m.s.n.m.',
        img: 'https://www.chankaexplore.com/img/paco7.jpg',
    },
    {
        nombre: 'Complejo Arqueologico de Sondor',
        detalles: 'Sóndor es un complejo arqueológico de la cultura Chanca, antecesora al Imperio Incaico (aunque gran parte de la arquitectura visible es incaica). Está situado en el valle la laguna Pacucha, en los andes central de Perú, a 21 kilómetros al noreste de Andahuaylas. Pertenece al distrito de Pacucha.',
        img: 'https://3.bp.blogspot.com/-V2-1bwNZo-U/Wep3xN-urSI/AAAAAAABCHo/xl023vSjeMkYOZjQ3XOndxssDbtfLFlhwCLcBGAs/s1600/complejo-arqueologico-de-sondor.jpg',
    },
    {
        nombre: 'Abancay',
        detalles: 'La ciudad se encuentra situada a 2300 m s. n. m. (punto más bajo 1700 msnm Pachachaca - punto más alto 2800 msnm Sahuanay) en la vertiente oriental andina, al norte del valle del río Pachachaca, a las faldas del nevado Ampay. La ciudad abarca los distritos de Abancay y Tamburco. La ciudad tiene una población de 72 277 habitantes según los datos del Censo Nacional 2017.',
        img: 'https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Abancay-Plaza-principal-2.jpg',
    },
    {
        nombre: 'Ayacucho',
        detalles: 'Ayacucho (fundada como San Juan de la Frontera de Huamanga el 25 de abril de 1540 y llamada Huamanga hasta el 15 de febrero de 1825) es una ciudad peruana capital del distrito homónimo, de la provincia de Huamanga y del departamento de Ayacucho. Se encuentra situada en la vertiente oriental de la cordillera de los Andes a una altitud de 2761 m s. n. m.',
        img: 'https://elperuano.pe/fotografia/thumbnail/2021/07/06/000122610M.jpg',
    },
    {
        nombre: 'Urus - Islas flotantes',
        detalles: 'A 3,812 m.s.n.m, en el altiplano peruano se encuentra el lago navegable más alto del mundo, el Lago Titicaca, en Puno. En él se pueden encontrar las Islas Flotantes de los Uros, un conjunto de aproximadamente 80 islas construidas de totora, una planta acuática que crece en la superficie del Lago Titicaca. La totora es tejida y tendida sobre otra capa de la misma para construir la superficie de cada isla.  ',
        img: 'https://www.civa.com.pe/blog/wp-content/uploads/2020/04/shutterstock_358570064.jpg',
    },
    {
        nombre: 'Iquitos',
        detalles: 'Iquitos (pronunciado [iˈkitos] ( escuchar); en iquito: «Multitud separada por las aguas»)14​ es una ciudad peruana capital del distrito de Iquitos y a la vez de la provincia de Maynas y del departamento de Loreto. Es la metrópoli más grande de la Amazonía peruana, y es la séptima ciudad más poblada del país según el Instituto Nacional de Estadística e Informática en 2017, con una población de 479 866 habitantes.15​ Está establecida en la Gran Planicie y rodeada por los ríos Amazonas, Nanay e Itaya y el Lago Moronacocha. En conjunto, se constituye en Iquitos Metropolitano, conformado por cuatro distritos: Iquitos, Punchana, Belén y San Juan Bautista.',
        img: 'https://www.howlanders.com/blog/wp-content/uploads/2019/06/ciudad-de-iquitos.jpg',
    },

];

comentarios = [
    {
        nombre: 'Nerio',
        comentario: 'Que bonito lugar',
    },
]

function misDatos() {
    window.location.href = '#datos';
    setTimeout(function(){
        document.getElementById('nombre').innerHTML = 'Nerio';
        document.getElementById('apellidos').innerHTML = 'Cañari Huarcaya';
        document.getElementById('celular').innerHTML = '910426974';
        document.getElementById('email').innerHTML = 'huarcayanerio@gmail.com';
    }, 1000);
}

function setData(newData) {
    this.data = newData;
    console.log('new data: ', this.data);
} 

function getData() {
    console.log(this.data);
    return this.data;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function DetallesViaje(id) {
    window.location.href = 'detallesViajes.html?id=' + id;
}

function cargarDatosViaje() {
    id = this.getParameterByName('id');
    document.getElementById('nombre').innerHTML = viajes[id].nombre;
    document.getElementById('descripcion').innerHTML = viajes[id].detalles;
    var img=document.getElementById('img'); 
    img.setAttribute("src",viajes[id].img); 
}

function cargarListaViaje() {
    todo = document.createElement('tr');
    for (const item of viajes) {
        // console.log(item);
        // document.getElementById('nombre').innerHTML = item.nombre;
        // document.getElementById('detalles').innerHTML = item.detalles;
        // var img=document.getElementById('img'); 
        // img.setAttribute("src", item.img);
        const nombre = document.createElement('textarea');
        nombre.setAttribute("value", item.nombre);
        const detalles = document.createElement('textarea');
        nombre.setAttribute("value", item.detalles);
        const img =document.createElement('img');
        img.setAttribute("src", item.img);
        td = document.createElement('td');
        td.appendChild(img);
        td.appendChild(nombre);
        td.appendChild(detalles);
        todo.appendChild(td);
    }
    console.log(todo);
    return todo;
    // document.getElementById('cards').innerHTML = todo;
}

function contacto() {
    nombres = document.getElementById('nombres2').value;
    apellidos = document.getElementById('apellidos2').value;
    celular = document.getElementById('celular2').value;
    correo = document.getElementById('correo2').value;
    comentario = document.getElementById('comentario').value;

    document.getElementById('respuesta').innerHTML = 'Hola ' + nombres + ', gracias por contactarte, recibimos tu cometario "'  + comentario + '", te contactaremos al ' + celular + ', Gracias';
}

function mostrarComentarios() {
    document.getElementById('comentarios').innerHTML = null;
    for (const item of comentarios.reverse()) {
        document.getElementById('comentarios').innerHTML += '\
        <li> \
            <label>Comentario de '+item.nombre+'</label><br> \
            <textarea readonly name="comenta" id="comenta" cols="50" rows="3">'+item.comentario+'</textarea> \
        </li> \
        ';
    }
}

function comentar() {
    nombre = document.getElementById('nombreComentario').value;
    comentario = document.getElementById('comentario').value;
    const data = {
        nombre: nombre,
        comentario: comentario
    };
    console.log(data, this.comentarios);
    this.comentarios.push(data);
    this.mostrarComentarios();
}