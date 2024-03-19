const searchInput = document.getElementById("input");
const searchInput2 = document.getElementById("input2");
const button = document.getElementById("content__button");


// PESQUISA ENDEREÇO NO INPUT
$(document).ready(function () {
    var autocomplete;
    
    autocomplete = new google.maps.places.Autocomplete((searchInput), {
        types: ['geocode'],

        // Restringe o País de Pesquisa
        componentRestrictions: {
            country: "BR"
        }
    });
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
    });
});       

$(document).ready(function () {
    var autocomplete2;
    
    autocomplete2 = new google.maps.places.Autocomplete((searchInput2), {
        types: ['geocode'],

        // Restringe o País de Pesquisa
        componentRestrictions: {
            country: "BR"
        }
    });
    
    google.maps.event.addListener(autocomplete2, 'place_changed', function () {
        var near_place = autocomplete2.getPlace();
    });
});

// ENVIA OS VALORES DO INPUT APERTANDO A TECLA ENTER OU CLICANDO NO BOTAO ( É POSSIVEL VISUALIZAR OS DADOS ENVIADOS NO CONSOLE ) 
// ALEM DISSO ELE VERIFICA SE OS INPUTS CONTEM ALGUM CONTEÚDO, CASO ESTEJA VAZIO EMITE UM ALERTA

addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (searchInput.value.trim() === "" || searchInput2.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            button.click();
        }
    }
});
button.addEventListener("click", () => console.log(searchInput.value+"\n"+searchInput2.value));