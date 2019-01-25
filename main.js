// Initialize Firebase
var config = {
    apiKey: "AIzaSyDaubn94eRzeFwe2U5wMYWuLNZCSM3zRnI",
    authDomain: "contactform-a9fa7.firebaseapp.com",
    databaseURL: "https://contactform-a9fa7.firebaseio.com",
    projectId: "contactform-a9fa7",
    storageBucket: "contactform-a9fa7.appspot.com",
    messagingSenderId: "844420408884"
  };
  firebase.initializeApp(config);

  //reference to messages database
  var databaseRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(event){
    event.preventDefault();

    //test to see if form was submitting
    //console.log("123")

    //get values from form
    var name = getInputVal('name');
    var email = getInputVal('email');
    var company = getInputVal('company');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //test values
    //console.log(name);

    //save new message to firebase db
    saveMessage(name, email, company, phone, message);

    //show message sent alert on submit
    document.getElementById('alert').style.display = 'block';

    //remove alert after 4 seconds
    setTimeout(function(){
        document.getElementById('alert').style.display = 'none';
    }, 4000);

    //reset form after submission
    document.getElementById('contactForm').reset();

}

//function that prevents having to use getElementById a lot /helper method
function getInputVal(id){
    return document.getElementById(id).value;
}

//save to db
function saveMessage(name, email, company, phone, message){
    var newMessageRef = databaseRef.push();

    newMessageRef.set({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message
    });

}