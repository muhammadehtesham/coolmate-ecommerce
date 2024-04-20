

// onclick categories 

// var categoriesBtn= document.querySelector(".categories").addEventListener('click',function () {
//  document.querySelector(".categories-list").classList.toggle('categories-list-show')
// });


// side menu click on collection  start+++++++++++++++++++
var sideCollectionBtn = document.querySelector(".side-collection-btn");
sideCollectionBtn.addEventListener('click', function () {
    document.querySelector(".side-collections-click").classList.add('side-collections-click-show');
});

// Collection back
var collectionBackBtn = document.querySelector(".collections-back");
collectionBackBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-collections-click").classList.remove('side-collections-click-show');
    }, 0);
});


// for collection page1 ++++++++
var sideCollectionBtn = document.querySelector(".side-collection-page1-btn");
sideCollectionBtn.addEventListener('click', function () {
    document.querySelector(".side-collections-page1-click").classList.add('side-collections-page1-click-show');
});

// Collection back
var collectionBackBtn = document.querySelector(".collections-page1-back");
collectionBackBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-collections-page1-click").classList.remove('side-collections-page1-click-show');
    }, 0);
});


// for collection page2 ++++++++++
var sideCollectionBtn = document.querySelector(".side-collection-page2-btn");
sideCollectionBtn.addEventListener('click', function () {
    document.querySelector(".side-collections-page2-click").classList.add('side-collections-page2-click-show');
});

// Collection back
var collectionBackBtn = document.querySelector(".collections-page2-back");
collectionBackBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-collections-page2-click").classList.remove('side-collections-page2-click-show');
    }, 0);
});

// for collection page3 ++++++++++++++++++
var sideCollectionBtn = document.querySelector(".side-collection-page3-btn");
sideCollectionBtn.addEventListener('click', function () {
    document.querySelector(".side-collections-page3-click").classList.add('side-collections-page3-click-show');
});

// Collection back
var collectionBackBtn = document.querySelector(".collections-page3-back");
collectionBackBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-collections-page3-click").classList.remove('side-collections-page3-click-show');
    }, 0);
});
// side menu click on collection  end++++++++++++++++++++++++++++++++++



// side menu click on products  start+++++++++++++++++++
var sideProductBtn = document.querySelector(".side-products-btn");
sideProductBtn.addEventListener('click', function () {
    document.querySelector(".side-products-click").classList.add('side-products-click-show');
});

// producr back
var sideProductBtn = document.querySelector(".products-back");
sideProductBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-products-click").classList.remove('side-products-click-show');
    }, 0);
});


// for product page1 ++++++++
var sideProductBtn = document.querySelector(".side-products-page1-btn");
sideProductBtn.addEventListener('click', function () {
    document.querySelector(".side-products-page1-click").classList.add('side-products-page1-click-show');
});

// products back
var sideProductBtn = document.querySelector(".products-page1-back");
sideProductBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-products-page1-click").classList.remove('side-products-page1-click-show');
    }, 0);
});


// for products page2 ++++++++++
var sideProductBtn = document.querySelector(".side-products-page2-btn");
sideProductBtn.addEventListener('click', function () {
    document.querySelector(".side-products-page2-click").classList.add('side-products-page2-click-show');
});

// products back
var sideProductBtn = document.querySelector(".products-page2-back");
sideProductBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-products-page2-click").classList.remove('side-products-page2-click-show');
    }, 0);
});

// for products page3 ++++++++++++++++++
var sideProductBtn = document.querySelector(".side-products-page3-btn");
sideProductBtn.addEventListener('click', function () {
    document.querySelector(".side-products-page3-click").classList.add('side-products-page3-click-show');
});

// products back
var sideProductBtn = document.querySelector(".products-page3-back");
sideProductBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-products-page3-click").classList.remove('side-products-page3-click-show');
    }, 0);
});
// side menu click on products  end +++++++++++++++

// side other pages start ++++++++++++
var sideOtherBtn = document.querySelector(".side-other-pages-btn");
sideOtherBtn.addEventListener('click', function () {
    document.querySelector(".side-other-pages-click").classList.add('side-other-pages-click-show');
});

// other page back
var sideOtherBtn = document.querySelector(".other-pages-back");
sideOtherBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-other-pages-click").classList.remove('side-other-pages-click-show');
    }, 0);
});
// side other pages end ++++++++++++

// side other pages start ++++++++++++
var sideBlogBtn = document.querySelector(".side-blog-btn");
sideBlogBtn.addEventListener('click', function () {
    document.querySelector(".side-blog-click").classList.add('side-blog-click-show');
});

// other page back
var sideBlogBtn = document.querySelector(".blog-back");
sideBlogBtn.addEventListener('click', function () {
    setTimeout(function () {
        document.querySelector(".side-blog-click").classList.remove('side-blog-click-show');
    }, 0);
});
// side other pages end ++++++++++++






//  onclick longin registor buton  (in account logo)    start
var shift = document.querySelector(".btn-shift");
var registorBtn = document.getElementById("registor-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var elements = document.querySelectorAll(".name-none");
    elements.forEach(function (element) {
        element.classList.add('show-on-registor');
    });
    shift.style.left = "90px";
});

var registorBtn = document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var elements = document.querySelectorAll(".name-none");
    elements.forEach(function (element) {
        element.classList.remove('show-on-registor');
    });


    shift.style.left = "7px";
});

//  onclick longin registor buton  (in account logo)    end






// new product section 

// function changeColor(element) {
//     // Remove active class from all color options
//     var colorOptions = document.querySelectorAll('.color-option');
//     colorOptions.forEach(function (el) {
//         el.classList.remove('active');
//     });

//     // Add active class to the clicked color option
//     element.classList.add('active');

//     // Remove active class from all image options
//     var imageOptions = document.querySelectorAll('.product-img');
//     imageOptions.forEach(function (el) {
//         el.classList.remove('active');
//     });

//     // Find the corresponding image option and add active class
//     var index = Array.from(colorOptions).indexOf(element);
//     if (index >= 0 && index < imageOptions.length) {
//         imageOptions[index].classList.add('active');
//     }
// }



// Quick Add 
// var quickAdd= document.querySelector(".quick-add").addEventListener('click' , function () {
//     document.querySelector(".sizing").classList.add("sizing-show")
// })


