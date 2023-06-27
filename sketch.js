function preload(){
    bgImg=loadImage("./simpsons/bg.jpg")
    donutImg=loadImage("./simpsons/donut.png")
    homerImg=loadImage("./simpsons/homer.png")
    lisaImg=loadImage("./simpsons/Lisa.png")
    maggieImg=loadImage("./simpsons/maggie.png")
    margeImg=loadImage("./simpsons/marge.png")
    bartImg=loadImage("./simpsons/bart.png")
    dogImg=loadImage("./simpsons/dog.png")
    playButtonImg=loadImage("./simpsons/play.png")
    pinkheartImg=loadImage("./simpsons/pinkheart.png")
    greyheartImg=loadImage("./simpsons/greyheart.png")
    sprinkleImg=loadImage("./simpsons/sprinkle.png")
    simpsonsbgImg=loadImage("./simpsons/bg simpsons.png")
    titleImg=loadImage("./simpsons/title.png")
    gameoverImg=loadImage("./simpsons/gameover.png")
    restartButtonImg=loadImage("./simpsons/restart.png")

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    gamestate=0
    sprinkleGroup=new Group()
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,65)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,165)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,265)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<620;i=i+60){
        sprinkle=createSprite(i,365)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=1130;i<width-20;i=i+60){
        sprinkle=createSprite(i,365)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<620;i=i+60){
        sprinkle=createSprite(i,450)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=1015;i<width-20;i=i+60){
        sprinkle=createSprite(i,450)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,535)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,635)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }
    for(var i=50;i<width-20;i=i+60){
        sprinkle=createSprite(i,735)
        sprinkle.addImage(sprinkleImg)
        sprinkle.scale=0.1
        sprinkleGroup.add(sprinkle)
    }

    

    donut=createSprite(width/2,height/2)
    donut.addImage(donutImg)
    donut.scale=0.160

    wall1=createSprite(10,height/2,20,height)
    wall1.shapeColor="pink"

    wall2=createSprite(width/2,10,width,20)
    wall2.shapeColor="pink"

    wall3=createSprite(width/2,height-10,width,20)
    wall3.shapeColor="pink"

    wall4=createSprite(width-10,height/2,20,height)
    wall4.shapeColor="pink"

    wall5=createSprite(120,400,200,20)
    wall5.shapeColor="pink"

    wall6=createSprite(width-120,400,200,20)
    wall6.shapeColor="pink"

    wall7=createSprite(220,310,200,20)
    wall7.shapeColor="pink"

    wall8=createSprite(330,400,20,200)
    wall8.shapeColor="pink"

    wall9=createSprite(220,490,200,20)
    wall9.shapeColor="pink"

    wall10=createSprite(width-220,310,200,20)
    wall10.shapeColor="pink"

    wall11=createSprite(width-330,400,20,200)
    wall11.shapeColor="pink"

    wall12=createSprite(width-220,490,200,20)
    wall12.shapeColor="pink"

    wall13=createSprite(230,580,220,20)
    wall13.shapeColor="pink"
    
    wall14=createSprite(440,400,20,379)
    wall14.shapeColor="pink"

    wall15=createSprite(230,height-581,220,20)
    wall15.shapeColor="pink"

    wall16=createSprite(width-230,580,220,20)
    wall16.shapeColor="pink"

    wall17=createSprite(width-440,400,20,379)
    wall17.shapeColor="pink"

    wall18=createSprite(width-230,height-581,220,20)
    wall18.shapeColor="pink"

    wall19=createSprite(120,685,200,20)
    wall19.shapeColor="pink"

    wall20=createSprite(440,685,200,20)
    wall20.shapeColor="pink"

    wall21=createSprite(120,height-685,200,20)
    wall21.shapeColor="pink"

    wall22=createSprite(440,height-685,200,20)
    wall22.shapeColor="pink"

    wall23=createSprite(width-120,685,200,20)
    wall23.shapeColor="pink"

    wall24=createSprite(width-440,685,200,20)
    wall24.shapeColor="pink"

    wall25=createSprite(width-120,height-685,200,20)
    wall25.shapeColor="pink"

    wall26=createSprite(width-440,height-685,200,20)
    wall26.shapeColor="pink"

    wall27=createSprite(550,525,20,130)
    wall27.shapeColor="pink"

    wall28=createSprite(330,633,20,125)
    wall28.shapeColor="pink"

    wall29=createSprite(610,470,140,20)
    wall29.shapeColor="pink"

    wall30=createSprite(1300,170,20,125)
    wall30.shapeColor="pink"

    wall31=createSprite(width-550,height-512,20,150)
    wall31.shapeColor="pink"

    wall32=createSprite(width-610,height-440,140,20)
    wall32.shapeColor="pink"
    
    wall33=createSprite(964,415,20,125)
    wall33.shapeColor="pink"

    wall34=createSprite(width-964,415,20,125)
    wall34.shapeColor="pink"

    wall35=createSprite(825,470,298,20)
    wall35.shapeColor="pink"

    wall36=createSprite(705,362,85,20)
    wall36.shapeColor="pink"

    wall37=createSprite(width-705,362,85,20)
    wall37.shapeColor="pink"

    wall38=createSprite(550,290,20,160)
    wall38.shapeColor="pink"

    wall39=createSprite(width-550,height-290,20,160)
    wall39.shapeColor="pink"

    wall40=createSprite(670,690,20,200)
    wall40.shapeColor="pink"

    wall41=createSprite(width-670,height-690,20,200)
    wall41.shapeColor="pink"

    wall42=createSprite(940,582,270,20)
    wall42.shapeColor="pink"

    wall43=createSprite(width-940,height-582,270,20)
    wall43.shapeColor="pink"

    wall44=createSprite(970,640,20,110)
    wall44.shapeColor="pink"

    wall45=createSprite(820,730,20,110)
    wall45.shapeColor="pink"

    wall46=createSprite(width-970,height-640,20,110)
    wall46.shapeColor="pink"

    wall47=createSprite(width-820,height-730,20,110)
    wall47.shapeColor="pink"

    wallGroup=new Group()
    
    homer=createSprite(50,150)
    homer.addImage(homerImg)
    homer.scale=0.11

    lisa=createSprite(50,height-50)
    lisa.addImage(lisaImg)
    lisa.scale=0.13

    maggie=createSprite(width-50,height-50)
    maggie.addImage(maggieImg)
    maggie.scale=0.12

    marge=createSprite(width-50,50)
    marge.addImage(margeImg)
    marge.scale=0.08

    bart=createSprite(275,400)
    bart.addImage(bartImg)
    bart.scale=0.14

    dog=createSprite(width-275,height-400)
    dog.addImage(dogImg)
    dog.scale=0.16

    pinkheart1=createSprite(50,50)
    pinkheart1.addImage("pink",pinkheartImg)
    pinkheart1.scale=0.2
    pinkheart1.addImage("grey",greyheartImg)

    pinkheart2=createSprite(120,50)
    pinkheart2.addImage("pink",pinkheartImg)
    pinkheart2.scale=0.2
    pinkheart2.addImage("grey",greyheartImg)

    pinkheart3=createSprite(190,50)
    pinkheart3.addImage("pink",pinkheartImg)
    pinkheart3.scale=0.2
    pinkheart3.addImage("grey",greyheartImg)

    lives=3
    score=0

    bg=createSprite(width/2,height/2)
    bg.addImage(simpsonsbgImg)
    bg.scale=1.5

    title=createSprite(1100,300)
    title.addImage(titleImg)
    title.scale=1.3

    playButton=createSprite(1150,500)
    playButton.addImage(playButtonImg)
    playButton.scale=1.3

    restartButton=createSprite(width/2,height/2)
    restartButton.addImage(restartButtonImg)
    restartButton.scale=1.3
    

    }
    function draw(){
        background(bgImg)
    text(mouseX+","+mouseY,mouseX,mouseY)
    textSize(30)
    textAlign(CENTER)
    fill("white")
    stroke("white")
    text("Score: "+score,width-100,60)


    if(gamestate===0){
        bg.visible=true
        playButton.visible=true
        restartButton.visible=false
        pinkheart1.visible=false
        pinkheart2.visible=false
        pinkheart3.visible=false
        donut.visible=false
        homer.visible=false
        lisa.visible=false
        marge.visible=false
        maggie.visible=false
        bart.visible=false
        dog.visible=false
        wall1.visible=false
        wall2.visible=false
        wall3.visible=false
        wall4.visible=false
        wall5.visible=false
        wall6.visible=false
        wall7.visible=false
        wall8.visible=false
        wall9.visible=false
        wall10.visible=false
        wall11.visible=false
        wall12.visible=false
        wall13.visible=false
        wall14.visible=false
        wall15.visible=false
        wall16.visible=false
        wall17.visible=false
        wall18.visible=false
        wall19.visible=false
        wall20.visible=false
        wall21.visible=false
        wall22.visible=false
        wall23.visible=false
        wall24.visible=false
        wall25.visible=false
        wall26.visible=false
        wall27.visible=false
        wall28.visible=false
        wall29.visible=false
        wall30.visible=false
        wall31.visible=false
        wall32.visible=false
        wall33.visible=false
        wall34.visible=false
        wall35.visible=false
        wall36.visible=false
        wall37.visible=false
        wall38.visible=false
        wall39.visible=false
        wall40.visible=false
        wall41.visible=false
        wall42.visible=false
        wall43.visible=false
        wall44.visible=false
        wall45.visible=false
        wall46.visible=false
        wall47.visible=false



        drawSprites()
        if(mousePressedOver(playButton)){
            gamestate=1
        }
    }


    if(gamestate===1){
        playButton.visible=false
        restartButton.visible=false
        pinkheart1.visible=true
        pinkheart2.visible=true
        pinkheart3.visible=true
        donut.visible=true
        homer.visible=true
        lisa.visible=true
        marge.visible=true
        maggie.visible=true
        bart.visible=true
        dog.visible=true
        wall1.visible=true
        wall2.visible=true
        wall3.visible=true
        wall4.visible=true
        wall5.visible=true
        wall6.visible=true
        wall7.visible=true
        wall8.visible=true
        wall9.visible=true
        wall10.visible=true
        wall11.visible=true
        wall12.visible=true
        wall13.visible=true
        wall14.visible=true
        wall15.visible=true
        wall16.visible=true
        wall17.visible=true
        wall18.visible=true
        wall19.visible=true
        wall20.visible=true
        wall21.visible=true
        wall22.visible=true
        wall23.visible=true
        wall24.visible=true
        wall25.visible=true
        wall26.visible=true
        wall27.visible=true
        wall28.visible=true
        wall29.visible=true
        wall30.visible=true
        wall31.visible=true
        wall32.visible=true
        wall33.visible=true
        wall34.visible=true
        wall35.visible=true
        wall36.visible=true
        wall37.visible=true
        wall38.visible=true
        wall39.visible=true
        wall40.visible=true
        wall41.visible=true
        wall42.visible=true
        wall43.visible=true
        wall44.visible=true
        wall45.visible=true
        wall46.visible=true
        wall47.visible=true
        if(keyIsDown(LEFT_ARROW)){
            donut.position.x-=5
        }
        if(keyIsDown(RIGHT_ARROW)){
            donut.position.x+=5
        }
        if(keyIsDown(UP_ARROW)){
            donut.position.y-=5
        }
        if(keyIsDown(DOWN_ARROW)){
            donut.position.y+=5
        }
        
        wallGroup.add(wall1)
        wallGroup.add(wall2)
        wallGroup.add(wall3)
        wallGroup.add(wall4)
        wallGroup.add(wall5)
        wallGroup.add(wall6)
        wallGroup.add(wall7)
        wallGroup.add(wall8)
        wallGroup.add(wall9)
        wallGroup.add(wall10)
        wallGroup.add(wall11)
        wallGroup.add(wall12)
        wallGroup.add(wall13)
        wallGroup.add(wall14)
        wallGroup.add(wall15)
        wallGroup.add(wall16)
        wallGroup.add(wall17)
        wallGroup.add(wall18)
        wallGroup.add(wall19)
        wallGroup.add(wall20)
        wallGroup.add(wall21)
        wallGroup.add(wall22)
        wallGroup.add(wall23)
        wallGroup.add(wall24)
        wallGroup.add(wall25)
        wallGroup.add(wall26)
        wallGroup.add(wall27)
        wallGroup.add(wall28)
        wallGroup.add(wall29)
        wallGroup.add(wall30)
        wallGroup.add(wall31)
        wallGroup.add(wall32)
        wallGroup.add(wall33)
        wallGroup.add(wall34)
        wallGroup.add(wall35)
        wallGroup.add(wall36)
        wallGroup.add(wall37)
        wallGroup.add(wall38)
        wallGroup.add(wall39)
        wallGroup.add(wall40)
        wallGroup.add(wall41)
        wallGroup.add(wall42)
        wallGroup.add(wall43)
        wallGroup.add(wall44)
        wallGroup.add(wall45)
        wallGroup.add(wall46)
        wallGroup.add(wall47)

        donut.collide(wallGroup)

        
        if(homer.collide(wallGroup)){
            homer.velocityX=Math.round(random(-10,10))
            homer.velocityY=Math.round(random(-10,10))
        }
        if(lisa.collide(wallGroup)){
            lisa.velocityX=Math.round(random(-10,10))
            lisa.velocityY=Math.round(random(-10,10))
        }
        if(maggie.collide(wallGroup)){
            maggie.velocityX=Math.round(random(-10,10))
            maggie.velocityY=Math.round(random(-10,10))
        }
        if(marge.collide(wallGroup)){
            marge.velocityX=Math.round(random(-10,10))
            marge.velocityY=Math.round(random(-10,10))
        }
        if(bart.collide(wallGroup)){
            bart.velocityX=Math.round(random(-10,10))
            bart.velocityY=Math.round(random(-10,10))
        }
        if(dog.collide(wallGroup)){
            dog.velocityX=Math.round(random(-10,10))
            dog.velocityY=Math.round(random(-10,10))
        }

        
        if(homer.velocityX===0&&homer.velocityY===0){
            homer.velocityX=Math.round(random(-10,10))
            homer.velocityY=Math.round(random(-10,10))
        }
        if(lisa.velocityX===0&&lisa.velocityY===0){
            lisa.velocityX=Math.round(random(-10,10))
            lisa.velocityY=Math.round(random(-10,10))
        }
        if(maggie.velocityX===0&&maggie.velocityY===0){
            maggie.velocityX=Math.round(random(-10,10))
            maggie.velocityY=Math.round(random(-10,10))
        }
        if(marge.velocityX===0&&marge.velocityY===0){
            marge.velocityX=Math.round(random(-10,10))
            marge.velocityY=Math.round(random(-10,10))
        }
        if(bart.velocityX===0&&bart.velocityY===0){
            bart.velocityX=Math.round(random(-10,10))
            bart.velocityY=Math.round(random(-10,10))
        }
        if(dog.velocityX===0&&dog.velocityY===0){
            dog.velocityX=Math.round(random(-10,10))
            dog.velocityY=Math.round(random(-10,10))
        }
      
          if(donut.collide(homer)||donut.collide(lisa)||donut.collide(maggie)||donut.collide(marge)||donut.collide(bart)||donut.collide(dog)){
            lives-=1
            donut.position.x=width/2
            donut.position.y=height/2
          }
          if(lives==2){
            pinkheart3.changeImage("grey")
          }
          if(lives==1){
            pinkheart2.changeImage("grey")
          }
          if(lives==0){
            pinkheart1.changeImage("grey")
            gamestate=2

          }


          for(var i=0;i<sprinkleGroup.length;i++){
            if(donut.isTouching(sprinkleGroup[i])){
                sprinkleGroup[i].destroy()
                score+=1
            }
          }
        
        bg.velocityY=-6
        title.velocityY=-6
        

        drawSprites()
    }
    if(gamestate==2){
        background(gameoverImg)
        restartButton.visible=true
    
        
    }
}