var refreshIntervalId;
var refreshIntervalSearchProviderId;
var globalManufName;
function getURL()         
 
            {
//             return 'http://www.be1worldservices.com/maxima/';
             return 'http://dpg.lmsis.com.br/ws/';
         
    } 	



function loginUsr()         
            {
                $("#message-login").html("<center>Finding email information....</center>");
                var $email = document.getElementById('repEmail').value;
                var $password = document.getElementById('repPwd').value;
                console.log($email);
                $.ajax({
                    type: "GET",
                    url: getURL()+"login.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"email":$email, "password":$password},
                    success: function (result, jqXHR) {
					   var userData = JSON.parse(result);
                       console.log(result);
                       if (userData.MESSAGE == "OK"){
							$("#iduser").val(userData.ID);
							$("#username").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:22pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep1").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:22pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep2").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:22pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep3").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:22pt;color:white;">'+userData.NAME+'</center>');
                            var item = "<br><br><table align='center' border='0' width='95%'  style='background-color:black; color:#fff;'>";
                                item = item + '<tr><td><img class="img-circle" src="'+userData.IMG+'" width="100" /></td>';
                                item = item + "<td style='padding-left:10px;'><p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 1vh);'>"+userData.NAME+"";
                                item = item + "</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr></table>";
                                item = item + "<p>";
                            $("#repPictName4").html(item);
                            $("#repPictName3").html(item);
                           $("#repPictName2").html(item);
                           $("#repPictName1").html(item);
                           $("#skype1").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Link to my profile</a>');
                           $("#skype2").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Link to my profile</a>');
                           $("#skype3").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Link to my profile</a>');
                           $("#skype4").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Link to my profile</a>');
							listManufacturer();                           
							activate_page("#rep-page");
                            $("#message-login").html("");
                       }
                       else
                       {
                           $("#message-login").html('<center><b>'+userData.MESSAGE+'</center>');

                       }                   
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-login").html("<center>Server busy try again later...  "+status+"</center>");
                        console.log(jqXHR.responseText);
                        console.log(jqXHR.status);
 
                    },
                });
         
    }
