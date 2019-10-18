 /**
         * detect IE
         * returns version of IE or false, if browser is not Internet Explorer
         */
        function detectIE() {
            var ua = window.navigator.userAgent;

            var msie = ua.indexOf('MSIE ');
            var ie = document.getElementsByClassName('ie-warning');
            var trident = ua.indexOf('Trident/');

            if (msie > 0) {
                // IE 10 or older => return version number
                ie[0].classList.add("ie-warning_show");
              }

            if (trident > 0) {
                // IE 11 => return version number
               ie[0].classList.add("ie-warning_show");
              setTimeout (removeIEwarning, 10000);
              }
             }
        
        function removeIEwarning()
        { var ie = document.getElementsByClassName('ie-warning');
          ie[0].classList.remove("ie-warning_show");

        }
       detectIE();
    