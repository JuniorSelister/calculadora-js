import './styles.css'

document.querySelector('#app').innerHTML = `
  <div class="calculator">

    <div class="history">
      <span>6,291 <i class="ph ph-divide hist"></i> 5</span>
    </div>

    <div class="results">
      <span class="total">1.218,2</span>
    </div>
    
    <div class="first-row">
      <span class="special-button clear">C</span>
      <i class="ph ph-backspace btn"></i>
      <i class="ph ph-percent btn"></i>
      <i class="ph ph-divide btn"></i>
    </div>
      
    <div class="second-row">
      <i class="ph ph-number-seven btn effect"></i>
      <i class="ph ph-number-eight btn effect"></i>
      <i class="ph ph-number-nine btn effect"></i>
      <i class="ph ph-x btn"></i>
    </div>
      
    <div class="third-row">
      <i class="ph ph-number-four btn effect"></i>
      <i class="ph ph-number-five btn effect"></i>
      <i class="ph ph-number-six btn effect"></i>
      <i class="ph ph-minus btn"></i>
    </div>
      
    <div class="fourth-row">
      <i class="ph ph-number-one btn effect"></i>
      <i class="ph ph-number-two btn effect"></i>
      <i class="ph ph-number-three btn effect"></i>
      <i class="ph ph-plus btn"></i>
    </div>
      
    <div class="fifth-row">
      <i class="ph ph-number-zero btn effect"></i>
      <span class="special-button effect">,</span>
      <i class="ph ph-equals btn"></i>
    </div>

  </div>

`