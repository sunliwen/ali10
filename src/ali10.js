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

        var result = results[choice.toLowerCase()];
        var length = Object.keys(result).length;
        var i = getRandomInt(length);
        var result = result[i.toString()];
        $('.answer_text').text(result.long);
        document.title = result.short;
    });

    $('button.choice').on('click', function(){
        choice = $(this).data('choice');
    });

    $('.share_btn').on('click', function(){
        $('section.answer').hide();
        console.log(results);
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    var results = {};
    var choice = null;
    var result = null;
});