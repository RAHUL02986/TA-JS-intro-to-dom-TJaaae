console.log(got);
let parentElm = document.querySelector('.mainbox')
let allPeople = got.houses.reduce((acc,cv)=>{
 acc = acc.concat(cv.people);
 return acc;
},[]);


 let cardsHTML = allPeople.map((person)=>{
    return `<li class ="card">
    <div class = "info">
    <img
    src= ${person.image}
    alt= ${person.name}
    />
    <h2> ${person.name}</h2>
    </div>
    <p>
    ${person.discription}</p>
    <a href =${person.wikiLink}>learn More!</a>
    </li>`;
});
parentElm.innerHTML = cardsHTML.join("");
console.log(cardsHTML);