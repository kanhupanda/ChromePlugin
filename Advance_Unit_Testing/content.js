var selection1 = false;
var selection2 = false;
var ele1 = null;
var ele2 = null;
var result = null;
var dataEnclosure = $('<div></div>');
var struct = null;
var tableData = headerData = null;
var counter = 1;
var clickcounter = 1;
var click_redlin = 0;

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {




    switch (message.type) {
        case "distance":
  if($(".utmissing").length<1){jQuery("body").prepend(" <div class='utmissing'><div class='custplusminus'><span class='custplus custhide'>+</span><span class='custminus'>-</span></div><label class='tooltitle'>Unit Testing Tool</label><div class='row1'><label class='tooltitle rowitem'>Version 1.0</label><input id='boxredlines' type='button' value='Show Redlines onhover'/><input id='showmeta' type='button' value='Show Meta'/><input id='custalt' type='button' value='Image Alttext'/><input id='custarialabel' type='button' value='Aria-Label'/><input id='imagedim' type='button' value='Image Dimensions'/><input id='custvideoplayer' type='button' value='Video Content'/><input id='custcontentcheck' type='button' value='Char Counter'/><input id='custlinkcheck' type='button' value='Link Checker'/><input id='custh1tagcheck' type='button' value='H1 Tagchecker'/></div><div class='row2'><label class='tooltitle rowitem'>Version 2.0</label><input id='skiptomain' type='button' value='Skip To main'/><input id='idval' type='button' value='Duplicate ID'/><input id='imgsrcviewportCheck' type='button' value='ImgsrcviewportCheck'/><input id='colorcontrast' type='button' value='Color Contrast'/><input id='custiframe' type='button' value='Iframe Title checking'/><input id='btn_mwf' type='button' value='MWF Grid'/><input id='socialtitle' type='button' value='Social Title'/><input id='rolecheck' type='button' value='*role Validation'/><input id='ariacheck' type='button' value='*Aria Validation'/><input id='togglehc' type='button' value='High Contrast Check'/><input id='custdatavg' type='button' value='Data-vg'/><input id='custdatamoduleid' type='button' value='Data-moduleId'/><input id='custmhero' type='button' value='mhero-Access-Check'/><input id='custmultifeature' type='button' value='mulifeature-Access-Check'/><input id='custcombo' type='button' value='Combobox-Access-Check'/><input id='custcheckbox' type='button' value='Checkbox-Access-Check'/><input id='custclear' type='button' value='Clear'/></div></div>");
 }
$.fn.getStyleObject = function () {
    var dom = this.get(0);
    var style;
    var returns = {};
    if (window.getComputedStyle) {
        var camelize = function (a, b) {
            return b.toUpperCase();
        }
        style = window.getComputedStyle(dom, null);
        for (var i = 0, l = style.length; i < l; i++) {
            var prop = style[i];
            var camel = prop.replace(/\-([a-z])/, camelize);
            var val = style.getPropertyValue(prop);
            returns[camel] = val;
        }
        return returns;
    }
    if (dom.currentStyle) {
        style = dom.currentStyle;
        for (var prop in style) {
            returns[prop] = style[prop];
        }
        return returns;
    }
    if (style = dom.style) {
        for (var prop in style) {
            if (typeof style[prop] != 'function') {
                returns[prop] = style[prop];
            }
        }
        return returns;
    }
    return returns;
};

if($("[data-vg]").length<1){
	 
	 $("#custdatavg").attr("disabled","disabled");
 }
 $(".custplusminus span.custplus").on("click",function(e){
	 e.preventDefault();
	  $(".utmissing").removeClass("custaccordian");
	 $(this).addClass("custhide");
	  $(this).siblings(".custminus").removeClass("custhide");
 })
 $(".custplusminus span.custminus").on("click",function(e){
	  e.preventDefault();
	  $(".utmissing").addClass("custaccordian");
	 $(this).addClass("custhide");
	  $(this).siblings(".custplus").removeClass("custhide");
 })
 if($(".m-hero").length<1){
	 
	 $("#custmhero").attr("disabled","disabled");
 }
 if($(".m-multi-feature").length<1){
	 
	 $("#custmultifeature").attr("disabled","disabled");
 }
 if($("[data-module-id]").length<1){
	 
	 $("#custdatamoduleid").attr("disabled","disabled");
 }
 if($("#custcombo").length<1){
	 
	 $("#custcombo").attr("disabled","disabled");
 }
 if($("#custcheckbox").length<1){
	 
	 $("#custcheckbox").attr("disabled","disabled");
 }
 
/* Converting RGB to Hexa value of a Color */

function ConverRGB2Hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" +
     ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
}
/* Meta Logic*/
 var showMeta = function() {
                                var allMetaData = "";
                                var metaTitle = '<tr><td><span style="color: blue">Title</span></td><td>' + jQuery("meta[name=Title], meta[name=title]").attr("content") + '</td></tr>';
                                var metaDescription = '<tr><td><span style="color: blue">Description</span></td><td>' + jQuery("meta[name=Description], meta[name=description]").attr("content") + '</td></tr>';
                                var metaKeywords = '<tr><td><span style="color: blue">Keywords</span></td><td>' + jQuery("meta[name=keywords], meta[name=Keywords]").attr("content") + '</td></tr>';
                                var metaOGDescription = '<tr><td><span style="color: blue">og:description</span></td><td>' + jQuery("meta[name='og:description'], meta[property='og:description']").attr("content") + '</td></tr>';
                                var metaOGTitle = '<tr><td><span style="color: blue">og:title</span></td><td>' + jQuery("meta[name='og:title'], meta[property='og:title']").attr("content") + '</td></tr>';
                                var metaOGImage = '<tr><td><span style="color: blue">og:image</span></td><td>' + 'GET RT IMAGE PUBLIC URL' + '</td></tr>';
                                var metaOGURL = '<tr><td><span style="color: blue">og:url</span></td><td>' + jQuery("meta[name='og:url'], meta[property='og:url']").attr("content") + '</td></tr>';
                                var twitterOGCard = '<tr><td><span style="color: blue">twitter:card</span></td><td>' + jQuery("meta[name='twitter:card']").attr("content") + '</td></tr>';
                                var twitterOGtitle = '<tr><td><span style="color: blue">twitter:title</span></td><td>' + jQuery("meta[name='twitter:title']").attr("content") + '</td></tr>';
                                var twitterOGDescription = '<tr><td><span style="color: blue">twitter:description</span></td><td>' + jQuery("meta[name='twitter:description']").attr("content") + '</td></tr>';
                                var twitterOGImage = '<tr><td><span style="color: blue">twitter:image</span></td><td>' + 'GET RT IMAGE PUBLIC URL' + '</td></tr>';
                                var twitterSite = '<tr><td><span style="color: blue">twitter:site</span></td><td>' + jQuery("meta[name='twitter:site']").attr("content") + '</td></tr>';
                                var twitterCreator = '<tr><td><span style="color: blue">twitter:creator</span></td><td>' + jQuery("meta[name='twitter:creator']").attr("content") + '</td></tr>';
                                var siteLang = '<tr><td><span style="color: blue">ms.lang</span></td><td>' + jQuery("meta[name='ms.lang']").attr("content") + '</td></tr>';
                                var siteLoc = '<tr><td><span style="color: blue">ms.loc</span></td><td>' + jQuery("meta[name='ms.loc']").attr("content") + '</td></tr>';
                                var siteName = '<tr><td><span style="color: blue">ms.sitename</span></td><td>' + jQuery("meta[name='ms.sitename']").attr("content") + '</td></tr>';
                                var siteSec = '<tr><td><span style="color: blue">ms.sitesec</span></td><td>' + jQuery("meta[name='ms.sitesec']").attr("content") + '</td></tr>';

                                allMetaData = metaTitle + metaDescription + metaKeywords + metaOGDescription + metaOGTitle + metaOGImage + metaOGURL + twitterOGCard + twitterOGtitle + twitterOGDescription + twitterOGImage + twitterSite + twitterCreator + siteLang + siteLoc + siteName + siteSec;

                                jQuery(".utmissing").append("<div class='appendedmetatable'><table id='extractMeta' data-f-sort='true'><thead><tr><th>Meta Key</th><th>Meta value</th></tr></thead><tbody>" + allMetaData + "</tbody></table></div>");
                                jQuery('body').append("<button class='enablecode'></button>");

                            }
							
           // UnitTestCasesCheck();
            $('body').addClass('redlines');

           // $('body').append('<div class="tool-ribbon"><div class="download-excel blue-bgc white-c button">Save to Excel</div></div>');

            //calculate($('.scroll-1 .wdg-pad-large'), $('.scroll-2 .wdg-pad-thin'));

            $("div[class^='wdg-pad-']").each(function (event) {

                var $firstElement = $(this).next();
                console.log($(this));
                $(this).css("border-top", "0.5px solid #7ac0da");
                //$(this).css("border-bottom", "0.5px solid #7ac0da");
				
                var $secondElement = $("div[class^='scroll-']:nth-child(2)").next();
                console.log($(this).closest("div[class^='wdg-pad-']"));
                $(this).closest("div[class^='wdg-pad-']").children().first().css("border-top", "1px solid #7ac0da");
                calculate($(this), $(this).closest("div[class^='wdg-pad-']"));


            });

            //code block to calculate distance
            $("#redlines").on("click",function(){
				$(this).addClass("buttonvisited");
				$('body.redlines').find('*').on('click', function (event) {
                //cleanDecoration(ele1);
                //cleanDecoration(ele2);
                event.preventDefault();
                event.stopPropagation();
                click_redlin = 1;
                if (!selection1) {
					
                    ele1 = $(event.target);
                    console.log(event.target);
                    selection1 = true;
                }
                else if (selection1 && !selection2) {
                    ele2 = $(event.target);
                    console.log(event.target);
                    selection2 = true;
                    calculate(ele1, ele2);
                }
            });
       
            
				
			});
			  var focusCount = 0;
			   var images =$("#mainContent").length>0? $("#mainContent").find("img"):$('main').length>0?$('main :not(".utmissing")').find('img'):$('#primaryArea :not(".utmissing")').find('img');
    var links = $("#mainContent").length>0?$('#mainContent :not(".utmissing")').find('a'):$('main').length>0?$('main :not(".utmissing")').find('a'):$('#primaryArea :not(".utmissing")').find('a');
	var datavg = $("#mainContent").find("div[data-vg]");
	var custvideo=$(".c-video-one-player,.c-video-player");
	//focus count logiv
$("#mainContent :not('.utmissing')" + " *,main :not('.utmissing')" + " *,#mainContent :not('.utmissing')" + " *").each(function () {
        var isfocusable = ($(this).is('a,area[href],iframe,button, :input, [tabindex]:not([tabindex^="-"])') && $(this).is(':visible'));
        if (isfocusable) {
            focusCount = focusCount + 1;
            var ele = '<span class="eleFocusbale"><strong>' + focusCount + '</strong></span>';
            $(this).addClass("clsfocusable");
            $(ele).insertAfter($(this));
        }
    });
	//Image dimensions logic
	$('#imagedim').on('click', function () {
			$(this).addClass("buttonvisited");
         imageratio();
        
    });
	
	
	$('#socialtitle').on('click', function () {
		$(this).addClass("buttonvisited");

var datasocial=$(".m-social a");

    $.each(datasocial, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'title=' + $(this).attr("title") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));

    });
		
	});
	$('#imgsrcviewportCheck').on('click', function (e) {
		e.preventDefault();
				$(this).addClass("buttonvisited");
			$("img").each(function(){
if($(this).closest("picture").length>0){
var $picturetag=$(this).closest("picture");
var $imgtag=$(this).closest("picture img");
if($imgtag.attr("src")==undefined ||$imgtag.attr("src")=="" ){
$imgtag.closest("picture").append('<span class="eleFocusbale"><strong>img src is empty</strong></span>');
$imgtag.css("opacity","0.2");
}
$picturetag.find("source").each(function(){
if($(this).attr("srcset")==undefined||$(this).attr("srcset")==""){
$(this).closest("picture").append('<span class="eleFocusbale"><strong>srcset is empty</strong></span>');
$(this).siblings("img").css("opacity","0.2");
} 
})
}else{
	var $imgtag=$(this);
if($imgtag.attr("src")==undefined ||$imgtag.attr("src")=="" ){
$imgtag.parent().css("background-color","red").append('<span class="eleFocusbale"><strong>img src is empty</strong></span>');
$imgtag.css("opacity","0.2");
}}
})
         
    });
	
	
	//mwf click
	
	$("#btn_mwf").on('click', function (e) {
		$(this).addClass("buttonvisited");
		 var docHeight = $(document).height()+"px";
		if($('body').find('.grid').length > 0){
			$('body').find('.grid').remove();
			$('body > *').css('opacity','');
		}
		else{
			var colCount = 12;
			$('body > *').css('opacity','0.6');
			$('body').append('<div class="grid" style="width:100%;background-color:rgb(255, 255, 255);position: fixed;top: 0;left: 0;z-index:-1;height: '+docHeight+' !important;"></div>');			
			$('.grid').append('<div data-grid="container" style="height: 100%;"></div>');
			
            
			for (var i = 0; i < colCount; i++) {
                
                var color = i % 2 ? "rgba(0, 0, 102, 0.1)" : "rgba(0, 0, 102, 0.4)" ;
                
				$('.grid').find('[data-grid="container"]').append('<div data-grid="col-1" style="height:'+docHeight+';background-color: '+color+'; background-clip: content-box;"><p class="x-type-center">' + (i + 1) + '</p></div>');
			}
            
            $('.grid [data-grid="container"]').prepend('<div class="grid-live-area-left"></div>');
            $('.grid [data-grid="container"]').append('<div class="grid-live-area-right"></div>');
        }
		
	});
	
