jQuery(document).ready(function(){

	if ((month == 11) && (date < 26)){
		checkCookieAvt();
	}
});


var day = new Date().getDay();
var date = new Date().getDate();
var month = new Date().getMonth();

var exp = new Date();
exp.setHours(23);
exp.setMinutes(59);
exp.setSeconds(59);
exp = exp.toUTCString();


// COOKIE - ouverture unique

function setCookie(cName, cValue){
	document.cookie = cName+"="+cValue+";expires="+exp;
}

function getCookie(cName){
	var name = cName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookieAvt() {
    var cVal=getCookie("ouverture_unique");
    if (cVal == "") {
    	popup();
    	cVal = date;
    	if (cVal != "" && cVal != null) {
        	setCookie("ouverture_unique", cVal);
       }
    }
}


// POPUP

$avt = jQuery('#popup-avent');
$avt_block = jQuery('#popup-avent-block');
$close = jQuery('#popup-close');
$kdoclose = jQuery('#kdoclose');
$kdoopen = jQuery('#kdoopen');
$txtavt = jQuery('#txtavt');

function fadeOutKdo(){
    $kdoopen.css('transition','width 1s, left 1s');
    $kdoopen.css('width','100%');
    $kdoopen.css('left','-6%');
    setTimeout($kdoopen.fadeOut(600),400);
    setTimeout($txtavt.fadeIn(600),400);
    setTimeout(jQuery('#fond').fadeIn(500),400);
    jQuery('#fond').css('display','block');
}

function popup(){
	$avt.css('display','flex');
    var days2go = (25 - date);
    jQuery("#days2go").append(' '+days2go+' ');

    $avt.click(function(){
        $avt.fadeOut();
    });

    $avt_block.click(function(event){
        event.stopPropagation();
    });

    $close.click(function(){
        $avt.fadeOut();
    });

    $kdoclose.click(function(){
        $kdoclose.fadeOut();
        $kdoopen.fadeIn();
        setTimeout(fadeOutKdo, 200);
    });

}






