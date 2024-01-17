let victory = 390;
let defeat = 270;
let elo
let winrate 

function winrateCalculator(victory,defeat) 
 {
   victory - defeat;
    return winrate;
 }

 function eloCheck()
  {
   if (winrate <= 10)
    {
     elo = "Ferro";
    }
   if (winrate >= 11 && xp <= 20)
    { 
     elo = "Bronze";
    }
   if (winrate >= 21 && xp <= 50)
    {
     elo = "Prata";
    }
   if (winrate >= 51 && xp <= 80)
    {
     elo = "Ouro";
    }
   if (winrate >= 81 && xp <= 90)
    {
     elo = "Diamante";
    }
   if (winrate >= 91 && xp <= 100)
    {
     elo = "Lendário";
    }
   if (winrate >= 101)
    {
     elo = "Imortal";
    }
     return elo;
 } 

 console.log("Your winrate is " + winrate + ", your elo is " + elo)