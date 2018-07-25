function solve() {
    const baseUrl = "https://judgetests.firebaseio.com/schedule/"
    let moving = false;
    let currStop = "depot";
    function checkIfMoving(isMoving){
        if(!isMoving){
            $("#depart").prop("disabled", false);
            $("#arrive").prop("disabled", true);
        }else{
            $("#arrive").prop("disabled", false);
            $("#depart").prop("disabled", true);
        }
    }
    function depart(){
        moving = true;
        checkIfMoving(moving);
        let req = {
            url: baseUrl + "/" + `${currStop}.json`,
            success:displayStop
        }
        $.ajax(req);
    }
    function arrive(){
        moving = false;
        checkIfMoving(moving);
        let req = {
            url: baseUrl + "/" + `${currStop}.json`,
            success:displayStop
        }
        $.ajax(req);
    }
    function displayStop(stop){
        let info = $(".info")
        if(moving){
            info.text(`Next stop ${stop.name}`)
        }else{
            info.text(`Arriving at ${stop.name}`)
            currStop = stop.next; 
        }
    }
    return {
      depart,
      arrive
    };
  }
  let result = solve();
