var StatusBtnHide = true;
function Show() {
  if(StatusBtnHide) {
    $(".sidebar").hide();
    $(".sidebar-btnhide-new").show().css("display", "flex");
    StatusBtnHide = false;
  } else {
    $(".sidebar").show();
    $(".sidebar-btnhide-new").hide();
    StatusBtnHide = true;
  }
};

var StatusImgSlider = true;
function ShowImgSlider(e) {
  if( StatusImgSlider && $(event.target).is(".popup") ||  $(event.target).is(".fa-times") )  {
    $(".popup").hide();
    StatusImgSlider = false;
  }
};

$(document).ready(function(){
isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

  $(".btn-open-img").click(function(){
    var img = $(this).closest(".portfolio-item").find("img");
    var src = img.attr('src');
    $("body").prepend('<div class="popup" onclick="ShowImgSlider()"><i class="fas fa-times" onclick="ShowImgSlider()"></i><img src="'+src+'" alt="Просматриваемая картинка" /></div>');
    StatusImgSlider = true;
  });

  $(".btn-filter").click(function() {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".portfolio-item").show("1000");
    } else {
      $(".portfolio-item").not("."+value).hide("1000");
      $(".portfolio-item").filter("."+value).show("1000");
    }
  });
  // add active class
  $("ul .btn-filter").click(function(){
     $(this).addClass('active').siblings().removeClass('active');

 })﻿
  // Filter END

  var boxInfo = $(".box-info"), btnInfo = $(".btn-info");
  
  $(btnInfo).click(function (){
    if(boxInfo.css("opacity") == "0"){
      $(boxInfo).css("opacity", "1");
    } else {
      $(boxInfo).css("opacity", "0");
    }
  });

  $(btnInfo).hover(
    function(){
      if(!isMobile.any()){
        $(boxInfo).css("opacity", "1");
      }
    },
    function(){}
    );


  $(document).mouseup(function (e){
    if (!boxInfo.is(e.target) && boxInfo.has(e.target).length === 0
      && !btnInfo.is(e.target) && btnInfo.has(e.target).length === 0) {
      $(boxInfo).css("opacity", "0");
    }
  });
  var StatusMenu = false;
  $(".mobile").click(function (){
    if(StatusMenu){
      $(".content-filter span").css("opacity", "1");
      $(".content-filter ul").css("opacity", "0");
      StatusMenu = false;
    } else {
      $(".content-filter span").css("opacity", "0");
      $(".content-filter ul").css("opacity", "1");
      StatusMenu = true;
    }
  });

});