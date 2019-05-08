	//Preloader -----------------------------------------------
	var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){
	el.style.opacity = 1;
	
	var interhellopreloader = setInterval(function()
	{
		el.style.opacity = el.style.opacity - 0.05;
		if (el.style.opacity <=0.05)
		{ 	
			clearInterval(interhellopreloader);
			hellopreloader.style.display = "none";
		}
	},16);
}
window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},600);};



//анимация лого-----------------------------------------------
var pathObj = {
    "Logo1": {
        "strokepath": [
            {
                "path": "M183 35c0,7 1,42 1,52l4 -3c0,0 0,0 0,0 0,-1 0,-2 0,-3l1 -40c2,0 6,1 9,2 1,0 2,0 2,1 3,1 5,3 5,5 -1,6 -7,14 -10,20 -2,3 -5,8 -6,11 -1,2 -2,4 -1,4 0,1 0,0 1,0 0,0 19,-22 21,-37 1,-3 -2,-6 -3,-7 -7,-6 -18,-2 -19,-8 0,-5 0,-9 0,-13 0,-3 5,-3 11,5 6,8 5,-2 -3,-8 -3,-2 -9,-4 -13,-4l0 23z",
                "duration": 1000
            },
            {
                "path": "M183 35c0,7 1,42 1,52l4 -3c0,0 0,0 0,0 0,-1 0,-2 0,-3l1 -40c2,0 6,1 9,2 1,0 2,0 2,1 3,1 5,3 5,5 -1,6 -7,14 -10,20 -2,3 -5,8 -6,11 -1,2 -2,4 -1,4 0,1 0,0 1,0 0,0 19,-22 21,-37 1,-3 -2,-6 -3,-7 -7,-6 -18,-2 -19,-8 0,-5 0,-9 0,-13 0,-3 5,-3 11,5 6,8 5,-2 -3,-8 -3,-2 -9,-4 -13,-4l0 23z",
                "duration": 1800
            },
            {
                "path": "M156 36c2,-7 7,-18 17,-18l-1 18 -16 0zm11 -23c-10,3 -19,20 -19,38 1,14 9,25 17,30l2 -4c-2,-4 -7,-6 -10,-13 -4,-7 -4,-14 -3,-22l19 -1 -1 35c0,7 0,10 5,10 0,-1 0,-4 0,-5 1,-21 0,-47 0,-68 -4,0 -6,0 -10,0z",
                "duration": 1800
            },
            {
                "path": "M156 36c2,-7 7,-18 17,-18l-1 18 -16 0zm11 -23c-10,3 -19,20 -19,38 1,14 9,25 17,30l2 -4c-2,-4 -7,-6 -10,-13 -4,-7 -4,-14 -3,-22l19 -1 -1 35c0,7 0,10 5,10 0,-1 0,-4 0,-5 1,-21 0,-47 0,-68 -4,0 -6,0 -10,0z",
                "duration": 2000
            },
            {
                "path": "M126 92c4,-1 7,-3 9,-7 1,-1 1,-4 2,-5 6,2 14,7 16,13l-28 0 1 -1zm108 0c-3,-1 -6,-3 -8,-7 -1,-1 -1,-4 -2,-5 -6,2 -14,7 -16,13l28 0 -2 -1zm12 -12c1,2 5,4 5,7 1,4 -3,5 -6,6 3,0 29,0 32,0 14,0 27,0 41,0 2,0 6,0 10,-1 11,-3 22,-9 32,-12 -1,3 -12,8 -21,11 -4,1 -11,3 -16,4 -5,1 -11,0 -14,1l-70 0c-6,0 -12,-1 -17,0 -3,0 -6,0 -9,0 -3,0 -9,0 -7,-4 0,-2 5,-7 7,-8 2,-2 8,-5 11,-6 -1,-6 -2,-7 -2,-9 -8,16 -24,26 -42,26 -18,0 -33,-10 -41,-25 -1,2 -1,3 -2,8 3,1 9,4 11,6 2,1 7,6 7,8 2,4 -4,4 -7,4 -3,0 -6,0 -9,0 -5,-1 -11,0 -17,0l-70 0c-3,-1 -9,0 -14,-1 -5,-1 -13,-3 -16,-4 -9,-3 -20,-8 -22,-11 11,3 21,9 33,12 4,1 8,1 10,1 14,0 26,0 41,0 3,0 29,0 32,0 -3,-1 -7,-2 -6,-6 0,-3 3,-5 5,-7 0,0 -6,3 -12,6 -6,2 -12,4 -13,4 -4,1 -12,1 -16,1 -4,1 -8,1 -11,1 -4,0 -7,0 -7,-5 0,-4 6,-3 6,-6 -3,-4 -7,7 -12,9 -5,3 -17,1 -17,-4 1,-1 1,-1 2,0 3,2 6,3 10,3 5,0 7,-4 9,-7 2,-3 7,-7 10,-3 2,1 1,4 0,5 -2,2 -5,1 -5,4 0,3 16,2 19,1l-1 -1c-3,0 -6,0 -9,-2 -2,-1 -2,-3 0,-6 1,-2 4,-4 1,-6 -2,-1 -5,-2 -8,-2 -7,2 -6,18 -20,11 -2,-1 -2,-1 -1,-3 3,-1 6,5 11,-1 2,-3 4,-7 7,-9 6,-2 17,2 14,9 -1,2 -3,2 -3,5 2,1 4,1 7,1l42 -12c4,-3 7,-6 11,-10 4,-5 5,-8 5,-14 0,-26 20,-47 46,-47 26,0 47,21 47,47 0,5 2,10 5,14 3,4 7,7 11,10l42 12c3,0 5,0 7,-1 0,-3 -2,-3 -3,-5 -4,-7 8,-11 14,-9 3,2 5,6 7,9 5,6 8,0 11,1 1,2 1,2 -1,3 -14,7 -13,-9 -20,-11 -3,0 -6,1 -8,2 -3,2 0,4 1,6 2,3 2,5 0,6 -3,2 -6,2 -9,2l-1 1c2,1 19,2 19,-1 0,-3 -3,-2 -5,-4 -1,-1 -2,-4 0,-5 3,-4 8,0 10,3 2,3 4,7 9,7 4,0 7,-1 10,-3 1,-1 1,-1 2,0 0,5 -12,7 -17,4 -5,-2 -9,-13 -12,-9 0,3 6,2 6,6 0,5 -3,5 -7,5 -3,0 -7,0 -11,-1 -4,0 -12,0 -16,-1 -1,0 -8,-2 -13,-4 -7,-3 -12,-6 -12,-6zm-23 -12c0,-1 0,-1 1,-2 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,1 -1,2 -1,4zm1 -4c1,6 3,11 4,17 1,3 8,9 15,9 1,0 5,0 5,-2 0,-3 -6,-8 -10,-9 -4,-1 -10,0 -10,0 -1,-1 -2,-2 1,-2 5,-1 13,-2 13,-1 -1,-1 -4,-4 -6,-5 -3,-2 -9,-8 -10,-12 -1,2 -1,3 -2,5zm50 23c-1,-2 -6,-4 -12,-6 -6,-2 -11,-4 -11,-3 0,5 24,11 23,9zm-137 -22c-1,-2 -2,-3 -2,-5 -1,1 -2,2 -2,3 -2,2 -6,6 -8,8 -2,1 -5,4 -6,5 0,-1 8,0 13,1 2,0 2,1 1,2 0,0 -6,-1 -10,0 -5,1 -11,6 -10,9 0,2 3,2 5,2 7,0 14,-6 15,-9 1,-5 2,-10 4,-16zm43 -59c23,0 43,20 43,43 0,23 -20,42 -43,42 -23,0 -43,-19 -43,-42 0,-23 20,-43 43,-43zm-93 81c1,-2 6,-4 12,-6 6,-2 11,-4 11,-3 0,5 -24,11 -23,9z",
                "duration": 1800
            }
        ],
        "dimensions": {
            "width": 360,
            "height": 97
        }
    }
}; 
 
