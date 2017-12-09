$(document).ready(function () {
    $("#submit").click(function () {
        var fName = $("#name").val();
        var dDate = $("#inputDate").val();
        var assignedT = $("#assignedTo").val();
        $("#table").prepend("<tr><td>" + fName + "</td><td>" + dDate + "</td><td>" + assignedT + "</td></tr>");
    });
});
// Existing form data to view it in table
$.ajax({
    url: 'JS/example.json'
    , data: 'json'
    , type: 'get'
    , cache: false
    , success: function (data) {
        $(data.people).each(function (index, value) {
            $("#table").append("<tr><td>" + value.name + "</td><td>" + value.date + "</td><td>" + value.assigned + "</td></tr>");
            //console.log(value.name);
            //console.log(value.date);
            //console.log(value.assigned);
        });
    }
});
// H1 Animation
$(document).ready(function () {
    var h1 = $("h1");
    h1.animate({left: '100px'}, "slow");
    h1.animate({fontSize: '3em'}, "slow");
    });

//H2 Animation
$(document).ready(function () {
    $("h2.title2").hide();
    $("h2.title2").fadeIn(3000);
    $("h2.title2").hinge(1500);
});


//$.getJSON('JS/example.json', function(data){
//  console.log(data);
//});
//$(document).ready(function () {
//  $.getJSON('JS/example.json', function (data) {
//    $.each(data, function(index, value){
//$("tbody").append("<tr><td>" +value.name+ "</td><td>"+value.date+"</td><td>"+value.assigned+"</td></tr>");
//    });
//});
//});