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


var myVideo = {"video": true},errBack = function(error){
alert("Why hello Newton");
};
if(navigator.getUserMedia){
navigator.getUserMedia(myVideo,startWebcam, errBack);
}else if(navigator.webkitGetUserMedia){
navigator.webkitGetUserMedia(myVideo,startWebcam,errBack);
}else if(navigator.mozGetUserMedia){
navigator.mozGetUserMedia(myVideo,startWebcam,errBack);
};

function startWebcam(stream){
var onlinePeter = getElementById("onlinePeter"),
    video = onlinePeter.querySelectorAll("video"),
    canvas = onlinePeter.querySelectorAll("canvas"),
video.width = video.offsetWidth;
if(navigator.getUserMedia){
video.src = stream;
video.play();
}else if(navigator.webkitGetUserMedia){
video.src = window.webkitURL.createObjectUrl(stream);
video.play();
}else if(navigator.mozGetUserMedia){
video.src = window.URL.createObjectUrl(stream);
video.play();
};

$("#webcam-popup .takephoto").click(function(){
var take = document.createElement("canvas");
take.width = video.offsetWidth;
take.height = video.offsetHeight;

var takecontext = take.getcontext("2d"),
takeScale = (take.height/take.width);
take.drawImage(
video,
0,0,
video.offsetWidth,video.offsetHeight
);
canvas.style.height = parseInt(canvas.offsetWidth * takeScale);
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
var context = canvas.getContext("2d"),
scale = canvas.width/take.width;
context.scale(scale,scale);
context.drawImage(bigimage, 0, 0);
});
};