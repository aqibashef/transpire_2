jQuery(document).ready(function($){

	function getRelativeDate(days, hours, minutes){
	    var date = new Date(Date.now() + 60000 /* milisec */ * 60 /* minutes */ * 24 /* hours */ * days /* days */);
	    date.setHours(hours || 0);
	    date.setMinutes(minutes || 0);
	    date.setSeconds(0);
	    return date;
	}


	date = getRelativeDate(7, 9);

	$('#countdown').timeTo({
		timeTo: date,
	    theme: "black",
	    displayCaptions: true,
	    fontSize: 36,
	    captionSize: 14
	});
});