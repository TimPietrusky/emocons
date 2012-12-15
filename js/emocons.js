(function($) {
  $.fn.emocons = function() {
    var emoticons = {
        1 : { text: "emo-happy", regex: ":\\)", emo : ":)"},
        2 : { text: "emo-grin", regex: "\:\D", emo : ":D"},
          3 : { text: "emo-wink", regex: ";\\)", emo : ";)"},
        4 : { text: "emo-cry", regex: ":'\\(", emo : ":'("},
          5 : { text: "emo-surprised", regex: ":o", emo : ":o"},
        6 : { text: "emo-displeased", regex: ":/", emo : ":/"}, 
        7 : { text: "emo-devil", regex: "\:devil\:", emo : ":devil:"}, 
          8 : { text: "emo-unhappy", regex: ":\\(", emo : ":("},
          9 : { text: "emo-sunglasses", regex: "B\\)", emo : "B)"},
          10 : { text: "emo-tongue", regex: ":P", emo : ":P"},
        11 : { text: "emo-beer", regex: ":beer:", emo : ":beer:"},
          12 : { text: "emo-sleep", regex: ":\\|", emo : ":|"},
        13 : { text: "emo-shoot", regex: "\:shoot\:", emo : ":shoot:"},
        14 : { text: "emo-coffee", regex: "\:coffee\:", emo : ":coffee:"},
        15 : { text: "emo-thumbsup", regex: "\:thumbsup\:", emo : ":thumbsup:"},
        16 : { text: "emo-angry", regex: ":angry:", emo : ":angry:"},
        17 : { text: "emo-laugh", regex: ":ueber-happy:", emo : ":uber-happy:"}
    };
    
    return $.each(this, function(i, v) {
      
      var el = $(this);
      
      /*
              * I need to do this because CodePen executes 
       * my JavaScript twice.
             */
      if (!el.hasClass('done')) {
        el.addClass('done');
          
        // Replace the emoticons
        $.each(emoticons, function(ii, vv) {
          var myregexp = new RegExp(vv.regex, "gm");
          
          el.html(el.html().replace(
            myregexp, 
            '<span class="fontelico-'+vv.text+' go" title="'+vv.emo+'"></span>'
          ));
        });
      
        // Handle mouseover
        $.each(el.find('span'), function(ii, vv) {
          $(this).mouseover(function() {
            var gemo = $(this);
            gemo.removeClass('go');
              
            setTimeout(function() {
              gemo.addClass('go');
            }, 150); 
          });
        });
      }
    });
  };
})(jQuery);
