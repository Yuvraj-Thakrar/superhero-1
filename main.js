var canvas= new fabric.('myCanvas');

block_width=30;
block_height=30;

player_x=200;
player_y=200;

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
window.addEventListener("keydown",my_keydown);

function my_keydown(){
    keypress=e.keycode;

    if (keypress=="70") {
        new_img('hulk_face.png')
        console.log("F is pressed")
    }
    if (keypress=="66") {
        new_img('ironman_body.png')
        console.log("B is pressed")
    }
    if (keypress=="76") {
        new_img('spiderman_legs.png')
        console.log("L is pressed")
    }
    if (keypress=="82") {
        new_img('thor_right_hand.png')
        console.log("R is pressed")
    }
    if (keypress=="72") {
        new_img('captain_america_left_hand.png')
        console.log("H is pressed")
    }
    if (keypress==) {
        new_img('hulk_face.png')
        console.log("Fi is pressed")
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



}