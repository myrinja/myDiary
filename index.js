//to be used
//DOM
//fundaments


//bring in the data from the database
//identify where we will place the data
//fetch the data
//convert to readable format =>
//display
//loop through the data
//append the data

let entry_List = document.getElementById('entries')
let dataUrl = 'http://localhost:3000/diaryEntries'//follow link to see if you can get the data
let form = document.getElementById('postform')//called globally so that it can be called
//we can have methods GET,POST,PUT,DELETE
//GET
fetch(dataUrl)
//.then is a function
//map is a function that takes in callback funstion
.then(res => res.json())//res is a parameter I can even use i insted//THEN GIVE US INFORMATION ABOUT THE DATA NOT THE DATA ITSELF
.then(data => displayScreen(data)) //inside this we have a call backfunction to manipulate our data
//the callbackfuction has data as an array so we have to loop through the data using map()
let displayScreen = (data) => {
    data.map(i => {
console.log(i)
let entry = document.createElement('div')

//add data to the div using string intercopolation
entry.innerHTML =`
<h3>Title:${i.title}</h3>
<h6>Date:${i.date}</h6>
<p>${i.content}</p>
`
//console.log(entry)
//next we append the data
entry_List.appendChild(entry)

    })//loop through the data 
    //then append each data
}
//POST request

//posting experiences
//access inputs values and store the variabls
//fetch 
    //define method
    //define the header and body
//conver it to json

//create a function

//form keeps reapeating itself when it refreshes
//to prevent this //add an eventlistner in the button
//prevent default
let addDiaryEntry = (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value//.value helps us to get the value entered inside our element i.e input
    let date = document.getElementById('date').value
    let experience = document.getElementById('experience').value



    const entryObj ={
        title:title,
        date:date,
        content:content
    }//we pass this data to our body

    //post take in  2 parameters (url and an object(method,header and body))
    fetch(dataUrl, {
        method: 'POST',  //for this method we take data from the html eg form pass it through js and push it db.json
        headers:{
            'content-Type':'application/json'//convert the string data from our form to json
        },
        body: JSON.stringify(entryObj)

    })
    .then(res => res.json())//it sends the data out as json
    .then(data => console.log(data))

}
//addDiaryEntry() //call our fuction to display on the webpage
form.addEventListener('submit' ,addDiaryEntry)


