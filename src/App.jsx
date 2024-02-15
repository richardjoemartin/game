import React, { useEffect } from 'react';
import './App.css';

function App() {
  const jump = () => {
    const character = document.getElementById("character");

    if (character.classList !== "animate") {
      character.classList.add("animate");
    }
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  };

  useEffect(() => {
    const character = document.getElementById("character");
    const block = document.getElementById("block");

    var checkDead = setInterval(function () {
      var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose... Refresh the page to play again");
      }
    }, 10);

    // Cleanup the interval on component unmount
    return () => clearInterval(checkDead);
  }, []); // Empty dependency array to ensure the effect runs only once

  // Make the jump function globally accessible
  window.jump = jump;

  return (
    <div className="App">
      <div id="game" style={{background:"url(https://thumbs.dreamstime.com/b/forest-game-background-d-application-vector-design-tileable-horizontally-size-ready-parallax-effect-73562942.jpg?w=1000)", backgroundSize:"cover"}} onClick={jump}>
        <div id="character"><img height="50px" src="https://th.bing.com/th/id/R.0c4b61db17a53de6ba0f4ffa3b842c2b?rik=rjYT80Y8%2fDP27Q&riu=http%3a%2f%2ffc08.deviantart.net%2ffs70%2ff%2f2014%2f075%2f7%2fa%2frunning_pikachu_animation_by_miyakolupa-d7afleh.gif&ehk=GpjEWh6k7%2bIEa4PVlUtMnwPsYc%2bcdzd%2fUqrwrSAKutE%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
        <div id="block"></div>
      </div> <h1><i class="fa-solid fa-arrow-left-long fa-beat-fade"></i> Click on the image to jump.. <br />Refresh the page to play again!</h1>
    </div>
  );
}

export default App;
