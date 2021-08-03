function inicio(){
    let element = document.createElement("div");
    element.innerHTML = `<h1 id="Titulo_inicio">BIENVENIDOS <br>
                            Soy Lucas Conde <br></h1>
                            <div class="img_container">
                                <img id="imagen_cambiadora" src="imagenes/Fotos_Cara/Diano.jpg" alt="" onclick="cambiar_imagen();">
                            <div>`;
    element.className = "inicio";
    aparecer(element);
    return element;
}

esta_abierto_menu = false;

function aparecer(element){
    setTimeout(() => {
        element.style.transform = "translateX(0px)";
    }, 95);
}

function work(){
    let element = document.createElement("div");

    let proyectos = [
        {
            imagen : "imagenes/5.JPG",
            titulo : "Kinetik",
            pretitulo : "Primer gimnasio de parkour del Uruguay",
            link : "https://github.com/CondeReggi/Kinetik"
        },
        {
            imagen : "imagenes/1.JPG",
            titulo : "APP MOVIE",
            pretitulo : "Aplicacion de peliculas con API",
            link : "https://github.com/CondeReggi/Movies"
        },
        {
            imagen : "imagenes/2.JPG",
            titulo : "Calculadora",
            pretitulo : "Calcule todo lo que necesite",
            link : "https://github.com/CondeReggi/Calculadora"
        },
        {
            imagen : "imagenes/4.JPG",
            titulo : "RELOJ",
            pretitulo : "Temporizador / Cronometro",
            link : "https://github.com/CondeReggi"
        },
        {
            imagen : "imagenes/3.JPG",
            titulo : "HASHING MAPPING",
            pretitulo : "Tipos Abstractos de datos",
            link : "https://github.com/CondeReggi/Hashing-Mapping"
        }
    ];

    slick_track = document.createElement("div");
    slick_track.className = "slick-track";
    slick_track.id = "track";

    for (let i = 0; i < proyectos.length; i++) {

        objeto_a = document.createElement("a");
        objeto_a.href = `${proyectos[i].link}`;
        objeto_a.setAttribute("target", "_blank");

        slick = document.createElement("div");
        slick.className = "slick";
        slick_hijo = document.createElement("div");
        slick_enlace = document.createElement("a");
        slick_h4 = document.createElement("h4");
        slick_picture = document.createElement("picture");
        slick_img = document.createElement("img");

        slick_h4.innerHTML = `<small>${proyectos[i].pretitulo}</small>${proyectos[i].titulo}`;
        slick_img.src = `${proyectos[i].imagen}`;
        slick_img.alt = `${proyectos[i].pretitulo}`;
        objeto_a.appendChild(slick_img);
        slick_picture.appendChild(objeto_a);
        slick_enlace.appendChild(slick_h4);
        slick_enlace.appendChild(slick_picture);
        slick_hijo.appendChild(slick_enlace);
        slick.appendChild(slick_hijo);
        
        slick_track.appendChild(slick);
    }

    Carousel = document.createElement("div");
    Carousel.className = "Carousel";
    Carousel_h2 = document.createElement("h2");
    Carousel_h2.innerHTML = "MIS TRABAJOS";
    
    slick_list = document.createElement("div");
    slick_list.className = "slick-list";
    slick_list.id = "slick-list";
    Button1 = document.createElement("button");
    Button1.className = "slick-arrow slick-prev";
    Button1.id = "button-prev";
    Button1.setAttribute("data-button", "button-prev");
    Button1.setAttribute("onclick", "app.processingButton(event)");

    Svg_button = document.createElement("svg");
    Svg_button.setAttribute("aria-hidden","true");
    Svg_button.setAttribute("focusable","false");
    Svg_button.setAttribute("data-prefix","fas");
    Svg_button.setAttribute("data-icon", "chevron-left");
    Svg_button.className = "svg-inline--fa fa-chevron-left fa-w-10";
    Svg_button.setAttribute("role", "img");
    Svg_button.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    Svg_button.setAttribute("viewBox", "0 0 320 512");

    Button1.appendChild(Svg_button);

    Button2 = document.createElement("button");
    Button2.className = "slick-arrow slick-next";
    Button2.id = "button-next";
    Button2.setAttribute("data-button", "button-next");
    Button2.setAttribute("onclick", "app.processingButton(event)");

    Svg_button2 = document.createElement("svg");
    Svg_button2.setAttribute("aria-hidden","true");
    Svg_button2.setAttribute("focusable","false");
    Svg_button2.setAttribute("data-prefix","fas");
    Svg_button2.setAttribute("data-icon", "chevron-right");
    Svg_button2.className = "svg-inline--fa fa-chevron-right fa-w-10";
    Svg_button2.setAttribute("role", "img");
    Svg_button2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    Svg_button2.setAttribute("viewBox", "0 0 320 512");
    
    Button2.appendChild(Svg_button2);

    slick_list.appendChild(Button1);
    slick_list.appendChild(slick_track);
    slick_list.appendChild(Button2);

    Carousel.appendChild(Carousel_h2);
    Carousel.appendChild(slick_list);

    element.appendChild(Carousel);

    element.className = "work";
    aparecer(element);
    return element;
}

