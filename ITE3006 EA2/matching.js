function match(){
	   var password1 = document.getElementById("New_password");
       var Confirm = document.getElementById("Confirm_password");
	   var genderF = document.getElementById("GenderFemale");
	   var genderM = document.getElementById("GenderMale");
	   
	   
	 if((genderF.checked ==false) && (genderM.checked ==false))
       alert("You must choose one gender");
     
	   
      
   	   
	   
	 
	 
     if(password1!=Confirm)
        alert("Ha Ha Ha, password didn't match!");
	    
	 
	
}