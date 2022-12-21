// 1. Change the title of the page to `Hello AltCampus!`
document.title = "Hello AltCampus!"
// 2. Select the element using the children property:


//    - Select the `h1` element and change the value to `Learning DOM`
document.body.children[0].innerText = "Learning Dom";
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
document.body.children[5].children[0].innerText = "all about document"
//    - Select the input element with name `email`
document.body.children[6].children[2]

// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let ul = document.body.children[5]
console.log(`The length of the li elements is ${ul.children.length}`)

// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelector('input');

// 5. Select the ul element using class selector and store in `topics`
let topics = document.querySelector('.topics');
console.log(emailInput, topics);

// 6. Select the first label element and store in `label`
let label =document.querySelector('.label');

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = ducument.querySelector('#remember');
console.log(inputCheckbox);
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector('input[type="password"]');

// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.querySelector(`input[placeholder="password"]`);

// 10. Select all the `li` element and store in `allTopics`
let alllTopics = document.querySelectorAll('li');
// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll('input')

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach(eml => console.log(elm.innerText));

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll('.list')
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector('ul>li');
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let allImg = document.querySelectorAll('img');
console.log(`The total number of img element is ${allImg.length}`);

// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll('p')
// 17. Select all the buttons and log the count of buttons.
let allbuttons = document.querySelectorAll('button');
console.log(allbuttons.length);
// 18. Select all the `label` element and log the count.
let allLabel = (document.querySelectorAll('label').length);
// 19. Select all the elements with `id` of `test`
let allTestElement = document.querySelectorAll('#test');
console.log(allTestElement);

// 20. Select the first element with id `test` using `getElementById`
let firsttest = document.getElementById('test')
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
console.log(topics.parentElement);

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(topics.nextElementSibling);

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
topics.previousElementSibling.innerText = "Learning About Walking the DOM"

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
topics.firstElementChild.innerText = "This is the first child element";
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(typeof topics.lastElementChild);
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm = document.querySelector('fieldset');
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(typeof fieldsetElm.parentElement);