function Certificados(){
    let cursos = [
        {
            imagen: "imagenes/Certificados/Bootstrap 5.jpg",
            titulo: "Bootstrap 5 - Full",
            instituto: "Udemy"
        },
        {
            imagen: "imagenes/Certificados/JS for beginners.jpg",
            titulo: "JavaScript for Begginers",
            instituto: "Udemy"
        },
        {
            imagen: "imagenes/Certificados/JS y Jquery.jpg",
            titulo: "JavaScript y JQuery",
            instituto: "Udemy"
        },
        {
            imagen: "imagenes/Certificados/The complete C.jpg",
            titulo: "The Complete C Programming",
            instituto: "Udemy"
        },
        {
            imagen: "imagenes/Certificados/The complete Programming C++.jpg",
            titulo: "The complete Programming C++",
            instituto: "Udemy"
        },
        {
            imagen: "imagenes/Certificados/Transition and animation.jpg",
            titulo: "CSS | Transitions and animations",
            instituto: "Udemy"
        },
    ];

    let element = document.createElement("div");
    element.className = "certificaciones";

    contenido_certificados = document.createElement("div");
    contenido_certificados.className = "contenido_certificados";

    for (let i = 0; i < cursos.length; i++) {
        let certificado = document.createElement("div");
        certificado.className = "certificado";

        div = document.createElement("div");
        div.className = "contenido";
        contenido_h3 = document.createElement("h3");
        contenido_h3.innerHTML = `${cursos[i].titulo}`;
        contenido_p = document.createElement("p");
        contenido_p.innerHTML = `${cursos[i].instituto}`;
        div.appendChild(contenido_h3);
        div.appendChild(contenido_p);

        imagen = document.createElement("img");
        imagen.src = `${cursos[i].imagen}`;
        imagen.alt = `${cursos[i].titulo}`;
        certificado.appendChild(imagen);
        certificado.appendChild(div);

        contenido_certificados.appendChild(certificado);
    }

    element.appendChild(contenido_certificados);
    aparecer(element);
    return element;
}

function eliminar_hijos(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
    esta_abierto_menu = true;
    let lista_desordenada = document.getElementById("lista_desordenada");
    if (lista_desordenada.style.transform === "translateX(0px)"){
        lista_desordenada.style.transform = "translateX(-100%)";
    }else{
        lista_desordenada.style.transform = "translateX(0px)";
    }
})

const lista_inicio = document.getElementById("lista_inicio");
const lista_work = document.getElementById("lista_work");
const lista_certificates = document.getElementById("lista_certificates");
const h1_conde = document.getElementById("h1_conde");

h1_conde.addEventListener("click", () => {
    eliminar_hijos(document.getElementById("contenedor"));
    node = inicio();
    document.getElementById("contenedor").appendChild(node);
    cambiar_imagen();
    if (esta_abierto_menu) {
        let lista_desordenada = document.getElementById("lista_desordenada");
        lista_desordenada.style.transform = "translateX(-100%)";
    }
})

lista_work.addEventListener("click", () => {
    eliminar_hijos(document.getElementById("contenedor"));
    node = work();
    document.getElementById("contenedor").appendChild(node);
    if (esta_abierto_menu) {
        let lista_desordenada = document.getElementById("lista_desordenada");
        lista_desordenada.style.transform = "translateX(-100%)";
    }
})

lista_certificates.addEventListener("click", () => {
    eliminar_hijos(document.getElementById("contenedor"));
    node = Certificados();
    document.getElementById("contenedor").appendChild(node);
    if (esta_abierto_menu) {
        let lista_desordenada = document.getElementById("lista_desordenada");
        lista_desordenada.style.transform = "translateX(-100%)";
    }
})

document.getElementById("contactame_footer").addEventListener("click", () => {
    eliminar_hijos(document.getElementById("contenedor"));
    node = contacto();
    document.getElementById("contenedor").appendChild(node);
    if (esta_abierto_menu) {
        let lista_desordenada = document.getElementById("lista_desordenada");
        lista_desordenada.style.transform = "translateX(-100%)";
    }
})



//----------------------------------------------------------------------
