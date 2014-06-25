
	// Password Validation
var inputName=	$('#inputName') ,inputEmail= $('#inputEmail'), inputContact=$('#inputContact'), inputAddress1=$('#inputAddress1'),inputAddress2=$('inputAddress2'),buttonSave=$('buttonSave');
	  
  function checkFormName() { 
  	var name = inputName.val();
	  	if(name.length > 20) {

	  	  //alert("Characters beyond length");
	  	   $("#inputError").text('Error');
	  	 return ; 
	  	} 
	  	re = /^\w+$/;
	  	 if(!re.test(name)) { 
	  	 	$("#inputError").text('Use numbers or characters');
	  	 	
	  	 	 return ; 
	  	 	} else {
	  	 			  	 		return true;
	  	 	} 
	}	
	


function checkFormEmail() {
		var email= inputEmail.val();
		if (email.length === 0) {
			$("#inputError").text('Error');
			return;
		} 
		re = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$';
		if (!re.test(email)) {
			$("#inputError").text('Error');
	  	 	
	  	 	 return ; 

		} else {
			alert ("Validated");
			return ;
		}	
	}


	function checkFormContact() {
		var contact= inputContact.val();
		if (contact.length === 0 ) {
			alert("Please Enter a Valid COntact Number");
			return;
		} 
		re = /^[0-9]{10}$/;

		if (!re.test(contact)) {
			alert("Error : Enter a Valid contact Number");
	  	 	
	  	 	 return ; 

		} else {
			alert ("Validated");
			return ;
		}	
	}

	function checkFormAddress1() { 
  	var name = inputName.val();
	  	if(name.length == 0) {
	  	  alert("Please Enter The Address");
	  	 
	  	 return ; 
	  	} 
	  	re = /^\w+$/;
	  	 if(!re.test(name)) { 
	  	 	alert("Error: Username must contain only letters, numbers and underscores!");
	  	 	
	  	 	 return ; 
	  	 	} else {
	  	 		alert("Validated");
	  	 		return true;
	  	 	} 
	}	

	function checkFormAddress2() { 
  	var name = inputName.val();
	  	if(name.length == 0) {
	  	  alert("Please Enter The Address");
	  	 
	  	 return ; 
	  	} 
	  	re = /^\w+$/;
	  	 if(!re.test(name)) { 
	  	 	alert("Error: Username must contain only letters, numbers and underscores!");
	  	 	
	  	 	 return ; 
	  	 	} else {
	  	 		alert("Validated");
	  	 		return true;
	  	 	} 
	}	

	function bclose(){
			alert("Successfully Saved");
	}

	inputName.blur(checkFormName);
    inputEmail.blur(checkFormEmail);
    inputContact.blur(checkFormContact);
    inputAddress1.blur(checkFormAddress1);
    inputAddress2.blur(checkFormAddress2);
    buttonSave.onClick(bclose);