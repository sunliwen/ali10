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
        //console.log(choice);
        var candidates = results[choice.toLowerCase()];
        var length = Object.keys(candidates).length;
        var i = getRandomInt(length);
        candidate = candidates[i.toString()];
        //console.log(candidates, length, i, candidate)
        $('.answer_text').text(candidate.long);
        document.title = candidate.short;
    });

    $('button.choice').on('click', function(){
        choice = $(this).data('choice');
        $('.choice').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.share_btn').on('click', function(){
        //$('section.answer').hide();
        //console.log(results);
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    var results = {};
    var choice = null;
    var candidate = null;
});