function getUserDetails()         

            {
         
                var uid = document.getElementById('iduser').value;
                console.log(getURL());
                $.ajax({
                    type: "GET",
                    url: getURL()+"get-userdetail.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":uid},
                    success: function (result, jqXHR) {
					   var userData = JSON.parse(result);
                       if (userData.MESSAGE == "OK"){
							$("#app-address").val(userData.ADDRESS);
                       }
                       else
                       {
                           $("#app-address").val('');

                       }                   
         
                        $("#message-login").html("<center>Found "+userData.length+" Driver(s)</center>");
         
                    },
                    error: function (jqXHR, status) {
                        // error message...
                        $("#app-address").val("");
 
                    },
                });
         
    }

   function listManufacturer()         

            {
                // clean list div...
                $("#listManufac").empty();
				var iduser = document.getElementById('iduser').value;
                $("#msgListManuf").html("");

				console.log ('listManufacturer');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-manufacturer.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":iduser},
                    success: function (result, jqXHR) {
         
                        var manufs = JSON.parse(result);
         
                        $.each(manufs,function(i, manuf){
                            console.log(manuf.IMG);
                            var item = "<table onclick='listProdManufacturer("+ manuf.ID + ");' align='center' border='0' width='95%'  style='background: url("+manuf.IMG+") no-repeat center center ; border-spacing:0; border-collapse:collapse; color:#fff;'>";
                                item = item + "<tr  style='background: rgba(0,174,239,0.7);'><td style='padding-left:10px;padding-bottom:10px;'><p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+manuf.NAME+"";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(1.5vw + 1.5vh);'>"+manuf.WEBSITE+"</td></tr></table>";
                                item = item + "<p>";
                            $("#listManufac").append(item); 
                        });
         
                        $("#msgListManuf").html("");
                        showFeatured();
         
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

   function listCategories()         

            {
                // clean list div...
                $("#listCategories").empty();
                var idmanuf = document.getElementById('idmanufacturer').value;    
 
                console.log ('listCategories$');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-categories.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    success: function (result, jqXHR) {
         
                        var categories = JSON.parse(result);
            
                        $.each(categories,function(i, category){
                            var item = "<table onclick='changeTab("+ idmanuf + ','+ category.ID  +");' border='0' width='98%' style='background-color:white;'>";
                                item = item + "<tr><td>&nbsp;</td></tr>";
                                item = item + "<tr><td><p style='font-family: Oswald Light;font-size:24px;'>"+category.NAME+"<p><hr></td></tr>";
                            $("#listCategories").append(item); 
                        });
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#listCategories").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 





   function showFeatured()         

            {
                // clean list div...
                $("#featuredProd").empty();
                var iduser = document.getElementById('iduser').value;
                
                console.log('showFeatured');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"get-featured.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":iduser},
                    success: function (result, jqXHR) {
         
                        var products = JSON.parse(result);
         
                     console.log(result);   
                    $.each(products,function(i, product){    
                                console.log(product.IMG);
                            var item = "<table  class='bgimgprod' border='0' width='100%'  style='min-height:200px;background-size:auto; background:url("+product.IMG+") no-repeat center center;-webkit-background-size: 100% 100%;-moz-background-size: 100% 100%;-o-background-size: 100% 100%; background-size: 100% 100%;'  onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr height='90%' ><td colspan=2></td></tr>";
                                item = item + "<tr height='10%' style='max-height:30px;background:rgba(0,0,0,0.7);color:#fff;'>"; 
                                item = item + "<td style='max-height:30px;vertical-align:center; padding-left:10px;'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.FEATURED;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='max-height:30px; padding: 15px 15px 0 0;'><table border='0'  width='20%' style='background-color:black; color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font color='black' style='font-family: Oswald Light;font-size:13px;'><b>$"+product.MAP+" - $"+product.MSRP+"</td></tr>";
                                
                                item = item + "<tr><td  align='right' style='font-family: Oswald Light;font-size:10px;'>Wholesale:</td><td align='right'><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item = item + "</td></table>";
                                item = item + "<p>";
                            $("#featuredProd").append(item); 
                        
                         });
                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

   function showFeaturedOLD()         

            {
                // clean list div...
                $("#featuredProd").empty();
                var iduser = document.getElementById('iduser').value;
                
                console.log('showFeatured');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"get-featured.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":iduser},
                    success: function (result, jqXHR) {
         
                        var products = JSON.parse(result);
         
                     console.log(result);   
                    $.each(products,function(i, product){    
                                console.log(product.IMG);
                            var item = "<table border='0' width='100%' style='background-color:black; color:#fff;'  onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr><td colspan=2><img src='"+product.IMG+"' style='width:100%; heigth:auto;' /></td></tr>";
                                item = item + "<tr ><td style='vertical-align:center; padding-left:10px;'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.FEATURED;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding: 15px 0 0 0;'><table border='0'  width='20%' style='background-color:black; color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font color='black' style='font-family: Oswald Light;font-size:13px;'><b>$"+product.MAP+" - $"+product.MSRP+"</td></tr>";
                                
                                item = item + "<tr><td  align='right' style='font-family: Oswald Light;font-size:10px;'>Wholesale:</td><td align='right'><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item = item + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></table>";
                                item = item + "<p>";
                            $("#featuredProd").append(item); 
                        
                         });
                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

 



   function showProductDetail(idProd)         

            {
                // clean list div...
                $("#videocaption").empty();

                $("#prodDetailNamePrice").empty();
                $("#brochureLink").empty();
                var iduser = document.getElementById('iduser').value;
    
                
                console.log('showProductdetail:' + idProd);
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"show-product-detail.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"id":idProd},
                    success: function (result, jqXHR) {
         
                        var products = JSON.parse(result);
         
                       
                    $.each(products,function(i, product){    

                            $("#prodNameHeader").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 1vh);color:white;">'+product.NAME+'</p></center>');  
                            $("#productDescription").html('<div align="left" width="70%"><p align="left"><font color="black" style="font-family:Oswald Light;font-size:22px;">'+product.DETAILS+'</font></div>');  
                            showVideoProduct(product.VIDEO,product.VIDEOOGG,product.VIDEOWEBM);                  
 //                           var item = "<div class='col-md-12 col-xs-12' style='width:100%;background-color:white;' onclick='showProductDetail("+product.ID+")'></div>";
                            var img1 = "<img src='"+product.IMG1+"' style='width:100%; heigth:auto;' />";
  //                              item = item + "</div>";
                            $("#img1Detail").html(img1);                                 
                            $("#img2Detail").html(img1);                                 
                            $("#img3Detail").html(img1);                                 
                            $("#img4Detail").html(img1);                                 



                           
 
                            var item = "<table border='0' width='100%' style='max-height:30px;background:rgba(0,0,0,0.6);' onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr ><td style='vertical-align:center; padding-left:10px; width:80%'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh); color:white;'>"+product.NAME;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);color:white;'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding: 15px 15px 0 0;'><table border='0'  width='20%' style='background-color:black; color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font color='black' style='font-family: Oswald Light;font-size:13px;'><b>$"+product.MAP+" - $"+product.MSRP+"</td></tr>";
                                
                                item = item + "<tr><td  align='right' style='font-family: Oswald Light;font-size:10px;'>Wholesale:</td><td align='center'><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item = item + "</td></table>";
                                item = item + "<p>";
                            $("#prodDetailNamePrice").append(item);                                 
                           
        
// not used field deleted from page
                            var item1 = "<div class='col-md-6 col-xs-6'  style='width:70%;background-color:black; color:#fff;'>";
                                item1 = item1 + "<p style='font-family:Oswald Light;font-size:24px;'>"+product.NAME;
                                item1 = item1 + "<p style='font-family:Oswald Light;font-size:20px;'>"+product.BRIEF;
                                item1 = item1 + "</div>";
                            $("#productNameDet").html(item1);                                 
 
                            var item2 = "<div style='vertical-align:bottom'>";
                                item2 = item2 + "<table border='0'  width='20%' style='background-color:black; color:#fff;font-size:10px;'>";
                                item2 = item2 + "<tr><td >MAP</td><td>MSRP</td ></tr>";
                                item2 = item2 + "<tr><td bgcolor='#FFFFFF'><font color='black'>$"+product.MAP+"</td><td  bgcolor='#FFFFFF'  align='right'><font color='black'>$"+product.MSRP+"</td></tr>";
                                item2 = item2 + "<tr><td >Wholesale:</td><td><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item2 = item2 + "</div>";
                            $("#productPrice").html(item2);                                 
// end here                                
                            var item2 = "<table border='0' width='100%'";
                            item2 = item2 + "<tr><td width='70%' style='vertical-align:top;'><p style='font-family: Oswald Light;font-size:24px;'>PRODUCT DESCRIPTION:</td>";
                            item2 = item2 + "<td width='20%'><p align='right'><a href='"+product.BROCHURE+"'><img src='"+product.IMGBROCHURE+"' height='60px' /></a></td>";
                            item2 = item2 + "</tr></table>";
                            $("#brochureLink").append(item2);                                 
                           var item2 = "<a href='"+product.VIDEO+"'>"+product.VIDEO+"'</a>";
                            item2 = item2 + "</tr></table>";
                             $("#videolink").html(item2); 
                            activate_page("#product-detail");
                        
                         });


                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

 function showVideoProduct(videoProd,videoogg,videowebm)  {       

    var video = document.getElementById('myvideo');
    var sources = video.getElementsByTagName('source');
    console.log(videoProd);
    sources[0].src = videoProd;
    sources[1].src = videoogg;
    sources[2].src = videowebm;
    video.load();

}

 function videostartstop(videoProd,videoogg,videowebm)  {       

    var video = document.getElementById('myvideo');
    var sources = video.getElementsByTagName('source');
    console.log("videostartstop");
    if (video.paused){
        console.log('play video paused');
        video.play();
    } 
    else
     if (video.ended){
        console.log('play video ended');
        video.play();
     }
     else
       video.pause(); 
    

}

 function videostop()  {       

    var video = document.getElementById('myvideo');
    var sources = video.getElementsByTagName('source');
    console.log("videostop");
    video.pause(); 
    

}

 function changeTab(manuf,category)         
{
 

            console.log('changeTab category:'+category);

            listProdManufacturer(manuf,category);
  //          $('#second-tab').hide();
            $('#tab-prod').click();
 
}

 function listProdManufacturer(manuf,category)         

            {

                console.log('manuf:'+ manuf);                
                $("#listProducts").empty();
                var iduser = document.getElementById('iduser').value;
                $("#idmanufacturer").val(manuf);
                listCategories();
                console.log('listProdManufacturer:' + manuf + 'category:'+category);

 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-prod-manufacturer.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"mid":manuf, "category":category},
                    success: function (result, jqXHR) {
         
                        var products = JSON.parse(result);
         
                     console.log(result);   
                    $.each(products,function(i, product){    
                                 $("#manufacturerName1").html("<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'><b>"+product.MANUFNAME+"</p>");
    
                            var item = "<table border='0' width='100%' style='min-height:200px;background-size:auto; background:url("+product.IMG+") no-repeat center center;-webkit-background-size: 100% 100%;-moz-background-size: 100% 100%;-o-background-size: 100% 100%; background-size: 100% 100%;' onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr height='85%'><td colspan=2></td></tr>";
                                item = item + "<tr height='15%' style='max-height:40px; background:rgba(0,0,0,0.7);color:#fff;'>";
                                item = item + "<td style='vertical-align:center; padding-left:10px; width:80%;'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.NAME;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding: 15px 15px 0 0;'><table border='0'  width='20%' style='background-color:black; color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font color='black' style='font-family: Oswald Light;font-size:13px;'><b>$"+product.MAP+" - $"+product.MSRP+"</td></tr>";
                                
                                item = item + "<tr><td  align='right' style='font-family: Oswald Light;font-size:10px;'>Wholesale:</td><td align='right'><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item = item + "</td></table>";


                                item = item + "<div width='98%' style='background-color:white;'>&nbsp;</div>";

                            activate_page("#product-list");
  
                            $("#listProducts").append(item); 
                        
                         });


                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

 
function listProdManufacturerOLD(manuf,category)         

            {

                console.log('manuf:'+ manuf);                
                $("#listProducts").empty();
                var iduser = document.getElementById('iduser').value;
                $("#idmanufacturer").val(manuf);
                listCategories();
                console.log('listProdManufacturer:' + manuf + 'category:'+category);

 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-prod-manufacturer.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"mid":manuf, "category":category},
                    success: function (result, jqXHR) {
         
                        var products = JSON.parse(result);
         
                     console.log(result);   
                    $.each(products,function(i, product){    
                                 $("#manufacturerName1").html("<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'><b>"+product.MANUFNAME+"</p>");
    
                                var item = "<div width='98%' style='background-color:white;'>&nbsp;</div>";

                                item = item + "<table border='0' width='100%' style='background-color:black; color:#fff;'  onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr><td colspan=2><img src='"+product.IMG+"' style='width:100%; heigth:auto;' /></td></tr>";
                                item = item + "<tr ><td style='vertical-align:center; padding-left:10px; width:80%' >";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.NAME;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding-right:10px;' ><table border='0'  width='20%' style='background-color:black; color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font color='black' style='font-family: Oswald Light;font-size:13px;'><b>$"+product.MAP+" - $"+product.MSRP+"</td></tr>";
                                
                                item = item + "<tr><td  align='right' style='font-family: Oswald Light;font-size:10px;'>Wholesale:</td><td align='center'><font color='yellow'>$"+product.WHOLESALE+"</font></td></tr></table>";
                                item = item + "</td></table>";
                                item = item + "<p>";


                                item = item + "<div width='98%' style='background-color:white;'>&nbsp;</div>";

                            activate_page("#product-list");
  
                            $("#listProducts").append(item); 
                        
                         });


                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

 	


	function addUser()         

            {
				
					var email = document.getElementById('emailuser').value;
					var mobile = document.getElementById('mobileuser').value;
					var pwd = document.getElementById('passworduser').value;
					var error = true;
					console.log('addUser');
                $.ajax({
                    type: "GET",
                    url: getURL()+"articles/add-user.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"email": email, "mobile":mobile, "pwd":pwd},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       if (userData.MESSAGE == "OK"){
                           $("#iduser").val(userData.UID);
						   $("#message-signup1").html('<center><b>'+userData.MESSAGE+'</center>');
						   activate_page("#signup2");
						   error = true;
                       }
                       else
                       {
                           $("#message-signup1").html('<center><b>'+userData.MESSAGE+'</center>');
                           error = false;
                       }                   
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-conf").html("<center>Server busy try again later... "+status+"</center>");
                        error = false;
					
					},
                });
				
				return error;
         
    } 	
  function updateUser()         

            {
				
					var uid = document.getElementById('iduser').value;
					var name = document.getElementById('name').value;
					var address = document.getElementById('address').value;
					var gender = document.getElementById('gender').value;
					var height = document.getElementById('height').value;
					var weight = document.getElementById('weight').value;
					console.log('addUser');
                $.ajax({
                    type: "GET",
                    url: getURL()+"update-user.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"uid": uid, "name":name, "address":address , "gender":gender, "height":height, "weight":weight},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       if (userData.MESSAGE == "OK"){
                           $("#uid").val(userData.UID);
						   $("#message-signup-2").html('<center><b>'+userData.MESSAGE+'</center>');
                           sendText(userData.UID);
						   activate_page("#signup2");
                       }
                       else
                       {
                           $("#message-signup-2").html('<center><b>'+userData.MESSAGE+'</center>');
                       }                   
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-conf").html("<center>Server busy try again later... "+status+"</center>");
					
					},
                });
				
         
    }	

	
	
  function sendText(uid)         

            {
				
					console.log('sendText');
                $.ajax({
                    type: "GET",
                    url: getURL()+"send-text.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"uid": uid},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       $("#message-signup-3").html('<center><b>'+userData.MESSAGE+'</center>');
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-signup-3").html("<center>Server busy try again later... "+status+"</center>");
					
					},
                });
				
         
    }	
	
	
	
function profile()         
            {
                $("#message-profile").html("<center>Finding profile information....</center>");
                var $uid = document.getElementById('iduser').value;
                $.ajax({
                    type: "GET",
                    url: getURL()+"profile.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":$uid},
                    success: function (result, jqXHR) {
                       console.log(result);
						var userData = JSON.parse(result);
                       
                       
                       if (userData.MESSAGE == "OK"){
							$("#message-profile").html('<center><b>PROFILE</center>');
							$("#profileName").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Name:</b></td><td class="text-left">'+userData.NAME.trim()+'</td></tr></table>');
							$("#profileEmail").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Email: </b></td><td  class="text-left"">'+userData.EMAIL.trim()+'</td></tr></table>');
							$("#profileMobile").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Mobile: </b></td><td  class="text-left">'+userData.MOBILE.trim()+'</td></tr></table>');
							$("#profileAddress").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Address: </b></td><td  class="text-left">'+userData.ADDR.trim()+'</td></tr></table>');
							$("#profileGender").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Gender: </b></td><td  class="text-left">'+userData.GENDER.trim()+'</td></tr></table>');
							$("#profileHeight").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Height: </b></td><td  class="text-left">'+userData.HEIGHT.trim()+'</td></tr></table>');
							$("#profileWeight").html('<table class="table table-sm"><tr><td style="width: 30%;"> <b>Weight: </b></td><td  class="text-left">'+userData.WEIGHT.trim()+'</td></tr></table>');
							activate_page("#profile");
                       }
                       else
                       {
                           $("#message-profile").html('<center><b>'+userData.MESSAGE+'</center>');

                       }                   
         
//                        $("#message-login").html("<center>Foram encontrado "+drivers.length+" Driver(s)</center>");
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-login").html("<center>Server busy try again later...  "+status+"</center>");
                        console.log(jqXHR.responseText);
                        console.log(jqXHR.status);
 
                    },
                });
         
    }

	
	
function sendEmail()         
            

            {
                $("#messageReturnEmail").html("<center></center>");
                $("#message-signup").html("<center></center>");
                var uid = document.getElementById('iduser').value; 
                var manuf = document.getElementById('idmanufacturer').value; 
                var typeEmail = document.getElementById('typeEmail').value; 
                var subject = document.getElementById('emailSubject').value; 
                var message = document.getElementById('emailText').value; 
                console.log('sendEmail to:'+manuf+'type:'+typeEmail);
                $.ajax({
                    type: "GET",
                    url: getURL()+"send-emailcontact.php",
                    timeout: 8000,
					data: {"uid": uid,"subject": subject,"message": message,"manuf": manuf,"typeemail": typeEmail},
                    contentType: "application/json; charset=utf-8",
                    success: function (result, jqXHR) {
                        console.log('RESULT EMAIL:'+result);
                        var retemail = JSON.parse(result);
                        console.log('RESULT EMAIL:'+result);
                        $("#messageReturnEmail").html("<center>Message Sent.</center>");
                        $("#message-signup").html("<center>Message Sent.</center>");

						//activate_page("#pg-services");
         
                    },
                    error: function (jqXHR, status) {
                        $("#messageReturnEmail").html("<center>Server busy try again later...  "+status+"</center>");
                    },
                });
         
    } 

function sendEmailSignup()         
            

            {
                $("#message-signup").html("<center></center>");
                var signupemail = document.getElementById('signupemail').value; 
                var nome = document.getElementById('signupname').value; 
                var typeEmail = document.getElementById('typeEmail').value; 
                var subject = document.getElementById('signupsubject').value; 
                var message = document.getElementById('signupmessage').value; 
                console.log('type:'+typeEmail);
                $.ajax({
                    type: "GET",
                    url: getURL()+"send-emailcontact.php",
                    timeout: 8000,
                    data: {"signupemail": signupemail,"signupname": nome, "signupsubject": subject,"signupmessage": message,"typeemail": typeEmail},
                    contentType: "application/json; charset=utf-8",
                    success: function (result, jqXHR) {
                        console.log('RESULT EMAIL:'+result);
                        var retemail = JSON.parse(result);
                        console.log('RESULT EMAIL:'+result);
                        $("#message-signup").html("<center>Message Sent.</center>");

                        //activate_page("#pg-services");
         
                    },
                    error: function (jqXHR, status) {
                        $("#messageReturnEmail").html("<center>Server busy try again later...  "+status+"</center>");
                    },
                });
         
    } 



function showEmailPage(typeEmail)         
            {
        if (typeEmail == 'DPG'){  
            $("#typeEmail").val(typeEmail);      
            activate_page("#email-DPG");
        }

        if (typeEmail == 'MANUF'){  
            $("#typeEmail").val(typeEmail);     
            var manuf = document.getElementById('idmanufacturer').value;
            if (manuf != ''){  
            activate_page("#email-DPG");
            }
            else
            {alert('Select Manufacturer First.')}
        }

        if (typeEmail == 'SIGNUP'){  
            $("#typeEmail").val(typeEmail);      
            activate_page("#email-signup");
        }

        } 

