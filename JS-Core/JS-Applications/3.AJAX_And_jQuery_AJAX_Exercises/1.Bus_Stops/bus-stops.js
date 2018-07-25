function getInfo() {
  let stopId = $("#stopId").val();
  let stopUrl = `https://judgetests.firebaseio.com/businfo/${stopId}.json`; 
  let req = {
       url: stopUrl,
       success: displayStops,
       error: displayError
  }
  $.ajax(req);
  function displayStops(stop){
    $("#stopName").empty();
    $("#buses").empty();
    $("#stopName").text(stop.name);
    for(let bus in stop.buses){
      $("#buses").append($(`<li>Bus ${bus} arrives in ${stop.buses[bus]} minutes</li>`))
    }
  }
  function displayError(e){
    $("#stopName").empty();
    $("#buses").empty();
    $("#stopName").text("Error");
  }
}
