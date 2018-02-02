function validate() {
    //grabbing the value of the email field
    let emailValidate = document.getElementById('emailVal').value;

    //grabbing the value of the zipcode field
    let zipValidate = document.getElementById('zip').value;

    //check to see if email field is empty
    if (emailValidate=="") {
        alert('Please Enter A Name And Zipcode');
        return false;
    }else if
      //check to see if zipcode field is a numeric character
      (!/^[0-9]+$/.test(zipValidate)){
        alert("Please Enter A Valid Zipcode")
      }else{

        //thank you message if the email field is not empty and zipcode field is consist of numeric characters
        alert("Thank You!")
    };
}


