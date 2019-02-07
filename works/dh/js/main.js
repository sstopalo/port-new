$(document).ready(function(){
  $(".input_1").click(function(){ 			//клик по .input_1
    $(".btn_2").toggleClass("btn_3");	//добавление свойств css btn_3 к 
  });
});

$('.input_1').click(function(){			//клик по .input_1
$('.input_1').val('Vasya Pupkin');		//запись значения 'Vasya Pupkin' в .input_1
});

$('.input_1').click(function(){
$('.input_2').val('12.12.1989');
});

$('.input_1').click(function(){
$('.input_3').val('8-999-666-66-66');
});

$('.input_1').click(function(){
$('.input_4').val('Vasyaboss@mail.com');
});

$('.input_1').click(function(){
$('.input_5').val('MSU (programmer)');
});

$('.input_1').click(function(){
$('.input_6').val('3 years of carwashing\n1 years souteneur\n2 years minister of Alabama state');
});

$('.input_1').click(function(){
$('.input_7').val('Perfect noise maker\nCant turn on laptop without help\nI am blid\nSmokin weed everyday');
});

$('.input_1').click(function(){
$('.input_8').val('Love cookies');
});


$('.btn_2').click(function(){ 			//клик по .btn_2
  $('.img_bg_click').fadeToggle(400); 	//появление .img_bg_click
    $('.click').fadeToggle(800);  		//появление .click
 });

document.querySelector('.input_1').addEventListener('click', e => document.querySelector('.btn_2').disabled  = false); 
//по клику на .input_1 кнопка .btn_2 становиться активна


  $(".click").click(function(){			//клик по .click
  	$(".click").fadeOut(400);			//исчезновение .click
  	$(".img_bg_click").fadeOut(400);	//исчезновение .img_bg_click
  });