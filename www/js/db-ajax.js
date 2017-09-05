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
                console.log("email:"+$email+$password);
                $.ajax({
                    type: "GET",
                    url: getURL()+"login.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"email":$email, "password":$password},
                    success: function (result, jqXHR) {
					   var userData = JSON.parse(result);
                       console.log(userData);
                       if (userData.MESSAGE == "OK"){
							             $("#iduser").val(userData.ID);
                            var keeplog = $("input[id='keeplogged']:checked").val();
                            if (keeplog){    
                                document.cookie = "userid="+userData.ID;
                                document.cookie = "username="+userData.NAME;
                            }
                            else
                            {
                                document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                                document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            }
							               $("#username").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep1").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep3").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            var item = "<br><table align='center' border='0' width='95%'  style='background-color:black; color:#fff;'>";
                                item = item + '<tr><td><img class="img-circle" src="'+userData.IMG+'" width="100" /></td>';
                                item = item + "<td style='padding-left:10px;'><p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 1vh);'>"+userData.NAME+"";
                                item = item + "</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr></table>";
                                item = item + "<p>";
         
                            var itemclose = '<p align="right"><a href="#" onclick="closeSideBar1();"> Close</a></p>';
                           $("#repPictName1").html(itemclose);
                            var itemclose = '<p align="right"><a href="#" onclick="closeSideBar2();"> Close</a></p>';
                           $("#repPictName2").html(itemclose);
                            var itemclose = '<p align="right"><a href="#" onclick="closeSideBar3();"> Close</a></p>';
                           $("#repPictName3").html(itemclose);
                            var itemclose = '<p align="right"><a href="#" onclick="closeSideBar4();"> Close</a></p>';
                           $("#repPictName4").html(itemclose);

                            $("#repPictName4").append(item);
                            $("#repPictName3").append(item);
                           $("#repPictName2").append(item);
                           $("#repPictName1").append(item);

                           $("#skype1").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype2").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype3").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype4").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');

/*
                           $("#skype1").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Skype Manufacturer</a>');
                           $("#skype2").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Skype Manufacturer</a>');
                           $("#skype3").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Skype Manufacturer</a>');
                           $("#skype4").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<a href="skype:'+userData.SKYPE+'?userinfo" " ><font color="#fff">Skype Manufacturer</a>');
*/
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
function closeSideBar1() {
    uib_sb.toggle_sidebar($(".uib_w_72"));
}
function closeSideBar2() {
    uib_sb.toggle_sidebar($(".uib_w_42"));  
}
function closeSideBar3() {
    uib_sb.toggle_sidebar($(".uib_w_71"));
}
function closeSideBar4() {
    uib_sb.toggle_sidebar($(".uib_w_97"));  
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUsrById(iduser)         
            {
                $("#message-login").html("<center>Finding email information....</center>");
//                var $iduser = document.getElementById('iduser').value;
                console.log(iduser);
                $.ajax({
                    type: "GET",
                    url: getURL()+"get-usr-by-id.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"id":iduser},
                    success: function (result, jqXHR) {

                       var userData = JSON.parse(result);
                       console.log(result);
                       $("#iduser").val(userData.ID);
                       $("#username").val(userData.NAME);
                       if (userData.MESSAGE == "OK"){
                            $("#username").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep1").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            $("#nameRep3").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+userData.NAME+'</center>');
                            var item = "<br><br><table align='center' border='0' width='95%'  style='background-color:black; color:#fff;'>";
                                item = item + '<tr><td><img class="img-circle" src="'+userData.IMG+'" width="100" /></td>';
                                item = item + "<td style='padding-left:10px;'><p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 1vh);'>"+userData.NAME+"";
                                item = item + "</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td colspan=2>&nbsp;</td></tr></table>";
                                item = item + "<p>";
                            $("#repPictName4").html(item);
                            $("#repPictName3").html(item);
                           $("#repPictName2").html(item);
                           $("#repPictName1").html(item);
                           $("#skype1").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype2").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype3").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
                           $("#skype4").html('<i class="fa fa-skype button-icon-left icone-margin" data-position="left" style="padding-top:4px"></i>&nbsp;&nbsp;&nbsp;<font color="#fff">Skype Manufacturer');
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
                            var item = "<table onclick='listProdManufacturer("+ manuf.ID + ",0,\"" + manuf.NAME + "\");' align='center' border='0' width='95%'  style='background: url("+manuf.IMG+") no-repeat center center ; border-spacing:0; border-collapse:collapse; color:#fff;'>";
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


   function showStores(idProd)         

            {
                // clean list div...
        $("#listStores").empty();
        var iduser = document.getElementById('iduser').value;
        
        console.log ('showStores');
        var first = 0;
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-stores.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"pid":idProd},
                    success: function (result, jqXHR) {
         
                        var stores = JSON.parse(result);
         
                        $.each(stores,function(i, store){
                            console.log(store.IMG);
                            if (first == 0)
                              {$("#listStores").append('<p style="padding-top:10px;font-family: Oswald Light;font-size:20px;">SOLD IN:</p>'); 
                                first = 1;}
                            var item = "<table align='center' border='0' width='95%'  style='background: url("+ store.IMG+") no-repeat center center ; background-size: cover ;background-size: 100% auto; border-spacing:0; border-collapse:collapse; color:#fff;'>";
                                item = item + "<tr  style='background: rgba(0,174,239,0.7);'><td style='padding-left:10px;padding-bottom:10px;'><p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+store.NAME+"";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(1.5vw + 1.5vh);'>"+store.WEBSITE+"</td></tr></table>";
                                item = item + "<p>";
                            $("#listStores").append(item); 
                        });
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#listStores").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 



   function listManufacturerEmail()         

            {
                // clean list div...
                $("#manuflist-rep-page").empty();
                $("#manuflist-email-DPG").empty();
                $("#manuflist-product-list").empty();
                $("#manuflist-product-detail").empty();
                var iduser = document.getElementById('iduser').value;

                console.log ('listManufactureremail');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-manufacturer.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":iduser},
                    success: function (result, jqXHR) {
         
                        var manufs = JSON.parse(result);
         
                        $.each(manufs,function(i, manuf){

                            var item = "<table onclick='openManufEmailPage("+ manuf.ID + ",\""+ manuf.NAME  +"\");' border='0' width='98%' style='background-color:white;'>";
                                item = item + "<tr><td>&nbsp;</td></tr>";
                                item = item + "<tr><td><p style='font-family: Oswald Light;font-size:24px;'>"+manuf.NAME+"<p><hr></td></tr>";



                            $("#manuflist-rep-page").append(item); 
                            $("#manuflist-email-DPG").append(item); 
                            $("#manuflist-product-list").append(item); 
                            $("#manuflist-product-detail").append(item); 
                        });
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#manuflist-rep-page").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 


   function listManufacturerSkype()         

            {
                // clean list div...
                $("#manuflist-rep-page").empty();
                $("#manuflist-email-DPG").empty();
                $("#manuflist-product-list").empty();
                $("#manuflist-product-detail").empty();
                var iduser = document.getElementById('iduser').value;

                console.log ('listManufacturerSkype');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-manufacturer.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    data: {"uid":iduser},
                    success: function (result, jqXHR) {
         
                        var manufs = JSON.parse(result);
         
                        $.each(manufs,function(i, manuf){

                            var item = "<table onclick='openManufSkypePage("+ manuf.ID + ",\""+ manuf.SKYPE  +"\");' border='0' width='98%' style='background-color:white;'>";
                                item = item + "<tr><td>&nbsp;</td></tr>";
                                item = item + "<tr><td><p style='font-family: Oswald Light;font-size:24px;'>"+manuf.NAME+"<p><hr></td></tr>";

                             console.log(manuf.SKYPE);   

                            $("#manuflist-rep-page").append(item); 
                            $("#manuflist-email-DPG").append(item); 
                            $("#manuflist-product-list").append(item); 
                            $("#manuflist-product-detail").append(item); 
                        });
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#manuflist-rep-page").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 





    function openManufEmailPage(ID,NAME)
    {

        console.log('openManufEmailPage:'+ID+NAME);
        $('#idmanufacturer').val(ID);
        $('#namemanufacturer').val(NAME);
        $('#selmanu-rep-page').modal('hide');
        $('#selmanu-email-DPG').modal('hide');
        $('#selmanu-product-detail').modal('hide');
        $('#selmanu-product-list').modal('hide');
        showEmailPage('MANUF');
        

    }

    function openManufSkypePage(ID,SKYPE)
    {

        console.log('openManufSkypePage:'+ID+SKYPE);
//        $('#idmanufacturer').val(ID);
//        $('#namemanufacturer').val(NAME);
        $('#selmanu-rep-page').modal('hide');
        $('#selmanu-email-DPG').modal('hide');
        $('#selmanu-product-detail').modal('hide');
        $('#selmanu-product-list').modal('hide');
        
        window.location = 'skype:' + SKYPE + '?chat';

        
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
         
                        
                    $.each(products,function(i, product){    
                                console.log(product.IMG);
                            var item = "<table  class='bgimgprod' border='0' width='100%'  style='min-height:200px;background-size:auto; background:url("+product.IMG+") no-repeat center center;-webkit-background-size: 100% 100%;-moz-background-size: 100% 100%;-o-background-size: 100% 100%; background-size: 100% 100%;'  onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr height='90%' ><td colspan=2></td></tr>";
                                item = item + "<tr height='10%' style='max-height:30px;background:rgba(0,0,0,0.7);color:#fff;'>"; 
                                item = item + "<td style='max-height:30px;vertical-align:center; padding-left:10px;'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.FEATURED;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='max-height:30px; padding: 15px 15px 0 0;'>";
                                item = item + "<table border='0'  width='20%' style='background:rgba(0,0,0,0.3);color:#fff;font-family:arial narrow;'>";
                                item = item + "<tr style='font-family: Oswald Light;font-size:12px;'><td  align='center' >MAP -&nbsp;</td><td  align='center'> MSRP</td ></tr>";
                                item = item + "<tr><td bgcolor='#FFFFFF' align='center' colspan=2><font style='font-family: Oswald Light;font-size:13px;'><font color='black'><b>$"+product.MAP+" - $"+product.MSRP+"</font></td></tr>";
                                
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

                            $("#prodNameHeader").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">'+product.NAME+'</p></center>');  
                            var item = '<div class="col-md-12">';
                            item += '<div class="col-xs-8 col-md-8" align="left" width="80%">';
                            item += "<p style='font-family: Oswald Light;font-size:20px;padding-top:10px;'><strong>PRODUCT DESCRIPTION:</strong>";
                            item += '<p align="left"><font color="black" style="font-family:Oswald Light;font-size:22px;">'+product.DETAILS+'</font>';
                            item += '</div>';  
                            item += '<div  class="col-xs-4 col-md-4" align="right" width="20%" style="padding-top:10px;">';
                            item += "<p align='right'><a href='"+product.BROCHURE+"'><img src='"+product.IMGBROCHURE+"' height='60px' /></a>";
                            item += "<p align='right'><a href='"+product.BROCHUREWS+"'><img src='"+product.IMGBROCHUREW+"' height='60px' /></a>";
                            item += "<p align='right'><a href='"+product.BROCHURERT+"'><img src='"+product.IMGBROCHURER+"' height='60px' /></a>";
                            item += "<p align='right'><a href='"+product.BROCHURESD+"'><img src='"+product.IMGBROCHURES+"' height='60px' /></a>";

                            item += '</div>';
                            item += '</div>';  
  

                            $("#productDescription").html(item);  
                            showVideoProduct(product.VIDEO,product.VIDEOOGG,product.VIDEOWEBM);   
                            var item = '<div style="position:absolute;bottom:-5px;left:0;z-index:1;" class="tarea widget uib_w_106 " data-uib="media/text" data-ver="0" name="uib_w_106" id="prodDetailNamePrice"></div>';
                            $("#page_73_41").append(item); 
                            var item = '<div style="position:absolute;top:30%;left:45%;z-index:1;background-color: rgba(90, 90, 90, 0.0);" class="tarea widget  " data-uib="media/text" data-ver="0" id="playVideo" onclick="videostartstop();">';
                                item +='<i class="fa fa-play-circle-o fa-5x"></i>';
                                item +='</div>';
                            $("#page_73_41").append(item); 

                                        
 //                           var item = "<div class='col-md-12 col-xs-12' style='width:100%;background-color:white;' onclick='showProductDetail("+product.ID+")'></div>";
                            var img1 = '<a href="#" id="limg1" ><img id="simg1" src="'+product.IMG1+'" style="width:100%; heigth:auto;" /></a>';
                            var img2 = '<a href="#" id="limg2" ><img id="simg2" src="'+product.IMG2+'" style="width:100%; heigth:auto;" /></a>';
                            var img3 = '<a href="#" id="limg3" ><img id="simg3" src="'+product.IMG3+'" style="width:100%; heigth:auto;" /></a>';
                            var img4 = '<a href="#" id="limg4" ><img id="simg4" src="'+product.IMG4+'" style="width:100%; heigth:auto;" /></a>';
  //                              item = item + "</div>";
                            $("#img1Detail").html(img1);                                 
                            $("#img2Detail").html(img2);                                 
                            $("#img3Detail").html(img3);                                 
                            $("#img4Detail").html(img4);                                 

                            $("#idmanufacturer").val(product.MANUFACTURER);                                 
                            $("#namemanufacturer").val(product.NAMEMANUFACTURER);                                 
                            console.log(product.MANUFACTURER+"##"+product.NAMEMANUFACTURER)

                           
 
                            var item = "<table border='0' width='100%' style='max-height:30px;background:rgba(0,0,0,0.6);' onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr ><td style='vertical-align:center; padding-left:10px; width:80%'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh); color:white;'>"+product.NAME;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);color:white;'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding: 15px 15px 0 0;'><table border='0'  width='20%' style=' color:#fff;font-family:arial narrow;'>";
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

                            showStores(idProd);                              
// end here                                
//                            var item2 = "<table border='0' width='100%'";
//                            item2 = item2 + "<tr><td width='70%' style='vertical-align:top;'>";
//                            item2 = item2 + "<p style='font-family: Oswald Light;font-size:20px;padding-top:10px;'>PRODUCT DESCRIPTION:";
//                            item2 = item2 + "</td><td width='20%'>";
//                            item2 = item2 + "<p align='right'><a href='"+product.BROCHURE+"'><img src='"+product.IMGBROCHURE+"' height='60px' /></a>";
//                            item2 = item2 + "</td></tr></table>";
//                           $("#brochureLink").append(item2);                                 
//                           var item2 = "<a href='"+product.VIDEO+"'>"+product.VIDEO+"'</a>";
//                            item2 = item2 + "</tr></table>";
//                             $("#videolink").html(item2); 
                            activate_page("#product-detail");
                        
                         });


                        
                    },
                    error: function (jqXHR, status) {
                        $("#msgListManuf").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 




 function showImageOnTop(img){
    console.log('image:'+img);    
    var item = "<img src='"+img+"' style='width:100%; heigth:auto;' />";

     $("#page_73_41").html(item);   


 }


 function showVideoProduct(videoProd,videoogg,videowebm)  {       



    var item = '<figure class="margin-auto widget uib_w_80 d-margins" data-uib="media/video" data-ver="0">';
        item = item + '<video id="myvideo" width="100%" height="auto" onclick="videostartstop();">';
        item = item + '<source src="'+ videoProd +'" type="video/mp4">';
        item = item + '<source src="' + videoogg+ '" type="video/ogg">';
        item = item + '<source src="'+ videowebm+'" type="video/webm">';
        item = item + '</video>';
        item = item + '</figure>';
     $("#page_73_41").html(item);   

    var video = document.getElementById('myvideo');
//    var sources = video.getElementsByTagName('source');
    console.log(videoProd);
//    sources[0].src = videoProd;
//    sources[1].src = videoogg;
//    sources[2].src = videowebm;
    video.load();

}

 function videostartstop(videoProd,videoogg,videowebm)  {       

    var video = document.getElementById('myvideo');
    var sources = video.getElementsByTagName('source');
    console.log("videostartstop");
    if (video.paused){
        console.log('play video paused');
        video.play();
        $('#playVideo').hide();
    } 
    else
     if (video.ended){
        console.log('play video ended');
        video.play();
        $('#playVideo').hide();
     }
     else
     {
       video.pause();
       $('#playVideo').show();
 
     }
    

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
            var manufname = document.getElementById('namemanufacturer').value;
            
            listProdManufacturer(manuf,category,manufname);
  //          $('#second-tab').hide();
            $('#tab-prod').click();
 
}

 function listProdManufacturer(manuf,category,name)         

            {

                console.log('manuf:'+ manuf);                
                $("#listProducts").empty();
                var iduser = document.getElementById('iduser').value;
                $("#idmanufacturer").val(manuf);
                listCategories();
                console.log('listProdManufacturer:' + manuf + 'category:'+category + 'name:'+name);
                $("#namemanufacturer").val(name);
                
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
                                 $("#manufacturerName1").html("<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;'>"+product.MANUFNAME+"</p>");
    
                            var item = "<table border='0' width='100%' style='min-height:200px;background-size:auto; background:url("+product.IMG+") no-repeat center center;-webkit-background-size: 100% 100%;-moz-background-size: 100% 100%;-o-background-size: 100% 100%; background-size: 100% 100%;' onclick='showProductDetail("+product.ID+")'>";
                                item = item + "<tr height='85%'><td colspan=2></td></tr>";
                                item = item + "<tr height='15%' style='max-height:40px; background:rgba(0,0,0,0.7);color:#fff;'>";
                                item = item + "<td style='vertical-align:center; padding-left:10px; width:80%;'>";
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:calc(2vw + 2vh);'>"+product.NAME;
                                item = item + "<p style='margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size: calc(2vw + 1vh);'>"+product.BRIEF+"</td>";
                                item = item + "<td align='center' style='padding: 15px 15px 0 0;'><table border='0'  width='20%' style='color:#fff;font-family:arial narrow;'>";
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
            var namemanuf = document.getElementById('namemanufacturer').value;
             $("#nameRep2").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">Send to: '+namemanuf+'</center>');

            if (manuf != ''){  
            activate_page("#email-DPG");
            }
            else
            {alert('Select Manufacturer First.')}
        }

       if (typeEmail == 'SAMPLE'){  
            $("#typeEmail").val(typeEmail);     
            var manuf = document.getElementById('idmanufacturer').value;
            var namemanuf = document.getElementById('namemanufacturer').value;
             $("#nameRep2").html('<center><p style="margin-top: 0em; margin-bottom: 0em;font-family: Oswald Light;font-size:18pt;color:white;">Send to: '+namemanuf+'</center>');

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

