//console.log(`hello`);
//window.alert(`sannan is here`);
//document.getElementById("sannanh").textContent = "hello";
//document.getElementById("sannanp").textContent = 'my name is sannan abbasi';
//decleration
// //let x;
//assignment
//x = 100;
//console.log(x);
//let age = 19;
//console.log(`i am shikh umer i am ${age} years old`);
//console.log(typeof age);
//strings
//let yourname = "sannan"
//console.log(typeof yourname)
//boleans
//let prayers = true;
//console.log(`he complete four prayers ${prayers}`);
//let myname = "sannan";
//let myage = "19";
//let mycolour = "black";
//document.getElementById("p1").textContent = `my name is ${myname}`;
//document.getElementById("p2").textContent = `my age is ${myage}`;
//document.getElementById("p3").textContent = `my colour is ${mycolour}`;
//addition
//let myage = 19;
//myage = myage + 5;
//console.log(myage);
//subtraction
//let myage = 25;9
//myage = myage - 1;
//console.log(myage);
//multiplication
//let myage = 12;
//myage = myage * 2;
//console.log(myage);
//division
//let myage = 48;
//myage = myage / 2;
//console.log(myage);
//window prompt
//let username;
//username = window.prompt("type in your username");
//console.log(username);
//let username;
//document.getElementById("mysubmit").onclick = function() {
//username = document.getElementById("mytext").value;
//document.getElementById("h1").textContent = (`hello ${username}`)
//}

//let PI = 3.14159;
//let radius;
//let circumference;

//radius = window.prompt("enter the radius of circle");
//radius = Number(radius);
//circumference = 2 * pi * radius;
//console.log(circumference);
//document.getElementById("mysubmit").onclick = function() {
//    radius = document.getElementById("mytext").value;
//  radius = Number(radius);
//circumference = 2 * PI * radius;
//document.getElementById("h2").textContent = circumference;
//}
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");
//const counting = document.getElementById("counting");
//let count = 0;
//increase.onclick = function() {
//   count++;
// counting.textContent = count;

//}
//decrease.onclick = function() {
//  count--;
//counting.textContent = count;
//}
//reset.onclick = function() {
//  count = 0;
//  counting.textContent = count;
//}
//const mybutton = document.querySelector("#mybutton");
//const mylable = document.querySelector("#mylable");
//const min = 1;
// const max = 6;
// let randomnum;
// mybutton.onclick = function() {
//     randomnum = Math.floor(Math.random() * 6) + min;
//     mylable.textContent = randomnum;
// }
// const mytext = document.getElementById("mytext");
// const mysubmit = document.getElementById("mysubmit");
// const resultelement = document.getElementById("resultelement");

// let age;
// mysubmit.onclick = function() {
//     age = mytext.value;
//     age = Number(age);


//     if (age > 100) {
//         resultelement.textContent = `you are khassi`;

//     } else if (age < 0) {
//         resultelement.textContent = `mubarak ho kaka howa hai`;
//     } else if (age == 20) {
//         resultelement.textContent = `shadi krwao budha ho raha hai`;
//     } else if (age < 20) {
//         resultelement.textContent = `shadi ka time aa gya`
//     } else {
//         resultelement.textContent = `pure khassi hai`;
//     }
// }
// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const paypal = document.getElementById("paypal");
// const creditcard = document.getElementById("creditcard");
// const mybutton = document.getElementById("mybutton");
// const subresult = document.getElementById("subresult");
// const payresult = document.getElementById("payresult");


// mybutton.onclick = function() {

//     if (mycheckbox.checked) {
//         subresult.textContent = `you have subscribed`;

//     } else {
//         subresult.textContent = `hurry up subscribe`;
//     }
//     if (visabtn.checked) {
//         payresult.textContent = `you have paid`;
//     } else if (paypal.checked) {
//         payresult.textContent = `you have paid`;
//     } else if (creditcard.checked) {
//         payresult.textContent = `you have paid`;

//     } else {
//         payresult.textContent = `you have not paid`;
//     }

// }
// let loggedin;
// let username;
// let password;

// while (!loggedin) {
//     username = window.prompt("enter username");
//     password = window.prompt("enter password");
//     if (username == "myUsername" && password == "myPassword") {
//         loggedin = true;
//         console.log("you are logged in");
//     } else {
//         console.log("try again")
//     }
// }
// 
// const mynumber = document.getElementById("mynumber");

