import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);

loadSprite("baza","baza.png")

loadSprite("piernik","piernik.png")

loadSprite("mrug","piernikmruga.png")

loadSound("Cichanoc", "CichaNoc.mp3")

add([
    sprite("baza"),
    pos(0,0)
])

const piernik = add([
    sprite("piernik"),
    pos(200,200)
])

onKeyPress("space", ()=>{
    play("Cichanoc")
})

let pierwszy = true

loop(1, ()=>{
    if(pierwszy) 
    
    {
        piernik.use(sprite("mrug"))

        pierwszy = false
    }
    
    

    else 
    
    {
        piernik.use(sprite("piernik"))

        pierwszy = true
    }
    
    
})
