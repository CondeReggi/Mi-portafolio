const lista_contacto = document.getElementById("lista_contacto");

function contacto(){
    let element = document.createElement("div");
    element.innerHTML = `<div class="formulario_div">
                            <div class="colorsito_div">
                                <div class="formulario">
                                    <form action="enviar.php" id="formulario_form">
                                    <label for="input_nombre_form">Nombre Completo</label>
                                    <input name="input_nombre_form" id="input_nombre_form" type="text">
                                    <label for="input_mail_form">Correo electronico</label>
                                    <input name="input_mail_form" id="input_mail_form" type="text">
                                    <label for="input_telefono_form">Numero de telefono</label>
                                    <input name="input_telefono_form" id="input_telefono_form" type="text">
                                    <label for="textarea_form">Mensaje que quieras enviarnos!</label>
                                    <textarea name="textarea_form" id="textarea_form"></textarea>
                                    <button type="submit" id="button_form" onclick="validaciones();">ENVIAR</button>
                                    </form>
                                </div>
                            </div>
                            <div class="informacion">
                                <div class="infor">
                                    <h3>Contactame tambien aqui</h3>
                                    <p>Gracias por visitar nuestra pagina, no dudes en contactarme mediante este formulario, o por cualqueira de mis redes sociales</p>
                                </div>
                                <div class="redes_form">
                                    <h4>Mis Redes!</h4>
                                    <ul>
                                        <li><a href="https://www.facebook.com/ElLucasConde/"  target="_blank"><img src="imagenes/lgoos/facebook.svg" alt="Facebook"></a></li>
                                        <li><a href="https://www.instagram.com/conde.pk/"  target="_blank"><img src="imagenes/lgoos/instagram.png" alt="Instagram"></a></li>
                                        <li><a href="https://www.linkedin.com/in/lucas-conde-5b8227216/"  target="_blank"><img src="imagenes/lgoos/linkedin.png" alt="Linkdin"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>`;
    element.className = "formulario3";
    activar = true;
    aparecer(element);
    return element;
}

lista_contacto.addEventListener("click", () => {
    eliminar_hijos(document.getElementById("contenedor"));
    node = contacto();
    document.getElementById("contenedor").appendChild(node);
    if (esta_abierto_menu) {
        let lista_desordenada = document.getElementById("lista_desordenada");
        lista_desordenada.style.transform = "translateX(-100%)";
    }
})

//----------------------------------------------------------VALIDACION FORM-------------------------------------------------------------------------//

function validaciones(){

    const nombre = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const telefono = /^[0-9]*$/;

    let input_nombre_form = document.getElementById("input_nombre_form");
    let input_mail_form = document.getElementById("input_mail_form");
    let input_telefono_form = document.getElementById("input_telefono_form");
    let textarea_form = document.getElementById("textarea_form");

    console.log(textarea_form.value + " " + input_nombre_form.value + " " + input_mail_form.value + " " + input_telefono_form.value);
    console.log(nombre.test(input_nombre_form.value) +" "+ email.test(input_mail_form.value) +" "+ telefono.test(input_telefono_form.value));

    if (nombre.test(input_nombre_form.value) && email.test(input_mail_form.value) && telefono.test(input_telefono_form.value) && textarea_form.value != ""){
        alert("Tu mail se ha enviado correctamente")

        //PHP
        location.reload();
    }else{
        if (!nombre.test(input_nombre_form.value)){
            //input_nombre_form.style.backgroundColor = "red";
            input_nombre_form.focus();
            alert("Nombre de usuario invalido, por favor cambielo");
        }
        if (!email.test(input_mail_form.value)){
            //input_mail_form.style.backgroundColor = "red";
            input_mail_form.focus();
            alert("Correo electornico incorrecto, por favor cambielo");
        }
        if (!telefono.test(input_telefono_form.value)){
            //input_telefono_form.style.backgroundColor = "red";
            input_telefono_form.focus();
            alert("Telefono no valido, por favor cambielo");
        }
        if ((textarea_form.value) === ""){
            //textarea_form.style.backgroundColor = "red";
            textarea_form.focus();
            alert("Por favor introduzca un mensaje");
        }
    }
}





