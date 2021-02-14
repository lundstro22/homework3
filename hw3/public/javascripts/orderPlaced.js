function orderHasBeenPlaced(){
	var str= document.getElementById("instructions").value;
    var select= document.getElementById("myList");
    var quant = select.options[select.selectedIndex].text;
    var chocolate = document.getElementById("chocolate");
    var cherry = document.getElementById("cherry");
    var plain = document.getElementById("plain");
    var topp = "none";
    if(plain.checked){
    	topp= plain.value;
    }
    if(chocolate.checked){
    	topp= chocolate.value;
    }
    if(cherry.checked){
    	topp= cherry.value;
    }
    if(str.includes("vegan")){
  		alert("Cheesecake contains dairy!!");
    }
    $("form").replaceWith("Thank you. Your order has been placed.");
    $("button:first").replaceWith(quant+" "+topp+" "+str);   
}

