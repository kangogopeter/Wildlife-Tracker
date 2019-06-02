//$(document).ready(function () {
//  $('a.button').click(function () {
//  if ($(this).hasClass('clicked')) {
//    $(this).removeClass('clicked');
//    $(this).find('span.number').html(parseInt($(this).find('span.number').html()) - 1);
//    $(this).find('span.label').html('Like');
//  }
//  else {
//    $(this).addClass("clicked");$(this).find('span.number').html(parseInt($(this).find('span.number').html()) + 1);
//    $(this).find('span.label').html('Dislike');
//  }
//});
//});
//
//
//var videoObj    = { "video": true },
//    errBack        = function(error){
//
//    };
//
//
//if(navigator.getUserMedia){
//    navigator.getUserMedia(videoObj, startWebcam, errBack);
//}else if(navigator.webkitGetUserMedia){
//    navigator.webkitGetUserMedia(videoObj, startWebcam, errBack);
//}else if(navigator.mozGetUserMedia){
//    navigator.mozGetUserMedia(videoObj, startWebcam, errBack);
//};
//
//function startWebcam(stream){
//
//    var myOnlineCamera    = getElementById('myOnlineCamera'),
//        video            = myOnlineCamera.querySelectorAll('video'),
//        canvas            = myOnlineCamera.querySelectorAll('canvas');
//
//    video.width = video.offsetWidth;
//
//    if(navigator.getUserMedia){
//        video.src = stream;
//        video.play();
//    }else if(navigator.webkitGetUserMedia){
//        video.src = window.webkitURL.createObjectURL(stream);
//        video.play();
//    }else if(navigator.mozGetUserMedia){
//        video.src = window.URL.createObjectURL(stream);
//        video.play();
//    };
//
//
//    $('#webcam-popup .takephoto').click(function(){
//
//        var temp = document.createElement('canvas');
//
//        temp.width  = video.offsetWidth;
//        temp.height = video.offsetHeight;
//
//        var tempcontext = temp.getContext("2d"),
//            tempScale = (temp.height/temp.width);
//
//        temp.drawImage(
//            video,
//            0, 0,
//            video.offsetWidth, video.offsetHeight
//        );
//
//
//        canvas.style.height    = parseInt( canvas.offsetWidth * tempScale );
//        canvas.width        = canvas.offsetWidth;
//        canvas.height        = canvas.offsetHeight;
//        var context        = canvas.getContext("2d"),
//            scale        = canvas.width/temp.width;
//        context.scale(scale, scale);
//        context.drawImage(bigimage, 0, 0);
//    });
//};
//
//
//document.addEventListener('DOMContentLoaded', function () {
//
//
//    var video = document.querySelector('#camera-stream'),
//        image = document.querySelector('#snap'),
//        start_camera = document.querySelector('#start-camera'),
//        controls = document.querySelector('.controls'),
//        take_photo_btn = document.querySelector('#take-photo'),
//        delete_photo_btn = document.querySelector('#delete-photo'),
//        download_photo_btn = document.querySelector('#download-photo'),
//        error_message = document.querySelector('#error-message');
//
//
//
//    navigator.getMedia = ( navigator.getUserMedia ||
//    navigator.webkitGetUserMedia ||
//    navigator.mozGetUserMedia ||
//    navigator.msGetUserMedia);
//
//
//    if(!navigator.getMedia){
//        displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
//    }
//    else{
//
//
//        navigator.getMedia(
//            {
//                video: true
//            },
//
//            function(stream){
//
//
//                video.src = window.URL.createObjectURL(stream);
//
//
//                video.play();
//                video.onplay = function() {
//                    showVideo();
//                };
//
//            },
//
//            function(err){
//                displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
//            }
//        );
//
//    }
//
//
//
//
//    start_camera.addEventListener("click", function(e){
//
//        e.preventDefault();
//
//
//        video.play();
//        showVideo();
//
//    });
//
//
//    take_photo_btn.addEventListener("click", function(e){
//
//        e.preventDefault();
//
//        var snap = takeSnapshot();
//
//
//        image.setAttribute('src', snap);
//        image.classList.add("visible");
//
//
//        delete_photo_btn.classList.remove("disabled");
//        download_photo_btn.classList.remove("disabled");
//
//
//        download_photo_btn.href = snap;
//
//
//        video.pause();
//
//    });
//
//
//    delete_photo_btn.addEventListener("click", function(e){
//
//        e.preventDefault();
//
//
//        image.setAttribute('src', "");
//        image.classList.remove("visible");
//
//
//        delete_photo_btn.classList.add("disabled");
//        download_photo_btn.classList.add("disabled");
//
//
//        video.play();
//
//    });
//
//
//
//    function showVideo(){
//
//        hideUI();
//        video.classList.add("visible");
//        controls.classList.add("visible");
//    }
//
//
//    function takeSnapshot(){
//
//        var hidden_canvas = document.querySelector('canvas'),
//            context = hidden_canvas.getContext('2d');
//
//        var width = video.videoWidth,
//            height = video.videoHeight;
//
//        if (width && height) {
//
//
//            hidden_canvas.width = width;
//            hidden_canvas.height = height;
//
//
//
//            context.drawImage(video, 0, 0, width, height);
//
//
//            return hidden_canvas.toDataURL('image/png');
//        }
//    }
//
//
//    function displayErrorMessage(error_msg, error){
//        error = error || "";
//        if(error){
//            console.error(error);
//        }
//
//        error_message.innerText = error_msg;
//
//        hideUI();
//        error_message.classList.add("visible");
//    }
//
//
//    function hideUI(){
//
//
//        controls.classList.remove("visible");
//        start_camera.classList.remove("visible");
//        video.classList.remove("visible");
//        snap.classList.remove("visible");
//        error_message.classList.remove("visible");
//    }
//
//});