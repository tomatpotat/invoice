var myFullpage = new fullpage('#fullpage', {

    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    lazyLoad: true,
    css3: false,
    scrollOverflow: true,
    responsiveWidth: 769,
        afterResponsive: function(isResponsive){
        //  ( '#fullpage',{ lazyLoad: false})
        }
  //  responsiveWidth: 900
    });
