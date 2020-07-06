function currencyConverter(valNum) {
    if(converter.rupees.value <= 0)
    window.alert("Enter value greater than 0"); 
    else{
        document.getElementById("dollar").value = (valNum/4.21).toFixed(2); 
        document.getElementById("euro").value = (valNum/4.54).toFixed(2); 
        document.getElementById("swiss").value = (valNum/4.32).toFixed(2); 
        document.getElementById("pound").value = (valNum/5.19).toFixed(2); 
        document.getElementById("jpy").value = (valNum/3.91).toFixed(2); 
    }
}