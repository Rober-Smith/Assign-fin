//  variables for answer 1 and 2
let answer1 = 0
let answer2 = 0

//  two event listeners were added to react to both input boxes
document.getElementById('button').addEventListener('click', guess1)
document.getElementById('button').addEventListener('click', guess2)

//  Function for first riddle
function guess1 () {
  answer1 = document.getElementById('type1').value

  //  if typed answer is e put right, if not put wrong
  if (answer1 === 'e') {
    answer1 = document.getElementById('result1').innerHTML =
    'Congrats, you have solved the first riddle!'
  } else if (answer1 !== 'e') {
    answer1 = document.getElementById('result1').innerHTML =
    'Sorry, that is incorrect, please try again'
  }
}

//  Function for second riddle
function guess2 () {
  answer2 = document.getElementById('type2').value

  //  if typed answer is coal put right, if not put wrong
  if (answer2 === 'coal') {
    answer2 = document.getElementById('result2').innerHTML =
    'Congrats, you have solved the second riddle!'
  } else if (answer2 !== 'coal') {
    answer1 = document.getElementById('result2').innerHTML =
    'Sorry, that is incorrect, please try again'
  }
}
