
//portfolio
//slider divs portfolio
let allarow = document.querySelectorAll(".arrow li")
let wrapper = document.querySelector(".wrapper")
allarow.forEach((item, i)=>{
      item.addEventListener("click", ()=>{
            wrapper.style.transform= `translateX(${-25 * i}%)`;
      })
})