$("#custcheckbox").on('click', function (e) {
		$(this).addClass("buttonvisited");
	$(".c-checkbox").each(function(){
if($(this).find("label").length>1){

if($(this)[0].tagName.toLowerCase()!="fieldset"){
var messfield="Please add  fieldset instead of "+$(this)[0].tagName+' tag ';
 var elerfield= '<span class="eleFocusbale"><strong>' + messfield  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elerfield).insertBefore($(this).parent()); 
}
if($(this).find("legend").length<1){
var messlgd="Please add  legend instead of "+$(this)[0].tagName+' tag ';
 var elelgd= '<span class="eleFocusbale"><strong>' + messlgd  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelgd).insertBefore($(this).parent()); 
}
$(this).find("label").each(function(){
if($(this).find('input[aria-label]').length<1 ||$(this).find('input[aria-label]').attr('aria-label')==""){
var messlbl="Please add correct aria-label for "+$(this)[0].tagName+' tag ';
 var elelbl= '<span class="eleFocusbale"><strong>' + messlbl  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelbl).insertBefore($(this).parent()); 
}
if($(this).find('input[aria-checked]').length<1 ||$(this).find('input[aria-checked]').attr('aria-checked')==""){
var messlgd="Please add correct aria-checked for "+$(this)[0].tagName+' tag ';
 var elelgd= '<span class="eleFocusbale"><strong>' + messlgd  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelgd).insertBefore($(this).parent()); 
}});
}
else{
if($(this).find('input[aria-label]').length<1 ||$(this).find('input[aria-label]').attr('aria-label')==""){
var messlgd="Please add correct aria-label for input tag";
 var elelgd= '<span class="eleFocusbale"><strong>' + messlgd  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelgd).insertBefore($(this).parent()); 
}
if($(this).find('input[aria-checked]').length<1 ||$(this).find('input[aria-checked]').attr('aria-checked')==""){
var messlgd="Please add correct aria-checked for "+$(this)[0].tagName+' tag ';
 var elelgd= '<span class="eleFocusbale"><strong>' + messlgd  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelgd).insertBefore($(this).parent()); 
}
}
})
	
});
$("#custcombo").on('click', function (e) {
	$(this).addClass("buttonvisited");
$(".c-combo").each(function(){
if($(this).find('input').attr("autocomplete")==undefined){
	var messcomp="Please add AutoComplete for "+$(this)[0].tagName+' tag ';
 var eleautocomp= '<span class="eleFocusbale"><strong>' + messcomp  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(eleautocomp).insertBefore($(this).parent()); 
}
if($(this).attr("aria-expanded")==undefined){
var messexp="Please add  aria-expanded for "+$(this)[0].tagName+' tag ';
 var eleexp= '<span class="eleFocusbale"><strong>' + messexp  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(eleexp).insertBefore($(this).parent()); 
}
if($(this).find('input').attr("aria-label")==undefined || $(this).find('input').attr("aria-label")==""){
var messarlbl="Please add correct aria-label for "+$(this)[0].tagName+' tag ';
 var elearlbl= '<span class="eleFocusbale"><strong>' + messarlbl  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elearlbl).insertBefore($(this).parent()); 
}
if($(this).find('input').attr("role")==undefined || $(this).find('input').attr("role")==""){
var messrol="Please add correct role for "+$(this)[0].tagName+' tag ';
 var elerol= '<span class="eleFocusbale"><strong>' + messrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elerol).insertBefore($(this).parent()); 
}
if($(this).find('input').attr("aria-autocomplete")==undefined || $(this).find('input').attr("aria-autocomplete")!="list"){
var messrol="Please add aria-autocomplete for "+$(this)[0].tagName+' tag ';
 var elerol= '<span class="eleFocusbale"><strong>' + messrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elerol).insertBefore($(this).parent()); 
}
if($(this).find("[aria-controls]").length<1 || $(this).find("[aria-controls]").attr("aria-controls")==""){
var messctrrol="Please add  correct aria-controls for "+$(this)[0].tagName+' tag ';
 var electrrol= '<span class="eleFocusbale"><strong>' + messctrrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(electrrol).insertBefore($(this).parent());
}
if($(this).find("[aria-controls]").length>0 && $(this).find('div ul').attr("id")!=undefined && $(this).find("[aria-controls]").attr("aria-controls")!=$(this).find('div ul').attr("id")){
var messctrrol="id and aria-controls are not matching for "+$(this)[0].tagName+' tag ';
 var electrrol= '<span class="eleFocusbale"><strong>' + messctrrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(electrrol).insertBefore($(this).parent());
}
if($(this).find('div ul').attr("role")==undefined || $(this).find('div ul').attr("role")!="listbox"){
var messcrol="Please add role for "+$(this)[0].tagName+' tag ';
 var elecrol= '<span class="eleFocusbale"><strong>' + messcrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elecrol).insertBefore($(this).parent());
}
$(this).find('div ul li').each(function(){
if($(this).attr("role")==undefined||($(this).attr("role")!="option"&&$(this).attr("role")!="presentation")){
if($(this).attr("role")=="presentation")
{
if($(this).find("span").attr("role")!="option"){
var messcrol="Please add role as option for "+$(this)[0].tagName+' tag ';
 var elecrol= '<span class="eleFocusbale"><strong>' + messcrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elecrol).insertBefore($(this).parent());
}
}
var messlicrol="Please add role for "+$(this)[0].tagName+' tag ';
 var elelicrol= '<span class="eleFocusbale"><strong>' + messlicrol  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelicrol).insertBefore($(this).parent());
}
if($(this).attr("role")!="presentation")
{
if($(this).attr("aria-label")==undefined||$(this).attr("aria-label")==""){
var messlilbl="Please add aria-label for "+$(this)[0].tagName+' tag ';
 var elelilbl= '<span class="eleFocusbale"><strong>' + messlilbl  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelilbl).insertBefore($(this).parent());
}
}
});
})

})

//Clear button logic
	$("#custclear").on('click', function (e) {
		if($('body').find('.grid').length > 0){
			$('body').find('.grid').remove();
			$('body > *').css('opacity','');
		}
		isContrastCheck = false;
		jQuery('.clsgreen').remove();
            jQuery('.clsred').remove();
			jQuery('.clsyellow').remove();
			
		if($("html").attr("hc")!=undefined && $("html").attr("hc")=="delumine-smart")
		 {$('#togglehc').trigger("click");}
		$(".appendedmetatable").remove();
          $('*').removeClass("customcolor");
		  $(".utmissing input").removeClass("buttonvisited");
		$(".overlay_redimage,.display_imagesize,.eleFocusbale,.redlinedist,.eleFocusbale1,.bgclrrd,.lettercounter").remove();
		 if($('body').find('#styleObj').length > 0){
			 $('body').find('#styleObj').remove();
			 $('body').removeClass('redlines_testing_');
			
			
			
		}
		clickonce = 0;
		onceresize = 0;
	});
	//Video button logic
	$("#custvideoplayer").on("click",function(){
		$(this).addClass("buttonvisited");
		if($(".c-video-one-player").length>0){				var custvideo=$(".c-video-one-player");
		$.each(custvideo, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong style="display:block">' + 'name=' + $(this).find("[itemprop='name']").text() + '</strong><strong style="display:block">' + 'description=' + $(this).find("[itemprop='description']").text() + '</strong><strong style="display:block">' + 'UploadDate=' + $(this).find("[itemprop='uploadDate']").text() + '</strong><strong style="display:block">' + 'iframeTitle=' + $(this).find("iframe").attr("title") + '</strong>  </span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));
		});	}
		else if($(".c-video-player").length>0){
			var custvideo=$(".c-video-player");
		$.each(custvideo, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong style="display:block">' + 'name=' + $(this).parent().siblings("[itemprop='name']").text() + '</strong><strong style="display:block">' + 'description=' + $(this).parent().siblings("[itemprop='description']").text() + '</strong><strong style="display:block">' + 'UploadDate=' + $(this).parent().siblings("[itemprop='uploadDate']").text() + '</strong><strong style="display:block">' + 'iframeTitle=' + $(this).find("iframe").attr("title") + '</strong>  </span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));
		});
		}
	});
	//Aria-label button logic
	$("#custarialabel").on("click",function(){
	
	$(this).addClass("buttonvisited");



    $.each(links, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'aria-label=' + $(this).attr("aria-label") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));

    });
})
$("#idval").on("click",function(){
	$(this).addClass("buttonvisited");
var arr=[];
$("[id]").each(function(){
if(!arr.includes($(this).attr("id"))){arr.push($(this).attr("id"));}
})

arr.forEach(function(item){
if($('[id="'+item+'"]').length>1){

var ele = '<span class="eleFocusbale"><strong>ID repeated</strong></span>';
       $('[id="'+item+'"]').addClass("clsfocusable");
        $(ele).insertBefore($('[id="'+item+'"]'));

}
})
})
$("#custiframe").on("click",function(){
	$(this).addClass("buttonvisited");
$.each($("iframe"), function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'title=' + $(this).attr("title") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this).parent());

    });
})
$("#skiptomain").on("click",function(){
	$(this).addClass("buttonvisited");
if($("#uhfSkipToMain").length<1){
	var ele = '<span class="eleFocusbale"><strong>skip to main is missing</strong></span>';
        $("header").addClass("clsfocusable");
        $(ele).insertBefore($("header").parent());
	}else{
		var skipid=$("#uhfSkipToMain").attr("data-href")!=undefined?$("#uhfSkipToMain").attr("data-href"):"";
		if($(skipid).length<1){
			var ele = '<span class="eleFocusbale"><strong>skip to main matchingid is missing</strong></span>';
        $("header").addClass("clsfocusable");
        $(ele).insertBefore($("header").parent());
			
		}
	}
})

