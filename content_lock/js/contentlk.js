/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery.noConflict();
jQuery(document).ready(function($) {
        //no right click on download items 
        $('.whitepaper-download .locked a').bind('contextmenu', function(e){
            return false;
        });
        $('#case-download #locked a').bind('contextmenu', function(e){
            return false;
        });
        $('.thank-you-page .locked').each(function(){
            var text = $(this).text(),
            texthref = '<a href="'+text+'" target="_blank">Download</a>';
            
            $(this).html(texthref);
        });
        
         $('.thank-you-page .unlocked').each(function(){
            var text = $(this).text(),
            texthref = '<a href="'+text+'" target="_blank">Download</a>';
            
            $(this).html(texthref);
        });
        
        var referrer =  window.location.hash.substr(1);
	$("[id^=edit-submitted-mail-chimp-tracking-code]").val(referrer);
        var url = window.location.pathname.replace('/', '');
        /*if (url != ''){
             $('#demo a').bind('click', function(){
                path = $(this).attr('href');
                window.location.href = (url + path);
                return false;
             });
        };*/
       
 if($.cookie('Drupal.visitor.signup')){
     $('.whitepaper-download .locked a').bind('click', function(){
        var pathname = window.location.pathname.replace('/', ''),
        host = window.location.host;
        hrefPath = $(this).attr('href'),
        //hrefPath.hash='';
        //hash =  hrefPath.split('#');
        //hash = hrefPath.substring($(this).attr('href').indexOf('#')),
        hrefPath = hrefPath.substr(0,hrefPath.indexOf('#')),
        fullPath = 'http://' + host + hrefPath;
        

        window.location.href = (hrefPath + '/thank-you');
        return false;
     });
     //alert('this');
 }
 if(!$.cookie("Drupal.visitor.signup")){
            $(".whitepaper-download .locked a").bind('click', function(){
                var pathname = window.location.pathname.replace('/', ''),
    	        host = window.location.host;
    	        hrefPath = $(this).attr('href'),
                //hash =  hrefPath.split('#');
                hash = hrefPath.substring($(this).attr('href').indexOf('#')),
                nohash = hrefPath.substr(0,hrefPath.indexOf('#')),
    	        fullPath = 'http://' + host + hrefPath;
                
                $.cookie('hrefPath', fullPath);
                window.location.href = ('webform/registerleadgen-form?prev='+ nohash + '/thank-you' + hash);
                return false;
            });
        
            $("#case-download #locked a").bind('click', function(){
                    var pathname = window.location.pathname.replace('/', ''),
                    url = window.location.pathname,
                    urlsplit = url.split("/"),
                    lang = '/' + urlsplit[1],
                    host = window.location.host,
                    hrefPath = $(this).attr('href'),
                    fullPath = 'http://' + host + hrefPath;
                   
                    $.cookie('hrefPath', fullPath);
                    //window.location.href = ('/webform/registerleadgen-form?prev='+ nohash + hrefPath);
                    window.location.href = ('/webform/registerleadgen-form?prev=' + hrefPath);
                    return false;
            });
            
            $("#case-download-lang #locked a").bind('click', function(){
                    var pathname = window.location.pathname.replace('/', ''),
                    url = window.location.pathname,
                    urlsplit = url.split("/"),
                    lang = '/' + urlsplit[1],
                    host = window.location.host,
                    hrefPath = $(this).attr('href'),
                    fullPath = 'http://' + host + hrefPath;
                   
                    $.cookie('hrefPath', fullPath);
                    //window.location.href = ('/webform/registerleadgen-form?prev='+ nohash + hrefPath);
                    window.location.href = (lang + '/webform/registerleadgen-form?prev=' + hrefPath);
                    return false;
            });
        }
}); 