
$(document).ready(function(){


/*####################
####### LAYOUT #######
######################*/

/*####################
######## HOME ########
######################*/

	var iframe = $('#vimeo_player')[0],
            player = $f(iframe),
            status = $('.status');
		console.log("hello 1")
            player.addEvent('ready', function() {
                player.api('setVolume', 0);
                	console.log("hello 2")
            });
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

