var date = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(date)

$(document).ready(function() {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })
})