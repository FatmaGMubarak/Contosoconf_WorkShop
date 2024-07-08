
// function showDetails(a,b,c){
//     let userName ,userAge,userAva;
//     if(typeof(a) === 'string' )
//         {
//             userName =a
//         }
//     else if(typeof(b) === 'string')
//         {
//                 userName =b;
//         }
//     else if(typeof(c) === 'string'){
//         userName = c
//     }
//     if(typeof(a) === 'number' )
//         {
//             userAge =a
//         }
//     else if(typeof(b) === 'number')
//         {
//                 userAge =b;
//         }
//     else if(typeof(c) === 'number'){
//         userAge = c
//     }
//     if(typeof(a) === 'boolean' )
//         {
//             userAva =a
//         }
//     else if(typeof(b) === 'boolean')
//         {
//                 userAva =b;
//         }
//     else if(typeof(c) === 'boolean'){
//         userAva = c
//     }
//     if(userAva ===true)
//         {
//            userAva = "You're available for hiring" 
//         }
//     else if(userAva ===false){
//         userAva = "You're NOT available for hiring" 

//     }
//     return `Hello ${userName } , your age is ${userAge} ,${userAva} `;
// }

// console.log(showDetails("Fatma",21,true));
// console.log(showDetails(25,"Osama",false));
// console.log(showDetails(true,28,"Khaled"));
// console.log(showDetails("Mohamed",false,24));

// let names =  (...nameList) => `string [${nameList.join('],[')}] =>Done!`;


// console.log(names("Mariam" ,"Omar","Ali","Fatma"));
// let swappingCases = "elZERO";
// let invertedNumbers = [1,-10,-20,15,100,-30];
// let ignoreBooleans = "Elz123er4o";

// let sw = swappingCases.split("").map(function(ele){
//     return ele === ele.toUpperCase()? ele.toLowerCase(): ele.toUpperCase();
// }).join("");
// console.log(sw);


// let sw2 = swappingCases.split("").map((ele)=> ele === ele.toUpperCase()? ele.toLowerCase(): ele.toUpperCase()).join("");
// console.log(sw2);



// let inv = invertedNumbers.map(function(ele){
//     return -ele;
// })
// console.log(inv);


// let inv2 = invertedNumbers.map((ele)=>-ele)
// console.log(inv2);



// let ign = ignoreBooleans.split("").map(function(ele){
//     return isNaN(parseInt(ele))?  ele: "";
// }).join("");
// console.log(ign);
// let ign2 = ignoreBooleans.split("").map((ele)=>isNaN(parseInt(ele))?  ele: "").join("");
// console.log(ign2);
// let myFriends = ["Ahmed","Sameh","Sayed","Asmaa","Amgad","Israa"];
// let numbers = [11,20,2,5,17,10];
// let filteredFriends = myFriends.filter(function(ele){
//     return ele.startsWith("A") && ele.endsWith("d");
// })

// let evenNumbers = numbers.filter(function(ele){
//     return ele%2 === 0;
// })
// console.log(evenNumbers);
// let sentence = "I Love Foood Code Too Playing Much";
// let ignoreNumbers = "Elz123er4o";

// let small = sentence.split(" ").filter(function(ele){
//     return ele.length <=4;
// }).join(" ");
// console.log(small);

// let ign =ignoreNumbers.split("").filter(function(ele){
//     return isNaN(parseInt(ele));
// }).join("")
// console.log(ign);

// let mix = "A13BS2ZX"
// let mixed = mix.split("").filter(function(ele){
//     return !isNaN(parseInt(ele));
// }).map(function(ele){
//     return ele * ele;
// }).join("");
// console.log(mixed);
// let user = {
//     theName : "fatma",
//     theAge : 21,
//     sayHello: function(){
//         return `Hello`;
//     },
// };
// console.log(`${user.sayHello()} ${user.theName} your age is ${user.theAge}`);
// let user ={
//     theName : "fatma",
//     theAge : 21,
//     theSkills :["HTML","CSS","JAVASCRIPT"],
//     available :false,
//     addresses:{
//         KSA : "Dubai",
//         Egypt:{
//             one : "Cairo",
//             two: "Giza",
//         },
//     },
//     isava:function(){
//         if (user.available === true){
//             return `Free for work`;
//         }
//         else{
//             return `NOT Free for work`;
//         }
//     }
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theSkills);
// console.log(user.theSkills.join(" | "));
// console.log(user.theSkills[1]);
// console.log(user.addresses.KSA);
// console.log(user.addresses.Egypt.one);
// console.log(user.addresses.Egypt.two);
// console.log(user["addresses"]["Egypt"]["two"]);
// console.log(user.isava())
// let user ={
//     theAge : 21,
//     doubleAge : function(){
//         return user.theAge *2;
//     },
// };

// console.log(user.theAge);
// console.log(user.doubleAge());
// let obj = Object.create(user)

