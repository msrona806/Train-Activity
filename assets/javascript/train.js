// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbq0Z4XLhY1Wy3axqEHKOVeJDarBJTUUc",
    authDomain: "train-schedules-db156.firebaseapp.com",
    databaseURL: "https://train-schedules-db156.firebaseio.com",
    projectId: "train-schedules-db156",
    storageBucket: "",
    messagingSenderId: "1055790770682"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
  var database = firebase.database();

// Initial values for add train input
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";

// Button click code. information entered in text box will be displayed in the time schedule
$("#add-destination").click(function() {

  //code to prevent page from refreshing
  event.preventDefault();


  //logic for storing and retrieving data
  trainName = $("#name-input").val().trim();

});

//code to link information to firebase
database.ref().set({


});
console.log(trainName);
  //panel to hold retrieved data
