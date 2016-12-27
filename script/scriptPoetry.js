var categories = {
	"all": ["hrbit_sa_je_cool", "princezna_z_divnej_krajiny", "o_zatulanom_kacatku"],
	"lower6": ["o_zatulanom_kacatku"],
	"6to10": ["princezna_z_divnej_krajiny", "o_zatulanom_kacatku"],
	"higher10": ["hrbit_sa_je_cool"]
};

var poetryList = $(".list-item");


$("#all").click(function() {
	$("#poetry-list").css("display", "block");
	$(".list-item").css("display", "block");
	$(".poetry").css("display", "block");
});



$(".filter").click(function() {
	var key = $(this).attr("id");
	for(i=0; i<poetryList.length; i++) {
		var poetryID = poetryList[i].id;
		if(categories[key].indexOf(poetryID)===-1) {
			$("#" + poetryID).css("display", "none");
			$("#" + poetryID + "_article").css("display", "none");
		} else {
			$("#" + poetryID).css("display", "block");
			$("#" + poetryID + "_article").css("display", "block");
		}
	}
	$("#poetry-list").css("display", "block");
});


$("#hide-list").click(function() {
	$("#poetry-list").css("display", "none");
});

$(window).scroll(function() {
	if($(window).scrollTop() > 245) {
		$(".topbottom").css("display", "block");

	} else {
		$(".topbottom").css("display", "none");
	}
});

$("#top").click(function() {
	$(window).scrollTop(0);
});

var pageHeight = $(document).height();

$("#bottom").click(function() {
	$(window).scrollTop(pageHeight);
});

$(".list-item").click(function() {
	var itemID = $(this).attr("id");		
	$("body").animate({
		scrollTop: $("#" + itemID + "_article").offset().top
	});
});






