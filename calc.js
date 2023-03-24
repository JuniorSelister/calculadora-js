let addValue = []
let addAfterComma = []
let isComma = false
let his_calc_A = 0
let his_calc_B = 0

export function zero(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `0`
    isComma ? addAfterComma.push(0) : addValue.push(0)
  })
}

export function one(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `1`
    isComma ? addAfterComma.push(1) : addValue.push(1)
  })
}

export function two(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `2`
    isComma ? addAfterComma.push(2) : addValue.push(2)
  })
}

export function three(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `3`
    isComma ? addAfterComma.push(3) : addValue.push(3)
  })
}

export function four(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `4`
    isComma ? addAfterComma.push(4) : addValue.push(4)
  })
}

export function five(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `5`
    isComma ? addAfterComma.push(5) : addValue.push(5)
  })
}

export function six(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `6`
    isComma ? addAfterComma.push(6) : addValue.push(6)
  })
}

export function seven(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `7`
    isComma ? addAfterComma.push(7) : addValue.push(7)
  })
}
export function eight(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `8`
    isComma ? addAfterComma.push(8) : addValue.push(8)
  })
}

export function nine(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    results.innerHTML += `9`
    isComma ? addAfterComma.push(9) : addValue.push(9)
  })
}

export function clear(props) {
  props.addEventListener('click', () => {
    location.reload()
  })
}

export function deleteNumber(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    addValue.pop()
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')
    results.innerHTML = temp
  })
}

export function setComma(props) {
  let results = document.querySelector('#total_count')
  props.addEventListener('click', () => {
    isComma = true
    results.innerHTML += `,`
  })
}

export function addition(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')

    const translateValueComma = String(addAfterComma)
    let tempComma = translateValueComma.split(',').join('')

    if (isComma) {
      let convertedValue = parseInt(tempComma) / 10
      his_calc_A = parseFloat(temp) + convertedValue
    } else {
      his_calc_A = parseInt(temp)
    }

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

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

    if (isComma) {
      addAfterComma = []
      isComma = false
    }
  })
}

export function minus(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')

    const translateValueComma = String(addAfterComma)
    let tempComma = translateValueComma.split(',').join('')

    if (isComma) {
      let convertedValue = parseInt(tempComma) / 10
      his_calc_A = parseFloat(temp) + convertedValue
    } else {
      his_calc_A = parseInt(temp)
    }

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

    let icon = document.createElement('i')
    icon.classList.add('ph')
    icon.classList.add('ph-minus')
    icon.classList.add('hist')
    icon.setAttribute('id', 'symbol')
    
    let history = document.querySelector('.history')
    history.append(history_calc_A)
    history.append(icon)

    results.innerHTML = ``
    addValue = []

    if (isComma) {
      addAfterComma = []
      isComma = false
    }
  })
}

export function multiply(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')

    const translateValueComma = String(addAfterComma)
    let tempComma = translateValueComma.split(',').join('')

    if (isComma) {
      let convertedValue = parseInt(tempComma) / 10
      his_calc_A = parseFloat(temp) + convertedValue
    } else {
      his_calc_A = parseInt(temp)
    }

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

    let icon = document.createElement('i')
    icon.classList.add('ph')
    icon.classList.add('ph-x')
    icon.classList.add('hist')
    icon.setAttribute('id', 'symbol')
    
    let history = document.querySelector('.history')
    history.append(history_calc_A)
    history.append(icon)

    results.innerHTML = ``
    addValue = []
    
    if (isComma) {
      addAfterComma = []
      isComma = false
    }
  })
}

export function divide(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')

    if (isComma) {
      let convertedValue = parseInt(tempComma) / 10
      his_calc_A = parseFloat(temp) + convertedValue
    } else {
      his_calc_A = parseInt(temp)
    }

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

    let icon = document.createElement('i')
    icon.classList.add('ph')
    icon.classList.add('ph-divide')
    icon.classList.add('hist')
    icon.setAttribute('id', 'symbol')
    
    let history = document.querySelector('.history')
    history.append(history_calc_A)
    history.append(icon)

    results.innerHTML = ``
    addValue = []
    
    if (isComma) {
      addAfterComma = []
      isComma = false
    }
  })
}

export function percent(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')
    his_calc_A = parseInt(temp)

    let history_calc_A = document.createElement('span')
    history_calc_A.setAttribute('id', 'history_calc_A')
    history_calc_A.innerHTML += his_calc_A

    let icon = document.createElement('i')
    icon.classList.add('ph')
    icon.classList.add('ph-percent')
    icon.classList.add('hist')
    icon.setAttribute('id', 'symbol')
    
    let history = document.querySelector('.history')
    history.append(history_calc_A)
    history.append(icon)

    results.innerHTML = his_calc_A / 100
    addValue = []
  })
}

export function equal(props) {
  props.addEventListener('click', () => {
    let results = document.querySelector('#total_count')
    const translateValue = String(addValue)
    let temp = translateValue.split(',').join('')
    
    const translateValueComma = String(addAfterComma)
    let tempComma = translateValueComma.split(',').join('')
    
    if (isComma) {
      let convertedValue = parseInt(tempComma) / 10
      his_calc_B = parseFloat(temp) + convertedValue
    } else {
      his_calc_B = parseInt(temp)
    }

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
        break;
      default:
        results.innerHTML = ``
    }

    addValue = []
    
    if (isComma) {
      addAfterComma = []
      isComma = false
    }

    his_calc_A = 0
    his_calc_B = 0
  })
}