$("#ariacheck").on("click",function(e){
	e.preventDefault();
	$(this).addClass("buttonvisited");
$("*").each(function () {
                          var $this=$(this);
                            $.each(this.attributes, function () {
                                if (this.specified &&this.name.indexOf("aria")>-1) {                                    
                                      if(this.value == "" || this.value == undefined){
                                       var mess=$this[0].tagName+' tag ';
                                       var ele = '<span class="eleFocusbale"><strong>' + mess  +  this.name  +' is empty '+ '</strong></span>';
         $this.addClass("clsfocusable");
         $(ele).insertBefore($this.parent());                            
                                          }
                                      //console.log(this.name+":"+ this.value)
                                 
                                }
                            });
});
});
$("#rolecheck").on("click",function(e){
	e.preventDefault();
		$(this).addClass("buttonvisited");
$("*").each(function () {
                          var $this=$(this);
                            $.each(this.attributes, function () {
                                if (this.specified &&this.name.indexOf("role")>-1) {                                    
                                      if(this.value == "" || this.value == undefined){
                                      var mess=$this[0].tagName+' tag ';
                                       var ele = '<span class="eleFocusbale"><strong>' + mess  +  this.name  +' is empty '+ '</strong></span>';
         $this.addClass("clsfocusable");
         $(ele).insertBefore($this.parent());                            
                                          }
                                      //console.log(this.name+":"+ this.value)
                                 
                                }
                            });
});});
//data-vg button logic
	$("#custdatamoduleid").on("click",function(){
	
	$(this).addClass("buttonvisited");

var datamodname=$("[data-module-id]");

    $.each(datamodname, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'data-module-id=' + $(this).attr("data-module-id") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));

    });
})
//data-vg button logic
	$("#custdatavg").on("click",function(){
	
	$(this).addClass("buttonvisited");

var datavgname=$("[data-vg]");

    $.each(datavgname, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'data-vg=' + $(this).attr("data-vg") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));

    });
})
//show redlines button logic
$("#boxredlines").on("click",function(){
	$(this).addClass("buttonvisited");

	// if($('body').find('#styleObj').length > 0){
			// $('body').find('#styleObj').remove();
			// $('body').removeClass('redlines_testing_');
		// }
		// else {
			/* On Ready Appending Popup div (as hidden) */
			$('body').addClass('redlines_testing_');
			$(document.body).append(
			"<div class='styleObj' id='styleObj' style='z-index:10000;display: none;opacity:1;height:auto!important; width:auto!important;background-color:white;'><div style='font-size:11px;background:#0078D7;color:#FFFFFF;max-width:200px;margin-bottom:3px;font-size:12px;' id='thisTagName'></div><span id='pop-up'></span></div>"
			);
			/* Getting CSS Styles on mouse over of an element */
			
			var pageWidth = window.innerWidth;
			var pageHeight = window.innerHeight;
			var blockWidth = 332;

			$(".redlines_testing_ *").mouseover(function(e) {
			e.stopPropagation();
				var leftValue = 0;
				if ((e.pageX + blockWidth) > pageWidth) {
					if ((e.pageX - blockWidth - 10) > 0)
						leftValue = e.pageX - blockWidth - 40;
				}
				else{
						leftValue = e.pageX;
				}
				var $this = $(this);
				var target = $( e.target );
				var isAnchor = '';
				if ( target.is( 'a' ) ) {
					isAnchor = target.prop('outerHTML').split('>')[0];
				}
				var style = $this.getStyleObject();
				if($this.parents('body').hasClass("redlines_testing_")){
				$this.addClass('givingBackground');
				$('#styleObj').css({ 'top': e.pageY, "color": (style.color), 'left': leftValue + 50, 'position': 'absolute', "over-flow": "true", "opacity": "1", 'border': '1px solid black', 'padding': '5px' });
				var getBorders = $this.css('borderWidth');
				getBorders = getBorders.split(" ");
				if(getBorders.length == 1) {
					getBorders[1] = getBorders[0];
					getBorders[2] = getBorders[0];
					getBorders[3] = getBorders[0];
				} else if(getBorders.length == 2) {
					getBorders[2] = getBorders[0];
					getBorders[3] = getBorders[1];
				} else if(getBorders.length == 3) {
					getBorders[3] = getBorders[1];
				}
				var fullWidth = parseFloat(style.width) + parseFloat(style.marginLeft) +parseFloat(style.marginRight) + parseFloat(getBorders[1]) + parseFloat(getBorders[3]) +parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
				var fullHeight = parseFloat(style.height) + parseFloat(style.marginTop) +parseFloat(style.marginBottom) + parseFloat(getBorders[0]) + parseFloat(getBorders[2]) +parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
				var thisId1 = $(this).attr('id');
				var thisClass1 = $(this).attr('class');
				var thisId ="", thisClass ="";
				if (typeof thisId1 !== typeof undefined && thisId1 !== false) {
					thisId = thisId1;
				}
				if (typeof thisClass1 !== typeof undefined && thisClass1 !== false) {
					thisClass = thisClass1.replace('givingBackground','');
				}
				/*If Margin auto, fill auto*/
				var eleMarginT = style.marginTop == 'auto' ? 'auto' : parseFloat(style.marginTop);
				var eleMarginR = style.marginRight == 'auto' ? 'auto' : parseFloat(style.marginRight);
				var eleMarginB = style.marginBottom == 'auto' ? 'auto' : parseFloat(style.marginBottom);
				var eleMarginL = style.marginLeft == 'auto' ? 'auto' : parseFloat(style.marginLeft);

				/*If Border auto, fill auto*/
				var eleBorderT = getBorders[0] == 'auto' ? 'auto' : parseFloat(getBorders[0]);
				var eleBorderR = getBorders[1] == 'auto' ? 'auto' : parseFloat(getBorders[1]);
				var eleBorderB = getBorders[2] == 'auto' ? 'auto' : parseFloat(getBorders[2]);
				var eleBorderL = getBorders[3] == 'auto' ? 'auto' : parseFloat(getBorders[3]);
				
				/*If Padding auto, fill auto*/
				var elePaddingT = style.paddingTop == 'auto' ? 'auto' : parseFloat(style.paddingTop);
				var elePaddingR = style.paddingRight == 'auto' ? 'auto' : parseFloat(style.paddingRight);
				var elePaddingB = style.paddingBottom == 'auto' ? 'auto' : parseFloat(style.paddingBottom);
				var elePaddingL = style.paddingLeft == 'auto' ? 'auto' : parseFloat(style.paddingLeft);
				
				/*If Element Height and width are auto, fill auto*/
				var eleHeight = style.height == 'auto' ? 'auto' : parseFloat($this.height());
				var eleWidth = style.width == 'auto' ? 'auto' : parseFloat($this.width());

				/*If FullHeight and FullWidth are NaN, fill auto*/
				fullWidth = fullWidth.toString() == 'NaN' ? 'auto' : fullWidth;
				fullHeight = fullHeight.toString() == 'NaN' ? 'auto' : fullHeight;

				$("#pop-up")[0].innerHTML = "<div id='ct'><div id='emargins'>margin: <div id='mt'>" + eleMarginT + "</div><div id='mr'>" + eleMarginR + "</div><div id='mb'>" + eleMarginB + "</div><div id='ml'>" + eleMarginL + "</div></div><div id='eborders'>border: <div id='bt'>" + eleBorderT + "</div><div id='br'>" + eleBorderR + "</div><div id='bb'>" + eleBorderB + "</div><div id='bl'>" + eleBorderL + "</div></div><div id='epaddings'>padding:<div id='pt'>" + elePaddingT + "</div><div id='pr'>" + elePaddingR + "</div><div id='pb'>" + elePaddingB + "</div><div id='pl'>" + elePaddingL + "</div></div><div id='eelem'><div id='ep'><span id='w'>" + eleHeight + "</span><br/><span>x</span><br/><span id='h'>" + eleWidth + "</span></div></div><table>" + "<tr><td><b>FullWidth: </b>" + "</td><td>" + fullWidth + "</td></tr>" + "<tr><td><b>FullHeight: </b>" + "</td><td>" + fullHeight + "</td></tr>" + "<tr><td><b>FontSize: </b>" + "</td><td>" + style.fontSize + "</td></tr>" + "<tr><td><b>LineHeight: </b>" + "</td><td>" + style.lineHeight + "</td></tr>" + "<tr><td><b>Color: </b>" + "</td><td style='text-shadow: 0px 0px 1px #000000;color:"+ ConverRGB2Hex(style.color) +"'>" + ConverRGB2Hex(style.color).toUpperCase() + "</td></tr>" + "<tr><td><b>Font: </b>" + "</td><td>" + style.fontFamily + "</td></tr>" + "</table></div>"
				
				var printElement = '';
				if(isAnchor == '') {
					printElement = $(this).prop("tagName").toLowerCase();
					$("#thisTagName")[0].innerHTML = '&lt;'+ printElement +" id='" + thisId +"' class='" + thisClass + "'" + '&gt;';
				} else {
					$("#thisTagName").text(isAnchor + ">");
				}

				$("#styleObj").show();
				}
			}).mouseout(function(e) {
			e.stopPropagation();
			var $this = $(this);
			$this.removeClass('givingBackground');
		  });
	
	})
	
	function getStatus(link,url) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (request.readyState === 4){
				var success=request.status;//this contains the status code
				if(success.toString()=="200"){
var ele = '<span class="eleFocusbale"><strong style="background-color:green;">valid link</strong></span>';
       link.addClass("clsfocusable");
        $(ele).insertBefore(link);
}else{
var ele = '<span class="eleFocusbale"><strong>not a valid link</strong></span>';
        link.addClass("clsfocusable");
         $(ele).insertBefore(link);
}
			}
		};
		request.open("GET", url, true);
		request.send(); 
	} 

//Link button logic
$("#custlinkcheck").on("click",function(){
	$(this).addClass("buttonvisited");
	
	var location1=window.location.hostname;var ids=[];
	var linkdef=$('#mainContent').length>1?linkdef='#mainContent':$('main').length>0?linkdef='main':linkdef='#primaryArea';
	var links=$(linkdef).find('a');
	var iddef=$(linkdef).find('[id]');
	
	$.each(links, function (index, value) {
		var hrefval=$(this).attr("target");
        var ele = '<span class="eleFocusbale"><strong>' + 'href=' + $(this).attr("href") + '</strong><br><strong>' + 'tatget=' +hrefval + '</strong><br></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));
		if($(this).attr("href")!=undefined && $(this).attr("href")!="#" &&$(this).attr("href")!="javascript:void(0)"){
getStatus($(this),$(this).attr("href"));
}

    });
	/*targetblank*/
	$.each(links, function (index, value) {
		
	var a=$(this).attr('href');
	if(a==undefined){a="undefined"
	}else{
	var b=$(this).prop('href',a).prop('hostname');
	
	if(!(a.indexOf("microsoft")>-1 || a.indexOf("surface")>-1 || a.indexOf("windows")>-1)){
		
		$(this).addClass("customcolor");
	}	
	}	
	})
	/*deeplinking*/
	$.each(iddef, function (index, value) {
    ids.push($(this).attr('id'));
    });
    $.each(links, function (index, value) {
    var c=$(this).attr('href');
    if(c==undefined){c="undefined"
	}
    else{
    if(c.indexOf("http")==-1){var d=c.substring(1, c.length);
    if(ids.indexOf(d)>-1){
		$(this).append("<span class='lettercounter'>-deeplinking implemented</span>").addClass("customcolor");
		console.log("deeplinking")} 
     }
     }
     })
	
})
//Meta button logic
$("#showmeta").on("click",function(){
	$(this).addClass("buttonvisited");
	if($("#extractMeta").length<1)showMeta();
	
});
//h1 button logic
$("#custh1tagcheck").on("click",function(){
	$(this).addClass("buttonvisited");
	var h1tag=$('#mainContent').find('h1').length=0?$('#primaryArea').find('h1').length:$('#mainContent').find('h1').length;
	var h1headingdef=$('#mainContent').find('h1').length>1?h1headingdef='#mainContent':h1headingdef='#primaryArea';
	var h1heading=$(h1headingdef).find('h1');
	if(h1tag>1){
		$.each(h1heading, function (index, value) {
			$(this).addClass("customcolor");
			//$(this).css("color","red");
		});
	}
})


