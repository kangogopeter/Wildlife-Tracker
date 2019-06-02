$(document).ready(function () {
  $('a.button').click(function () {
  if ($(this).hasClass('clicked')) {
    $(this).removeClass('clicked');
    $(this).find('span.number').html(parseInt($(this).find('span.number').html()) - 1);
    $(this).find('span.label').html('Like');
  }
  else {
    $(this).addClass("clicked");$(this).find('span.number').html(parseInt($(this).find('span.number').html()) + 1);
    $(this).find('span.label').html('Dislike');
  }
});
});


var videoObj    = { "video": true },
    errBack        = function(error){

    };


if(navigator.getUserMedia){
    navigator.getUserMedia(videoObj, startWebcam, errBack);
}else if(navigator.webkitGetUserMedia){
    navigator.webkitGetUserMedia(videoObj, startWebcam, errBack);
}else if(navigator.mozGetUserMedia){
    navigator.mozGetUserMedia(videoObj, startWebcam, errBack);
};

function startWebcam(stream){

    var myOnlineCamera    = getElementById('myOnlineCamera'),
        video            = myOnlineCamera.querySelectorAll('video'),
        canvas            = myOnlineCamera.querySelectorAll('canvas');

    video.width = video.offsetWidth;

    if(navigator.getUserMedia){
        video.src = stream;
        video.play();
    }else if(navigator.webkitGetUserMedia){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }else if(navigator.mozGetUserMedia){
        video.src = window.URL.createObjectURL(stream);
        video.play();
    };


    $('#webcam-popup .takephoto').click(function(){

        var temp = document.createElement('canvas');

        temp.width  = video.offsetWidth;
        temp.height = video.offsetHeight;

        var tempcontext = temp.getContext("2d"),
            tempScale = (temp.height/temp.width);

        temp.drawImage(
            video,
            0, 0,
            video.offsetWidth, video.offsetHeight
        );


        canvas.style.height    = parseInt( canvas.offsetWidth * tempScale );
        canvas.width        = canvas.offsetWidth;
        canvas.height        = canvas.offsetHeight;
        var context        = canvas.getContext("2d"),
            scale        = canvas.width/temp.width;
        context.scale(scale, scale);
        context.drawImage(bigimage, 0, 0);
    });
};
