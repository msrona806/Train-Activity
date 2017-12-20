// code to make script run once page is ready
$(document).ready(function() {

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

// make a table in firebase when new data is added
database.ref("/trainData").on("child_added", function (snap) {

  console.log(snap.val());
 
  //make a tr tag
  var tr = $("<tr>");

  //add in table data
  $("<td>").text(snap.val().trainName).appendTo(tr);
  $("<td>").text(snap.val().destination).appendTo(tr);
  $("<td>").text(frequency).appendTo(tr);
  $("<td>").text(moment(snap.val().firstTrain).format("HH:mm")).appendTo(tr);
  $("<td>").text("$" + parseInt(snap.val().minutesAway)).appendTo(tr);

  $(tr).appendTo("#schedules");
  
});

// button function for adding a train location
// information entered in text box will be displayed in the train schedule
$("#add-destination").on("click", function(event) {
  event.preventDefault(); // prevents page from reloading everytime button is clicked.

  // add train input
  var trainName = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = "";
  var frequency = "";

  
  // code to upload information to firebase
  database.ref().push();

  console.log(trainName);

  // panel to hold retrieved data


  });
});