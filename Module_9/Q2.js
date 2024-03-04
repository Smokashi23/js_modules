//   Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
const button = document.createElement("button");
document.getElementById("top-row").appendChild(button);
button.innerHTML = "10x";
button.addEventListener("click",()=>{document.querySelector('video').playbackRate = 10.0});