//Char count button logic
$("#custcontentcheck").on("click",function(){
	
	$(this).addClass("buttonvisited");

    /*$.each(datavg, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'count=' + $(this).attr("alt") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertAfter($(this));
        $('picture .clsfocusable + .eleFocusbale').css({
            'position': 'absolute',
            'bottom': '20'
        });
    });*/
	
	/*Trying Code*/
/*var jsondata1;
$.getJSON("count.json", function(data) {
console.log(data);	
});*/


var myJSON={"panelcomponents": ["hero","linknav","feature","feature5050","feature6040","multifeature","highlightfeature","banner","mosaicbig","mosaicsmall"],"panelcomponentsdetails": [{"name": "hero","chardetails": [{"heading": "24","subheading": "86","cta": "10"}]},{"name": "linknav","chardetails": [{"cta": "20"}]},{"name": "feature","chardetails": [{"heading": "12","paragraph": "66","cta": "15"}]},{"name": "feature5050","chardetails": [{"heading": "30","paragraph": "135","cta": "17"}]},{"name": "feature6040","chardetails": [{"heading": "13","paragraph": "94","cta": "15"}]},{"name": "multifeature","chardetails": [{"heading": "17","paragraph": "97","cta": "20"}]},{"name": "highlightfeature","chardetails": [{"heading": "14","paragraph": "165","cta": "14"}]},{"name": "banner","chardetails": [{"cta": "15"}]},{"name": "mosaicbig","chardetails": [{"heading": "12","subheading": "99","cta": "16"}]},{"name": "mosaicsmall","chardetails": [{"heading": "19","subheading": "36","cta": "12"}]}]};


var pagepanelitemarr=[]; var filteredpagepanelitemarr=[]; var ids;
var pagepanel;
if($('#mainContent').hasClass("wdg-global")){
	pagepanel= $("#mainContent").find("[data-vg]");
	}
else{
    pagepanel=$("#primaryArea").find("[id*=primaryR]").find("[class*=m-]").parent();
}
var pagepanelitem; var pagepanelitemfirst=[]; var pagepanellist;
	$(pagepanel).children().each(function(){
	pagepanelitem=$(this).attr('class');
	if (pagepanelitem==undefined){pagepanelitem="und";}
	pagepanelitemfirst=pagepanelitem.split(" ");
	pagepanelitemfirst.filter((c=>c.indexOf("m-")>-1));
	if(pagepanelitemfirst.filter((c=>c.indexOf("m-")>-1)).length==0){
		if(pagepanelitemfirst.filter(c=>c.indexOf("c-")>-1).length!=0){
            pagepanelitemfirst.filter(c=>c.indexOf("c-")>-1);
        }   
		else{
		pagepanelitemfirst="hp-mosaic hp-mosaic_en-us wdg-pad-thin";
		pagepanelitemfirst=pagepanelitemfirst.split(" ");
		}
	}
	pagepanellist=pagepanelitemfirst[0];
switch(pagepanellist){
case "m-hero":
case "m-hero-item": 
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].subheading?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-group").find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break; 
case "m-link-navigation":
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[1].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break;
case "m-feature":
if($(this).hasClass("f-align-left f-image-priority")){
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].paragraph?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
else if($(this).hasClass("f-align-right f-image-priority")){
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].paragraph?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[4].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
else if(($(this).hasClass('f-align-left'))||($(this).find('c-feature').hasClass('f-align-left'))){
var tis=$(this).not('.f-image-priority');
tis.find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].heading?"":tis.find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
tis.find("p").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].paragraph?"":tis.find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
tis.find(".c-call-to-action").each(function(){
tis.text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
else if(($(this).hasClass('f-align-right'))||($(this).find('c-feature').hasClass('f-align-right'))){
var tis=$(this).not('.f-image-priority');
tis.find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].heading?"":tis.find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
tis.find("p").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].paragraph?"":tis.find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
tis.find(".c-call-to-action").each(function(){
tis.text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
else{
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[3].chardetails[0].paragraph?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
}
break;
case "m-highlight-feature":
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[6].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[6].chardetails[0].paragraph?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[6].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break;
case "m-banner":
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[7].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break;
case "hp-mosaic":
$(this).find('li').each(function(){
if(($(this).hasClass('single'))||($(this).not('.double'))){
$(this).find("[class*=c-heading]").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[8].chardetails[0].heading?"":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
$(this).find("p").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[8].chardetails[0].subheading?"":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[8].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
else if($(this).hasClass('double')){
$(this).find("[class*=c-heading]").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].heading?"":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
$(this).find("p").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].subheading?"":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
$(this).find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
}
});
break;
case "m-mosaic":
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].subheading?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-group").find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[9].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break;
case "und":
break;
case "c-carousel":
$(this).find("[class*=c-heading]").text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].heading?"":$(this).find("[class*=c-heading]").append("<span class='lettercounter'>-count:"+$(this).find("[class*=c-heading]").text().length+"</span>").addClass("customcolor");
$(this).find("p").text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].subheading?"":$(this).find("p").append("<span class='lettercounter'>-count:"+$(this).find("p").text().length+"</span>").addClass("customcolor");
$(this).find(".c-group").find(".c-call-to-action").each(function(){
$(this).text().length<=myJSON.panelcomponentsdetails[0].chardetails[0].cta? "":$(this).append("<span class='lettercounter'>-count:"+$(this).text().length+"</span>").addClass("customcolor");
});
break;
}
});
})

$("#custmhero").on("click",function(){
	$(this).addClass("buttonvisited");
	$(".m-hero").each(function(){$(this).find("*").each(function () {
                          var $this=$(this);
                            $.each(this.attributes, function () {
                                if (this.specified &&(this.name.indexOf("role")>-1 ||this.name.indexOf("aria")>-1||this.name.indexOf("title")>-1||this.name.indexOf("alt")>-1)) {                                    
                                      if(this.value == "" || this.value == undefined){
										  debugger;
										  debugger;
									 var mess= $this[0].tagName+' tag ';
                                       var ele = '<span class="eleFocusbale"><strong>' + mess  +  this.name  +' is empty '+ '</strong></span>';
         $this.addClass("clsfocusable");
         $(ele).insertBefore($this.parent());                            
                                          }
                                      //console.log(this.name+":"+ this.value)
                                 
                                }
                            });
});
$(this).find("[aria-controls]").each(function(){
	var mess=$(this).attr("role")==undefined || $(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"";
                                if(mess.length>0){       var ele = '<span class="eleFocusbale"><strong>' + mess  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele).insertBefore($this.parent()); }
//console.log($(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"");
})
var mess=$(this).find("[aria-controls]").parent().attr("role")==undefined || $(this).find("[aria-controls]").parent().attr("role")!="tablist"?'sequence-indicator should have role as tablist':"";
if(mess.length>0){       var ele = '<span class="eleFocusbale"><strong>' + mess + '</strong></span>';
                                $this.addClass("clsfocusable");
								$(ele).insertBefore($this.parent()); }
								
								var mess2=$(this).find("[aria-controls]").siblings().attr("role")==undefined || $(this).find("[aria-controls]").parent().attr("role")!="tablist"?$this[0].tagName+'should have role as tablist':"";
if(mess2.length>0){      

 var ele2 = '<span class="eleFocusbale"><strong>' + mess2  +'</strong></span>';
                                $this.addClass("clsfocusable");
								$(ele2).insertBefore($this.parent()); }
								
								$(this).find("ul li").each(function(){
	var mess3=$(this).attr("role")==undefined || $(this).attr("role")!="tabpanel"?$(this)[0].tagName+' '+'in ul should have role as tabpanel':"";
                                if(mess3.length>0){       var ele3 = '<span class="eleFocusbale"><strong>' + mess3  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele3).insertBefore($(this).parent()); }
//console.log($(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"");
})
var ariarr=[];
var listarr=[];
$(this).find("[aria-controls]").each(function(){
	
	ariarr.push($(this).attr("aria-controls"));
});
$(this).find("ul li").each(function(){
	
	listarr.push($(this).attr("id"));
});
ariarr.sort();listarr.sort();
if(ariarr.length != listarr.length) 
{              var mess4="m-hero aria-controls and list ID are not having same length";
                                if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                $this.addClass("clsfocusable");
								$(elelen).insertBefore($this.parent()); }
}
            for(var i = 0; i < ariarr.length; i++) { 
                if (ariarr[i] != listarr[i]) {
                    var messmatch=".m-hero aria-controls and list ID are not matching";
                                if(messmatch.length>0){       var elematch = '<span class="eleFocusbale"><strong>' + messmatch  +'</strong></span>';
                                $(this).addClass("clsfocusable");
				$(elematch).insertBefore($(this).parent()); }}
            } 
})


	
});

$("#custmultifeature").on("click",function(){
	$(this).addClass("buttonvisited");
	$(".m-multi-feature").each(function(){$(this).find("*").each(function () {
                    var $this=$(this);
                            $.each(this.attributes, function () {
                                if (this.specified &&(this.name.indexOf("role")>-1 ||this.name.indexOf("aria")>-1||this.name.indexOf("alt")>-1||this.name.indexOf("title")>-1)) {                                    
                                      if(this.value == "" || this.value == undefined){
									 var mess= $this[0].tagName+' tag ';
                                       var ele = '<span class="eleFocusbale"><strong>' + mess  +  this.name  +' is empty '+ '</strong></span>';
         $this.addClass("clsfocusable");
         $(ele).insertBefore($this.parent());                            
                                          }
                                      //console.log(this.name+":"+ this.value)
                                 
                                }
                            });
});
$(this).find("[aria-controls]").each(function(){
	var mess=$(this).attr("role")==undefined || $(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"";
                                if(mess.length>0){       var ele = '<span class="eleFocusbale"><strong>' + mess  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele).insertBefore($(this).parent()); }
//console.log($(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"");
})
var mess=($(this).find("[aria-controls]").parent("div").attr("role")==undefined&&$(this).find("[aria-controls]").closest("ul").attr("role")==undefined) || ($(this).find("[aria-controls]").closest("ul").attr("role")!="tablist"&& $(this).find("[aria-controls]").parent("div").attr("role")!="tablist")?'sequence-indicator should have role as tablist':"";
if(mess.length>0){       var ele = '<span class="eleFocusbale"><strong>' + mess + '</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele).insertBefore($(this).parent()); }
								
							if($(this).find("[aria-controls]")[0].tagName.toLowerCase()=="a"){	
							var mess2=($(this).find("[aria-controls]").parent("div").attr("role")==undefined&&$(this).find("[aria-controls]").closest("ul").attr("role")==undefined) || ($(this).find("[aria-controls]").closest("ul").attr("role")!="tablist"&& $(this).find("[aria-controls]").parent("div").attr("role")!="tablist")?$(this)[0].tagName+'should have role as tablist':"";
							}else{
								var mess2=$(this).find("[aria-controls]").siblings().attr("role")==undefined || $(this).find("[aria-controls]").parent().attr("role")!="tablist"?$(this)[0].tagName+'should have role as tablist':"";
							}
if(mess2.length>0){       var ele2 = '<span class="eleFocusbale"><strong>' + mess2  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele2).insertBefore($(this).parent()); }
								
								
								
								$(this).find("ul li").each(function(){
									if(!$(this).parent().hasClass(".c-sequence-indicator")&&!$(this)[0].hasAttribute("aria-controls") ){
								if($(this).find("picture").length<1)	{	if($(this).find("section").length<1){
								if($(this).find("a").length){
									var mess3=$(this).find("a").attr("role")==undefined || $(this).find("a").attr("role")!="tabpanel"?$(this).find("a")[0].tagName+' '+'in ul should have role as tabpanel':"";
                                if(mess3.length>0){       
								var ele3 = '<span class="eleFocusbale"><strong>' + mess3  +'</strong></span>';
                                $(this).addClass("clsfocusable");
									$(ele3).insertBefore($(this).parent()); 
								}else{	
	var mess3=$(this).attr("role")==undefined || $(this).attr("role")!="tabpanel"?$(this)[0].tagName+' '+'in ul should have role as tabpanel':"";
                                if(mess3.length>0){       
								var ele3 = '<span class="eleFocusbale"><strong>' + mess3  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(ele3).insertBefore($(this).parent()); }
								}}}else{
										if($(this).find("section").length<1){
										var mess3=$(this).find("section").attr("role")==undefined || $(this).find("section").attr("role")!="tabpanel"?$(this).find("section")[0].tagName+' '+'in ul should have role as tabpanel':"";
                                if(mess3.length>0){       var ele3 = '<span class="eleFocusbale"><strong>' + mess3  +'</strong></span>';
                                $(this).find("section").addClass("clsfocusable");
								$(ele3).insertBefore($(this).find("section").parent());} }
								}}
//console.log($(this).attr("role")!="tab"?$(this)[0].tagName+' '+'in sequence-indicator should have role as tab':"");
							}	})
var ariarr=[];
var listarr=[];
$(this).find("[aria-controls]").each(function(){
	
	ariarr.push($(this).attr("aria-controls"));
});

if($(this).find(".c-sequence-indicator").length>0){
$(this).find(".c-sequence-indicator+ul li").each(function(){
	
	listarr.push($(this).attr("id"));
		// for(var l=0;l<ariarr.length;l++){
	// if(ariarr[l].indexOf($(this).attr("id"))==-1){
	
	// var mess4="m-hero aria-controls and list ID are not matching";
                                // if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                // $(this).addClass("clsfocusable");
								// $(elelen).insertBefore($(this).parent()); 
	// }}
		// return;}
		});
}
if($(this).find(".c-pivot").length>0){
$(this).find(".c-pivot section").each(function(){
	
	listarr.push($(this).attr("id"));
	// for(var l=0;l<ariarr.length;l++){
	// if(ariarr[l].indexOf($(this).attr("id"))==-1){
	
	// var mess4="m-hero aria-controls and list ID are not matching";
                                // if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                // $(this).addClass("clsfocusable");
								// $(elelen).insertBefore($(this).parent()); 
	// }}
	// return;}
	});
}
$(this).find(".c-carousel li").each(function(){
	
	listarr.push($(this).attr("id"));
		// for(var l=0;l<ariarr.length;l++){
	// if(ariarr[l].indexOf($(this).attr("id"))==-1){
	
	// var mess4="m-hero aria-controls and list ID are not matching";
                                // if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                // $(this).addClass("clsfocusable");
								// $(elelen).insertBefore($(this).parent()); 
	// }}
		// return;}
		});
var ariaarrfltr=[];
for(var j=0;j<ariarr.length;j++){
	var splitval=ariarr[j].split(' ');
	for(var k=0;k<splitval.length;k++){
		ariaarrfltr.push(splitval[k]);
	}
}

if(ariaarrfltr.length != listarr.length) 
{              var mess4="m-hero aria-controls and list ID are not having same length";
                                if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelen).insertBefore($(this).parent()); }
}
ariaarrfltr.sort();
listarr.sort();
 for(var i = 0; i < listarr.length; i++) { 
                if (listarr[i] != ariaarrfltr[i]) 
				{
					 var mess4="m-hero aria-controls and list ID are not matching";
                                if(mess4.length>0){       var elelen = '<span class="eleFocusbale"><strong>' + mess4  +'</strong></span>';
                                $(this).addClass("clsfocusable");
								$(elelen).insertBefore($(this).parent()); }
								return;
				}
            } 
             
           	// for(var i=0;i<listarr.length;i++){
// for(var j=0;j<ariarr.length;j++){
// if(!ariarr[j].includes(listarr[i])){
// var messmatch=".m-hero aria-controls and list ID are not matching";
                                // if(messmatch.length>0){       var elematch = '<span class="eleFocusbale"><strong>' + messmatch  +'</strong></span>';
                                // $(this).addClass("clsfocusable");
				// $(elematch).insertBefore($(this).parent()); }
// }
// }
// }
})

	
});

