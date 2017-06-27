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


     $(document).on("click", "#btmessage1", function(evt)
    {
         /* pgrep ** global activate_page */
        showEmailPage('MANUF');
        uib_sb.toggle_sidebar($(".uib_w_71"));  
        return false;
    });
     $(document).on("click", "#btmessage2", function(evt)
    {
         /* pgemail ** global activate_page */
         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_97"));  
         return false;
    });
     $(document).on("click", "#btmessage3", function(evt)
    {
         /* proddetail **  global activate_page */
         showEmailPage('MANUF');
         uib_sb.toggle_sidebar($(".uib_w_72"));  
         return false;
    });
     $(document).on("click", "#btmessage4", function(evt)
    {
         /* prodlist ** global activate_page */
        showEmailPage('MANUF');
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
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
