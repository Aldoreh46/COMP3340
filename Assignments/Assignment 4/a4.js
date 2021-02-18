window.addEventListener("load", init);
counter = 0;
var last_colour = 0;
bcolor = 0;

function init()
{
    var colour_node = document.getElementById("colour");
    var counter_node = document.getElementById("counter");
    var background_node = document.getElementById("background");
    
    colour_node.addEventListener("click", update_colour);
    counter_node.addEventListener("click", update_counter);
    background_node.addEventListener("click", update_background);
}

function update_colour(evt)
{

    if(last_colour==8 ){
        last_colour = 0;
    }

    var red = (last_colour & 4) ? '0' : 'F';
    var green =(last_colour & 2) ? '0' : 'F';
    var blue =(last_colour & 1) ? '0' : 'F';

    var bgRed = (last_colour & 4) ? 'F' : '0';
    var bgGreen =(last_colour & 2) ? 'F' : '0';
    var bgBlue =(last_colour & 1) ? 'F' : '0';

    this.style.color = "#" + red + green + blue;
    this.style.backgroundColor = "#" + bgRed + bgGreen + bgBlue;
    last_colour++;
    
}

function update_counter(evt)
{
    this.innerHTML = "<p>Count = " + counter + ".</p>";
    counter++;
}
function update_background(evt)
{
    if(bcolor == 0){
        document.documentElement.style.backgroundColor = "black" ;
        bcolor = 1;
    }else if(bcolor == 1){
        document.documentElement.style.backgroundColor = "white";
        bcolor = 0;
    }
    //else{
    //    document.documentElement.style.backgroundColor = "red" ;
   //     bcolor = 0;
  //  }
}