// const myradio1 = document.getElementById("myradio1");

// const myradio2 = document.getElementById("myradio2");

// const result = document.getElementById("result");
// let temp;

// function convert() {
//     if (myradio1.checked) {
//         temp = Number(mynumber.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp + "°F"
//     } else if (myradio2.checked) {
//         temp = Number(mynumber.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp + "°C"
//     } else {
//         result.textContent = "select a unit";
//     }

// }
// function rolldice() {
//     const numofdice = document.getElementById("numofdice").value;
//     const result = document.getElementById("result");
//     const forpics = document.getElementById("forpics");
//     const values = [];
//     const images = [];
//     for (let i = 0; i < numofdice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="./inverted-dice-${value}.png">`);

//     }
//     result.textContent = `dice:${values.join(`, `)}`;
//     forpics.innerHTML=images.join(``);
// }
// function getrandomfood() {
//     let foods = [];
//     foods.push(document.getElementById("food1").value);
//     foods.push(document.getElementById('food2').value);
//     foods.push(document.getElementById('food3').value);
//     foods.push(document.getElementById('food4').value);
//     let randomfood = Math.floor(Math.random() * foods.length);
//     document.getElementById("result").textContent = `${foods[randomfood]} is best for you`;
//     console.log(randomfood);
// }

// function updateclock() {
//     const now = new Date();
//     let hour = now.getHours();
//     const meridiem = hour >= 12 ? "PM" : "AM";
//     hour = (hour % 12 || 12).toString().padStart(2, 0);
//     const min = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const timestring = `${hour}:${min}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timestring;
// }
// setInterval(updateclock, 1000);
// updateclock();
// const display = document.getElementById("display");
// let timer = null;
// let starttime = 0;
// let elapsdtime = 0;
// let isrunning = false;

// function start() {
//     if (!isrunning) {
//         starttime = Date.now() - elapsdtime;
//         timer = setInterval(update, 10);
//         isrunning = true;
//     }

// }

// function stop() {
//     if (isrunning) {
//         clearInterval(timer);
//         isrunning = false;
//     }

// }

// function reset() {
//     clearInterval(timer);
//     starttime = 0;
//     elapsdtime = 0
//     isrunning = false;
//     display.textContent = "00:00:00:00"
// }

// function update() {
//     const currenttime = Date.now();
//     elapsdtime = currenttime - starttime;
//     let hours = Math.floor(elapsdtime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsdtime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsdtime / 1000 % 60);
//     let milisecounds = Math.floor(elapsdtime % 1000 / 10);
//     display.textContent = `${hours}:${minutes}:${seconds}:${milisecounds}`;

// }
// import { PI } from './math.js';

// console.log(PI);
// const display = document.getElementById("display");

// function appendtodisplay(input) {
//     display.value += input;

// }

// function cleardisplay() {
//     display.value = "";

// }

// function calculate() {
//     try { display.value = eval(display.value); } catch (error) {
//         display.value = "syntax error"
//     }

// }
// const mybox = document.getElementById("mybox");

// function changeColor(event) {
//     event.target.style.backgroundColor = "orange";
//     event.target.textContent = "U are a monkey🐒"
// }
// mybox.addEventListener("click", changeColor);

// mybox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "don,t click😒"

// })
// mybox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "dafa ho💩"
// })
// const moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", event => {
//     console.log(event.key)
//     if (event.key.startsWith("Arrow")) {
//         event.preventDefault();


//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         mybox.style.top = `${y}px`
//         mybox.style.left = `${x}px`
//     }
// })
// const choices = ["rock", "paper", "scissor"];
// const playerdisplay = document.getElementById("playerdisplay");
// const computerdisplay = document.getElementById("computerdisplay");
// const resultdisplay = document.getElementById("resultdisplay");
// const playerscoredisplay = document.getElementById("playerscoredisplay");
// const computerscoredisplay = document.getElementById("computerscoredisplay");
// let playerscore = 0;
// let computerscore = 0;

