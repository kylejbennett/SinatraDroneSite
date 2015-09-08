	console.log("hello 1")
$(document).ready(function(){
	console.log("hello 2")

/*####################
####### LAYOUT #######
######################*/

/*####################
######## HOME ########
######################*/

/*####################
######## ABOUT #######
######################*/

/*####################
###### SERVICES ######
######################*/

	$(".lightbox").click(function(e){
		var image = $(e.currentTarget).data("img");
		$("body").append("<div class='outerlight'><div class='innerlight'><img class='lightimg' src='"+image+"'></div></div>")
			var page_height = $(window).height();
			var image_height = $('.lightimg').height();
			var image_offset = (page_height - image_height)/2;
			$('img.lightimg').parent().css('margin-top', image_offset);
		$("div.outerlight, div.innerlight, .lightimg").click(function(){
			$(".outerlight").remove()
		});
	});

/*####################
####### CONTACT ######
######################*/

/*-----------FORM-------------*/

});

