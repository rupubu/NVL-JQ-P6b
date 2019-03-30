$( document ).ready(function () {
    var lista = [];
    var valores = [];
    var iPaso = 0;
       
    $("ul").prepend("<input type='button' id='siguiente' value='Siguiente paso >'>").on("click", Paso);

    function Paso() {
        switch (iPaso) {
            case 0:
                // Crea dinámicamente (con jQuery) otra lista, con los 5 primeros elementos de esta lista.
                $( "body" ).append("<ul id='nuevalista'></ul>" );
                for (var i = 0; i < 5; i++) {
                    lista.push($("ul[id!='nuevalista'] li").eq(i));
                    $("#nuevalista").append( lista[i].clone() );
                    // Si no uso clone, los elementos se borran de la primera lista.
                }
                break;
            case 1:
                // Ahora borra esos elementos de la lista original.
                valores = $("ul[id!='nuevalista'] li");
                for (var i = 0; i < 5; i++) {
                    $(valores[i]).remove();
                }
                break;
            case 2:
                // Imagina que te has equivocado, y en realidad no querías borrar el quinto elemento. Propón una solución para volver a insertarlo en la lista original.
                $(lista[4]).insertBefore($("ul[id!='nuevalista'] li:first"));
                $("ul[id='nuevalista'] li:last").detach();
                break;
            case 3:
                //Crea un nuevo elemento, en la segunda lista, que sea el siguiente elemento:
                $("ul[id='nuevalista']").append($("<li id='perejil' class='odd'><span>Isla de Perejil</span></li>"));
                break;
            default:
        }
        iPaso++;
        if (iPaso > 4) {
            iPaso = 0;
            $("ul[id='nuevalista']").remove();
            for (var i = 3; i > -1; i--) {
                $(lista[i]).insertBefore($("ul[id!='nuevalista'] li:first"));
            }
        }
    }
});