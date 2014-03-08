// Shellmo Web Creator Menu(SWC) v0.0.4
//By JackLee
//https://github.com/jacklkw
//8 March 2014

$(document).ready(function(){$("#accordian h3").click(function(){$("#accordian ul ul").slideUp();if(!$(this).next().is(":visible")){$(this).next().slideDown()}});$("#accordian_sub h3").click(function(){$("#accordian_sub ul ul").slideUp();if(!$(this).next().is(":visible")){$(this).next().slideDown()}});var a;a=new SwcClass()});function SwcClass(){this.MainMenu=new MainMenuClass()}function MainMenuClass(){accordian_sub=$("#accordian_sub");accordian_sub.hide();var a=this;a.ButtonControl()}MainMenuClass.prototype.ButtonControl=function(){accordian_sub=$("#accordian_sub");accordian_sub_motor=$("#accordian_sub_motor");$("#submenu").bind("mousedown touchstart",function(){accordian_sub.fadeTo("slow",1);accordian_sub.fadeTo("slow",1,function(){accordian_sub.show()});if(!accordian_sub.next().is(":visible")){accordian_sub_motor.css("display","block")}});$("#submenu_close").bind("mousedown touchstart",function(){accordian_sub.fadeTo("slow",0);accordian_sub.fadeTo("slow",0,function(){accordian_sub.hide()})})};
