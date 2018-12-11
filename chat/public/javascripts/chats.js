/* global $ */
$(document).ready(function() {
    $("#postChat").click(function() {
        console.log("52");
        var myobj = { Name: $("#name").val(), Chat: $("#chat").val() };
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);

        var url = "chat";
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                $("#done").html(textStatus);
            }
        })
    });

    $("#getChats").click(function() {
        var url = "chat?q=" + $('#query').val();

        $.getJSON(url, function(data) {
            console.log(data);
            var everything = "<ul>";
            for (var chat in data) {
                com = data[chat];
                everything += "<li> Name: " + com.Name + " -- Chat: " + com.Chat + "</li>";
            }
            everything += "</ul>";
            $("#chats").html(everything);
        })
    })

    $("#deleteChats").click(function() {
        $.ajax({
            url: "chat",
            type: "DELETE",
            success: function(data, textStatus) {
                $("#done").html(textStatus);
            }
        })
    });

});
