const selectTag = document.querySelector('.form-select'); // Get select tag

const inputsParent = document.querySelector('.conv-input'); // Get all inputs parent div

selectTag.addEventListener('change', chooseConversion) // Add 'change' eventlistener to select tag

function chooseConversion() {

    /* Check if each selected option in select tag has a value of 'mass', 
    'temperature' or 'lenghth' respectively
    */
    if(selectTag.value === 'mass') {

        // Create mass inputs
        const mass = `
            <div class="mass">
                <input type="text" class="form-control form-control-lg mb-4" id="kilo" placeholder="Kilogram">
                <input type="text" class="form-control form-control-lg" id="gram" placeholder="Gram">
            </div> 
        `
        // Populate inputs parent div
        inputsParent.innerHTML = mass;

        const kilo = document.querySelector('#kilo'); // Get kilo input field
        const gram = document.querySelector('#gram'); // Get gram input field

        // Convert from kilogram to gram
        kilo.addEventListener('input', val => {
            let kiloValue = val.target.value;
                let eval = kiloValue*1000;
                kiloValue === '' ? gram.value = '' : gram.value = eval;
        });

        // Convert from gram to kilogram
        gram.addEventListener('input', val => {
            let gramValue = val.target.value;
            let eval = gramValue / 1000;
            gramValue === '' ? kilo.value = '' : kilo.value = eval;
        })

    } else if(selectTag.value === 'temperature') {
        console.log('excel!!!')

        // Create temperature inputs
        const temperature = `
            <div class="temperature">
                <input type="text" class="form-control form-control-lg mb-4" id="celcius" placeholder="Celcius">
                <input type="text" class="form-control form-control-lg" id="fahrenheit" placeholder="Fahrenheit">
            </div>
        `
        inputsParent.innerHTML = temperature;

        const celcius = document.querySelector('#celcius') // Get celcius input
        const fahrenheit = document.querySelector('#fahrenheit'); // Get fahrenheit input
    
        // Convert from fahrenheit to celcius
        fahrenheit.addEventListener('input', val => {           // Add name to this function to test if it works;
            let fahrenheitValue = val.target.value;
            let eval = (fahrenheitValue -32 ) / 1.8;
            fahrenheitValue === '' ? celcius.value = '' : celcius.value = eval;
        });
        
        // Convert from celcius to fahrenheit
        celcius.addEventListener('input', val => {
            let celciusValue = val.target.value;
            let eval = (celciusValue * 1.8) + 32;
            celciusValue === '' ? fahrenheit.value = '' : fahrenheit.value = eval;
        });
     

    } else if(selectTag.value === 'length') {
        console.log('I am here!')
    
        // Create inputs for lenght conversion
        const length = `
            <div class="length">
                <input type="text" class="form-control form-control-lg mb-4" id="feet" placeholder="feet">
                <input type="text" class="form-control form-control-lg" id="meter" placeholder="meter">
            </div> 
        `
        // Populate inputs parent div
        inputsParent.innerHTML = length;
    
        const feet = document.querySelector('#feet'); // Get kilo input field
        const meter = document.querySelector('#meter'); // Get gram input field
    
        // Convert from feet to meter
        feet.addEventListener('input', val => {
        let feetValue = val.target.value;
            let eval = feetValue / 3.2808;
            feetValue === '' ? meter.value = '' : meter.value = eval;
        });
    
        // Convert from meter to feet
        meter.addEventListener('input', val => {
            let meterValue = val.target.value;
            let eval = meterValue * 3.2808;
            meterValue === '' ? feet.value = '' : feet.value = eval;
        })
    }
}