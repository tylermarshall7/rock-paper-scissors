// weapons

let rock = {
      img: "rock.jpg",
      name: "Rock"
    }

let paper = {
      img: "paper.jpg",
      name: "Paper"
    }

let scissors = {
      img: "scissors.jpg",
      name: "Scissors"
    }


// weapon array

let weaponChoice = [rock, paper, scissors]

function play(choice) {
  let randweapon = Math.floor(Math.random() * weaponChoice.length)
 let playerchoice = weaponChoice[choice]
 let computerchoice = weaponChoice[randweapon]

  if (playerchoice === computerchoice ) {
     
    } else if (playerchoice.name == "Rock" && computerchoice.name == "Scissors") {
      
    } else if (playerchoice.name == "Scissors" && computerchoice.name == "Paper") {
     
    } else if (playerchoice.name == "Paper" && computerchoice.name == "Rock") {
      
    } else if (playerchoice.name == "Rock" && computerchoice.name == "Paper") {
     
    } else if (playerchoice.name == "Paper" && computerchoice.name == "Scissors") {
      
    } else if (playerchoice.name == "Scissors" && computerchoice.name == "Rock") {
      
    }

}
