// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var playing_music = "no";
function playMusic() {
  const text_box = document.querySelector(".url_box");
  const value = text_box.value;
  const title = document.querySelector(".isOn");
  const loop = document.querySelector(".doLoop");
  const	offButton = document.querySelector(".stopMusic");
  console.log(value);
  var sound = new Howl({
    src: [value]
  });

  // Clear listener after first call.
  sound.once('load', function(){
    console.log("Starting Player...");

    title.style.display = "";
    playing_music = "yes";
    console.log(playing_music);
    sound.play();

  });

  // Fires when the sound finishes playing.
  sound.on('end', function(){
    console.log('Finished!');
    if(loop.value == "true"){
	    console.log("Looping...");
    	sound.play();
    }else {
    	console.log("Done!");
    	title.style.display = "none";
    }
  });
}
