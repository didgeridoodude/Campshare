var config = {
    apiKey: "AIzaSyAONZYnyHUjy1Sng-pxNkStJ_NBkLM83Dw",
    authDomain: "campshare-2c108.firebaseapp.com",
    databaseURL: "https://campshare-2c108.firebaseio.com",
    projectId: "campshare-2c108",
    storageBucket: "campshare-2c108.appspot.com",
    messagingSenderId: "850750063272"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  firebase.database().ref('/posts').on('value', function(snapshot) {
    console.log(snapshot);

    // Variables from database values
    var displayName = snapshot.val();
    var campDestination = snapshot.val();
    var numberPeople = snapshot.val();
    var campingStyle = snapshot.val();
    var notes = snapshot.val();

  });

  database.ref('posts/').on("child_added", function(snapshot) {
    console.log(snapshot.val().location);
    console.log(snapshot.val().name)
    console.log(snapshot.val().startDate)
    console.log(snapshot.val().endDate)
  })
