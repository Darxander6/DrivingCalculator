const measurment_select = document.getElementById("measurment_choice");
const Hinputs = document.getElementById("Hinputs");
let measurment_choice = measurment_select.value;
const weight_select = document.getElementById("weight_choice");
const Winputs = document.getElementById("Winputs");
let weight_choice = weight_select.value;
measurment_select.addEventListener('change', (event) => {
  // This line stops the page from reloading
  event.preventDefault();
  measurment_choice = measurment_select.value; 
    if (measurment_choice == "ft and in"){
    document.getElementById("Hinput").placeholder = "put feet here";
    const ininput = document.createElement("input");
    ininput.id = "Hininput"
    ininput.placeholder = "put inches here";
    document.body.appendChild(ininput);
    Hinputs.appendChild(ininput);


}
else if (measurment_choice == "in"){
    document.getElementById('Hinput').placeholder ="enter inches";
    document.getElementById("Hininput").remove()
}
else if (measurment_choice == "cm"){
    document.getElementById('Hinput').placeholder ="enter centimeters";
    document.getElementById("Hininput").remove()

}
  // Now run your logic to update the HTML
updatepage()
});
weight_select.addEventListener('change', (event) => {
  // This line stops the page from reloading
  event.preventDefault();
  weight_choice = weight_select.value; 

if (weight_choice == "lbs"){
    document.getElementById("Winput").placeholder ="enter pounds";
}
else if (weight_choice == "kg"){
    document.getElementById("Winput").placeholder ="enter kilograms";

}
  // Now run your logic to update the HTML
updatepage()
});


