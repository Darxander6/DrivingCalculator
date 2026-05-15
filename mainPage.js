const measurment_select = document.getElementById("measurment_choice");
const Hinputs = document.getElementById("Hinputs");
let measurment_choice = measurment_select.value;
const weight_select = document.getElementById("weight_choice");
const Winputs = document.getElementById("Winputs");
let weight_choice = weight_select.value;
const calculate = document.getElementById("Calculate");
const info = document.getElementById("info");
const drinkInput = document.getElementById("drinks");
const generInput = document.getElementById("gender");
const bacBar = document.getElementById("bacBar");
let feet = 0;
let inches = 0;
let centimeters =0;
let pounds = 0;
let kilograms =0 ;
let grams = 0;
let drinks = 0;
let r = null;
let bac = 0;
measurment_select.addEventListener('change', (event) => {
  event.preventDefault();
  measurment_choice = measurment_select.value; 
    if (measurment_choice == "ft and in"){
    document.getElementById("Hinput").placeholder = "put feet here";
    if (!document.getElementById("Hininput")) {
    const ininput = document.createElement("input");
    ininput.id = "Hininput";
    ininput.placeholder = "put inches here";
    ininput.type = "number";
    document.body.appendChild(ininput);
    Hinputs.appendChild(ininput);
    }


}
else if (measurment_choice == "in"){
    document.getElementById('Hinput').placeholder ="enter inches";
    document.getElementById("Hininput").remove();
}
else if (measurment_choice == "cm"){
    document.getElementById('Hinput').placeholder ="enter centimeters";
    try {
      document.getElementById("Hininput").remove();

    } catch (error) {
      
    }

}
});
weight_select.addEventListener('change', (event) => {
  event.preventDefault();
  weight_choice = weight_select.value; 

if (weight_choice == "lbs"){
    document.getElementById("Winput").placeholder ="enter pounds";
}
else if (weight_choice == "kg"){
    document.getElementById("Winput").placeholder ="enter kilograms";

}
});
function calFunc(){
  event.preventDefault();
  try {
      document.getElementById("answer").remove();

  } 
  catch (error) {
      
    }
  try {
      document.getElementById("BACAmount").remove();

  } 
  catch (error) {
      
    }
  minutes = Number(document.getElementById("min").value);

  hours = Number(document.getElementById("hours").value)+ minutes/60
  drinks = drinkInput.value;
  if (measurment_choice == "ft and in"){
    feet = document.getElementById('Hinput').value;
    inches = document.getElementById("Hininput").value;
    inches = inches + (feet*12);
  }
  else if (measurment_choice == "in"){
    inches = document.getElementById('Hinput').value;
  }
  else if (measurment_choice == "cm"){
    centimeters = document.getElementById('Hinput').value;
    inches = centimeters*0.393701;
  }
  if (weight_choice == "lbs"){
    pounds = document.getElementById("Winput").value;
    grams = pounds*453.592;
  }
  else if (weight_choice == "kg"){
    kilograms= document.getElementById("Winput").value;
    grams = kilograms * 1000;

  }
  if (generInput.value == "male"){
    r = 0.68
  }
  else if (generInput.value == "female"){
    r= .55
  }
  console.log(r,inches,grams,hours,drinks)
  bac = ((drinks*14)/(grams*r)* 100) - (0.015 * hours)
  if  (bac <= 0){
    bac = 0
  }
  let percent = (bac / 0.20) * 100;
  if (percent>100){
    percent = 100;
  }
  if (percent<0){
    percent = 0;
  }
  bacBar.style.width = `${percent}%`;
  
  if (bac < 0.05) {
      bacBar.style.backgroundColor = "green";
  }
  else if (bac < 0.08) {
      bacBar.style.backgroundColor = "yellow";
  }
  else {
      bacBar.style.backgroundColor = "red";
  }
  console.log(bac)
  const bacamount = document.createElement("h2");
   bacamount.id = "BACAmount"
  console.log(bac)
  if (bac == null || isNaN(bac)){
      bacamount.textContent = "Please enter the right values or all values";

  }
  else{

    bacamount.textContent = `your BAC(blood alchol content) is ${bac.toFixed(2)}`;
    document.body.appendChild(bacamount);
    const candrive = document.createElement("h2");
    candrive.id = "answer"
    if (bac > 0.05){
      if (bac > 0.4){
        candrive.textContent = `your BAC is way to high please call emergency services immediately`;
      }
      else if (bac > 0.3){
        candrive.textContent = `you are very intoxicated please think of seeking help this coul be life threating`;
      }
      else if (bac <3 && bac >0.15){
        candrive.textContent = `You are gettin gclose to dangerous level of alchol please stop drinking immediately `;
      }        
      else{
        candrive.textContent = `your BAC is to high wait until it is less than 0.05%`;
      }


    }
    else{
      candrive.textContent = `your BAC is below 0.05% you are legally allowed to drive (NOTE:This estimate is not a guarante of safe driving. If unsure, do not drive.)`;
    }
    info.appendChild(candrive)

  }

  info.appendChild(bacamount)
  
}


