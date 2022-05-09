window.onload = () => {
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'name');
    const name = document.createTextNode('Adriana Claudia Milcov');
    h1.appendChild(name);
    document.body.appendChild(h1);

    const picture = document.createElement('div');
    picture.setAttribute("class", "picture");
    picture.setAttribute("id", "pictureId");
    document.body.appendChild(picture);


    function daysUntilMyBDay() {
        const today = new Date();
        let myNextBDay = new Date(today.getFullYear(), 09, 02);
        let daysBetween = '';
      

        if (today.getMonth() === 9 && today.getDate === 2) {
            daysBetween =  'Happy Birth Day!!'
        } else {
               if (today.getMonth() >= 10 || (today.getMonth() === 9 &&  today.getDay() === 1) ){
                  let myNextBDay = new Date(today.getFullYear + 1, 09, 02);
                }
           daysBetween = parseInt((myNextBDay.getTime()-today.getTime())/ (24* 3600 * 1000));
        }     

      

        return daysBetween;
    }
    const countDown = document.createElement('div');
    countDown.setAttribute("id", "birthDays");
    //countDown.innerHTML = '<p id ="birthDays"> &#127881 &#127873 &#129346 &#127874 '+ daysUntilMyBDay().toString() + '</p>';   
     countDown.innerHTML = '<p> &#127881 &#127873 &#129346 &#127874 : '+ daysUntilMyBDay().toString() + ' days </p>'
   document.body.appendChild(countDown);

    const pHobbies = document.createElement('p');
    pHobbies.setAttribute("class", "category");
    pHobbies.innerText = 'My Hobbies';
    document.body.appendChild(pHobbies);

    const hobbies = document.createElement('ul');
    hobbies.setAttribute('class', 'hobbies');
    document.body.appendChild(hobbies);

    let hobbiesArray = ['I like hiking', 'I love nature', 'I like tasty healty food', 'I like to relax doing nothing'];
    hobbiesArray =  hobbiesArray.map(e => '<li>' + e + '</li>');
    hobbies.innerHTML = hobbiesArray.join(" ");
     
    let liList = document.querySelectorAll('li');
    liList.forEach(e => e.className = "hobby");
   
  
    const time = document.createElement('li');
    time.setAttribute("id", "time");
    time.innerText = 'Currently I live in Bucharest and the current time is: ';
    hobbies.appendChild(time);

    function getTime() {
        const date = new Date;
        const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
        let liTtime = document.getElementById("time");
        liTtime.innerText = 'Currently I live in Bucharest and the current time is: ' + currentTime;
      
    }

    setInterval(getTime, 100);
   
    const pActivities = document.createElement('p');
    pActivities.setAttribute("class", "category");
    pActivities.innerText = 'My Activities';

    document.body.appendChild(pActivities);

    const myActivitiesList = document.createElement('ul');
    document.body.appendChild(myActivitiesList);

    const activities = `<li>skiing</li>
                        <li>walking in park</li>
                        <li>scooter rides</li>
                        <li>jogging</li>
                        <li>standup shows</li>
                        <li>travel</li>
                        `
myActivitiesList.innerHTML = activities;


const pRestaurants = document.createElement('p');
pRestaurants.innerText = "My Favourite Restaurants";
pRestaurants.setAttribute("class", "category");
pRestaurants.classList.add("food");
document.body.appendChild(pRestaurants);

const myRestaurantsList = document.createElement('ul');
myRestaurantsList.classList.add("restaurants");
document.body.appendChild(myRestaurantsList);
const restaurants = `<li>Rawdia</li>
                     <li>Cafe Paris</li>
                     <li>Grace</li>
                     `

myRestaurantsList.innerHTML = restaurants; 


const divOther = document.createElement('div');
divOther.setAttribute("id", "idOther");
document.body.appendChild(divOther);
const h3Other = document.createElement('h3');
h3Other.innerText = 'And Many More..';
divOther.appendChild(h3Other);

const btn  = document.createElement('button');
btn.innerText = 'More';
btn.addEventListener("click", more);

function more() {
    let elem = document.getElementById("idOther");
    elem.outerHTML = '<p>Love to create web application that most higher necessities of people</p>';
}
divOther.appendChild(btn);
}

