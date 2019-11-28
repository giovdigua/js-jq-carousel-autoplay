$(document).ready(function() {

    //Create a automatic player
    var clock = setInterval(function () {
        //Variables for images
        var index = $('img');
        var current = $('img.active');
        var next;
        //Variables for the bullets
        var bulletIndex = $('.bullet');
        var currentBullet = $('.bullet.select');
        var nextBullet;


        if (current.is(index.last())) {
            next = index.first();
        }else{
            next = current.next('img');

        }

        if (currentBullet.is(bulletIndex.last())) {
            nextBullet = bulletIndex.first();
        } else {
            nextBullet = currentBullet.next('.bullet');
        }

        current.removeClass('active');
        next.addClass('active');
        currentBullet.removeClass('select');
        nextBullet.addClass('select');
    },3000);

    // //Prec
    // $('#leftContainer').click(function() {
    //
    //     //Variables for images
    //     var index = $('img');
    //     var current = $('img.active');
    //     var prec;
    //     //Variables for the bullets
    //     var bulletIndex = $('.bullet');
    //     var currentBullet = $('.bullet.select');
    //     var precBullet;
    //
    //     if (current.is(index.first())) {
    //         prec = index.last();
    //     }else{
    //         prec = current.prev('img');
    //
    //     }
    //
    //     if (currentBullet.is(bulletIndex.first())) {
    //         precBullet = bulletIndex.last();
    //     } else {
    //         precBullet = currentBullet.prev('.bullet');
    //     }
    //
    //     current.removeClass('active');
    //     prec.addClass('active');
    //     currentBullet.removeClass('select');
    //     precBullet.addClass('select');
    //
    // });
    // //next
    // $('#rightContainer').click(function() {
    //
    //     //Variables for images
    //     var index = $('img');
    //     var current = $('img.active');
    //     var next;
    //     //Variables for the bullets
    //     var bulletIndex = $('.bullet');
    //     var currentBullet = $('.bullet.select');
    //     var nextBullet;
    //
    //
    //     if (current.is(index.last())) {
    //         next = index.first();
    //     }else{
    //         next = current.next('img');
    //
    //     }
    //
    //     if (currentBullet.is(bulletIndex.last())) {
    //         nextBullet = bulletIndex.first();
    //     } else {
    //         nextBullet = currentBullet.next('.bullet');
    //     }
    //
    //     current.removeClass('active');
    //     next.addClass('active');
    //     currentBullet.removeClass('select');
    //     nextBullet.addClass('select');
    //
    // });

    //this function is the BONUS challenge
    //With this you can change the img click on bullet
    $('.bullet').click(function () {
            $('.bullet.select').removeClass('select');
            $(this).addClass('select');
            var indice = $(this).index();
            console.log(indice);
            $('img.active').removeClass('active');
            //$('#sliderIMGContainer').children().eq(indice).addClass('active');
            $('#sliderIMGContainer img').eq(indice).addClass('active');
    });



    //New implementations
    function interceptClick( event ) {
        //Variables that intercept click
        var target = $(event.target);

        //Variables for images
        var index = $('img');
        var current = $('img.active');
        var next;
        //Variables for the bullets
        var bulletIndex = $('.bullet');
        var currentBullet = $('.bullet.select');
        var nextBullet;

        if (target.is( "#rightContainer i")) {
            console.log('Dx');
            if (current.is(index.last())) {
                next = index.first();
            }else{
                next = current.next('img');
            }

            if (currentBullet.is(bulletIndex.last())) {
                nextBullet = bulletIndex.first();
            } else {
                nextBullet = currentBullet.next('.bullet');
            }

        }else if ( target.is( "#leftContainer i" ) ) {
                console.log('Sx');
                if (current.is(index.first())) {
                    next = index.last();
                }else{
                    next = current.prev('img');

                }

                if (currentBullet.is(bulletIndex.first())) {
                    nextBullet = bulletIndex.last();
                } else {
                    nextBullet = currentBullet.prev('.bullet');
                }
        }else{
            return;
        }

        current.removeClass('active');
        next.addClass('active');
        currentBullet.removeClass('select');
        nextBullet.addClass('select');
    }

    $('#slider').click(interceptClick);

});
