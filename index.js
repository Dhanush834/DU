var song = document.getElementById("track-1");
var song2 = document.getElementById("track-2");


var control_btn = document.getElementById("play-pause");
var control_btn2 = document.getElementById("music2");


function handleclick()
{
    var value =  this.innerHTML;
    
    playpause(value);

}

function playpause(value)
{

    switch(value){

        case "a":
            if(song.paused)
            {
                song.play();
                control_btn.className = "pause";
            }

            else
            {
                song.pause();
                control_btn.className = "play";
            }
        break;


        case "b": 
            if(song2.paused)
            {
                song2.play();
                control_btn2.className = "pause";
            }

            else
            {
                song2.pause();
                control_btn2.className = "play";
            }
        break;
        
        }
             
}



control_btn.addEventListener("click",handleclick);
control_btn2.addEventListener("click",handleclick);