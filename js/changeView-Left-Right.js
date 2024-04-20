function handleResize() {
  var width = window.innerWidth;
  const gridIcons = document.querySelectorAll(".col-change-box");

  // Reset all elements to their default state
  gridIcons.forEach((gridItem) => {
    gridItem.classList.remove("changeBox-active");
  });

  // Determine the active element based on the window width
  if (width <= 574) {
    gridIcons[2].classList.add("changeBox-active");
  } else if (width <= 768) {
    gridIcons[1].classList.add("changeBox-active");
  } else if (width <= 1600) {
    gridIcons[0].classList.add("changeBox-active");
  }
}

window.addEventListener("resize", handleResize);

// Call handleResize initially when the script is loaded
handleResize();

var viewGridFunction = (iconId) => {
  const gridIcons = document.querySelectorAll(".col-change-box");

  // Reset all elements to their default state
  gridIcons.forEach((gridItem) => {
    gridItem.classList.remove("changeBox-active");
  });

  gridIcons.forEach((gridItem, index) => {
    if (iconId === index + 1) {
      gridItem.classList.add("changeBox-active");
    }
  });

  const productCard = document.querySelectorAll(".product-hover");
  // for style check remove
  const card = document.querySelectorAll(".card");
  card.forEach((item) => {
    item.classList.remove("check");
  });
  // for paragraph
  const paragraph = document.querySelectorAll(".sm-screen-paragraph");
  paragraph.forEach((item) => {
    item.classList.remove("d-none");
  });

  productCard.forEach((productItem, index) => {
    productItem.classList.remove(
      "col-lg-3",
      "col-md-4",
      "col-sm-6",
      "col-6",
      "col-lg-4",
      "col-lg-6",
      "col-md-6",
      "col-lg-12",
      "col-md-12",
      "col-sm-12",
      "col-12"
    );

    if (iconId === 1) {
      productItem.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-6");
    } else if (iconId === 2) {
      productItem.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-6");
    } else if (iconId === 3) {
      productItem.classList.add(
        "col-lg-12",
        "col-md-12",
        "col-sm-12",
        "col-12"
      );
      // 1 item style
      if (iconId === index + 1) {
        const card = document.querySelectorAll(".card");
        card.forEach((item) => {
          item.classList.add("check");
        });
      }
      // i item add paragraph
      if (iconId === index + 1) {
        const card = document.querySelectorAll(".sm-screen-paragraph");
        card.forEach((item) => {
          item.classList.add("d-block");
        });
      }
    }
  });
};

// load more items

let n = 4;

const loadMore = () => {
  const cards = document.querySelectorAll(".product-hover");

  cards.forEach((card, index) => {
    if (index < n) {
      card.classList.remove("hideLoadMore");
    }
  });
};

loadMore();

const loadMoreProducts = () => {
  const cards = document.querySelectorAll(".product-hover");
  n += 4;

  if (cards.length >= n) {
    cards.forEach((card, index) => {
      if (index < n) {
        card.classList.remove("hideLoadMore");
      }
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("hideLoadMore");
    });

    const load_more = document.querySelector(".load-more")
    load_more.style.display = "none"
  }
};
