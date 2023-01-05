// Shows the day and date in the top section of the webpage.
var date = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(date)

$(document).ready(function() {
    // Gives the save buttons their functionality.
    $('.time-block').each(function () {
        var id = $(this).attr('id');
        var task = localStorage.getItem(id);

        if (task !== null) {
            $(this).children('.task').val(task);
        }
    })
    
    $('.saveBtn').on('click', function () {
        var task = $(this).siblings('.task').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, task);
    })

    function timeFunction() {
        // Detects the current time of the day.
        var currentTime = moment().hour();

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hr')[1]);

            // Adds and removes classes based on wether that time block is in the past, the present, or in the future.
            if (timeBlock < currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }

            else if (timeBlock === currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }

            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }

    timeFunction();

})