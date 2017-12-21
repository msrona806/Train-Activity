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
  $("<td>").text(snap.val().name).appendTo(tr);
  $("<td>").text(snap.val().destination).appendTo(tr);
  $("<td>").text(snap.val().Frequency).appendTo(tr);
  $("<td>").text(moment(snap.val().firstTrain).format("HH:mm")).appendTo(tr);
  $("<td>").text(parseInt(snap.val().minutesAway)).appendTo(tr);

  $(tr).appendTo("#schedules");
});  

// button function for adding a train location
// information entered in text box will be displayed in the train schedule
$("#add-destination").on("click", function(event) {
  event.preventDefault(); // prevents page from reloading everytime button is clicked.

  // add train input
  var trainName = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  console.log(trainName);
  
  // code to upload information to firebase
  database.ref("/trainData").push({
    "name": trainName,
    "destination": destination,
    "First Train": firstTrain,
    "Frequency": frequency
  });

  // code to empty text fields when add button is clicked
  $("#name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

  // time calculations
  // var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
  var firstTrainConverted = moment(firstTrain, "hh:mm");
  console.log(firstTrainConverted);

  var currentTime = moment();
  console.log("current time");
  console.log(currentTime);
  
  // minutes away code
  // calculate difference between current time and firstTrain time
  var diffTimeInMinutes = currentTime.diff(firstTrainConverted, "minutes");
  console.log("difference");
  console.log(diffTimeInMinutes); 

  // find 60 minutes remaining to reach 725 min (725 % 60 = 5) 
  var frequencyRemainingMinutes = diffTimeInMinutes % frequency;
  console.log("frequency in min");
  console.log(frequencyRemainingMinutes);

  // next arrival time is current time + (frequency - remaining minutes)
  var nextArrivalTime = currentTime.add((frequency - frequencyRemainingMinutes), "minutes");
  console.log("next arrival");
  console.log(nextArrivalTime.format("hh:mm"));

  });
});


