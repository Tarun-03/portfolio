const buttons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".project-card");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");

button.classList.add("active");

const filter = button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});