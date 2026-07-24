const reveals = document.querySelectorAll(".skill-card,.about-content,.about-image");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

reveals.forEach(item=>observer.observe(item));