// function playgame(playerchoice) {
//     const computerchoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";
//     if (playerchoice === computerchoice) {
//         result = "its a tie!";
//     } else {
//         switch (playerchoice) {
//             case "rock":
//                 result = (computerchoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "scissor":
//                 result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                 result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//         if (result === "YOU WIN!") {
//             playerscore++;
//         } else {
//             computerscore++;
//         }
//     }
//     playerdisplay.textContent = `PLAYER ${playerchoice}`
//     computerdisplay.textContent = `computer ${computerchoice}`

//     updateresult(result

//     );


// }

// function clearall() {
//     playerscore = 0;
//     computerscore = 0;
//     updateresult('')
// }

// function updateresult(result) {
//     playerscoredisplay.textContent = `Player Score=${playerscore}`;
//     computerscoredisplay.textContent = `Computer Score=${computerscore}`;
//     resultdisplay.textContent = result;
// }
// const weatherform = document.querySelector(".weatherform");
// const cityinput = document.querySelector(".cityinput");
// const card = document.querySelector(".card");
// const apikey = "03d7afa97957a085d95db2e1cb8c8870";
// weatherform.addEventListener("submit", async event => {
//     event.preventDefault();
//     const city = cityinput.value;
//     if (city) {
//         try {
//             const weatherdata = await getweatherdata(city);
//             displayweatherinfo(weatherdata);

//         } catch (error) {
//             console.error(error);
//             displayerror(error);
//         }
//     } else {
//         displayerror("Please Enter A City");

//     }

// })
// async function getweatherdata(city) {
//     const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//     const response = await fetch(apiurl);
//     if (!response.ok) {
//         throw new Error("couldn't fetch weather data");

//     }
//     return await response.json();
// }

// function displayweatherinfo(data) {
//     const {
//         name: city,
//         main: { temp, humidity, feels_like, temp_max, temp_min },
//         weather: [{ description, id }],
//         wind: { speed }
//     } = data;
//     console.log(data);
//     card.textContent = "";
//     card.style.display = "flex";
//     const citydisplay = document.createElement("h1");
//     const tempdisplay = document.createElement("p");
//     const feelsdisplay = document.createElement("p");
//     const mindisplay = document.createElement("p");
//     const humiditydisplay = document.createElement("p");
//     const winddisplay = document.createElement("p")
//     const discdisplay = document.createElement("p");
//     const weatheremojy = document.createElement("p");

//     citydisplay.textContent = city;
//     tempdisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
//     feelsdisplay.textContent = `Feels Like:${(feels_like-273.15).toFixed(1)}°C`;
//     humiditydisplay.textContent = `Humidity ${humidity}%`;
//     winddisplay.textContent = `Wind:${speed}km/h`;
//     discdisplay.textContent = description;
//     weatheremojy.textContent = getweatheremojy(id);

//     citydisplay.classList.add("citydisplay");
//     tempdisplay.classList.add("tempdisplay");
//     feelsdisplay.classList.add("feelsdisplay");
//     humiditydisplay.classList.add("humiditydisplay");
//     winddisplay.classList.add("winddisplay")
//     discdisplay.classList.add("discdisplay");
//     weatheremojy.classList.add("weatheremojy");
//     console.log(tempdisplay)
//     card.appendChild(citydisplay);
//     card.appendChild(tempdisplay);
//     card.appendChild(feelsdisplay);

//     card.appendChild(humiditydisplay);
//     card.appendChild(winddisplay);
//     card.appendChild(discdisplay);
//     card.appendChild(weatheremojy);

// }

// function getweatheremojy(weatherId) {
//     switch (true) {
//         case (weatherId >= 200 && weatherId < 300):
//             return "⛈️";
//         case (weatherId >= 300 && weatherId < 400):
//             return "🌧️🌧️🌧️";
//         case (weatherId >= 500 && weatherId < 600):
//             return "🌧️";
//         case (weatherId >= 600 && weatherId < 700):
//             return "❄️";
//         case (weatherId >= 700 && weatherId < 800):
//             return "🌫️";
//         case (weatherId === 800):
//             return "☀️";
//         case (weatherId >= 801 && weatherId < 810):
//             return "🌥️";
//         default:
//             return "❓";

//     }
// }

// function displayerror(message) {
//     const errordisplay = document.createElement("p");
//     errordisplay.textContent = message;
//     errordisplay.classList.add("errordisplay");
//     card.textContent = "";
//     card.style.display = "flex";
//     card.appendChild(errordisplay);

// }