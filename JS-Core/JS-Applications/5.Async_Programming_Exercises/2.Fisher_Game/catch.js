function attachEvents() {
    //constants
    const baseUrl = " https://baas.kinvey.com/appdata/kid_S1H3CH94Q/biggestCatches";
    const username = btoa("gosho:g");
    //attaching events
    $(".load").click(loadCatches);
    $(".add").click(addCatches);

    //loading all catches
    async function loadCatches() {
        let req = {
            url: baseUrl,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + username);
            }
        };
        let catches = await $.ajax(req);
        $("#catches").empty();
        for (let c of catches) {
            let cDiv = $("<div>")
                .addClass("catch")
                .data("id", c._id)
                .append($("<label>Angler</label>"))
                .append($(`<input type="text" class="angler" value="${c.angler}">`))
                .append($("<label>Weight</label>"))
                .append($(`<input type="text" class="weight" value="${Number(c.weight)}">`))
                .append($("<label>Species</label>"))
                .append($(`<input type="text" class="species" value="${c.species}">`))
                .append($("<label>Location</label>"))
                .append($(`<input type="text" class="location" value="${c.location}">`))
                .append($("<label>Bait</label>"))
                .append($(`<input type="text" class="bait" value="${c.bait}">`))
                .append($("<label>Capture Time</label>"))
                .append($(`<input type="text" class="captureTime" value="${Number(c.captureTime)}">`))
                .append($("<button class='update'>Update</button>").click(updateCatch))
                .append($("<button class='delete'>Delete</button>").click(deleteCatch));
            cDiv.appendTo($("#catches"));
        }
    }

    //sharing a new catch
    function addCatches() {
        let angler = $("#addForm .angler");
        let weight = $("#addForm .weight");
        let species = $("#addForm .species");
        let location = $("#addForm .location");
        let bait = $("#addForm .bait");
        let captureTime = $("#addForm .captureTime");

        let notEmpty = angler && weight && species && location && bait && captureTime;
        if (notEmpty) {
            let c = {
                angler: angler.val(),
                weight: Number(weight.val()),
                species: species.val(),
                location: location.val(),
                bait: bait.val(),
                captureTime: Number(captureTime.val())
            };
            let req = {
                url: baseUrl,
                method: "POST",
                beforeSend: function (xsa) {
                    xsa.setRequestHeader("Authorization", "Basic " + username);
                },
                contentType: "application/json",
                data: JSON.stringify(c)
            };
            $.ajax(req);
            angler.val("");
            weight.val("");
            species.val("");
            location.val("");
            bait.val("");
            captureTime.val("");
        }
    }

    //updating and deleting
    function updateCatch() {
        let id = $(this).parent().data().id;
        let div = $(this).parent();
        let angler = div.find(".angler").val();
        let weight = div.find(".weight").val();
        let species = div.find(".species").val();
        let location = div.find(".location").val();
        let bait = div.find(".bait").val();
        let captureTime = div.find(".captureTime").val();
        let c = {
            angler,
            weight:Number(weight),
            species,
            location,
            bait,
            captureTime:Number(captureTime)
        };
        let req = {
            url: baseUrl + "/" +id,
            method: "PUT",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + username);
            },
            contentType: "application/json",
            data: JSON.stringify(c)
        };
        $.ajax(req);
    }

    function deleteCatch() {
        let id = $(this).parent().data().id;
        let req = {
            url: baseUrl + "/" +id,
            method: "DELETE",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + username);
            }
        };
        $.ajax(req);
    }
}