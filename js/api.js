$(document).ready(function() {
    $.ajax({
        url: "http://date.jsontest.com"
    }).then(function(data) {
       $('#time').append(data.time);
       $('#date').append(data.date);
    });
});