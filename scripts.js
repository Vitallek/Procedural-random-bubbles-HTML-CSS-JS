$(function(){
    $('.start_party').click(function(){
        $('body').append('<div class="watermark">Vitallek 2021</div>');

        $('.wrapper').hide();
        $('.group1').hide();
        $('.group2').hide();
        $('.group3').hide();
        $('.group4').hide();
        
        $(group1start);
        $(setTimeout(function(){ 
            $(group2start);
        },party_anim_time*0.75));
        $(setTimeout(function(){ 
            $(group3start);
        },party_anim_time*0.5));
        $(setTimeout(function(){ 
            $(group4start);
        },party_anim_time*0.25));
    });
});

var viewportH1 = 1.2*window.innerHeight; //get viewport min
var viewportH2 = 2*window.innerHeight; //get viewport max
var viewportW1 = 0; //get viewport width min
var viewportW2 = window.innerWidth; //get viewport width max

$(window).resize(function() {
    viewportH1 = 1.2*window.innerHeight; //get viewport min
    viewportH2 = 2*window.innerHeight; //get viewport max
    viewportW1 = 0; //get viewport width min
    viewportW2 = window.innerWidth; //get viewport width max
  });

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var party_anim_time = window.innerHeight*5; //anim time based on screen height
var small_delay = 100;

var group1coordY1;
var group1coordX1;
var group1coordY2;
var group1coordX2;
var group1coordY3;
var group1coordX3;
var group1coordY4;
var group1coordX4;
var group1coordY5;
var group1coordX5;

var group2coordY1;
var group2coordX1;
var group2coordY2;
var group2coordX2;
var group2coordY3;
var group2coordX3;
var group2coordY4;
var group2coordX4;
var group2coordY5;
var group2coordX5;

var group3coordY1;
var group3coordX1;
var group3coordY2;
var group3coordX2;
var group3coordY3;
var group3coordX3;
var group3coordY4;
var group3coordX4;
var group3coordY5;
var group3coordX5;

var group4coordY1;
var group4coordX1;
var group4coordY2;
var group4coordX2;
var group4coordY3;
var group4coordX3;
var group4coordY4;
var group4coordX4;
var group4coordY5;
var group4coordX5;

function animate_G1(){
    $('.group1').fadeIn();
    $('.group1').css('transition-duration',''+party_anim_time/1000+'s');
    $('.group1').eq(0).css('transform','translate('+group1coordX1+'px,'+(-0.5*group1coordY1)+'px)');
    $('.group1').eq(1).css('transform','translate('+group1coordX2+'px,'+(-0.5*group1coordY2)+'px)');
    $('.group1').eq(2).css('transform','translate('+group1coordX3+'px,'+(-0.5*group1coordY3)+'px)');
    $('.group1').eq(3).css('transform','translate('+group1coordX4+'px,'+(-0.5*group1coordY4)+'px)');
    $('.group1').eq(4).css('transform','translate('+group1coordX5+'px,'+(-0.5*group1coordY5)+'px)');
};
function set_default_G1(){
    $('.group1').show();
    group1coordY1 = randomIntFromInterval(viewportH1, viewportH2);
    group1coordX1 = randomIntFromInterval(viewportW1, viewportW2);

    group1coordY2 = randomIntFromInterval(viewportH1, viewportH2);
    group1coordX2 = randomIntFromInterval(viewportW1, viewportW2);

    group1coordY3 = randomIntFromInterval(viewportH1, viewportH2);
    group1coordX3 = randomIntFromInterval(viewportW1, viewportW2);

    group1coordY4 = randomIntFromInterval(viewportH1, viewportH2);
    group1coordX4 = randomIntFromInterval(viewportW1, viewportW2);

    group1coordY5 = randomIntFromInterval(viewportH1, viewportH2);
    group1coordX5 = randomIntFromInterval(viewportW1, viewportW2);

    $('.group1').fadeOut();
    $('.group1').css('transition-duration','0s');
    $('.group1').eq(0).css('transform','translate('+group1coordX1+'px,'+group1coordY1+'px)');
    $('.group1').eq(1).css('transform','translate('+group1coordX2+'px,'+group1coordY2+'px)');
    $('.group1').eq(2).css('transform','translate('+group1coordX3+'px,'+group1coordY3+'px)');
    $('.group1').eq(3).css('transform','translate('+group1coordX4+'px,'+group1coordY4+'px)');
    $('.group1').eq(4).css('transform','translate('+group1coordX5+'px,'+group1coordY5+'px)');

    setTimeout(animate_G1,small_delay);
};
function group1start(){ 
    setInterval(set_default_G1,party_anim_time+small_delay);
};

