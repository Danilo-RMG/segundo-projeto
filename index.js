let victory = 292;
let defeat = 210;
let winrateResult = winrateCalculator(victory, defeat);
let eloResult =  eloCheck(winrateResult);

function winrateCalculator(numA, numB)
 {
  let winrate = numA - numB;
   return winrate
 }

function eloCheck(winrateResult)
  {
    if (winrateResult <= 10)
     {
      elo = "Ferro";
     }
      if (winrateResult >= 11 && winrateResult <= 20)
       { 
        elo = "Bronze";
       }
        if (winrateResult >= 21 && winrateResult <= 50)
         {
          elo = "Prata";
         }
          if (winrateResult >= 51 && winrateResult <= 80)
           {
            elo = "Ouro";
           }
            if (winrateResult >= 81 && winrateResult <= 90)
             {
              elo = "Diamante";
             }
              if (winrateResult >= 91 && winrateResult <= 100)
               {
                elo = "Lendário";
               }
                if (winrateResult >= 101)
                 {
                  elo = "Imortal";
                 }
                  return elo;
  }

 console.log("Your winrate is " + winrateResult + " and your elo is " + elo)