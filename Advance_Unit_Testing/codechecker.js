chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
            switch (message.type) {
                case "distance":
                    $("body").append('<contentmissed style="border:#000"></contentmissed>');
                    $("body").append('<totalhtml style="border:#000"></totalhtml>');
                    $("body *").css("display", "block");
					 $(".c-uhfh *").css("display", "inline-block");
                    $("#surface-lightbox-preview,script").css("display", "none");
                    var textcount=0;
                   
                    var showattr = function () {
                        var allattr = "";var datavg="",datamod;
                        $("*").each(function () {
                            datavg = $(this).closest("data-vg")!=undefined?$(this).closest("[data-vg]").attr("data-vg"):"";
                            datmod = $(this).closest("data-module-id") != undefined ? $(this).closest("[data-module-id]").attr("data-module-id") : "";
                        
                            $.each(this.attributes, function () {
                                if (this.specified) {
                                    //console.log(this.name, this.value)
                                    allattr += '<tr><td style="color:#000">' + this.name + '</td><td style="color:#000">' + this.value + '</td> <td style="color:#000">' + datavg + '</td> <td style="color:#000">' + datmod + '</td> </tr>';
                                }
                            });
                        });
                        jQuery('body').append("<attributestable class=''><div class=''><table id='extractattr' data-f-sort='true'><thead><tr><th>Attr name </th><th>Attr value</th> <th>data-vg</th> <th>data-mod-id</th></tr></thead><tbody>" + allattr + "</tbody></table></div></attributestable>");

                        
                    }
                    
                            var showMeta = function() {
                                var allMetaData = "";
                                var metaTitle = '<tr><td><span style="color: green">Title</span></td><td>' + jQuery("meta[name=Title], meta[name=title]").attr("content") + '</td></tr>';
                                var metaDescription = '<tr><td><span style="color: green">Description</span></td><td>' + jQuery("meta[name=Description], meta[name=description]").attr("content") + '</td></tr>';
                                var metaKeywords = '<tr><td><span style="color: green">Keywords</span></td><td>' + jQuery("meta[name=keywords], meta[name=Keywords]").attr("content") + '</td></tr>';
                                var metaOGDescription = '<tr><td><span style="color: green">og:description</span></td><td>' + jQuery("meta[name='og:description'], meta[property='og:description']").attr("content") + '</td></tr>';
                                var metaOGTitle = '<tr><td><span style="color: green">og:title</span></td><td>' + jQuery("meta[name='og:title'], meta[property='og:title']").attr("content") + '</td></tr>';
                                var metaOGImage = '<tr><td><span style="color: green">og:image</span></td><td>' + 'GET RT IMAGE PUBLIC URL' + '</td></tr>';
                                var metaOGURL = '<tr><td><span style="color: green">og:url</span></td><td>' + jQuery("meta[name='og:url'], meta[property='og:url']").attr("content") + '</td></tr>';
                                var twitterOGCard = '<tr><td><span style="color: green">twitter:card</span></td><td>' + jQuery("meta[name='twitter:card']").attr("content") + '</td></tr>';
                                var twitterOGtitle = '<tr><td><span style="color: green">twitter:title</span></td><td>' + jQuery("meta[name='twitter:title']").attr("content") + '</td></tr>';
                                var twitterOGDescription = '<tr><td><span style="color: green">twitter:description</span></td><td>' + jQuery("meta[name='twitter:description']").attr("content") + '</td></tr>';
                                var twitterOGImage = '<tr><td><span style="color: green">twitter:image</span></td><td>' + 'GET RT IMAGE PUBLIC URL' + '</td></tr>';
                                var twitterSite = '<tr><td><span style="color: green">twitter:site</span></td><td>' + jQuery("meta[name='twitter:site']").attr("content") + '</td></tr>';
                                var twitterCreator = '<tr><td><span style="color: green">twitter:creator</span></td><td>' + jQuery("meta[name='twitter:creator']").attr("content") + '</td></tr>';
                                var siteLang = '<tr><td><span style="color: green">ms.lang</span></td><td>' + jQuery("meta[name='ms.lang']").attr("content") + '</td></tr>';
                                var siteLoc = '<tr><td><span style="color: green">ms.loc</span></td><td>' + jQuery("meta[name='ms.loc']").attr("content") + '</td></tr>';
                                var siteName = '<tr><td><span style="color: green">ms.sitename</span></td><td>' + jQuery("meta[name='ms.sitename']").attr("content") + '</td></tr>';
                                var siteSec = '<tr><td><span style="color: green">ms.sitesec</span></td><td>' + jQuery("meta[name='ms.sitesec']").attr("content") + '</td></tr>';

                                allMetaData = metaTitle + metaDescription + metaKeywords + metaOGDescription + metaOGTitle + metaOGImage + metaOGURL + twitterOGCard + twitterOGtitle + twitterOGDescription + twitterOGImage + twitterSite + twitterCreator + siteLang + siteLoc + siteName + siteSec;

                                jQuery("body main, body #primaryArea, body #mainArea").prepend("<div class='appended'><table id='extractMeta' data-f-sort='true'><thead><tr><th>Meta Key</th><th>Meta value</th></tr></thead><tbody>" + allMetaData + "</tbody></table></div>");
                                jQuery('body').append("<button class='enablecode'></button>");
                               
                                jQuery("body main, body #primaryArea, body #mainArea").prepend(" <div class='codecheckr'>Enter text to be Searched with comma seperated: <input id='txtitemcls' type='text' name='cname'><button id='txtitemsearch' class='codenameclick'>Search</button><div class='txtnote'> <b>Note:</b><ol style='list-style-type: decimal'><li>Meta content we can find at top of page in table format</li> <li>All the attributes of page will be found at bottom of the page in table format with columns(name,value,data-vg,data-mod)</li> <li>Tables And Components will be highlighted with red color where the word is found</li></ol></div></div>")
    

                            }

							if (jQuery('body').hasClass('extract')) {
                                jQuery('body').removeClass('extract');
                                jQuery('body *').remove('.appended');
                                jQuery('body *').remove('.addedmine');


                            } else {
                                jQuery('body').addClass('extract');
                            
                                $("source").each(function () {
                                    $(this).attr("data-srcset", $(this).attr("srcset"));
                                });
                                $('img').each(function () {
                                    $(this).attr("data-imgsrc", $(this).attr("src"));
                                  
                                })
                            

                                showMeta(); showattr();

                                //downloadingXML();
								
                               function codechecker(namechecker) {
                                    $('[data-vg],[data-module-id]').each(function () {
                                        var filteredDivs = $(this).filter(function () {
                                            var reg = new RegExp(namechecker.toLowerCase(), "ig");
                                            console.log($(this).text())
											
                                            return reg.test($(this).text().toLowerCase())
                                        });

                                        console.log("found = " + (filteredDivs.length === 1));
                                        if (filteredDivs.length === 1)
										{textcount++;
										$(this).find('div').css("background-color", "red");}
                                    });
                                    $('#extractMeta tr,#extractattr tr').each(function () {
                                        var filteredDivs = $(this).filter(function () {
                                            var reg = new RegExp(namechecker.toLowerCase, "ig");
                                            console.log($(this).text().toLowerCase())
                                            return reg.test($(this).text().toLowerCase())
                                        });

                                        console.log("found = " + (filteredDivs.length === 1));
                                     

                                    });
                                    var allattr = ""; var datavg = "", datamod;
                                    $("*").each(function () {
                                        var $this=$(this);
  
                                        $.each(this.attributes, function () {
                                            if (this.specified) {
                                                var reg = new RegExp(namechecker.toLowerCase(), "ig");
                                               
                                                if (reg.test(this.value.toLowerCase()) == true) { 
                                                    if ($this.closest("data-vg") != undefined) $(this).closest("[data-vg]").find('div').css("background-color", "red");
                                                    if ($this.closest("data-module-id") != undefined) $(this).closest("[data-module-id]").find('div').css("background-color", "red");
                                                }
                                                //console.log(this.name, this.value)
                                                allattr += '<tr><td style="color:#000">' + this.name + '</td><td style="color:#000">' + this.value + '</td> <td data-custsm-attr="data-vg" style="color:#000">' + datavg + '</td> <td data-custrt-attr="datmod" style="color:#000">' + datmod + '</td> </tr>';
                                            }
                                        });
                                    });

                                    setTimeout(function () {
                                        //counter = function () {
                                        var i = 0; var wordCount = 0;
                                        $("tr").each(function () {



                                            var value = $(this).find("td").text().toLowerCase(); //<----change .val() to .text()



                                            var regex = /\s+/gi;
                                            if (value.indexOf(namechecker.toLowerCase()) > -1) {
                                                

                                                if ($(this).find("td").eq(2) != undefined && $(this).find("td").eq(2).text() != "undefined") {
                                                    var x = $(this).find("td").eq(2).text()
                                                
                                                    $("[data-vg='" + x + "'],[data-vg='" + x + "'] *").css("background-color", "red");
                                                       
                                                }
                                                if ($(this).find("td").eq(3) != undefined && $(this).find("td").eq(3).text() != "undefined") {
                                                    var x = $(this).find("td").eq(3).text()
                                                
                                                    $("[data-module-id='" + x + "'],[data-module-id='" + x + "'] *").css("background-color", "red");
                                                }
                                            }
                                        });
                                    }, 2000);
                                    
                                }
                                $("#txtitemsearch").click(function (e) {
                                    e.preventDefault();
                                    var inpval = $("#txtitemcls").val().split(",");
                                    $("body.extract tbody tr:nth-child(2n)").css("background-color", "auto");
                                    $('#extractMeta tbody tr,#extractattr tbody tr ').css("display", "none");
                                    var ccount = 0; var abc = function () {
                                        if (ccount <= inpval.length - 1) {
                                            $("#txtitemcls") != undefined && inpval[ccount] ? codechecker(inpval[ccount].toLowerCase()) : "";
                                          
                                           setTimeout(function () {
                                      
                                               
                                                   $('#extractMeta tr,#extractattr tr').each(function () {
                                                       if ($(this).text().toLowerCase().indexOf(inpval[ccount].toLowerCase()) > -1) {
                                                           $(this).css("display", "table-row");

                                                           $(this).css("background-color", "red");
                                                           $(this).find("td").css("background-color", "red");
														  // textcount++;
                                                       }
                                                   });
												   $('#extractattr tr').each(function () {
                                                       if ($(this).text().toLowerCase().indexOf(inpval[ccount].toLowerCase()) > -1) {
                                                          
														   textcount++;
                                                       }
                                                   });
												    $( '<h2 class="codenameval">'+inpval[ccount]+':<span style="color:red;">'+textcount+' times</span></h2>' ).insertAfter( "#txtitemsearch" );
                                               ccount++;
												textcount=0;
                                               abc();
										
                                           }, 1000);
                                        }else{
											console.log("codecount"+textcount);
											 $('.c-uhfh [aria-hidden="true"]').css("display", "none");
											
										}
                                    }
                                    abc();
                                 

                                    
                                });
                                setTimeout(function () {

    jQuery(".addedmine").css("color", "black");
                
   
   
},4000);


                            }
                            break;
                        }
});



