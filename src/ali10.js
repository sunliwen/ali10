$(function () {

    $(document).on('ready', function(){
        $('section.welcome').show();
        $('section.idea').hide();
        $('section.answer').hide();

        $.getJSON("data/data.json", function (e) {
            $.extend(results, e);
        })
    });

    $('.start_btn').on('click', function(){
        $('section.welcome').hide();
        $('section.idea').show();
        $('section.answer').hide();
    });

    $('.answer_btn').on('click', function(){
        $('section.welcome').hide();
        $('section.idea').hide();
        $('section.answer').show();
    });

    $('.share_btn').on('click', function(){
        $('section.answer').hide();
        console.log(results);
    });

    var results = {};
});