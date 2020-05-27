$(function() {
	
	$({numberValue: 0}).animate({numberValue: 41}, {
	
		duration: 4000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".counter1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
		
	});
	$({numberValue: 0}).animate({numberValue: 37}, {
	
		duration: 4000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".counter2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
		
	});
	$({numberValue: 0}).animate({numberValue: 930}, {
	
		duration: 4000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".counter3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
		
	});
	$({numberValue: 0}).animate({numberValue: 9}, {
	
		duration: 3500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".counter4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
		
	});
});
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});

  AmCharts.makeChart("map",{
	"type": "map",
	"pathToImages": "http://www.amcharts.com/lib/3/images/",
	"addClassNames": true,
	"fontSize": 15,
	"color": "#7d8faf",
	"projection": "mercator",
	"backgroundAlpha": 1,
	"backgroundColor": "rgba(80,80,80,1)",
	"dataProvider": {
		"map": "belarusLow",
		"getAreasFromMap": true,
		"images": [
			{
				"top": 40,
				"left": 60,
				"width": 80,
				"height": 40,
				"pixelMapperLogo": true
			}
		]
	},
	"balloon": {
		"horizontalPadding": 15,
		"borderAlpha": 0,
		"borderThickness": 1,
		"verticalPadding": 15
	},
	"areasSettings": {
		"color": "rgba(129,129,129,1)",
		"outlineColor": "rgba(80,80,80,1)",
		"rollOverOutlineColor": "rgba(80,80,80,1)",
		"rollOverBrightness": 20,
		"selectedBrightness": 20,
		"selectable": true,
		"unlistedAreasAlpha": 0,
		"unlistedAreasOutlineAlpha": 0
	},
	"imagesSettings": {
		"alpha": 1,
		"color": "rgba(129,129,129,1)",
		"outlineAlpha": 0,
		"rollOverOutlineAlpha": 0,
		"outlineColor": "rgba(80,80,80,1)",
		"rollOverBrightness": 20,
		"selectedBrightness": 20,
		"selectable": true
	},
	"linesSettings": {
		"color": "rgba(129,129,129,1)",
		"selectable": true,
		"rollOverBrightness": 20,
		"selectedBrightness": 20
	},
	"zoomControl": {
		"zoomControlEnabled": true,
		"homeButtonEnabled": true,
		"panControlEnabled": false,
		"right": 38,
		"bottom": 30,
		"minZoomLevel": 0.25,
		"gridHeight": 100,
		"gridAlpha": 0.1,
		"gridBackgroundAlpha": 0,
		"gridColor": "#FFF",
		"draggerAlpha": 1,
		"buttonCornerRadius": 2
	}
});


// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});