function animate_G2(){
    $('.group2').fadeIn();
    $('.group2').css('transition-duration',''+party_anim_time/1000+'s');
    $('.group2').eq(0).css('transform','translate('+group2coordX1+'px,'+(-0.5*group2coordY1)+'px)');
    $('.group2').eq(1).css('transform','translate('+group2coordX2+'px,'+(-0.5*group2coordY2)+'px)');
    $('.group2').eq(2).css('transform','translate('+group2coordX3+'px,'+(-0.5*group2coordY3)+'px)');
    $('.group2').eq(3).css('transform','translate('+group2coordX4+'px,'+(-0.5*group2coordY4)+'px)');
    $('.group2').eq(4).css('transform','translate('+group2coordX5+'px,'+(-0.5*group2coordY5)+'px)');
};
function set_default_G2(){
    $('.group2').show();
    group2coordY1 = randomIntFromInterval(viewportH1, viewportH2);
    group2coordX1 = randomIntFromInterval(viewportW1, viewportW2);

    group2coordY2 = randomIntFromInterval(viewportH1, viewportH2);
    group2coordX2 = randomIntFromInterval(viewportW1, viewportW2);

    group2coordY3 = randomIntFromInterval(viewportH1, viewportH2);
    group2coordX3 = randomIntFromInterval(viewportW1, viewportW2);

    group2coordY4 = randomIntFromInterval(viewportH1, viewportH2);
    group2coordX4 = randomIntFromInterval(viewportW1, viewportW2);

    group2coordY5 = randomIntFromInterval(viewportH1, viewportH2);
    group2coordX5 = randomIntFromInterval(viewportW1, viewportW2);

    $('.group2').fadeOut();
    $('.group2').css('transition-duration','0s');
    $('.group2').eq(0).css('transform','translate('+group2coordX1+'px,'+group2coordY1+'px)');
    $('.group2').eq(1).css('transform','translate('+group2coordX2+'px,'+group2coordY2+'px)');
    $('.group2').eq(2).css('transform','translate('+group2coordX3+'px,'+group2coordY3+'px)');
    $('.group2').eq(3).css('transform','translate('+group2coordX4+'px,'+group2coordY4+'px)');
    $('.group2').eq(4).css('transform','translate('+group2coordX5+'px,'+group2coordY5+'px)');

    setTimeout(animate_G2,small_delay);
};
function group2start(){ 
    setInterval(set_default_G2,party_anim_time+small_delay);
};

