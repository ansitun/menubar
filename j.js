  (function($) {
      $.fn.menubar = function() {

          $this = $(this);
//the position must be fixed, as the menubar is to be displayed on the top always.
          $this.css('position', 'fixed');
          $this.wrap("<center></center>");
          $this.hide();
//menubar should be displayed on scrolling down the mouse.
          $(window).scroll(function() {
              $this.show("slow");
//if the mouse is scrolled up, the menubar is hidden.
              var temp = $(window).scrollTop();
              if (temp == 0) {
                  $this.hide("slow");
              }
          });


//to check if the div tag is parent of ul and li.
          if ($(this).is(":parent")) {
//menu class is addeded to the hyperlinks in the div tag.          
            $(this).find("a").addClass("menu");
//for initial alignment of ul.
              $(this).find('ul').addClass('alignment');
//all the li elements in the div must have this tag.
              $('#list1 li').each(function() {
                  $(this).addClass('mainmenu');

              });

//For each case where a list item has a ul item in it.
              $("div#"+$this.attr('id')+" li > ul").each(function() {

                  $(this).children().removeClass('mainmenu');
                  $(this).children().addClass('submenu');

                  $(this).hide("slow");
//in case of moseleave the children must be hidden.
                  $(this).parent().bind("mouseleave", function() {
                    
                        $(this).removeClass("menuhover");

                      $(this).find(" > ul").children().hide("slow");

                  });
//in case of mouseenter the children must be visible.
                  $(this).parent().bind("mouseenter", function() {
                        
                        $(this).addClass("menuhover");
                        
                      $(this).children().show("slow");
                      $(this).find(" > ul").children().show("slow");
                  });

//NOTE: this part is for main menu only.
                  if (($(this).parent().hasClass("mainmenu"))) {
                    
                    
                        $(this).parent().find("a").addClass("menu");

//if the parent has left padding, the child attributes must be properly aligned.                        
                      var x = $(this).parent().css("padding-left");

                      $(this).children().css("left", "-" + x);
                      
//if the parent has top padding, the child attributes must be properly aligned.
                      var x2 = $(this).parent().css("padding-bottom");

                      $(this).children().css("top", "+" + x2);
                  }
//NOTE:this part is for the submenus.
                  if (!($(this).parent().hasClass("mainmenu"))) {
                        $(this).parent().find("a").addClass("menu");
                        
//for proper positioning of child attributes in submenu.                        
                      var x = $(this).parent().css("padding-left");
                      x = parseInt(x) + parseInt($(this).parent().css("width"));

                      $(this).children().css("left", x);
                      
                      var x2 = parseInt($(this).parent().css("padding-bottom")) + parseInt($(this).parent().css("height"));
                      $(this).children().css("top", "-"+x2);
                  }
              });

          }
//the current object is returned.
          return this;

      };
  })(jQuery);


