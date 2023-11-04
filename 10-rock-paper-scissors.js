 //  am anfang so 
    // const score={
    //  wins: 0 ,
    //  losses :0 ,
    //  ties : 0
    // };

    // reasign a variable we have to change it from const to let 
    //    2 with || 
    let score=JSON.parse(localStorage.getItem('score'))||{
      wins :0 ,
      losses :0 ,
      ties :0 
      }
   
      // if(!score)
      /*       1
     if (score===null) {
      score={
      wins :0 ,
      losses :0 ,
      ties :0 
      }
     };
    */
  
    updateScoreElement();
  
   let isAutoPlaying=false;

   let intervalId;

    // function autoPlay() {
    //  if (!isAutoPlaying) {
    //   // setinterval return an ID
    //   intervalId= setInterval(function()  {
    //     const playerMove= pickComputerMove();
    //     playGame(playerMove);
    //    }, 1000);
    //    isAutoPlaying=true;
    //    document.querySelector('.auto-play-button')
    //    .innerHTML=`Stop Play`
    //  } else {
    //   clearInterval(intervalId);
    //   isAutoPlaying=false;
    //   document.querySelector('.auto-play-button')
    //   .innerHTML=`Auto Play`
    //  }

     
    // }

    // the same function but with arrow function

    // const autoPlay=()=>{  we can also make this like arrow fun but it is not good

    // }
    function autoPlay() {
      if (!isAutoPlaying) {
       // setinterval return an ID
       intervalId= setInterval(() => {
         const playerMove= pickComputerMove();
         playGame(playerMove);
        }, 1000);
        isAutoPlaying=true;
        document.querySelector('.auto-play-button')
        .innerHTML=`Stop Play`
      } else {
       clearInterval(intervalId);
       isAutoPlaying=false;
       document.querySelector('.auto-play-button')
       .innerHTML=`Auto Play`
      }
 
      
     }
      // here with addeventlistener 
     document.querySelector('.js-rock-button').addEventListener('click',()=>{
      playGame('Rock');
     });
     document.querySelector('.js-paper-button').addEventListener('click',()=>{
      playGame('Paper');
     });
     document.querySelector('.js-scissors-button').addEventListener('click',()=>{
      playGame('Scissors');
     });

    // onkeydown provides event.key also addeventlistener provides it 
    document.body.addEventListener('keydown',(event)=>{
        if (event.key==='r') {
          playGame('Rock');
        }
       else if (event.key==='p') {
          playGame('Paper');
        }
        else if (event.key==='s') {
          playGame('Scissors');
        }
    })






      function playGame(playerMove){
      const computerMove=pickComputerMove();
  
      let result='';
  
            if (playerMove==='Scissors'){
  
          if (computerMove==='Scissors'){
            result='Tie.';
          } else if(computerMove==='Rock'){
            result='You lose.'
          }else if(computerMove==='Paper'){
            result='You win.'
          }
          }
  
          if (playerMove==='Paper') {
  
            if (computerMove==='Paper'){
              result='Tie.';
            } else if(computerMove==='Scissors'){
              result='You lose.'
            }else if(computerMove==='Rock'){
              result='You win.'
            }
  
          }
  
          if (playerMove==='Rock') {
  
            if (computerMove==='Rock'){
              result='Tie.';
            } else if(computerMove==='Paper'){
              result='You lose.'
            }else if(computerMove==='Scissors'){
              result='You win.'
            }
          }
  
  
            if (result==='You win.') {
              score.wins += 1;
            } else if(result==='You lose.'){
              score.losses+=1;
            }else if(result==='Tie.'){
              score.ties+=1;
            }
  
  
  
            // all variable are temprory thats why when we refrech the page every thing stars from begining , for this case we use local storage , and it supports only strnigs
        
            // two strings      the name   the value
            // localStorage.setItem('messege','Hello');
  
            localStorage.setItem('score',JSON.stringify(score));
  
            updateScoreElement();
  
            document.querySelector('.js-result')
               .innerHTML=`${result}`;
  
  
                // you can write inside innerHTML html code
  
               document.querySelector('.js-moves')
               .innerHTML=` You
    <img src="icons/${playerMove}-emoji.png" class="move-icon">
    <img src="icons/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  
  
    }
  
  
     function updateScoreElement(){
      document.querySelector('.js-score')
     .innerHTML=`Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
  
     }
  
    function pickComputerMove() {
      let computerMove='';
  
           const randomNumber=Math.random();
  
            if (randomNumber>=0 && randomNumber<1/3) {
              computerMove= 'Rock';
            }else if
            (randomNumber>=1/3 && randomNumber<2/3) {
              computerMove='Paper';
            } else if (randomNumber>=2/3 && randomNumber<1) {
              computerMove='Scissors';
            }
             
            return computerMove;
          }