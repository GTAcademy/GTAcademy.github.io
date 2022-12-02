$(document).ready(function() { 
    $(window).resize(function(){
            var width = $(window).width();

            if(width < 800){
                $('.querychange').removeClass('col-6').addClass('col-md-6');
            }
        })

.resize();

});

open = false;
$('#JoinBtn').click(function(){
    if(open == false){
        open = true;
    jQuery('<div>', {
        id: 'divElement',
    }).appendTo('#mySelector');
    $('#divElement').css('opacity', '0');
    $('#divElement').css('margin-top', '400px');
    $('#divElement').css('background-color', '#694207');
    $('#divElement').css('background','linear-gradient(180deg, #694207 30%, #d4a853 100%)')
    $('#divElement').css('z-index', '10');
    $('#divElement').css('transform', 'translate(-46.5%,-50%)')
    $('#divElement').css('width', '40%');
    $('#divElement').css('height', '30%');
    $('#divElement').css('border', 'solid 1px #000000');
    $('#divElement').animate({
        opacity:1,
    },500);
    jQuery('<div>', {
        class: 'row',
        id:'rowthing',
    }).appendTo('#divElement');
    jQuery('<div>', {
        class: 'col-2',
    }).appendTo('#rowthing');
    jQuery('<div>', {
        class: 'col-8',
    }).appendTo('#rowthing');
    jQuery('<div>', {
        class: 'col-2',
        id:'xclose',
    }).appendTo('#rowthing');
    jQuery('<div>', {
        id:'Close',
    }).appendTo('#xclose');
    $('#rowthing').css('height', "50px");
    $('#Close').css('width', '50px');
    $('#Close').css('height', '50px');
    $('#Close').css('background-color', 'red');
    $('#Close').css('position', "absolute");
    $('#Close').css('right', "0");
    $('#Close').css('border-radius', "5px");
    jQuery('<h2>', {
        id:'textX',
    }).appendTo('#Close');
    $('#textX').text('X');
    $('#textX').css('text-align','center');


    jQuery('<div>', {
        class: 'row',
        id:'rowthing2',
    }).appendTo('#divElement');


    
    jQuery('<a>', {
        class: 'col-12',
        id:'JoinDiscord',
    }).appendTo('#rowthing2');


    jQuery('<button>', {
        class:'btn btn-light',
        id:'DiscordButton',
    }).appendTo('#JoinDiscord');
    jQuery('<div>', {
        id:'space',
        class:'col-12',
    }).appendTo('#rowthing2');
    $('#space').css('height','10px')

    
    $('#hrrow').css('background-color','#694207')
    $('#rowthing2').css('margin-top','30px')
    $('#rowthing2').css('text-align','center')
    $('#DiscordButton').text('Discord');
    $('#DiscordButton').css('background-color','#7289da');
    $('#DiscordButton').css('width','120px');
    $('#DiscordButton').css('height','70px');
    $('#DiscordButton').css('background-color','#7289da');
    $('#DiscordButton').css('border','solid 1px #7289da');
    $('#DiscordButton').css('border-radius','5px');
    $('#DiscordButton').hover(
        function(){
            $( this ).css('cursor','pointer')
            $( this ).css('background-color','#5065af')
            $( this ).css('transition','0.3s')
            $( this ).css('transform','scale(1.1)')
        }, function() {
            $( this ).css('background-color','#7289da')
            $( this ).css('transform','scale(1)')
            $( this ).css('transition','0.3s')
        }
    )
    $('#DiscordButton').click(function(){
        window.location.replace('https://discord.gg/edkpnbazYP')
    });
    $('#PayBtn').hover(
        function(){
            $( this ).css('cursor','pointer')
            $( this ).css('background-color','#222427')
            $( this ).css('transition','0.3s')
            $( this ).css('transform','scale(1.1)')
        }, function() {
            $( this ).css('background-color','#424549')
            $( this ).css('transform','scale(1)')
            $( this ).css('transition','0.3s')
        }
    )

    $('#Close').hover(
        function(){
            $( this ).css('cursor','pointer')
            $( this ).css('background-color','rgb(150, 0, 0)')
            $( this ).css('transition','0.3s')
            $( this ).css('transform','scale(1.1)')
        }, function() {
            $( this ).css('background-color','red')
            $( this ).css('transform','scale(1)')
            $( this ).css('transition','0.3s')
        }
    )
    $('#Close').click(function(){
        $('#divElement').animate({
            opacity:0,
        },350, function(){
            $('#divElement').remove()
            open = false;
        });
    });
    }
    
});