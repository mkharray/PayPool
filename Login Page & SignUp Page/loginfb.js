const auth= firebase.auth();
const db = firebase.firestore();
db.settings({merge : true});

const sbtn = document.getElementById("submit-button"); //getting submit button ref
sbtn.addEventListener("click", (e) => {  //do this when user clicks
    var email = document.getElementById("email").value;  // getting email
    var password = document.getElementById("password").value; //getting password
    console.log(email,"\n",password);
    auth.createUserWithEmailAndPassword(email, password) 
    .then(cred =>{
        alert("Logged In!")
    })
    .catch(err =>{
        alert(err); //alerts the user about the error
        window.open("http://www.google.com/");
        })
});