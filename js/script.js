const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


//! Buttons
const searchBtn = document.querySelector("#search-btn"); //! button'a ulaşıyoruz bu şekilde
const cartBtn = document.querySelector("#cart-btn"); //! button'a ulaşıyoruz bu şekilde
const menuBtn = document.querySelector("#menu-btn");



searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active"); //! seacrh from'a active yazısını ekleyip kaldırıyor toggle ile özellikle toggle tersini aldığından önemli!!!
  document.addEventListener("click", function(e) {
    //! herhangi bir yere tıklanınca yazı alanı hariç kapansın
    if (
      //! composedpath tıklanan yeri bulmasını sağlıyor
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});
  
cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active"); //! seacrh from'a active yazısını ekleyip kaldırıyor toggle ile özellikle toggle tersini aldığından önemli!!!
  document.addEventListener("click", function(e) {
    //! herhangi bir yere tıklanınca yazı alanı hariç kapansın
    if (
      //! composedpath tıklanan yeri bulmasını sağlıyor
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active"); //! seacrh from'a active yazısını ekleyip kaldırıyor toggle ile özellikle toggle tersini aldığından önemli!!!
  document.addEventListener("click", function(e) {
    //! herhangi bir yere tıklanınca yazı alanı hariç kapansın
   if (
        //! composedpath tıklanan yeri bulmasını sağlıyor
        !e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar)
      ) {
        navbar.classList.remove("active");
      }
  });
});