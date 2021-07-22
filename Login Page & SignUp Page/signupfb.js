  const auth= firebase.auth();
  const db = firebase.firestore();

  //update firestore settings
  db.settings({timestampsInSnapshots : true});

  const signupform = document.getElementById("signupform");

  signupform.addEventListener("submit", (e) =>{
    e.preventDefault(); //prevents reloading the page after submitting

    //getting userinfo
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    //sign up user
    //auth.createUserWithEmailAndPassword returns a PROMISE
    auth.createUserWithEmailAndPassword(email, password)
    .then(cred =>{
      alert("Thanks For Signing Up!")
    })
    .catch(err =>{
      var span = document.createElement("span");
      var textn = document.createTextNode(`Oops! ${err.message}`);
      span.appendChild(textn);
      document.getElementById("signupform").appendChild(span);
      })
  });


  // function signUp(){
  //   var email = document.getElementById("email");
  //   var password = document.getElementById("password");

  //   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  //   promise.catch(e => alert(e.message));
  //   alert(email.value);
  // }









// const loginForm = document.getElementById("loginform");
// loginForm.addEventListener("submit", (e) =>{
// e.preventDefault();

// //getting userinfo
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// console.log(email,password);

// // auth.signInWithEmailAndPassword()
// });