// Follow the Instructions on my.kenzie.academy for this assignment.
// Those instructions will give you details on each step.

// STEP ONE - Create your Data Model.
  // Assign your data model here, instead of null. This should be an array of "dog" objects.
  let dataModel = [
    {
      name : "dog",
      breed: "breedNumber1",
      age: 2,
      likesTreats:false
    },
    {
      name : "cat",
      breed: "breedNumberTwo",
      age: 3,
      likesTreats:true
    },
    {
      name : "parrot",
      breed: "breedNumberThree",
      age: 4,
      likesTreats:false
    }
  ]
 
// When this function is run, it is meant to use the user input to build
// a dog object, and add the dog object to the data model array.
function onSubmitDog (event) {
  event.preventDefault();
// We provide a CSS selector, as a string, to identify which HTML element we want querySelector to find for us.
  let nameInput = document.querySelector("#name_input");  
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");

  let name = nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;

  console.log(name)
  
  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!");
    return;  // Exit the function early if the above condition is true.
  }

  // STEP TWO - Create a "dog" variable. What piece of data will we assign
  // to this variable? A new "dog" object, containing the values from above:
  // name, breed, age, likeTreats. Add this object to your data model array.
  // How can you insert this dog object into the dogs array?

  // YOUR CODE HERE


   let dog =
     {
      name : name,
      breed: breed,
      age: age,
      likesTreats: likesTreats
     }
   
   
   dataModel.push(dog)
  

  


  renderDogList(); // Now that we have added a new dog to the data model,
                   // we should render the dog list on the page again.
  
  // The following lines reset the form, so that it is ready for information
  // on a new dog:
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;

  
}


// This function is run, it is meant to keep the dog list which the user
// sees on the page in sync with the data model containing all of our 
// dog objects.





function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";  // First, CLEAR the whole list.
 
  // STEP THREE - Render the dog list from scratch. See "Step Three"
  // instructions.
  // If there are no dogs, then render "No Dogs!" Otherwise, render all 
  // of the dogs in your data model.
  // Remember to copy the "Send Home" button code into your loop. This
  // code is in the instructions.

  // YOUR CODE HERE
      
  for(let index =0; index<=dataModel.length; index +=1){
    let dog=dataModel[index]
    let object= dataModel[index]
    let li= document.createElement("li")
    if(dataModel.length ===0){
      let dog= dataModel[index]
      li.textContent=`There are no Dogs`
      list.append(li)
    }
    for( let property in object){
      let sendHomeButton = document.createElement("button");
        sendHomeButton.append("Send Home");
        sendHomeButton.addEventListener("click", function() {
          removeDog(dog);
        })
      if(object.likesTreats === true){
       
        li.textContent= `${object.name}! A ${object.age} year old ${object.breed} who likes treats `
        list.append(li)
  
      }else if(object.likesTreats === false){
        
        li.textContent= `${object.name}! A ${object.age} year old ${object.breed} `
        list.append(li)
      }
      li.append(sendHomeButton);
    }
  }


}


// The function below is already completed for you. It removes a given 
// dog from the data model. It finds the index of the dog, and then uses
// that index to splice (cut) it out of the array. Then it re-renders
// the dog list, so that it no longer displays on the page.
function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex,1 );

  renderDogList();
}



// We need to tell the Submit button on the page what to do:
// Run the onSubmitDog function when the button is clicked.
let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);

// This function call will take place when the page loads, in order
// to render the dog list for the very first time.
renderDogList();

let form= document.querySelector("form")
form.setAttribute("id","formDoggie")
