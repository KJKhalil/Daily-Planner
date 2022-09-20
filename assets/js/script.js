var date = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(date)

$(document).ready(function() {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.task').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })


    function timeFunction() {
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
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }

    $('#hr8 .task').val(localStorage.getItem('hr8'));
    $('#hr9 .task').val(localStorage.getItem('hr9'));
    $('#hr10 .task').val(localStorage.getItem('hr10'));
    $('#hr11 .task').val(localStorage.getItem('hr11'));
    $('#hr12 .task').val(localStorage.getItem('hr12'));
    $('#hr13 .task').val(localStorage.getItem('hr13'));
    $('#hr14 .task').val(localStorage.getItem('hr14'));
    $('#hr15 .task').val(localStorage.getItem('hr15'));
    $('#hr16 .task').val(localStorage.getItem('hr16'));
    $('#hr17 .task').val(localStorage.getItem('hr17'));

    timeFunction();

})