
$('button#switch').on('click',function(e) {
  /*change anything/everything as per to change the view in grid type */
    if ($(this).hasClass('grid')) {
      /*change column classes as per the desired size of the grid or list views */
        $('#content #item').removeClass('s12').addClass('m4 s6');
                /* use s2 or s3 for image in list */
        $('#content #item #image').removeClass('s2').addClass('s12');
          $('#content #item #title').removeClass('s9').addClass('s12');
          $('#switch.list').removeClass('active');
          $(this).addClass('active');

    }
      /*change anything/everything as per to change the view in list type */
    else if($(this).hasClass('list')) {
            /*change column classes as per the desired size of the grid or list views */
        $('#content #item').removeClass('m4 s6').addClass('s12');
        /* use s2 or s3 for image in list */
        $('#content #item #image').removeClass('s12').addClass('s2');
          $('#content #item #title').removeClass('s12').addClass('s9');
          $('#switch.grid').removeClass('active');
          $(this).addClass('active');
    }
});
