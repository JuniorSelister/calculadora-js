import './styles.css'
import { zero,
          one,
          two,
          three,
          four,
          five,
          six,
        seven,
        eight,
        nine,
        clear, addition, minus, multiply, equal, divide, percent} from './calc'

// 1.218,2

// 6,291
{/* <i class="ph ph-divide hist" id="symbol"></i> */}
// 5

{/* <span id="history_calc_A"></span>
<span id="history_calc_B"></span> */}

document.querySelector('#app').innerHTML = `
  <div class="calculator">

    <div class="history">
      
    </div>

    <div class="results">
      <span class="total" id="total_count"></span>
    </div>
    
    <div class="first-row">
      <span class="special-button clear" id="clear">C</span>
      <i class="ph ph-backspace btn" id="backspace"></i>
      <i class="ph ph-percent btn" id="percent"></i>
      <i class="ph ph-divide btn" id="divide"></i>
    </div>
      
    <div class="second-row">
      <i class="ph ph-number-seven btn effect" id="seven"></i>
      <i class="ph ph-number-eight btn effect" id="eight"></i>
      <i class="ph ph-number-nine btn effect" id="nine"></i>
      <i class="ph ph-x btn" id="multiply"></i>
    </div>
      
    <div class="third-row">
      <i class="ph ph-number-four btn effect" id="four"></i>
      <i class="ph ph-number-five btn effect" id="five"></i>
      <i class="ph ph-number-six btn effect" id="six"></i>
      <i class="ph ph-minus btn" id="minus"></i>
    </div>
      
    <div class="fourth-row">
      <i class="ph ph-number-one btn effect" id="one"></i>
      <i class="ph ph-number-two btn effect" id="two"></i>
      <i class="ph ph-number-three btn effect" id="three"></i>
      <i class="ph ph-plus btn" id="plus"></i>
    </div>
      
    <div class="fifth-row">
      <i class="ph ph-number-zero btn effect" id="zero"></i>
      <span class="special-button effect" id="comma">,</span>
      <i class="ph ph-equals btn" id="equal"></i>
    </div>

  </div>

`
zero(document.querySelector('#zero'))
one(document.querySelector('#one'))
two(document.querySelector('#two'))
three(document.querySelector('#three'))
four(document.querySelector('#four'))
five(document.querySelector('#five'))
six(document.querySelector('#six'))
seven(document.querySelector('#seven'))
eight(document.querySelector('#eight'))
nine(document.querySelector('#nine'))

clear(document.querySelector('#clear'))
addition(document.querySelector('#plus'))
minus(document.querySelector('#minus'))
multiply(document.querySelector('#multiply'))
divide(document.querySelector('#divide'))
percent(document.querySelector('#percent'))
equal(document.querySelector('#equal'))