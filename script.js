  //array of names to guess
  const names=["riya","muskan","vishakha","ankur","ankit","shivam","rohit"];
  //randomdly select  a name from the array
  const randomIndex=Math.floor(Math.random()*names.length);
  const correctName=names[randomIndex];
  //function to check the user guess
  function checkGuess(){
      const guessInput=document.getElementById("guessInput");
      const userGuess=guessInput.value.trim();
      if(userGuess===""){
          alert("please enter the name");
          return;
      }
      if(userGuess===correctName){
          document.getElementById("feedback").textContent="Congratulation!!!!!,You guessed it";
          
      }
      else{
          document.getElementById("feedback").textContent="sorry!!!,Try again";
      }

      //clear input index
      guessInput.value="";
      //randomly select a new namae for the next round
      const newRandomIndex=Math.floor(Math.random()*names.length);
      correctName=names[newRandomIndex];
  }