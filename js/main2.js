/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function pagelocator(){
  let valueInput = document.getElementById("noteSearch").value;
  console.log(valueInput);
  if (valueInput == "finance" || valueInput == 'Finance'){
    window.location.assign("financepg1.html")
  }
  if (valueInput == 'Hotel Cateringlaw'){
    window.location.assign("hotelcateringlaw.html")
  }  
  if (valueInput == "Room Division"){
    window.location.assign("room division.html")
  }
  if(valueInput == "Customer Relation"){
    window.location.assign("customerRelation1.html")
  }
  if(valueInput == "Complex Yeast"){
    window.location.assign("complexyeast.html")
  }
  if(valueInput =="food & Beverage"){
    window.location.assign("food&beverage.html")
  }
  if(valueInput == "Menu Planning"){
    window.location.assign("menuplanning.html")
  }
  if(valueInput == "Pastry"){
    window.location.assign("pastry.html")
  }
}

function menuplanningPageJumper(){
  let pageNumber = window.prompt("Jump To Page?");
  console.log(pageNumber);
  /*if(pageNumber == "1"){
    window.location.assign("menuplanning.html");
  }
  if(pageNumber== "2"){
    window.location.assign("menuplanning2.html");
  }
  if(pageNumber == "3"){
    window.location.assign("menuplanning3.html");
  }
  if(pageNumber=> "3"){
    window.location.assign("menuplanning.html");
  }*/
}