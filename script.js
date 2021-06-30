$(document).ready(function(){

    const currentDay = moment().format("MMMM Do YYYY, h:mm a");

    var dateHeading = $('#currentDay');

    dateHeading.text(currentDay);

    var plannerDiv = $('.container');


    for(var i=9; i < 18; i++ ){
        var tableRow = $('<tr>');
        tableRow.addClass('row');

        var timeOfDay = $('<div>')
        timeOfDay.addClass("col-md-2 timeDiv")
        timeOfDay.css("background-color", 'coral')
       
        var showHourOfDay = i;
        var mornOrNight = '';

        if(showHourOfDay > 12 ){
            showHourOfDay = showHourOfDay - 12
            mornOrNight = 'PM'
        } else {
            showHourOfDay = showHourOfDay;
            mornOrNight = 'AM'
            if(showHourOfDay === 12){
                mornOrNight = "PM"
            }
        }

        timeOfDay.text(showHourOfDay + " " + mornOrNight)

        var userTextArea = $("<textarea>");
        userTextArea.addClass("col-md-9 user-input number");
        userTextArea.attr("number", i);
        userTextArea.css("background-color", 'grey');

        var saveButton = $('<button>');
        saveButton.addClass("col-md-1 save-btn name");
        saveButton.attr('name', i)
        saveButton.css("background-color", "blue");
        saveButton.text("Save")

        tableRow.append(timeOfDay, userTextArea, saveButton);
        plannerDiv.append(tableRow);

    }

    $(".save-btn").on('click', function(event){
        event.preventDefault();
        console.log("Yo we clicked", $(`textarea[number=${$(this).attr('name')}]`).val());

    })









})