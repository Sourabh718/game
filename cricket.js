let score={
  win: 0,
  lost: 0,
  tied: 0,
}
let storeData=JSON.parse(localStorage.getItem('score'))
console.log(storeData!=0);
if(storeData){
    score=storeData;
    document.getElementById('score').value=`You win : ${score.win} |  computer win : ${score.lost}  |  match tie : ${score.tied}`;
}
function game(){
  let computer_choice;
  let random_no=Math.random()*3;
  if(random_no > 0 && random_no < 1){
    computer_choice = 'Stone';
  }
  else if(random_no > 1 && random_no < 2){
      computer_choice = 'Paper';
  }
  else{
    computer_choice = 'Scissor';
  }
  document.getElementById('computer').innerText= `computer chose : ${computer_choice}.`;
      return computer_choice;
}
let result;
function game2(user_move,computer_move)
{
  if(user_move === computer_move)
  {
    result = 'match tied';
    score.tied++
  }
  else if((user_move=='Stone' && computer_move=='Scissor') || (user_move=='Paper' && computer_move=='Stone') || user_move=='Scissor' && computer_move=='Paper')
  {
    result = 'user win';
    score.win++;
  }
  else
  {
    result = 'computer win';
    score.lost++;
  }
   document.getElementById('user').innerText = `you chose : ${user_move}.`;
   return result;
}

function final_result(user_move,computer_move)
{
  document.getElementById('result').innerText = result+ '!';
  document.getElementById('score').value=`You win : ${score.win} |  computer win : ${score.lost}  |  match tie : ${score.tied}`;
  localStorage.setItem('score',JSON.stringify(score));
}

function resetGame(){
    localStorage.removeItem('score');
    score = {
    win: 0,
    lost: 0,
    tied: 0,
  };
  document.getElementById('score').value="";
}