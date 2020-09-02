$(function () {
    $("#search").click(e=>{
      idPoke();
    });

    $("#clean").click(e=>{
      limpiar();
    })
});    

//función crea poke cards
function displayCard(poke){
  //iterando para rescatar todos los tipos
  var pokeTypes = poke.types;
  var typesObj = [];
  var types;
  for (types in pokeTypes) {
    typesObj.push(pokeTypes[types].type);
  }

  var cleanTypes =[];
  var finalTypes;
  for (finalTypes in typesObj) {
    cleanTypes.push(typesObj[finalTypes].name);
  }
  
  var printTypes;
  for (printTypes of cleanTypes) {
    //$("#cardBody").append(`<p class="card-text"><span class="badge badge-secondary">${printTypes}</span></p>`);
    console.log(printTypes);
  }

    var card = `<div class="col-3">
                  <div class="card text-center my-4">
                    <h5 class="card-header">${poke.name}</h5>
                    <img src="${poke.sprites.front_default}" class="card-img-top img-fluid" alt="imagen del pokemon">
                    <div class="card-body" id="cardBody">
                      <h6 class="card-subtitle mb-2 text-muted">N° ${poke.id}</h6>
                      <p class="card-text"><span class="badge badge-secondary">Tipos: ${cleanTypes}</span></p>
                    </div>
                  </div>
                </div>`
    
    var hp = poke.stats[0].base_stat;
    var attack = poke.stats[1].base_stat;
    var defense = poke.stats[2].base_stat;
    var specialAttack = poke.stats[3].base_stat;
    var specialDefense = poke.stats[4].base_stat;
    var speed = poke.stats[5].base_stat;           

    var chart = new CanvasJS.Chart("div-insertPokes", {
      animationEnabled: true,
      title: {
        text: `Estadísticas de ${poke.name}`
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: hp, label: "HP"},
          {y: speed, label: "Velocidad"},
          {y: attack, label: "Ataque"},
          {y: specialAttack, label: "Ataque especial"},
          {y: defense, label: "Defensa"},
          {y: specialDefense, label: "Defensa especial"}
        ]
      }]
    });
    chart.render();
    return card;
}

//función llamada ajax
function getPoke(id){
    $.ajax({
      type: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      success: function (dataPoke) {
        //console.log("data=>", dataPoke);
     $("#div-insertPokes").append(displayCard(dataPoke));
      }
    });
}




//función rescate id para llamar API
function idPoke(){
  var id = $("#searchInput").val();
    
    if(validId(id)){
      getPoke(id);
      $("#searchInput").val("");
      $("#searchInput").focus();
    }
}

//función comprobar numero id válido
function validId(id){
    var expresionId = /^(([1-9])|([1-9]\d)|([1-7]\d\d)|([8][0-8]\d)|([8][9][0-2]))$/;
    
    if(!expresionId.test(id)){
      alert("Ingrese un número entre 1 y 892");
      $("#searchInput").focus();
      return false
    }
    return true;
}

//función limpiar pantalla
function limpiar(){
  $("#div-insertPokes").empty(); 
}