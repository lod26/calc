

const calcDisplay = document.querySelector('.calc-display');
const calcButtons = document.querySelectorAll('.calc-button');
const calculateButton = document.querySelector('.calculate-button');
const clearButton = document.querySelector('.clear-button');

function checkOperator (el) {
  const values = ['+','-','*','/','.']
  if (values.includes(el)) {
    return true
  } else return false
}

function checkAndReturnOperator (el) {
  const values = ['+','-','*','/','.']
  if (values.includes(el)) {
    return el
  }
  return  false
}

const operators = ['+','-','*','/','.']


let acc = '0'
calcDisplay.innerHTML = acc

clearButton.addEventListener('click', e => {
  acc = '0'
  calcDisplay.innerHTML = acc
  e.stopPropagation()
})

calcButtons.forEach((button) => {
  button.addEventListener('click', (e) => {

    if (acc === '0' && e.target.value === '0') {
      console.log('works')
      calcDisplay.innerHTML = acc
    }

    else if (acc === '0' && e.target.value === '.') {
      // acc += '.'
      acc = '0.'
      calcDisplay.innerHTML = acc
    }

    else if (acc[0] === "0" && checkOperator(e.target.value)) {
      // acc = '0'

      calcDisplay.innerHTML = acc
    }

    else if (checkOperator(e.target.value)
      && (acc[acc.length-1] === '-' || acc[acc.length-1] === '+' || acc[acc.length-1] === '/' || acc[acc.length-1] === '*'))
    {

      acc[acc.length - 1] = e.target.value
      calcDisplay.innerHTML = acc

    }
    else {
      if (acc === '0') acc = ''
      acc += e.target.value
      calcDisplay.innerHTML = acc
    }
    e.stopPropagation()
  })
})

calculateButton.addEventListener('click', (e) => {
  e.stopPropagation()
  if (!acc) {
    acc = ''
  } else {
    let res = eval(acc)
    calcDisplay.innerHTML = res
    acc = `0`
  }
})