function animate_G3(){
    $('.group3').fadeIn();
    $('.group3').css('transition-duration',''+party_anim_time/1000+'s');
    $('.group3').eq(0).css('transform','translate('+group3coordX1+'px,'+(-0.5*group3coordY1)+'px)');
    $('.group3').eq(1).css('transform','translate('+group3coordX2+'px,'+(-0.5*group3coordY2)+'px)');
    $('.group3').eq(2).css('transform','translate('+group3coordX3+'px,'+(-0.5*group3coordY3)+'px)');
    $('.group3').eq(3).css('transform','translate('+group3coordX4+'px,'+(-0.5*group3coordY4)+'px)');
    $('.group3').eq(4).css('transform','translate('+group3coordX5+'px,'+(-0.5*group3coordY5)+'px)');
};
function set_default_G3(){
    $('.group3').show();
    group3coordY1 = randomIntFromInterval(viewportH1, viewportH2);
    group3coordX1 = randomIntFromInterval(viewportW1, viewportW2);

    group3coordY2 = randomIntFromInterval(viewportH1, viewportH2);
    group3coordX2 = randomIntFromInterval(viewportW1, viewportW2);

    group3coordY3 = randomIntFromInterval(viewportH1, viewportH2);
    group3coordX3 = randomIntFromInterval(viewportW1, viewportW2);

    group3coordY4 = randomIntFromInterval(viewportH1, viewportH2);
    group3coordX4 = randomIntFromInterval(viewportW1, viewportW2);

    group3coordY5 = randomIntFromInterval(viewportH1, viewportH2);
    group3coordX5 = randomIntFromInterval(viewportW1, viewportW2);

    $('.group3').fadeOut();
    $('.group3').css('transition-duration','0s');
    $('.group3').eq(0).css('transform','translate('+group3coordX1+'px,'+group3coordY1+'px)');
    $('.group3').eq(1).css('transform','translate('+group3coordX2+'px,'+group3coordY2+'px)');
    $('.group3').eq(2).css('transform','translate('+group3coordX3+'px,'+group3coordY3+'px)');
    $('.group3').eq(3).css('transform','translate('+group3coordX4+'px,'+group3coordY4+'px)');
    $('.group3').eq(4).css('transform','translate('+group3coordX5+'px,'+group3coordY5+'px)');

    setTimeout(animate_G3,small_delay);
};
function group3start(){ 
    setInterval(set_default_G3,party_anim_time+small_delay);
};

function animate_G4(){
    $('.group4').fadeIn();
    $('.group4').css('transition-duration',''+party_anim_time/1000+'s');
    $('.group4').eq(0).css('transform','translate('+group4coordX1+'px,'+(-0.5*group4coordY1)+'px)');
    $('.group4').eq(1).css('transform','translate('+group4coordX2+'px,'+(-0.5*group4coordY2)+'px)');
    $('.group4').eq(2).css('transform','translate('+group4coordX3+'px,'+(-0.5*group4coordY3)+'px)');
    $('.group4').eq(3).css('transform','translate('+group4coordX4+'px,'+(-0.5*group4coordY4)+'px)');
    $('.group4').eq(4).css('transform','translate('+group4coordX5+'px,'+(-0.5*group4coordY5)+'px)');
};
function set_default_G4(){
    $('.group4').show();
    group4coordY1 = randomIntFromInterval(viewportH1, viewportH2);
    group4coordX1 = randomIntFromInterval(viewportW1, viewportW2);

    group4coordY2 = randomIntFromInterval(viewportH1, viewportH2);
    group4coordX2 = randomIntFromInterval(viewportW1, viewportW2);

    group4coordY3 = randomIntFromInterval(viewportH1, viewportH2);
    group4coordX3 = randomIntFromInterval(viewportW1, viewportW2);

    group4coordY4 = randomIntFromInterval(viewportH1, viewportH2);
    group4coordX4 = randomIntFromInterval(viewportW1, viewportW2);

    group4coordY5 = randomIntFromInterval(viewportH1, viewportH2);
    group4coordX5 = randomIntFromInterval(viewportW1, viewportW2);

    $('.group4').fadeOut();
    $('.group4').css('transition-duration','0s');
    $('.group4').eq(0).css('transform','translate('+group4coordX1+'px,'+group4coordY1+'px)');
    $('.group4').eq(1).css('transform','translate('+group4coordX2+'px,'+group4coordY2+'px)');
    $('.group4').eq(2).css('transform','translate('+group4coordX3+'px,'+group4coordY3+'px)');
    $('.group4').eq(3).css('transform','translate('+group4coordX4+'px,'+group4coordY4+'px)');
    $('.group4').eq(4).css('transform','translate('+group4coordX5+'px,'+group4coordY5+'px)');

    setTimeout(animate_G4,small_delay);
};
function group4start(){ 
    setInterval(set_default_G4,party_anim_time+small_delay);
};