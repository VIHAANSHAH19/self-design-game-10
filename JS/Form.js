class Form{
    constructor(){
        this.button=createButton('start');
        this.button.position(width/2,height/2);
        this.reset=createButton('reset');
        this.reset.position(width-100,40)
    }
    display(){
       this.reset.mousePressed(()=>{
           database.ref('/').update({
               gameState:0,
               playerCount:0,
               players:null
           })
       })
        this.button.mousePressed(()=>{
        this.button.hide();
        
        playerCount=playerCount+1;
        player.index=playerCount;
        player.updateCount(playerCount);
        player.update()
         this.greeting=createElement('h2',"wait for the other players to join") ;
this.greeting.position(width/2,height/2);


    })
   
    }
}