// for(let i =0;i<100;i++){
//     let myElement = document.createElement("div");
//     myElement.className = "Product";
//     let heading = document.createElement("h3");
//     let tHeading = document.createTextNode(`Product Title ${i+1}`);
//     heading.appendChild(tHeading);
//     let para = document.createElement("p");
//     let tParagraph = document.createTextNode(`Product Description ${i+1}`);
//     para.appendChild(tParagraph);
//     myElement.appendChild(heading);
//     myElement.appendChild(para);
//     document.body.appendChild(myElement);
// }
// let nameInput = document.querySelector("[name ='username']")
// let ageInput = document.querySelector("[name ='age']")


// document.forms[0].onsubmit = function(e){
//     let userName = false;
//     let userAge = false;
//     console.log(nameInput.value);
//     console.log(nameInput.value.length);
//     if(nameInput.value !=="" && nameInput.value.length <=10 ){
//         userName =true;
//     }
//     if (ageInput.value !== ""){
//         userAge = true;
//     }


//     if(userAge === false || userName === false){
//         e.preventDefault();
//     }
// }




// document.links[0].onclick = function(eve){
//     console.log(eve);
//     eve.preventDefault();

// }
// let chosen = 3;
// let myFriends = [
//     {title:"Osama",age :39 ,available : true, skills :["HTML","CSS"]},
//     {title:"Ahmed",age :25 ,available : false, skills :["Python","DJango"]},
//     {title:"Sayed",age :33 ,available : true, skills :["PHP","Laravel"]},
// ];

// let [{title :t1, age :a1 , available :ava1 , skills : [,k1] },
// {title :t2, age :a2 , available :ava2 , skills : [,k2] },
// {title :t3, age :a3 , available :ava3 , skills : [,k3] }
// ] = myFriends;

// switch(chosen){
// case 1:
//     console.log(`Your name is ${t1}`)
//     console.log(`Your age is ${a1}`)
//     console.log(ava1 === true?`available`:`not available`)
//     console.log(`Your last skill is ${k1}`)
//     break
// case 2:
//     console.log(`Your name is ${t2}`)
//     console.log(`Your age is ${a2}`)
//     console.log(ava2 === true?`available`:`not available`)
//     console.log(`Your last skill is ${k2}`)
//     break
// case 3:
//     console.log(`Your name is ${t3}`)
//     console.log(`Your age is ${a3}`)
//     console.log(ava3 === true?`available`:`not available`)
//     console.log(`Your last skill is ${k3}`)
    
// }
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.org(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// let num1 = 4;
// let num2 = 12;
// let num3 = 7;
// if(num2 > num1 && num2 > num3){
//     console.log("Number 2 is the greatest")
// }
// else{
//     console.log("Number 2 not is the greatest")

// }

// var heading1 = document.getElementById("heading");
// var headClasses = document.getElementsByClassName("heading");
// var select = document.querySelector("#heading");
// var selectAll = document.querySelectorAll(".heading");
// console.log(heading1);
// console.log(headClasses);
// console.log(select);
// console.log(selectAll);
// let container = document.querySelector(".container");
// container.insertAdjacentHTML("afterbegin", '<h1 class = "test">This is the begining</h1>')
// container.insertAdjacentHTML("beforeend",'<h1 class = "test2">This is the end</h1>')
// let container = document.querySelector(".container")
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// li1.innerText = "Text1";
// li2.innerText = "Text2";
// li3.innerText = "Text3";
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// container.appendChild(ul);

// $(document).ready(function(){
//     $("#target").on("submit" , function(event){
//         let mail = $("#mail").val();
//         let password = $("#password").val();
//         $("#info").append("<h4>" + "Your Email is " +mail +"</h4>");
//         $("#info").append("<h4>" + "Your Password is " +password +"</h4>");
//         event.preventDefault();
//     })
// });
const tracks = [
    {
      id: 1,
      name: "Keynote",
      speaker: "Dr. Jane Smith",
      time: "9:00 AM - 10:00 AM",
      room: "Main Hall",
    },
    {
      id: 2,
      name: "Web Development",
      speaker: "Alice Johnson",
      time: "11:00 AM - 12:00 PM",
      room: "Room A",
    },
    {
      id: 3,
      name: "Data Science",
      speaker: "Charlie Green",
      time: "11:00 AM - 12:00 PM",
      room: "Room B",
    },
    {
      id: 4,
      name: "Cloud Computing",
      speaker: "Eva Black",
      time: "11:00 AM - 12:00 PM",
      room: "Room C",
    },
  ];

$(document).ready(function(event){
    tracks.forEach(track => {
        const trackDiv = $('<div class ="track.id"></div>');
        
        const name = $('<p></p>').text(track.name);
        const speaker = $('<p></p>').text(track.speaker);
        const time = $('<p></p>').text(track.time);
        const room = $('<p></p>').text(track.room);
        
        trackDiv.append(name, speaker, time, room);
        $(trackDiv).hover(function(){
            $(trackDiv).css('background-color', ' rgb(15, 180, 163)')
        },function(){
            $(trackDiv).css('background-color', ' rgb(223, 219, 219)')
        })

        $('body').append(trackDiv);
    });

});