//alt button logic
$("#custalt").on("click",function(){
	$(this).addClass("buttonvisited");
	

    $.each(images, function (index, value) {
        var ele = '<span class="eleFocusbale" style="backgroundColor:aqua"><strong>' + 'alt=' + $(this).attr("alt") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertAfter($(this));
        $('picture .clsfocusable + .eleFocusbale').css({
            'position': 'absolute',
            'bottom': '20'
        });
    });


  
})
			//code block to highlight div on hover
            $('body.redlines').find('*').bind({
                mouseenter: function () {
                    $(this).css('box-shadow', '0 0 5px #008888');
                },
                mouseleave: function () {
                    $(this).css('box-shadow', '');
                }
            });
            break;
        case "clear":
            cleanDecoration(ele1);
            cleanDecoration(ele2);
            $('body.redlines').find('*').off('click');
            $('body.redlines').find('*').unbind('mouseenter mouseleave');
            $('body').find('.tool-ribbon').remove();
            $('body').removeClass('redlines');
            clickcounter = 1;
            $('picture').find('.overlay_redimage').remove();
            $('picture').find('.display_imagesize').remove();
            $("span[class^='distance']").remove();
            $(".eleFocusbale").remove();
            $('a,area[href],iframe,button, :input, [tabindex], img').removeClass("clsfocusable");
            $("div[class^='wdg-pad-']").css("border-top", "0px solid #7ac0da");
            $("div[class^='wdg-pad-']").each(function (event) {
                $(this).closest("div[class^='wdg-pad-']").children().first().css("border-top", "0px solid #7ac0da");
            });
            $('.click_redlines').remove();
            onceresize = 0;
            click_redlin = 0;
            break;

    }
	var site;

   
    var key1;
    var key2;

    function updatefun() {
        document.body.className = getEnabled() ? '' : 'disabled';
        if (getEnabled()) {
            jQuery('#toggle').html('Disable HCM');
            //jQuery('#calContrast').css('display', 'inline-block');
            jQuery('#deluminate_backdrop').css('display', 'block');
            jQuery('#deluminate_fullscreen_workaround').css('display', 'block');
        } else {
            jQuery('#toggle').html('Enable HCM');
            //jQuery('#calContrast').css('display', 'none');
            jQuery('.clsgreen').remove();
            jQuery('.clsred').remove();
            jQuery('#deluminate_backdrop').css('display', 'none');
            jQuery('#deluminate_fullscreen_workaround').css('display', 'none');
        }
        if (getEnabled()) {
            document.documentElement.setAttribute(
                'hc',
                site ? getSiteScheme(site) : getDefaultScheme());
        } else {
            document.documentElement.setAttribute('hc', 'normal');
        }
    }

    function onToggle() {
        setEnabled(!getEnabled());
        updatefun();
    }

    function onForceText() {
        if (site) {
            addSiteModifier(site, 'force_text');
        } else {
            setForceText(true);
        }
		
        updatefun();
    }

    function onKillBackground(evt) {
        if (site) {
            addSiteModifier(site, 'kill_background');
        } else {
            setForceText(true);
        }
        updatefun();
    }

    function onSettings() {
        setSettingsViewed();
    }

        var enableFirtTime = true;
        $('#togglehc').on('click', function (e) {
            onForceText();
            onKillBackground();
            onSettings();
            if (navigator.appVersion.indexOf('Mac') != -1) {
                key1 = '&#x2318;+Shift+F11';
                key2 = '&#x2318;+Shift+F12';
            } else {
                key1 = 'Shift+F11';
                key2 = 'Shift+F12';
            }

            if (!getSettingsViewed()) {
                jQuery('settings').className += " new";
            }
            site = window.location.href;
            //console.log(site);

            if (enableFirtTime) {
                setEnabled(false);
                enableFirtTime = false;
            }
            updatefun();
            onToggle();
        });


        $('.acc-chart-close').click(function () {
            jQuery(".acc-chart").remove();
            jQuery('#' + $maincontent).accessibilityClear();
            jQuery("#deluminate_fullscreen_workaround").remove();
            jQuery("#deluminate_backdrop").remove();            
           
        });

      
  


var DEFAULT_SCHEME = "delumine-smart";

function getStoredBool(key, default_val) {
    default_val = typeof default_val !== 'undefined' ? default_val : 'false';

    var result = localStorage[key];
    if (result === 'true' || result === 'false') {
        return (result === 'true');
    }
    localStorage[key] = default_val;
    return (default_val.toString() === 'true');
}

function getEnabled() {
    return getStoredBool('enabled', true);
}

function setEnabled(enabled) {
    localStorage['enabled'] = enabled;
}

function getLowContrast() {
    return getStoredBool('low_contrast');
}

function setLowContrast(low_contrast) {
    localStorage['low_contrast'] = low_contrast;
}

function getForceText() {
    return getStoredBool('force_text');
}

function setForceText(force_text) {
    localStorage['force_text'] = force_text;
}

function getKillBackground() {
    return getStoredBool('kill_background');
}

function setKillBackground(kill_background) {
    localStorage['kill_background'] = kill_background;
}

function getKeyAction() {
    var keyAction = localStorage['keyaction'];
    if (keyAction == 'global' || keyAction == 'site') {
        return keyAction;
    }
    keyAction = 'global';
    localStorage['keyaction'] = keyAction;
    return keyAction;
}

function setKeyAction(keyAction) {
    if (keyAction != 'global' && keyAction != 'site') {
        keyAction = 'global';
    }
    localStorage['keyaction'] = keyAction;
}

function getDefaultScheme() {
    var scheme = localStorage['scheme'];
    if (scheme) {
        return scheme;
    }
    scheme = DEFAULT_SCHEME;
    localStorage['scheme'] = scheme;
    return scheme;
}

function setDefaultScheme(scheme) {
    if (!(scheme)) {
        scheme = DEFAULT_SCHEME;
    }
    localStorage['scheme'] = scheme;
}

function getSiteScheme(site) {
    var scheme = getDefaultScheme();
    try {
        var siteSchemes = JSON.parse(localStorage['siteschemes']);
        scheme = siteSchemes[site];
        if (!(scheme)) {
            scheme = getDefaultScheme();
        }
    } catch (e) {
        scheme = getDefaultScheme();
    }
    return scheme;
}

function setSiteScheme(site, scheme) {
    if (!(scheme)) {
        scheme = getDefaultScheme();
    }
    var siteSchemes = {};
    try {
        siteSchemes = JSON.parse(localStorage['siteschemes']);
        siteSchemes['www.example.com'] = getDefaultScheme();
    } catch (e) {
        siteSchemes = {};
    }
    siteSchemes[site] = scheme;
    localStorage['siteschemes'] = JSON.stringify(siteSchemes);
}

function resetSiteSchemes() {
    var siteSchemes = {};
    localStorage['siteschemes'] = JSON.stringify(siteSchemes);
}

function siteFromUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

function getSiteModifiers(site) {
    var modifiers = getDefaultModifiers();
    try {
        var siteModifiers = JSON.parse(localStorage['sitemodifiers'] || '{}');
        if (site in siteModifiers) {
            var modifierList = [];
            for (var mod in siteModifiers[site]) {
                modifierList.push(mod);
            }
            modifiers = modifierList.join(' ');
        } else {
            modifiers = getDefaultModifiers();
        }
    } catch (e) {
        modifiers = getDefaultModifiers();
    }
    return modifiers;
}

function getDefaultModifiers() {
    var modifiers = [];
    if (getLowContrast()) {
        modifiers.push('low-contrast');
    }
    if (getForceText()) {
        modifiers.push('force_text');
    }
    if (getKillBackground()) {
        modifiers.push('kill_background');
    }
    return modifiers.join(' ');
}

function getGlobalSettings() {
    var globalSettings;
    try {
        globalSettings = JSON.parse(localStorage['settings']);
    } catch (e) {
        globalSettings = {};
    }
    return globalSettings;
}

function setGlobalSetting(key, value) {
    var globalSettings = getGlobalSettings();
    globalSettings[key] = value;
    localStorage['settings'] = JSON.stringify(globalSettings);
}

function setDefaultModifiers(modifiers) {
    var low_contrast = (modifiers.indexOf('low-contrast') > -1).toString();
    var force_text = (modifiers.indexOf('force_text') > -1).toString();
    var kill_background = (modifiers.indexOf('kill_background') > -1).toString();
    localStorage['low_contrast'] = low_contrast;
    localStorage['force_text'] = force_text;
    localStorage['kill_background'] = kill_background;
}

function addSiteModifier(site, modifier) {
    var siteModifiers = {};
    try {
        siteModifiers = JSON.parse(localStorage['sitemodifiers'] || '{}');
        siteModifiers['www.example.com'] = getDefaultModifiers();
    } catch (e) {
        siteModifiers = {};
    }
    try {
        siteModifiers[site][modifier] = true;
    } catch (e) {
        siteModifiers[site] = {};
        // Get a list of non-empty modifiers
        defaultModifiers = getDefaultModifiers().split(' ').filter(
          function (x) { return x.length > 0; }
        );
        for (var i = 0; i < defaultModifiers.length; i++) {
            siteModifiers[site][defaultModifiers[i]] = true;
        }
        siteModifiers[site][modifier] = true;
    }
    localStorage['sitemodifiers'] = JSON.stringify(siteModifiers);
}

