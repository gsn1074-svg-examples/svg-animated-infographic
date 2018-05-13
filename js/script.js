window.onload = function () {

    var timer;
    var s = Snap(1280, 800);
    
	Snap.load("../img/scene.svg", function(f) {

        //create variables for image parts
        var menu = f.select("#menu"),
            pin = f.select("#pin"),
            chatPin = f.select("#chatPin"),
            thumb = f.select("#thumb"),
            disc = f.select("#disc"),
            header = f.select("#header"),
            icons = f.select("#icons"),
            base = f.select("#base"),
            baseText = f.select("#baseText"),
            map = f.select("#map"),
            people = f.select("#peopleBtn"),
            chat = f.select("#chatBtn"),
            burger = f.select("#burgerBtn");
        
        //initially hide animated parts
        menu.attr({ opacity:0 });
        pin.attr({ opacity:0 });
        chatPin.attr({ opacity:0 });
        people.attr({ opacity:0 });
        chat.attr({ opacity:0 });
        burger.attr({ opacity:0 });
        
        s.append(f);
        
        timer = setTimeout(designIn, 300);

		function designIn() {
            clearTimeout(timer);
            thumb.animate( {transform: "t0,-160"},1500, mina.backout, function(){thumbUp()} );
            disc.animate({transform: "t0,-150"},1100, mina.backout);
            header.animate({transform: "t0,-130"},850, mina.backout);
            icons.animate({transform: "t0,-100"},550, mina.backout);
            baseText.animate({transform: "t0,-130"},850, mina.backout);
            base.animate({transform: "t0,-100"},550, mina.backout);
            map.animate({transform: "t0,-70"},450, mina.backout);
        }
        
        //thumb bounce
        function thumbUp(){
            thumb.animate( {transform: "t0,-210"},800, mina.easeinout, function() {thumbDown()} );
        }

        function thumbDown(){
            thumb.animate( {transform: "t0,-160"},800, mina.easeinout, function(){thumbUp()} );
        }
        
        //click functionality:
        people.click(function () {
            pin.animate({opacity:1, transform: "t0,280"},900, mina.backout);
            chatPin.animate({opacity:0, transform: "t0,0"},900, mina.backin);
        });

        chat.click(function () {
            chatPin.animate({opacity:1, transform: "t0,280"},900, mina.backout);
            pin.animate({opacity:0, transform: "t0,0"},900, mina.backin);
        });

        burger.click(function () {
            menu.animate({opacity:1, transform: "t150,-70"},900, mina.backout);
        });

        menu.click(function () {
            menu.animate({opacity:0, transform: "t0,0"},900, mina.backin);
        });
	});
};