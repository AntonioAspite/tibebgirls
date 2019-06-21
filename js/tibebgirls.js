jQuery(document).ready(function() {
	$("#carousel-example").on("slide.bs.carousel", function(e) {
	  var $e = $(e.relatedTarget);
	  var idx = $e.index();
	  console.log('idx' + idx)
	  var itemsPerSlide = 5;
	  var totalItems = $(".carousel-item").length;
	  console.log('totalitems' + totalItems)
  
	  console.log('sdfsfsdf');
  
	  if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
		  // append slides to end
		  if (e.direction == "left") {
			$(".carousel-item")
			  .eq(i)
			  .appendTo(".carousel-inner");
		  } else {
			$(".carousel-item")
			  .eq(0)
			  .appendTo(".carousel-inner");
		  }
		}
	  }
	});
  });