function delSiteModifier(site, modifier) {
    var siteModifiers = {};
    try {
        siteModifiers = JSON.parse(localStorage['sitemodifiers'] || '{}');
        siteModifiers['www.example.com'] = getDefaultModifiers();
    } catch (e) {
        siteModifiers = {};
    }
    try {
        delete siteModifiers[site][modifier];
    } catch (e) {
        siteModifiers[site] = {};
        // Get a list of non-empty modifiers
        defaultModifiers = getDefaultModifiers().split(' ').filter(
          function (x) { x }
        );
        for (var i = 0; i < defaultModifiers.length; i++) {
            siteModifiers[site][defaultModifiers[i]] = true;
        }
        delete siteModifiers[site][modifier];
    }
    localStorage['sitemodifiers'] = JSON.stringify(siteModifiers);
}

function resetSiteModifiers() {
    var siteModifiers = {};
    localStorage['sitemodifiers'] = JSON.stringify(siteModifiers);
}

function changedFromDefault() {
    var siteModList = getSiteModifiers(site);
    var defaultModList = getDefaultModifiers();
    return (getSiteScheme(site) != getDefaultScheme() ||
            siteModList != defaultModList);
}

function isDisallowedUrl(url) {
    if (url.indexOf('about') == 0) {
        return true;
    } else if (url.indexOf('chrome') == 0) {
        // Special case the "newtab" page, which this extension affects.
        if (siteFromUrl(url) == 'newtab')
            return false;
        else
            return true;
    }
    return false;
}

function getSettingsViewed() {
    return getStoredBool('settings_viewed');
}

function setSettingsViewed() {
    localStorage['settings_viewed'] = true;
}

