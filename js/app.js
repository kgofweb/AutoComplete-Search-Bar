// Suggestions
let suggestions = [
   "Channel",
   "CodingLab",
   "CodingNepal",
   "YouTube",
   "YouTuber",
   "YouTube Channel",
   "Blogger",
   "Bollywood",
   "Softare Ingenier",
   "Vlogger",
   "Vechiles",
   "Facebook",
   "Freelancer",
   "Facebook Page",
   "Designer",
   "Developer",
   "Fullstacj",
   "Developer Front end",
   "Developer Back end",
   "Developer Fullstack",
   "Web Designer",
   "Web Developer",
   "Login Form in HTML & CSS",
   "How to learn HTML & CSS",
   "How to learn JavaScript",
   "How to become Freelancer",
   "How to become Web Designer",
   "How to start Gaming Channel",
   "How to start YouTube Channel",
   "What does HTML stands for?",
   "What does CSS stands for?"
];

// DOM elemnts
let searchInput = document.querySelector('.search-input');
let inputBox = document.querySelector('input');
let suggestion = document.querySelector('.autoComplete-box');
let icon = document.querySelector('.icon');
let linkTag = document.querySelector('a');

// Init web link
let webLink;

// Set input value
inputBox.onkeyup = (event) => {
   // Get users data
   let usersData = event.target.value;

   // Init empty table
   let emptyArr = [];

   // If user data equal to true
   if(usersData) {
      emptyArr = suggestions.filter(data => (
         // Filtering array value, User charac to lowerCase and return only those...
         // ... word which are start with user entered word
         data.toLocaleLowerCase().startsWith(usersData.toLocaleLowerCase())
      ));

      // Result
      emptyArr = emptyArr.map(data => {
         return data = `<li>${data}</li>`;
      });
      // Show auto complete box
      searchInput.classList.add('active');
      
      // Call show suggestion
      showSuggestions(emptyArr);

      // All list
      let allList = document.querySelectorAll('li');
      allList.forEach(list => list.setAttribute('onclick', 'selectItem(this)'));
   } else {
      // Hide auto Complete box
      searchInput.classList.remove('active');
   }
}

function selectItem(element) {
   let selectUserData = element.textContent;
   // Passing user select list item data in text field
   inputBox.value = selectUserData;

   icon.addEventListener('click', () => {
      // Get link
      webLink = `https://www.google.com/search?q=${selectUserData}`;
      linkTag.setAttribute('href', webLink);
      linkTag.click();
   });

   // Hide auto Complete box
   searchInput.classList.remove('active');
}

// Show suggestions
function showSuggestions(list) {
   // Init list result
   let listResult;

   if(!list.length) {
      // Set user value
      userValue = inputBox.value;
      listResult = `<li>${userValue}</li>`;
   } else {
      listResult = list.join('');
   }

   // AutoComplete
   suggestion.innerHTML = listResult;
}