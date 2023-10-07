
  const getHole = index => document.getElementById(`hole${index}`); 
  const deadclick = document.getElementById("dead");
  const lostClick = document.getElementById("lost");
  let countDead = parseInt(deadclick.textContent);
  let countLost = parseInt(lostClick.textContent);

  function game(deadclick, lostClick){
  console.log(deadclick, lostClick);

  if(deadclick === 10){
    alert("Вы выиграли! Все кроты вас боятся!");
    location.reload;
  } 

  if(lostClick === 5){
    alert("Вы проиграли! Кроты над вами смеются!");
    location.reload;
  }
}

for (let i = 1; i < 9; i++) {
   getHole(i).onclick = function() {
    if (this.className.includes('hole hole_has-mole')) {
        countDead++;
        deadclick.textContent = countDead;
    } else {
        countLost++;
        countLost.textContent = countLost;
    }
    game(countDead, countLost);
   }
}

