let addValue = []
let his_calc_A = 0
let his_calc_B = 0

// symbols
const subtract = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const percent = document.querySelector('#percent')
const deleteNumber = document.querySelector('#backspace')

const comma = document.querySelector('#comma')
const symbol = document.querySelector('#symbol')

export function zero(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('zero')
    results.innerHTML += `0`
    addValue.push(0)
  })
}

export function one(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('one')
    results.innerHTML += `1`
    addValue.push(1)
  })
}

export function two(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('two')
    results.innerHTML += `2`
    addValue.push(2)
  })
}

export function three(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('three')
    results.innerHTML += `3`
    addValue.push(3)
  })
}

export function four(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('four')
    results.innerHTML += `4`
    addValue.push(4)
  })
}

export function five(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('five')
    results.innerHTML += `5`
    addValue.push(5)
  })
}

export function six(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('six')
    results.innerHTML += `6`
    addValue.push(6)
  })
}

export function seven(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('seven')
    results.innerHTML += `7`
    addValue.push(7)
  })
}
export function eight(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('eight')
    results.innerHTML += `8`
    addValue.push(8)
  })
}

export function nine(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('nine')
    results.innerHTML += `9`
    addValue.push(9)
  })
}

export function clear(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    console.log('clear')
    results.innerHTML = ``
  })
}

export function addition(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')
    his_calc_A = parseInt(temp)

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

    console.log(typeof his_calc_A)

    let icon = document.createElement('i')
    icon.classList.add('ph')
    icon.classList.add('ph-plus')
    icon.classList.add('hist')
    icon.setAttribute('id', 'symbol')
    
    let history = document.querySelector('.history')
    history.append(history_calc_A)
    history.append(icon)

    results.innerHTML = ``
    addValue = []
  })
}

export function equal(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')
    his_calc_B = parseInt(temp)

    let history_calc_B = document.createElement('span')
    history_calc_B.setAttribute('id', 'history_calc_B')
    history_calc_B.innerHTML += his_calc_B

    let history = document.querySelector('.history')
    history.append(history_calc_B)
    
    const operator = []
    const tempTag = document.querySelector('#symbol')
    for (let classes of tempTag.classList) {
      operator.push(classes)
    }

    switch (operator[1]) {
      case 'ph-plus':
        results.innerHTML = his_calc_A + his_calc_B
        break;
      case 'ph-minus':
        results.innerHTML = his_calc_A - his_calc_B
        break;
      case 'ph-x':
        results.innerHTML = his_calc_A * his_calc_B
        break;
      case 'ph-divide':
        his_calc_B === 0 ? results.innerHTML = `Not divisible` : results.innerHTML = his_calc_A / his_calc_B
        break
      default:
        results.innerHTML = ``
    }
    addValue = []
  })
}