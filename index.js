const calcDisplay = document.querySelector('.calc-display');
const calcButtons = document.querySelectorAll('.calc-button');
const calculateButton = document.querySelector('.calculate-button');
const clearButton = document.querySelector('.clear-button');

const operators = ['+', '-', '/', '*']

let acc = '0'
calcDisplay.innerHTML = acc

calcButtons.forEach(button => {
  button.addEventListener('click', (e) => {

    if (e.target.value === '-'
      || e.target.value === '+'
      || e.target.value === '*'
      || e.target.value === '/'
    ) {
      if (acc === '0' && e.target.value === '-') {
        acc = '-'
        calcDisplay.innerHTML = acc
      } else if (acc === '0' && e.target.value !== '-') {
        calcDisplay.innerHTML = acc
      } else if (operators.includes(acc[acc.length - 1])) {
        acc = acc.slice(0, acc.length - 1) + e.target.value
        calcDisplay.innerHTML = acc
        console.log(acc)
      } else  {
        acc += e.target.value
        calcDisplay.innerHTML = acc
      }

    } else if (e.target.value === '.') {
      if (acc === '0') {
        acc += e.target.value
        calcDisplay.innerHTML = acc
      } else if (acc !== '0' && acc[acc.length - 1] !== '.') {
        acc += e.target.value
        calcDisplay.innerHTML = acc
        console.log("Отрабатывает 2")
      } else   {
        calcDisplay.innerHTML = acc
        console.log("Отрабатывает 3")

      }
    }

    else if (acc === '0') {
      acc = e.target.value
      calcDisplay.innerHTML = acc
    } else {
      acc += e.target.value
      calcDisplay.innerHTML = acc
    }



  })
})

calculateButton.addEventListener('click', (e) => {

  acc = eval(acc).toString()
  calcDisplay.innerHTML = acc
  navigator.clipboard.writeText(acc).then(() => {

  })
  e.stopPropagation()
})

clearButton.addEventListener('click', (e) => {
  acc = '0'
  calcDisplay.innerHTML = acc
  e.stopPropagation()
})