const changeSection = (li) => {
  let id  = parseInt(li.id);

  const titleOfPage = document.getElementById("titleOfPage");

  const uperLi = document.querySelectorAll(".uperLi");

  uperLi.forEach((li, index) => {
    if (id === index) {
      titleOfPage.textContent = li.textContent;
    }
  });

  // change section

  const changeSection = document.querySelectorAll(".changeSection");

  changeSection.forEach((li) => {
    li.classList.remove("activeSection");
  });
  changeSection.forEach((li, index) => {
    if (id === index) {
      li.classList.add("activeSection");
    }
  });



  //changing arrow

const rightArrow = document.querySelectorAll(".rightArrow")

rightArrow.forEach((i)=>{
    i.classList.remove("show-arrow")
})

rightArrow.forEach((i,index)=>{
    if (id===index) {
        i.classList.add("show-arrow")
    }
})





};

// show hide arrow

// function changeSection(li) {
//     var titleOfPage = document.getElementById("titleOfPage");
//     var li = li.textContent;
//     titleOfPage.innerHTML = li;

//     // active arrow
//     var hideArrow =document.querySelectorAll(".hidden-arrow");
//     hideArrow.forEach(function (arrow) {
//         arrow.classList.remove("show-arrow");

//     });

//     // change section
//     var changeSection = document.querySelectorAll(".changeSection");
//     changeSection.forEach(function(section){
//         section.classList.remove("activeSection");
//     });
//     li.classList.add("activeSection");

// }
