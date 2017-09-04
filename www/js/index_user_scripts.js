/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  SIGN IN */
    
    
        /* button  #btSignin */
    $(document).on("click", "#btSignin", function(evt)
    {
        /* your code goes here */ 
        loginUsr();
         return false;
    });
    
        /* button  #bt-menu1 */
    $(document).on("click", "#bt-menu1", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        console.log('bt-menu1');
         uib_sb.toggle_sidebar($(".uib_w_72"));  
        videostop();
         return false;
    });
    
        /* button  #btMenuProdList */
    $(document).on("click", "#btMenuProdList", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_42"));  
         videostop();
         return false;
    });
    
        /* button  #btMenuRep */
    $(document).on("click", "#btMenuRep", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_71")); 
        videostop();
         return false;
    });

     
    $(document).on("click", "#btMenuRep2", function(evt)
    {
         uib_sb.toggle_sidebar($(".uib_w_97"));  
        videostop();
         return false;
    });
    $(document).on("click", "#btMenuRep4", function(evt)
    {
         uib_sb.toggle_sidebar($(".uib_w_42"));  
         return false;
    });
    $(document).on("click", "#btMenuRep3", function(evt)
    {
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     
     
     
        /* button  #btexit1 */
    $(document).on("click", "#btexit1", function(evt)
    {
        
        document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        
           if (navigator.app) {
            navigator.app.exitApp();
            }
            else if (navigator.device) {
              navigator.device.exitApp();
            }
            else {
                      window.close();
            }               /* your code goes here */ 
         return false;
    });
    
        /* button  #btemail1 */
    
     $(document).on("click", "#btemail1", function(evt)
    {
         /* pgrep ** global activate_page */
        showEmailPage('DPG');
        uib_sb.toggle_sidebar($(".uib_w_71"));  
        return false;
    });
     $(document).on("click", "#btemail2", function(evt)
    {
         /* pgemail ** global activate_page */
         showEmailPage('DPG');
         uib_sb.toggle_sidebar($(".uib_w_97"));  
         return false;
    });
     $(document).on("click", "#btemail3", function(evt)
    {
         /* proddetail **  global activate_page */
         showEmailPage('DPG');
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     $(document).on("click", "#btemail4", function(evt)
    {
         /* prodlist ** global activate_page */
        showEmailPage('DPG');
        uib_sb.toggle_sidebar($(".uib_w_42"));  
        return false;
    });

     $(document).on("click", "#btemailsignup", function(evt)
    {
         /* prodlist ** global activate_page */
        showEmailPage('SIGNUP');

        return false;
    });

     
     $(document).on("click", "#skype1", function(evt)
    {
         
         /* pgrep ** global activate_page */
         console.log('skype1');
         listManufacturerSkype() ;
         console.log('skype1#');
         
        $('#selmanu-product-detail').modal('show');
    
//        showEmailPage('MANUF');
        uib_sb.toggle_sidebar($(".uib_w_71"));  
        return false;
    });
 
     
     $(document).on("click", "#skype2", function(evt)
    {
         /* pgemail ** global activate_page */
         console.log('skype2');
         listManufacturerSkype() ;
        $('#selmanu-product-list').modal('show');
//         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_97"));  
         return false;
    });
     $(document).on("click", "#skype3", function(evt)
    {
         /* proddetail **  global activate_page */
         console.log('skype3');
        listManufacturerSkype() ;
        $('#selmanu-rep-page').modal('show');
//         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     $(document).on("click", "#skype4", function(evt)
    {
         /* prodlist ** global activate_page */
         console.log('skype4');
         listManufacturerSkype() ;
        $('#selmanu-email-DPG').modal('show');
//         showEmailPage('MANUF');
        uib_sb.toggle_sidebar($(".uib_w_42"));  
        return false;
    });
     
     
     $(document).on("click", "#limg1", function(evt)
    {
         var img = $("#simg1").attr("src");
         console.log('image1'+ img);
         showImageOnTop(img);
         return false;
     });
     $(document).on("click", "#limg2", function(evt)
    {
         var img = $("#simg2").attr("src");
         console.log('image2'+ img);
         showImageOnTop(img);
         return false;
     });
     $(document).on("click", "#limg3", function(evt)
    {
         var img = $("#simg3").attr("src");
         console.log('image3'+ img);
         showImageOnTop(img);
         return false;
     });
     $(document).on("click", "#limg4", function(evt)
    {
         var img = $("#simg4").attr("src");
         console.log('image4'+ img);
         showImageOnTop(img);
         return false;
     });
     
     
     

     $(document).on("click", "#btmessage1", function(evt)
    {
         
         /* pgrep ** global activate_page */
         console.log('btmessage1');
         listManufacturerEmail() ;
        $('#selmanu-rep-page').modal('show');
    
//        showEmailPage('MANUF');
        uib_sb.toggle_sidebar($(".uib_w_71"));  
        return false;
    });
 
     
     $(document).on("click", "#btmessage2", function(evt)
    {
         /* pgemail ** global activate_page */
         listManufacturerEmail() ;
        $('#selmanu-email-DPG').modal('show');
//         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_97"));  
         return false;
    });
     $(document).on("click", "#btmessage3", function(evt)
    {
         /* proddetail **  global activate_page */
        listManufacturerEmail() ;
        $('#selmanu-product-detail').modal('show');
//         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     $(document).on("click", "#btmessage4", function(evt)
    {
         /* prodlist ** global activate_page */
         listManufacturerEmail() ;
        $('#selmanu-product-list').modal('show');
//         showEmailPage('MANUF');
        uib_sb.toggle_sidebar($(".uib_w_42"));  
        return false;
    });
     
     
     
     
     
     $(document).on("click", "#btmanu1", function(evt)
    {
         /* pgrep ** global activate_page */
//        listManufacturer();
         activate_page("#rep-page");
        uib_sb.toggle_sidebar($(".uib_w_71"));  
        return false;
    });
     $(document).on("click", "#btmanu2", function(evt)
    {
         /* pgemail ** global activate_page */
//         listManufacturer();
         activate_page("#rep-page");
         uib_sb.toggle_sidebar($(".uib_w_97"));  
         return false;
    });
     $(document).on("click", "#btmanu3", function(evt)
    {
         /* proddetail **  global activate_page */
//         listManufacturer();
         activate_page("#rep-page");
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     $(document).on("click", "#btmanu4", function(evt)
    {
         /* prodlist ** global activate_page */
//        listManufacturer();
         activate_page("#rep-page");
        uib_sb.toggle_sidebar($(".uib_w_42"));  
        return false;
    });
     
     
    $(document).on("click", "#btsendsignup", function(evt)
    {
         /*global activate_page */
         sendEmailSignup();
         return false;
    });
     
     
     
     
    $(document).on("click", "#btSendEmailMessage", function(evt)
    {
         /*global activate_page */
         sendEmail();
         return false;
    });

     
    
     
     
        /* button  #btexitsignup */
    $(document).on("click", "#btexitsignup", function(evt)
    {
        document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        console.log("cookie"+document.cookie);
        
        /* your code goes here */ 
          if (navigator.app) {
            navigator.app.exitApp();
            }
            else if (navigator.device) {
              navigator.device.exitApp();
            }
            else {
                      window.close();
            }                       
         return false;
    });
    
        /* button  #btsample */
    $(document).on("click", "#btsample", function(evt)
    {
        console.log('btsample');
        showEmailPage('SAMPLE');
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
