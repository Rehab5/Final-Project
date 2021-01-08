

alert("Welcome to my webpage Front-End \n Rehab Kosbar");

//add User function
var userdetails ={
    name:'',
    email:'',
    phone:'',
    message:''
};
var Users=[];
function addUser(event){
    //remove the behaviour of page(refresh)
    event.preventDefault();
    
    //store input value
    var name= document.getElementById('name');
    var email= document.getElementById('email');
    var phone= document.getElementById('phone');
    var message= document.getElementById('message');
    
    // bind the input value in userDetails object
    userdetails.name =name.value;
    userdetails.email= email.value;
    userdetails.phone = phone.value;
    userdetails.message =message.value;
    
    //add user data on array
    Users.push(userdetails);
	
    userdetails={};
   
    name.value='';
    email.value ='';
    phone.value ='';
    message.value='';
    
};


//Button up
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
      $(".up").fadeIn(1000);
    } else {
      $(".up").fadeOut(1000);
    }
  });

  $(".up").on("click", function () {
    $("html,body").animate({
      scrollTop:0
    });
  });
