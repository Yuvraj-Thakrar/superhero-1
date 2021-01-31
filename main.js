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