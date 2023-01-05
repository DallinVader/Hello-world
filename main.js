var video = document.getElementById("myVideo")
var PlayPauseButton = document.getElementById("PlayStopButton")

var ButtonDiv = document.getElementById("content")


function PauseingFunction() {
    video.play()
  if (video.muted) {
    video.muted = false
    PlayPauseButton.innerHTML = "Unmuted"
  } 
  else {
    PlayPauseButton.innerHTML = "Muted"
    video.muted = true
  }
}


function Start(){
    video.play()
    PlayPauseButton.innerHTML = "Muted"
    video.muted = true
}