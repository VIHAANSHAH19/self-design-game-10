class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        background("lightgreen")
        if (gameState===0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
        }
        ground=createSprite(windowWidth/2, height-20, width, 20);
        //ground.addImage(gr)
        //ground.scale=10
        ob1=createSprite(width/4, height-105, 60, 150);
        ob1.addImage(ob)
        ob1.debug=true
        ob1.setCollider("rectangle",-10,23,100,50)
        ob2=createSprite(width*3/4, height-200, 200, 50);
        ob2.addImage(ob)
        ob2.debug=true
        ob2.setCollider("rectangle",-10,23,100,50)
        pl1=createSprite(width/5, height-105, 50, 50);
        pl1.addImage(plb)
        pl1.scale=0.5
        pl1.debug=true
        pl1.setCollider("rectangle",-150,0,50,100)
        pl2=createSprite(width*3/4, height-300, 50, 50);
        pl2.addImage(plw)
        pl2.debug=true
        pl2.setCollider("rectangle",-50,0,50,100)
        pl=[pl1,pl2]
    
    }
    play(){
        //player.getRank()
        form.greeting.hide()
        player.getPlayerInfo()


        

        //console.log(allPlayers)
        if(allPlayers!==undefined){
            background(bg)
            drawSprites();
            //image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
           // console.log("play")
           // var x=200
           // var y=0
          
           for(var plr in allPlayers){
                index=index+1
                console.log("for loop")
                if(index==player.index){
                    console.log("if condition")
                if(keyDown(RIGHT_ARROW)){
                    pl[index-1].mirrorX(1)
                    pl[index-1].x=pl[index-1].x+10
                    pl[index-1].setCollider("rectangle",-50,0,50,100)
                    direc=0
                }
                if(keyDown(LEFT_ARROW)){
                    pl[index-1].mirrorX(-1)
                    pl[index-1].x=pl[index-1].x-10
                    pl[index-1].setCollider("rectangle",100,0,50,100)
                    direc=1
                }
                if(keyDown("space")&&direc==1){
                    bullet=createSprite(pl[index-1].x,pl[index-1].y,10,10)
                    bullet.addImage(bul)
                    bullet.velocityX=-5
                    bullet.scale=0.1
                    bullet.mirrorX(-1)
        
                }
                if(keyDown("space")&&direc==0){
                    bullet=createSprite(pl[index-1].x,pl[index-1].y,10,10)
                    bullet.addImage(bul)
                    bullet.velocityX=5
                    bullet.scale=0.1
                    bullet.mirrorX(1)
        
                }
        if (keyDown(UP_ARROW)){
            pl[index-1].velocityY=-10
        }}
                /*x=x+200
                y= displayHeight-allPlayers[plr].distance-200
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }*/
            }
            
        }
        /*if(player.distance>3460){
            gameState=2;
            player.rank++;
            player.updateRank(player.rank)
            console.log(player.rank)
        }
        drawSprites();
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10
            player.update()
        }
        if(gameState==2){
            fill("red")
            textSize(30)
            text("player rank : "+player.rank,displayWidth/2-100,displayHeight-allPlayers[plr].distance-100)
        }*/
    }
}