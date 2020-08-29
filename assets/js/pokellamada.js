$(function () {
    $("#search").click(e=>{
      buscarPersonaje();
    });
});    

/*function generarCard(personaje){
    var card = `
    <div class="col-sm-12 col-md-4">
      <div class="card" style="width:100%;">
        <img src="${personaje.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <div>Status : ${personaje.status}</div>
          <div>Especie : ${personaje.species}</div>
        </div>
      </div>
    </div>
    `
    return card;
  }*/


function getPersonaje(id){
    $.ajax({
      type: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/1`,
      success: function (data) {
        console.log("data=>", data);
        
       // $("#card").append(generarCard(data));
      }
    });
}

/*function validacion(id){
    var expresion = /^\d{1,3}$/;
    
    if(!expresion.test(id)){
      alert("Input invalido");
      $("input_busqueda").focus();
      return false
    }
  
    return true;
  }*/