let answer1 = 0
let answer2 = 0

document.getElementById('button').addEventListener('click', guess1)
document.getElementById('button').addEventListener('click', guess2)

function guess1 () {
  answer1 = document.getElementById('type1').value

  if (answer1 === 'e') {
    answer1 = document.getElementById('result1').innerHTML =
    'Congrats, you have solved the first riddle!'
  } else if (answer1 !== 'e') {
    answer1 = document.getElementById('result1').innerHTML =
    'Sorry, that is incorrect, please try again'
  }
}

function guess2 () {
  answer2 = document.getElementById('type2').value

  if (answer2 === 'coal') {
    answer2 = document.getElementById('result2').innerHTML =
    'Congrats, you have solved the first riddle!'
  } else if (answer2 !== 'coal') {
    answer1 = document.getElementById('result2').innerHTML =
    'Sorry, that is incorrect, please try again'
  }
}