var backgroundColor;
var foregroundColor;
var contrastratio;
var jQuerymaincontent;
var backcolor;
var $maincontent;
var isCheck = false;
var isContrastCheck = false;
$("#colorcontrast").on("click",function(){
		$(this).addClass("buttonvisited");
    if (!isContrastCheck) {
        isContrastCheck = true;
        $maincontent = $('#mainContent').find('a').length>1?$maincontent='#mainContent':$('main').length>0?$maincontent='main':$maincontent='#primaryArea';
        $($maincontent).calculateContrast();
}
});
// ************Start of JS code to check accessibility******************
(function (jQuery) {
    jQuery.fn.accessibilityClear = function () {
        var htmlBody = jQuery(this);
        var h1 = jQuery(this).find("h1");
        var h2 = jQuery(this).find("h2");
        var h3 = jQuery(this).find("h3");
        var h4 = jQuery(this).find("h4");
        var h5 = jQuery(this).find("h5");
        var h6 = jQuery(this).find("h6");
        var images = jQuery(this).find("img");
        var links = jQuery(this).find("a");

        jQuery('.clsgreen').remove();
        jQuery('.clsred').remove();

        jQuery(".acc-report-table").empty();
        jQuery.each(h1, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(h2, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(h3, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(h4, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(h5, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(h6, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).css("background-color", "transparent");
        });

        jQuery.each(links, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            //jQuery(this).css("background-color", "transparent");
        });
        jQuery.each(images, function (index, value) {
            jQuery(this).removeClass("highlight-failed-element");
            jQuery(this).removeClass("clsimgborder");           
        });
        jQuery(".acc-errors ul").empty();
        jQuery(".padding-clear").css("padding-top", 80);

        jQuery(".acc-stats").hide();
        jQuery(".acc-chart").css("overflow-y", "auto");
        jQuery(".eleFocusbale").remove();
        jQuery('a,area[href],iframe,button, :input, [tabindex]').removeClass("clsfocusable");
    };

    jQuery.extend(jQuery.expr[':'], {
        focusable: function (el, index, selector) {
            return jQuery(el).is('a, button, :input, [tabindex]');
        }
    });    

    jQuery.fn.getBg = function () {
        return jQuery(this).parents().filter(function () {

            var color = jQuery(this).css('background-color');

            if (color != 'transparent' && color != 'rgba(0, 0, 0, 0)' && color != undefined) {
                return color;
            }
        }).css('background-color');
    };   

    jQuery.fn.calculateContrast = function () {
        var prvParentElement = null;
        $maincontent = $('#mainContent').length>1?$maincontent='#mainContent':$('main').length>0?$maincontent='main':$maincontent='#primaryArea';

        if ($maincontent.length > 0) {
            //jQuery("#" + $maincontent + " *").each(function () {
            jQuery($maincontent+' *').each(function () {
                var isTextElement = jQuery(this).is('p,span,h1,h2,h3,h4,h5,h6,a');

                if (isTextElement) {
                    var backgroundEle = jQuery(this).parent();
                    backgroundColor = jQuery(this).getBg();// jQuery(this).closest('div').css("background-color");

                    if (prvParentElement != jQuery(this).closest('div,section').attr('class')) {
                        prvParentElement = jQuery(this).closest('div,section').attr('class');
                        foregroundColor = jQuery(this).css("color");
                        checkcontrast();
                        var ele = '<span class=' + backcolor + '><strong>' + contrastratio + '</strong></span>';
                        jQuery(ele).insertAfter(jQuery(this));
                    }
                }
            });
        }
        else {
            isCheck = false;
            isContrastCheck = false;
        }

    };

    jQuery.fn.accessibilityCheck = function () {

        var moreH1Error = "Only one H1 Tag is allowed in a web page. Other instance found at -- ";
        var noAriaError = "ARIA-LABEL attribute not defined for -- ";
        var notValidAriaError = "ARIA-LABEL value is not precise for -- ";
        var ariaEmptyError = "ARIA-LABEL value is empty for -- ";
        var headerSizeDiffers = "Header tags must have same size at --";
        var headerHierarchy = "Header hierarchy not follwed for--";

        var noAltError = "ALT attribute not defined for -- ";
        var altEmptyError = "Alt Text is empty for -- ";

        var tableHeader = '<tr><th>MAS Rule</th><th>Description</th> <th> Result</th></tr>';
        var ifrmeError = "Iframes title should be Unique--";

        var htmlBody = jQuery(this);
        var h1 = jQuery(this).find("h1");
        var images = jQuery(this).find("img");
   
        var links = jQuery(this).find("a");

        var iFrames = jQuery(this).find("iframe");
        jQuery(".acc-report-table").append(tableHeader);
        var h1Count = 0;
        var headerHierarchyCount = 0;
        var focusCount = 0;

        jQuery.fn.showAccordian=function(element) {
            e.preventDefault();
            var currentAttrValue = jQuery('.' + element).attr('href');
            if (jQuery(currentAttrValue).hasClass('accordianShow')) {
                close_accordion_section(currentAttrValue);
            } else {
                close_accordion_section();
                // Open up the hidden content panel               
                jQuery(currentAttrValue).addClass('accordianShow')
            }

        }

        function getStyleBySelector(selector) {
            var sheetList = document.styleSheets;
            var ruleList;
            var i, j;

            /* look through stylesheets in reverse order that
               they appear in the document */
            for (i = sheetList.length - 1; i >= 0; i--) {
                ruleList = sheetList[i].cssRules;
                if (ruleList != null) {
                    for (j = 0; j < ruleList.length; j++) {
                        if (ruleList[j].type == CSSRule.STYLE_RULE &&
                            ruleList[j].selectorText == selector) {
                            return ruleList[j].style;
                        }
                    }
                }
            }
            return null;
        }



        $("#" + $maincontent + " *").each(function () {
            var isfocusable = (jQuery(this).is('a,area[href],iframe,button, :input, [tabindex]:not([tabindex^="-"])') && jQuery(this).is(':visible'));
            var isUHFLinks=false;
            if ($(this).parents('#headerArea').length > 0) 
            { isUHFLinks = true }
            if (isfocusable && !isUHFLinks) {

                var color = window.getComputedStyle(jQuery(this)[0], ':focus').getPropertyValue('background-color');


                //var color = getStyleBySelector(jQuery(this+':hover')).color;
                //var bgColor = getStyleBySelector(jQuery(this +':hover')).background - color;
                //var textstyle = getStyleBySelector(jQuery(this +':hover')).background - color;

                var tagname = $(this)[0].tagName;
                var styles = document.styleSheets;
             
                for (var i = 0, len = styles.length; i < len; i++) {
                    
                    var sheet = styles[i], rules = sheet.cssRules;
                    if (rules != null) {
                        for (var j = 0, len2 = rules.length; j < len; j++) {

                            var rule = rules[j];
                            if (rule && rule.selectorText == tagname.toLowerCase().toString() + ":hover") {  }
                        }
                    }


                }

               
                focusCount = focusCount + 1;
                var ele = '<span class="eleFocusbale"><strong>' + focusCount + '</strong></span>';
                jQuery(this).addClass("clsfocusable");
                jQuery(ele).insertAfter(jQuery(this));
            }
        });

      
        var errorH1Text = new Array();
        var headerH1offset = new Array();
        $("#" + $maincontent + " *").find("h1").each(function (index, value) {
            if (index > 0) {
                h1Count = h1Count + 1;
                errorH1Text[h1Count] = jQuery(this)[0].outerHTML;//[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                jQuery(this).addClass("highlight-failed-element");
                headerH1offset[h1Count] = jQuery(this).offset().top;
            }
        });
        if (h1Count > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank">MAS 27A</a></td><td class="acc-element"> Headings (One H1 tag allowed per page) </td> <td class="acc-element-result-fail"> Failed (' + h1Count + ')  <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);

            var result = '';
            for (var index = 1; index <= h1Count; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located"  data-acc-offset="' + headerH1offset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorH1Text[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-h1Header"><span class="icon-arrow">' + moreH1Error + '</span> </a> <div id="accrodian-h1Header" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);

        } else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 27A</a></td><td class="acc-element"> Headings (One H1 tag allowed per page) </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }

        jQuery.fn.isAfter = function (sel) {
            return this.prevAll(sel).length !== 0;
        }
        jQuery.fn.isBefore = function (sel) {
            return this.nextAll(sel).length !== 0;
        }


        var errorHierarchyText = new Array();
        var headerHierarchyoffset = new Array();

        jQuery.fn.checkHierarchy = function (tagName) {
            headerHierarchyCount = headerHierarchyCount + 1;
            errorHierarchyText[headerHierarchyCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
            this.addClass("highlight-failed-element");
            headerHierarchyoffset[headerHierarchyCount] = jQuery(this).offset().top;
        }

        jQuery.each(h1, function (index, value) {
            if (jQuery(this).isAfter("h2") || jQuery(this).isAfter("h3") || jQuery(this).isAfter("h4") || jQuery(this).isAfter("h5") || jQuery(this).isAfter("h6")) {
                jQuery(this).checkHierarchy("h1");
            }
        });

        var h2 = jQuery(this).find("h2");
        jQuery.each(h2, function (index, value) {
            if (jQuery(this).isBefore("h1") || jQuery(this).isAfter("h3") || jQuery(this).isAfter("h4") || jQuery(this).isAfter("h5") || jQuery(this).isAfter("h6")) {
                jQuery(this).checkHierarchy("h2");
            }
        });
        var h3 = jQuery(this).find("h3");
        jQuery.each(h3, function (index, value) {
            if (jQuery(this).isBefore("h1") || jQuery(this).isBefore("h2") || jQuery(this).isAfter("h4") || jQuery(this).isAfter("h5") || jQuery(this).isAfter("h6")) {
                jQuery(this).checkHierarchy("h3");
            }
        });
        var h4 = jQuery(this).find("h4");
        jQuery.each(h4, function (index, value) {
            if (jQuery(this).isBefore("h1") || jQuery(this).isBefore("h2") || jQuery(this).isBefore("h3") || jQuery(this).isAfter("h5") || jQuery(this).isAfter("h6")) {
                jQuery(this).checkHierarchy("h4");
            }
        });
        var h5 = jQuery(this).find("h5");
        jQuery.each(h5, function (index, value) {
            if (jQuery(this).isBefore("h1") || jQuery(this).isBefore("h2") || jQuery(this).isBefore("h3") || jQuery(this).isBefore("h4") || jQuery(this).isAfter("h6")) {
                jQuery(this).checkHierarchy("h5");
            }
        });
        var h6 = jQuery(this).find("h6");
        jQuery.each(h6, function (index, value) {
            if (jQuery(this).isBefore("h1") || jQuery(this).isBefore("h2") || jQuery(this).isBefore("h3") || jQuery(this).isBefore("h4") || jQuery(this).isBefore("h5")) {
                jQuery(this).checkHierarchy("h6");
            }
        });

        if (headerHierarchyCount > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 26A</a></td><td class="acc-element"> Consistent navigation(Headers hierarchy) </td> <td class="acc-element-result-fail"> Failed (' + headerHierarchyCount + ')  <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
            var result = '';
            
            for (var index = 1; index <= headerHierarchyCount; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located"  data-acc-offset="' + headerHierarchyoffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorHierarchyText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-headerHierarchy"><span class="icon-arrow">' + headerHierarchy + '</span> </a> <div id="accrodian-headerHierarchy" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);

        } else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 26A</a></td><td class="acc-element"> Consistent navigation(Headers hierarchy) </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }


        var headerInnerElementCount = 0
        var errorheaderText = new Array();
        var headerChildOffset = new Array();
        jQuery(":header").each(function (index, value) {
            jQuery(this).children().each(function () {
                if (!jQuery(this).is("br")) {
                    headerInnerElementCount += 1;
                    errorheaderText[headerInnerElementCount] = jQuery(this)[0].outerHTML;// jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                    jQuery(this).parent().addClass("highlight-failed-element");
                    headerChildOffset[headerInnerElementCount] = jQuery(this).offset().top;
                }
            });
        });

        if (headerInnerElementCount > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 40</a></td><td class="acc-element"> Info and Relationships(Headers has no child Element) </td> <td class="acc-element-result-fail"> Failed (' + headerInnerElementCount + ') <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
            var result = '';

            for (var index = 1; index <= headerInnerElementCount; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located" data-acc-offset="' + headerChildOffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorheaderText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-headerchild"><span class="icon-arrow">child elements exists for below list of headers</span> </a> <div id="accrodian-headerchild" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }
        else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 40</a></td><td class="acc-element"> Info and Relationships(Headers has no child Element)</td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }


        var imageCount = 0;
        var errorimageText = new Array();
        var imageOffset = new Array();
        jQuery.each(images, function (index, value) {

            var parentEls = $(this).parents().map(function () {
                return this.tagName;
            }).get().join(",");
            //Avoid Decorative images //
            if (parentEls.indexOf(",A,")==-1) {
                var hasAlt = (jQuery(this).attr("alt") != null);
                if (!hasAlt && jQuery(this).is(':visible')) {
                    imageCount = imageCount + 1;
                    errorimageText[imageCount] = jQuery(this)[0].outerHTML;//[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                    jQuery(this).addClass("highlight-failed-element");
                    jQuery(this).addClass("clsimgborder");
                    imageOffset[imageCount] = jQuery(this).offset().top;
                }
                else if (hasAlt && jQuery(this).attr("alt").length < 1 && jQuery(this).is(':visible')) {
                    imageCount = imageCount + 1;
                    errorimageText[imageCount] = jQuery(this)[0].outerHTML; //jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                    jQuery(this).addClass("highlight-failed-element");
                    jQuery(this).addClass("clsimgborder");
                    imageOffset[imageCount] = jQuery(this).offset().top;
                }
            }
        });

        if (imageCount > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 20</a></td><td class="acc-element"> Images(Non-text content) </td> <td class="acc-element-result-fail"> Failed (' + imageCount + ') <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
            var result = '';
            for (var index = 1; index <= imageCount; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located" data-acc-offset="' + imageOffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorimageText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-image"><span class="icon-arrow">alt-text not exists for below list of images</span> </a> <div id="accrodian-image" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }
        else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 20</a></td><td class="acc-element"> Images(Non-text content) </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }


        var linkCount = 0;
        var linkOffset;
        var linkUniqueID;
        var errMessage;
        var errorLinkText = new Array();
        var linkOffset = new Array();
        jQuery.each(links, function (index, value) {

            var hasAriaLabel = (jQuery(this).attr("aria-label") != null);
            var childEls = $(this).has('button').length;
            var isUHFLinks=false;
            if ($(this).is('[class*=-uhf]'))
            { isUHFLinks =true}
          
            //Avoid anchors with button //
            if (!childEls && !isUHFLinks) {
            if (!hasAriaLabel && jQuery(this).is(':visible')) {               
                linkCount = linkCount + 1;
                errorLinkText[linkCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                jQuery(this).addClass("highlight-failed-element");
                linkOffset[linkCount] = jQuery(this).offset().top;
                
            } else if (hasAriaLabel && jQuery(this).attr("aria-label").length < 1 && jQuery(this).is(':visible')) {
                linkCount = linkCount + 1;
                errorLinkText[linkCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                jQuery(this).addClass("highlight-failed-element");
                linkOffset[linkCount] = jQuery(this).offset().top;
            }
			}

        });
        if (linkCount > 0) {                       
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 20B</a></td><td class="acc-element"> Link P​urpose (In Context) </td> <td class="acc-element-result-fail"> Failed (' + linkCount + ')<span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);           
            var result='';
            for(var index=1;index<=linkCount;index++)
            {
                result = '<li><a href="#" title="Click here to identify where the issue located"  data-acc-offset="' + linkOffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorLinkText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-anchor"><span class="icon-arrow">Aria-label not exists for below list of anchors</span> </a> <div id="accrodian-anchor" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
  
        } else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 20B</a></td><td class="acc-element"> Link P​urpose (In Context) </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }

    
        var iElementCount = 0;
        var errorElementText = new Array();
        var ElementOffset = new Array();
        $("#" + $maincontent + " *").each(function () {
            var hasID = jQuery(this).attr("id");		
            if (hasID != null || typeof hasID != 'undefined') {
                if (hasID.length != 0 && jQuery('[id="' + jQuery(this).attr("id") + '"]').length > 1 && jQuery(this).is(':visible')) {
                    iElementCount = iElementCount + 1;
                    errorElementText[iElementCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML)); //jQuery(this)[0].outerHTML;
                    jQuery(this).addClass("highlight-failed-element");
                    ElementOffset[iElementCount] = jQuery(this).offset().top;
                }
            }
        });
        if (iElementCount > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 40B</a></td><td class="acc-element"> Elements ID unique </td> <td class="acc-element-result-fail"> Failed (' + iElementCount + ') <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);

            var result = '';
            for (var index = 1; index <= iElementCount; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located"  data-acc-offset="' + ElementOffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorElementText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-element"><span class="icon-arrow">An elements ID must be unique in the DOM </span> </a> <div id="accrodian-element" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        } else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 40B</a></td><td class="acc-element"> Elements ID unique </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }



        var iFrameCount = 0;
        var prvTitle;
        var errorframeText = new Array();
        var iFrameOffset = new Array();
        jQuery.each(iFrames, function (index, value) {
             var hastitle = (jQuery(this).attr("title") != null);
            if (!hastitle && prvTitle === jQuery(this).attr("title")) {
                prvTitle = jQuery(this).attr("title")
                iFrameCount = iFrameCount + 1;
                errorframeText[iFrameCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                jQuery(this).addClass("highlight-failed-element");
                iFrameOffset[iFrameCount] = jQuery(this).offset().top;

            } else if (hastitle && jQuery(this).attr("title").length < 1 && jQuery(this).is(':visible')) {
                iFrameCount = iFrameCount + 1;
                errorframeText[iFrameCount] = jQuery(this)[0].outerHTML.slice(0, jQuery(this)[0].outerHTML.indexOf(jQuery(this)[0].innerHTML));
                jQuery(this).addClass("highlight-failed-element");
                iFrameOffset[iFrameCount] = jQuery(this).offset().top;

            }
        });
        if (iFrameCount > 0) {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 27A</a></td><td class="acc-element"> Iframes Title must be unique </td> <td class="acc-element-result-fail"> Failed (' + iFrameCount + ') <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);

            var result = '';
            for (var index = 1; index <= iFrameCount; index++) {
                result = '<li><a href="#" title="Click here to identify where the issue located" data-acc-offset="' + iFrameOffset[index] + '"><xmp style="padding:0px;margin:0px;white-space:pre-wrap;word-break:break-word;">' + errorLinkText[index] + '</xmp></a></li>' + result;
            }

            tableRow = '<tr> <td colspan=3><div class="accordian"><a class="accordion-section-title" href="#accrodian-iframe"><span class="icon-arrow">An Iframes title must be unique in the DOM </span> </a> <div id="accrodian-iframe" class="accordion-section-content"><ul>' + result + '</ul></div></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        } else {
            var tableRow = '<tr><td><a href="https://microsoft.sharepoint.com/teams/msenable/Pages/MASDetails.aspx" target="_blank" >MAS 27A</a></td><td class="acc-element"> Iframes Title must be unique  </td> <td class="acc-element-result-pass"> Pass <span></span></td></tr>';
            jQuery(".acc-report-table").append(tableRow);
        }
        jQuery(".padding-clear").css("padding-top", jQuery(".acc-chart").height() + 20);
        jQuery(".acc-stats").fadeIn(400);
        jQuery(".acc-chart").css("overflow", "hidden !important");    
        
    };    
     
  
    function close_accordion_section(ele) {
        jQuery(ele).removeClass('accordianShow');       
    }

	
    jQuery(document).ready(function () {
		
		$('body').on('click', '.accordian a', function(e) {
            e.preventDefault();
            var currentAttrValue = jQuery(this).attr('href');
            if (jQuery(currentAttrValue).hasClass('accordianShow')) {
                close_accordion_section(currentAttrValue);
            } else {
                close_accordion_section();
                // Open up the hidden content panel    
                jQuery(currentAttrValue).addClass('accordianShow');
            }
	
		});
		
		$('body').on('click', '.accordion-section-content a', function(e) {
			e.preventDefault();           
            //console.log($(this).attr('data-acc-offset'));
            $('html, body').animate({
                scrollTop: parseInt($(this).attr('data-acc-offset') - 230)
            }, 1000);           
        });

    }); 

    // ************Start of JS code to Calculate High Contrast Ratio****************** 

    function checkcontrast() {

        foregroundColor = hexc(foregroundColor);
        backgroundColor = hexc(backgroundColor);

        var color = getColor(foregroundColor);
        var bgcolor = getColor(backgroundColor);

        var L1 = getL(color);

        var L2 = getL(bgcolor);


        if (L1 !== false && L2 !== false) {
            var ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
            contrastratio = (Math.round(ratio * 100) / 100) + ":1";

           
            if (ratio >= 3) {
                backcolor = "clsyellow";
            }
            else {
                backcolor = "clsred";
            }
            if ((Math.round(ratio * 100) / 100) >= 4.5) {
                backcolor = "clsgreen";
            }
            else {
                
            }
            if (ratio >= 7) {
                backcolor = "clsgreen";
            }
            else {

            }
        }

    }

    function hexc(colorval) {
        var color = '';
        if (typeof colorval != 'undefined') {
            var parts = colorval.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            if (parts != null) {
                delete (parts[0]);
                for (var i = 1; i <= 3; ++i) {
                    parts[i] = parseInt(parts[i]).toString(16);
                    if (parts[i].length == 1) parts[i] = '0' + parts[i];
                }
                color = '#' + parts.join('');
            }
        }

        return color;
    }

    function getColor(colorobj) {
        var color = colorobj.replace("#", "");
        return color;
    }

    function getL(color) {
        if (color.length == 3) {
            var R = getsRGB(color.substring(0, 1) + color.substring(0, 1));
            var G = getsRGB(color.substring(1, 2) + color.substring(1, 2));
            var B = getsRGB(color.substring(2, 3) + color.substring(2, 3));
            update = true;
        }
        else if (color.length >= 6) {
            var R = getsRGB(color.substring(0, 2));
            var G = getsRGB(color.substring(2, 4));
            var B = getsRGB(color.substring(4, 6));
            update = true;
        }
        else {
            update = false;
        }
        if (update == true) {
            var L = (0.2126 * R + 0.7152 * G + 0.0722 * B);
            return L;
        }
        else {
            return false;
        }

    }

    function getsRGB(color) {
        color = getRGB(color);
        if (color !== false) {
            color = color / 255;
            color = (color <= 0.03928) ? color / 12.92 : Math.pow(((color + 0.055) / 1.055), 2.4);
            return color;
        }
        else {
            return false;
        }
    }

    function getRGB(color) {
        try {
            var color = parseInt(color, 16);
        }
        catch (err) {
            var color = false;
        }
        return color;
    }

    function changehue(loc, dir) {
        var color = getColor(loc);
        if (color.length == 3) {
            var R = color.substring(0, 1) + color.substring(0, 1);
            var G = color.substring(1, 2) + color.substring(1, 2);
            var B = color.substring(2, 3) + color.substring(2, 3);
        }
        else if (color.length == 6) {
            var R = color.substring(0, 2);
            var G = color.substring(2, 4);
            var B = color.substring(4, 6);
            update = true;
        }
        else {
            update = false;
        }
        R = getRGB(R);
        G = getRGB(G);
        B = getRGB(B);

        HSL = RGBtoHSL(R, G, B);
        var lightness = HSL[2];
        if (update == true) {
            lightness = (dir == "lighten") ? lightness + 6.25 : lightness - 6.25;
            if (lightness > 100) {
                lightness = 100;
            }
            if (lightness < 0) {
                lightness = 0;
            }
            RGB = hslToRgb(HSL[0], HSL[1], lightness);
            R = RGB[0];
            G = RGB[1];
            B = RGB[2];
            if (!(R >= 0) && !(R <= 255)) R = 0
            if (!(G >= 0) && !(G <= 255)) G = 0
            if (!(B >= 0) && !(B <= 255)) B = 0
            R = (R >= 16) ? R.toString(16) : "0" + R.toString(16);
            G = (G >= 16) ? G.toString(16) : "0" + G.toString(16);
            B = (B >= 16) ? B.toString(16) : "0" + B.toString(16);
            R = (R.length == 1) ? R + R : R;
            G = (G.length == 1) ? G + G : G;
            B = (B.length == 1) ? B + B : B;
            document.getElementById(loc).value = R + G + B;
            checkcontrast();
        }
    }

    function RGBtoHSL(r, g, b) {
        var Min = 0;
        var Max = 0;
        r = (eval(r) / 51) * .2;
        g = (eval(g) / 51) * .2;
        b = (eval(b) / 51) * .2;

        if (eval(r) >= eval(g))
            Max = eval(r);
        else
            Max = eval(g);
        if (eval(b) > eval(Max))
            Max = eval(b);

        if (eval(r) <= eval(g))
            Min = eval(r);
        else
            Min = eval(g);
        if (eval(b) < eval(Min))
            Min = eval(b);

        L = (eval(Max) + eval(Min)) / 2;
        if (eval(Max) == eval(Min)) {
            S = 0;
            H = 0;
        }
        else {
            if (L < .5)
                S = (eval(Max) - eval(Min)) / (eval(Max) + eval(Min));
            if (L >= .5)
                S = (eval(Max) - eval(Min)) / (2 - eval(Max) - eval(Min));
            if (r == Max)
                H = (eval(g) - eval(b)) / (eval(Max) - eval(Min));
            if (g == Max)
                H = 2 + ((eval(b) - eval(r)) / (eval(Max) - eval(Min)));
            if (b == Max)
                H = 4 + ((eval(r) - eval(g)) / (eval(Max) - eval(Min)));
        }
        H = Math.round(H * 60);
        if (H < 0) H += 360;
        if (H >= 360) H -= 360;
        S = Math.round(S * 100);
        L = Math.round(L * 100);
        return [H, S, L];
    }

    function hslToRgb(H, S, L) {
        var p1, p2;
        L /= 100;
        S /= 100;
        if (L <= 0.5) p2 = L * (1 + S);
        else p2 = L + S - (L * S);
        p1 = 2 * L - p2;
        if (S == 0) {
            R = L;
            G = L;
            B = L;
        }
        else {
            R = FindRGB(p1, p2, H + 120);
            G = FindRGB(p1, p2, H);
            B = FindRGB(p1, p2, H - 120);
        }
        R *= 255;
        G *= 255;
        B *= 255;
        R = Math.round(R);
        G = Math.round(G);
        B = Math.round(B);

        return [R, G, B];
    };

    function FindRGB(q1, q2, hue) {
        if (hue > 360) hue = hue - 360;
        if (hue < 0) hue = hue + 360;
        if (hue < 60) return (q1 + (q2 - q1) * hue / 60);
        else if (hue < 180) return (q2);
        else if (hue < 240) return (q1 + (q2 - q1) * (240 - hue) / 60);
        else return (q1);
    }

    // ************End of JS code to Calculate High Contrast Ratio****************** 

}(jQuery));
// ************End of JS code to check accessibility******************



});





function UnitTestCasesCheck() {

    var images =$("#mainContent").length>0? $("#mainContent").find("img"):$("#primaryArea").find("img");
    var links = $("#mainContent").length>0? $("#mainContent").find("a"):$("#primaryArea").find("a");
	

    var focusCount = 0;

    //$("#mainContent" + " *").each(function () {
    //    var isExist = (($(this).attr("style") == null || $(this).attr("style") == ""));

    //    if (!isExist) {
    //        var ele = '<span class="eleFocusbale"><strong>' + 'style=' + $(this).attr("style") + '</strong></span>';
    //        $(this).addClass("clsfocusable");
    //        $(ele).insertAfter($(this));
    //    }
    //});

//looping all elements
    $("#mainContent" + " *").each(function () {
        var isfocusable = ($(this).is('a,area[href],iframe,button, :input, [tabindex]:not([tabindex^="-"])') && $(this).is(':visible'));
        if (isfocusable) {
            focusCount = focusCount + 1;
            var ele = '<span class="eleFocusbale"><strong>' + focusCount + '</strong></span>';
            $(this).addClass("clsfocusable");
            $(ele).insertAfter($(this));
        }
    });
//adding elefocussable class
    $.each(images, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'alt=' + $(this).attr("alt") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertAfter($(this));
        $('picture .clsfocusable + .eleFocusbale').css({
            'position': 'absolute',
            'bottom': '20'
        });
    });

//aria-label logic
    $.each(links, function (index, value) {
        var ele = '<span class="eleFocusbale"><strong>' + 'aria-label=' + $(this).attr("aria-label") + '</strong></span>';
        $(this).addClass("clsfocusable");
        $(ele).insertBefore($(this));

    });

    // $('body').append('<div class="click_redlines">Click For Image Ratios</div>');

    // $('.click_redlines').css({
        // 'position': 'fixed',
        // 'top': '100px',
        // 'right': '15px',
        // 'background': 'green',
        // 'padding': '15px',
        // 'z-index': '100000',
        // 'color': '#fff',
        // 'cursor': 'pointer'
    // });

    // $('.click_redlines').on('click', function () {
        // imageratio();
        // clickonce = 1;
    // });



}

function calculate(ele1, ele2) {
    if (ele1 == null || ele2 == null) return;
    if (ele1.offset().top > ele2.offset().top) { //if second element is selected first
        var temp = ele1;
        ele1 = ele2;
        ele2 = temp;
    }


   var finecalcele1 = calculateFineDistance(ele1);
    var finecalcele2 = calculateFineDistance(ele2);

    //if ele1 is parent element of ele2

    var endpointele1 = ele1.offset().top + ele1.innerHeight() - parseFloat(ele1.css('paddingBottom')) - finecalcele1;
    var startpointele2 = ele2.offset().top + parseFloat(ele2.css('paddingTop')) + finecalcele2;

    if ((startpointele2 - endpointele1) < 0) {
        endpointele1 = ele1.offset().top - finecalcele1;
    }
    result = Math.ceil(startpointele2 - endpointele1);
    console.log(result);
    //decorateSelection(ele1);
    //decorateSelection(ele2);

    $('body').append('<span class="redlinedist distance' + clickcounter + '">' + result + 'px </span>');
    $('.distance' + clickcounter).css({
        'position': 'absolute',
        'top': '0',
        'height': result + 'px',
        'width': 'auto',
        'border-left': '1px solid red',
        'text-align': 'left',
        'z-index': '100000',
        'color': 'red'
    }).css('font-size', '14px', 'important');
    // $('.distance'+clickcounter).append('<i class="snapshot button blue-bgc" style="cursor:pointer;"><i>');
    // $('.snapshot'+clickcounter).on('click',function(){
    // $(this).css('display','none');
    // setTimeout(function(){
    // screenshot();
    // },1000);
    // });

    //decide on left
    if (click_redlin==1){
    var leftwidth = ele1.offset().left >= ele2.offset.left ? ele2.offset().left : ele1.offset().left; //$(window).width() / 2;
    //$('.distance' + clickcounter).offset({ top: endpointele1, left: left + ('.distance'+clickcounter).offset({ top:endpointele1, left:left + clickcounter*10}); * 10 });
    $('.distance' + clickcounter).offset({ top: endpointele1, left: leftwidth });
    }
    else {
        var leftwidth =  $(window).width() / 2;
        //$('.distance' + clickcounter).offset({ top: endpointele1, left: left + ('.distance'+clickcounter).offset({ top:endpointele1, left:left + clickcounter*10}); * 10 });
        $('.distance' + clickcounter).offset({ top: endpointele1, left: leftwidth });
    }

    selection1 = selection2 = false;
    clickcounter++;
}



function cleanDecoration(ele) {
    if (ele != null) {
        //ele.css('box-shadow','');
        if ($('body').find('.distance').length > 0) {
            $('.distance').remove();
        }
    }
}

function decorateSelection(ele) {
    ele.css('box-shadow', '0 0 5px rgba(81, 203, 238, 1)');
}

function calculateFineDistance(ele) {
    var dist = getLineHeight(ele) - getExactFontSize(ele) > 0 ? getLineHeight(ele) - getExactFontSize(ele) : 0;
    return ele.clone().children().remove().end().text().trim() != "" ? (dist) / 2 : 0;
}

function getLineHeight(ele) {
    return $.isNumeric(parseFloat(ele.css('line-height'))) && ele.prop("tagName") != "SPAN" ? parseFloat(ele.css('line-height')) : parseFloat(ele.css('font-size')) * 1.14;
}

function getExactFontSize(ele) {
    return parseFloat(ele.css('font-size')) * 0.7;
}





var clickonce = 0;
var onceresize = 0;




$(window).on('resize', function () {
    if (clickonce == 1) {
        imageratio();
    }
});


function imageratio() {
    $('picture').each(function () {
        var imgwidth = $(this).find('img').css('width');
        var imgheight = $(this).find('img').css('height');
        if ($(window).width() > 1083) {
            if ((!$(this).css('position') == 'absolute') || ($(this).css('position') == 'static')) {
                $(this).css('position', 'relative');
            }
        }
        else {

        }

        //$(this).css('position', 'relative');
        if (onceresize == 0) {
            $(this).append('<div class="overlay_redimage"></div>');
            $(this).find('.overlay_redimage').css({
                'position': 'absolute',
                'top': '0',
                'background': 'red',
                'opacity': '0.5',
                'z-index': '100000',
                'color': 'red'
            });
            $(this).append('<div class="display_imagesize"></div>');
            $(this).find('.display_imagesize').css({
                'position': 'absolute',
                'top': '0',
                'right': '0',
                'background': '#000',
                'z-index': '100000',
                'color': '#fff'
            });
        }
        $(this).find('.overlay_redimage').css({
            'height': imgheight,
            'width': imgwidth
        });

        var width_par = parseInt(imgwidth, 10);
        var height_par = parseInt(imgheight, 10);

        var ratio_image = width_par / height_par;    


        $(this).find('.display_imagesize').text(imgwidth + " * " + imgheight + "=" + ratio_image.toFixed(2));

    });
    onceresize = 1;
}
