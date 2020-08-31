$(function () {
    $("#search").click(e=>{
      idPoke();
    });
});    

function displayCard(poke){
  var pokeTypes = poke.types;
  console.log(pokeTypes);
  
 
  var typesObj = [];

  var types;
  for (types in pokeTypes) {
    typesObj.push(pokeTypes[types].type);
  }
   
  console.log(typesObj);


    var card = `<div class="col-3">
                  <div class="card text-center my-4">
                    <h5 class="card-header">${poke.name}</h5>
                    <img src="${poke.sprites.front_default}" class="card-img-top img-fluid" alt="imagen del pokemon">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">N° ${poke.id}</h6>
                      <p class="card-text"><span class="badge badge-secondary"></span></p>
                    </div>
                  </div>
                </div>`
    return card;
}

function getPoke(id){
    $.ajax({
      type: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      success: function (dataPoke) {
        console.log("data=>", dataPoke);
        
     $("#div-insertPokes").append(displayCard(dataPoke));
      }
    });
}

function idPoke(){
  var id = $("#searchInput").val();
    
    if(validId(id)){
      getPoke(id);
      $("#searchInput").val("");
      $("#searchInput").focus();
    }
}

function validId(id){
    var expresionId = /^(([1-9])|([1-9]\d)|([1-7]\d\d)|([8][0-8]\d)|([8][9][0-2]))$/;
    
    if(!expresionId.test(id)){
      alert("Ingrese un número entre 1 y 892");
      $("#searchInput").focus();
      return false
    }
    return true;
}