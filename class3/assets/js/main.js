$(document).ready(function(){

  $('.myPopup-btn').magnificPopup({

    items:[
      {
        src:'https://www.rrfonline.com/cover.png',
        title:'RRF Online 2'
      },
      {
        src:'https://www.rrfonline.com/wp-content/uploads/2017/07/Screenshot-at-Jul-13-21-24-55-264x135.jpg',
        title:'RRF Online 2'
      },
      {
        src:'https://www.youtube.com/watch?v=u7quEpdNYVs&t=53s',
        title:'vimeo video',
        type:'video'
      },
      {
        src:'https://vimeo.com/ondemand/firstwinter',
        title:'vimeo video',
        type:'video'
      },
      {
        src:'https://www.rrfonline.com/wp-content/uploads/2017/05/psd-to-html-class-1.mp4?_=1',
        title:'RRF video',
        type:'video'
      },
      {
        src:'../img/car-blue.jpg',
        title:'Butterfly'
      },
      {
        src:'../img/laptop-dell.jpg',
        title:'Butterfly'
      },
      {
        src:'../img/sunrise.jpg',
        title:'Butterfly'
      },
      {
        src:'https://youtu.be/saM2pzyidQs?t=30s',
        type:'video'
      }
    ],
    gallery:{
      enabled:true
    },
    type:'image',
    closeOnContentClick:true,


  });


});