var pathObj2 = {
    "Logo2": {
       "strokepath": [
            {
                "path": "M103 13c-3,-1 -5,-1 -6,-3 3,-2 13,-3 15,-3 -1,1 -4,1 -6,4 -2,2 0,4 2,6 1,1 4,3 2,6 -1,1 -4,2 -7,2 -9,0 -10,-11 -18,-10 -2,0 -10,3 -7,5 2,2 5,-4 10,-2 2,1 3,3 5,5 9,10 25,3 20,-5 -3,-4 -8,-5 -1,-7 9,-4 20,-6 30,-7 2,0 8,0 10,0 4,-1 28,-1 31,-1 14,1 29,0 42,1 6,0 12,1 18,2 3,1 6,2 9,3 11,4 5,3 2,8 -4,7 5,12 14,9 4,-1 5,-4 7,-5 1,-1 2,-2 2,-3 7,-5 9,4 12,1 1,-1 0,-2 -1,-3 -8,-5 -12,-1 -17,5 -1,1 -3,3 -6,3 -4,1 -14,-2 -5,-8 2,-2 2,-5 0,-7 -2,-2 -5,-2 -7,-3 4,0 15,1 17,3 -2,2 -5,2 -7,4 -5,3 4,12 14,1 3,-3 5,-6 13,-6 3,0 5,0 8,1 4,1 6,3 7,1 1,-3 -8,-4 -9,-5 -11,-1 -16,1 -22,7 -1,1 -6,6 -9,3 1,-1 10,-2 7,-7 0,-1 -2,-2 -4,-3 -2,0 -6,-1 -7,-1 37,1 84,-1 107,6 3,-6 -40,-9 -44,-9 -8,0 -17,0 -26,0l-213 0c-10,0 -45,-1 -53,0 -2,0 -26,4 -27,6 -1,3 3,1 4,1 7,-3 40,-5 48,-5 6,0 50,0 53,1 -2,1 -11,1 -15,4 -2,2 -1,4 1,5 2,1 5,2 6,3 -1,1 -2,1 -3,1 -1,0 -2,-1 -3,-1 -5,-3 -6,-9 -15,-10 -9,-1 -23,3 -19,6 2,1 12,-6 21,-2 2,0 2,0 3,1l5 4c10,11 19,1 12,-2z",
                "duration": 8500
            }
        ],
        "dimensions": {
            "width": 370,
            "height": 30
        }
    }
}; 
 
  
 $(document).ready(function(){ 
	//анимация лого-----------------------------------------------
	 $('#Logo1').lazylinepainter({
		"svgData": pathObj,
		"strokeWidth": 2,
		"strokeColor": "#993333"
	}).lazylinepainter('paint'); 

	$('#Logo2').lazylinepainter({
		"svgData": pathObj2,
		"strokeWidth": 2,
		"strokeColor": "#993333"
	}).lazylinepainter('paint'); 
		
	// переход по якорям----------------------------------------	
	
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	//кнопка вверх--------------------------------------------------
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();} 
		else {$('.scrollup').fadeOut();
			}
	});
 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1500);
		return false;
	});
});

 

 //-------анимация иконок при скролле--------------------
 
 function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
}

