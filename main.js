var canvas=new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;

player_x=200;
player_y=200;


var player_object="";

 var block_img_object="";

function player_update(){


    fabric.Image.fromURL("hero.png",function(Img){
        player_object=  Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
player_object.set({ 
    top:player_y,left:player_x
});
canvas.add(player_object);
    });
}


function new_img(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_img_object=  Img;
        block_img_object.scaleToWidth(block_width);
        block_img_object.scaleToHeight(block_height);
block_img_object.set({ 
    top:player_y,left:player_x
});
canvas.add(block_img_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
console.log(keypress);
    if (keypress=='70') {
        new_img('hulk_face.png');
        console.log("F is pressed");
    }
    if (keypress=='66') {
        new_img('ironman_body.png');
        console.log("B is pressed");
    }
    if (keypress=='76') {
        new_img('spiderman_legs.png');
        console.log("L is pressed");
    }
    if (keypress=='82') {
        new_img('thor_right_hand.png');
        console.log("R is pressed");
    }
    if (keypress=='72') {
        new_img('captain_america_left_hand.png');
        console.log("H is pressed");
    }
     
    if (keypress=='80'&&e.shiftKey==true) {
        console.log("P shift pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
    
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    
    if (keypress=='77'&&e.shiftKey==true) {
        console.log("M & shift pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
    
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (keypress=='37') {
       left();
       console.log("Left is pressed"); 
    }

    if (keypress=='38') {
        up();
        console.log("Up key is pressed"); 
     }

     if (keypress=='39') {
        right();
        console.log("Right is pressed"); 
     }

     if (keypress=='40') {
        down();
        console.log("Down is pressed"); 
     }
    }

    function left(){
        if (player_x>=0) {
            player_x=player_x-block_width;
            console.log("When left arrow is pressed x="+player_x+",y="+player_y);
            canvas.remove(player_object);
            player_update();

        }
    }
    function right(){
        if (player_x<=500) {
            player_x=player_x+block_width;
            console.log("When right is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object)
            player_update();
        }
    }

    function up(){
        if (player_y>=0) {
            player_y=player_y-block_height;
            console.log("When up is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down(){
        if (player_y<=600) {
            player_y=player_y+block_height;
            console.log("When down is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    

    }
