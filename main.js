var canvas=new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;

player_x=200;
player_y=200;


player_object="";

block_img_object="";

function player_update(){


    fabric.Image.fromURL("player.jfif",function(Img){
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
        block_img_object.scaleToWidth(150);
        block_img_object.scaleToHeight(140);
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
    if (keypress=="70") {
        new_img('hulk_face.png');
        console.log("F is pressed");
    }
    if (keypress=="66") {
        new_img('ironman_body.png');
        console.log("B is pressed");
    }
    if (keypress=="76") {
        new_img('spiderman_legs.png');
        console.log("L is pressed");
    }
    if (keypress=="82") {
        new_img('thor_right_hand.png');
        console.log("R is pressed");
    }
    if (keypress=="72") {
        new_img('captain_america_left_hand.png');
        console.log("H is pressed");
    }
       }
    if (keypress=='80'&&e.shiftKey==true) {
        console.log("P shift pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
    
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    
    if (keypress=='77'&&e.shiftKey==true) {
        console.log("M & shift pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
    
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (keypress=="37") {
       left();
       console.log("Left is pressed"); 
    }

    if (keypress=="38") {
        up();
        console.log("Up key is pressed"); 
     }

     if (keypress=="39") {
        right();
        console.log("Right is pressed"); 
     }

     if (keypress=="40") {
        down();
        console.log("Down is pressed"); 
     }


    function left(){
        if (player_x>=0) {
            player_x=player_x-10;
            console.log("When left arrow is pressed x="+player_x+",y="+player_y);
            canvas.remove(player_object);
            player_update();

        }
    }
    function right(){
        if (player_x<=500) {
            player_x=player_x+10;
            console.log("When right is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object)
            player_update();
        }
    }

    function up(){
        if (player_y>=0) {
            player_y=player_y-10;
            console.log("When up is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update()
        }
    }

    function down(){
        if (player_y<=600) {
            player_y=player_y+10;
            console.log("When down is pressed,x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update()
        }
    }


