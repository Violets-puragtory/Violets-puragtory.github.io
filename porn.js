<!DOCTYPE html>
<html>
    <button id="baton" onclick="play()">DO NOT CLICK
    </button>
   
    <img id="sex" width="100%" src="./Images/No sex.jpg"/>

    <iframe id='kaboom' src="https://gifer.com/embed/2a9n" width="0%" frameBorder="0" allowFullScreen></iframe>

</html>

<style>
    #sex {


        animation: hello 2s forwards paused,
    violent-rotation 0.25s 3s infinite paused linear;  
    }

    @keyframes violent-rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes hello {
        from{
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
</style>

<script>
    
function play() {
    var audio = new Audio('./Sounds/Penis Music.mp3');
    audio.volume = 0.35
    audio.play();

    document.getElementById('sex').style.animationPlayState = 'running'
    document.getElementById('baton').remove()

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   sleep(10000).then(() => {
    //// code
    close()
    window.close()
    self.close()

    document.getElementById('sex').remove()
    
    document.getElementById('kaboom').style.width = "100%"
})



    

}   


</script>
