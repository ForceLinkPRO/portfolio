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
  $(".btn-filter").click(function() {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".portfolio-item").show("1000");
    } else {
      $(".portfolio-item").not("."+value).hide("1000");
      $(".portfolio-item").filter("."+value).show("1000");
    }
    // add active class
    $("ul .btn-filter").click(function(){
       $(this).addClass('active').siblings().removeClass('active');

   })﻿
  });
  // Filter END

  var boxInfo = $(".box-info"), btnInfo = $(".btn-info");
  
  $(btnInfo).click(function (){
    if(boxInfo.css("display") == "none"){
      $(boxInfo).css("display", "block");
    } else {
      $(boxInfo).css("display", "none");
    }
  });

  $(btnInfo).hover(
    function(){
      if(!isMobile.any()){
        $(boxInfo).css("display", "block");
      }
    },
    function(){}
    );


  $(document).mouseup(function (e){
    if (!boxInfo.is(e.target) && boxInfo.has(e.target).length === 0
      && !btnInfo.is(e.target) && btnInfo.has(e.target).length === 0) {
      $(boxInfo).css("display", "none");
    }
  });
var StatusMenu = false;
  $(".mobile").click(function (){
    if(StatusMenu){
      $(".content-filter span").css("display", "block");
      $(".content-filter ul").css("display", "none");
      StatusMenu = false;
    } else {
      $(".content-filter span").css("display", "none");
      $(".content-filter ul").css("display", "flex");
      StatusMenu = true;
    }
  });
});