var $photoicon1 = $("path#photoicon1");

var $monitor1 = $("path#monitor1");
var $monitor2 = $("path#monitor2");

var $worker1 = $("path#worker1");

var $phone1 = $("path#phone1");

var $medicine1 = $("path#medicine1");
var $medicine2 = $("path#medicine2");

var $people1 = $("path#people1");

// подготовка SVG
pathPrepare($photoicon1);

pathPrepare($monitor1);
pathPrepare($monitor2);

pathPrepare($worker1);

pathPrepare($phone1);

pathPrepare($medicine1);
pathPrepare($medicine2);

pathPrepare($people1);

// инициализация контроллера
var controller = new ScrollMagic.Controller();


// tween "Photoicon"
var tween = new TimelineMax()
	.add(TweenMax.to($photoicon1, 3, {strokeDashoffset: 0, ease:Linear.easeNone})) 

// tween "Monitor"
var tween2 = new TimelineMax()
	.add(TweenMax.to($monitor1, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) 
	.add(TweenMax.to($monitor2, 1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	
// tween "Worker"
var tween3 = new TimelineMax()
	.add(TweenMax.to($worker1, 7, {strokeDashoffset: 0, ease:Linear.easeNone}));
	
// tween "Phone"
var tween4 = new TimelineMax()
	.add(TweenMax.to($phone1, 2, {strokeDashoffset: 0, ease:Linear.easeNone})); 
		
// tween "Medicine"
var tween5 = new TimelineMax()
	.add(TweenMax.to($medicine1, 2, {strokeDashoffset: 0, ease:Linear.easeNone}))
	.add(TweenMax.to($medicine2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}));
	
// tween "People"
var tween6 = new TimelineMax()
	.add(TweenMax.to($people1, 7, {strokeDashoffset: 0, ease:Linear.easeNone}));	
		
		
// scene "Photoicon"
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250, tweenChanges: true})
				.setTween(tween)
				.addTo(controller);

// scene "Monitor"

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 100, tweenChanges: true})
				.setTween(tween2)
				.addTo(controller);
				
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 750, tweenChanges: true})
				.setTween(tween3)
				.addTo(controller);
//scene Phone				
var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250, tweenChanges: true})
				.setTween(tween4)
				.addTo(controller);
				
//scene Medicine				
var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 50, tweenChanges: true})
				.setTween(tween5)
				.addTo(controller);
				
//scene Medicine				
var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 700, tweenChanges: true})
				.setTween(tween6)
				.addTo(controller);				
				
//-------анимация иконок при скролле------------


		