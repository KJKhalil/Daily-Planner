var date = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(date)

$(document).ready(function() {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })
})

function time() {
    var currentTime = moment().hour();

    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id').split('hr')[1]);

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
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}