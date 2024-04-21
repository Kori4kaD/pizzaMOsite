/*====================SLIDER======================*/
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.getElementsByClassName("mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("active", "slide-out");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].classList.add("active");

//   // Устанавливаем таймер для ухода текущего слайда
//   setTimeout(function() {
//     slides[slideIndex - 1].classList.add("slide-out");
//   }, 4000); // Время показа слайда (5 секунд) минус время анимации (1 секунда)

//   // Переключаем на следующий слайд через 5 секунд
//   setTimeout(function() {
//     showSlides();
//   }, 5000);
// }

/*========================PIZZA MENU==========================*/
const arr = [
  { title: "Гавайська", id: 1, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 180, price_big: 295, picture: "images/menu_pizza1.png" },
  { title: "Фермерська", id: 2, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza2.png" },
  { title: "Чотири сезони", id: 3, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza3.png" },
  { title: "Поло", id: 4, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza4.png" },
  { title: "Мисливська", id: 5, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza5.png" },
  { title: "Сирна", id: 6, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza6.png" },
  { title: "Фірмова", id: 7, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza7.png" },
  { title: "Курка з сиром", id: 8, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza4.png" },
  { title: "Маргарита", id: 9, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza1.png" },
  { title: "Селянська", id: 10, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza2.png" },
  { title: "Барбекю", id: 11, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza3.png" },
  { title: "Овочева", id: 12, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza4.png" },
  { title: "Кантрі", id: 13, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza1.png" },
  { title: "Салямі", id: 14, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza2.png" },
  { title: "Чікен_Чорізо", id: 15, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza3.png" },
  { title: "Пепероні", id: 16, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza4.png" },
  { title: "З беконом та чедром", id: 17, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza1.png" },
  { title: "Кальцоне", id: 18, ingridients: "томатна основа, моцарела, куряча шинка, ковбаса, ананас, помідори, кукурудза", price_little: 250, price_big: 350, picture: "images/menu_pizza2.png" },
  { title: "Чізбургер", id: 19, ingridients: "томатна основа, свинина в соусі, бекон, мариновані огірки, кримська цибуля, моцарела, помідори, сир чедер", price_little: 250, price_big: 350, picture: "images/menu_pizza3.png" },

];
let shop = document.getElementById("pizza");
let toBuy;
let product;
arr.forEach((item) => {
  product = document.createElement("div");
  product.className = "product";
  let product_text = document.createElement("div");
  product_text.className = "product_text";
  let title = document.createElement("h3");
  title.textContent = item.title;
  let ingridients=document.createElement("p");
  ingridients.className="ingridients";
  ingridients.innerHTML="<b>Склад:</b> " + item.ingridients;
  let price1 = document.createElement("h5");
  price1.innerHTML = "<b>Ціна: 32см</b>/" + item.price_little + "грн";
  let price2 = document.createElement("h5");
  price2.innerHTML = "<b>Ціна: 45см</b>/" + item.price_little + "грн";
  let image = document.createElement("img");
  image.setAttribute("src", `${item.picture}`);
  toBuy = document.createElement("button");
  toBuy.className = "btnBuy";
  toBuy.textContent = "Замовити";
   toBuy.setAttribute("onclick", `open_modal()`);
  toBuy.setAttribute("id", `open_modal`);
  
  product.appendChild(image);
  product_text.appendChild(title);
  product_text.appendChild(ingridients);
  product_text.appendChild(price1);
  product_text.appendChild(price2);
  product.appendChild(product_text);

  product.appendChild(toBuy);
  shop.appendChild(product);
});

/*===================MODAL==========*/

let openSecondModal = false;
//відкриття модального вікна
function open_modal() {
  if (document.getElementById("parent")) {
    //додаємо клас де у нас дісплей:флекс
    document.getElementById("parent").classList.add("open");
    //змінюємо прозорість плашки заднього плану
    // document.getElementsByClassName("plashka")[0].style.opacity = "1";
    //робимо кнопку "відкрити модальне вікно" недоступною для натискання
    // document.getElementById("open_modal").style.position = "initial";
  }
}
function close_modal() {
  //повертаємо всі зміни в початковий стан
  if (document.getElementById("parent")) {
    document.getElementById("parent").classList.remove("open");
    
  }
}
//налаштовуємо закриття модального вікна по кліку за межами самого вікна
const parent = document.getElementById("parent");
if (parent) {
  parent.addEventListener("click", function () {
    close_modal();
  });
}

function stop(event){
  event.stopPropagation();
}


/*=================ARROW==================*/
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

/*==========MOBILE MENU==================*/

const menuButton = document.getElementById("openMobileMenu");
const menu = document.getElementById("headerNavMenu");
const header = document.querySelector("header");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("show");
    header.classList.toggle("show");
    menuButton.classList.toggle("open");
});

document.body.addEventListener("click", function(event) {
    if (!event.target.closest("#headerNavMenu") && !event.target.matches("#openMobileMenu")) {
        menu.classList.remove("show");
        header.classList.remove("show");
        menuButton.classList.remove("open");
    }
});

/*======================ACTIVE PATH======================*/
    // Получаем путь к текущей странице
    let path = window.location.pathname;
   

    // Получаем все ссылки в навигационном меню
    let links = document.querySelectorAll("#headerNavMenu a");

    // Перебираем все ссылки и добавляем класс "active" для текущей страницы
    links.forEach(function(link) {
        // Получаем путь к ссылке в меню
        let linkPath = link.getAttribute("href");

        // Сравниваем путь текущей страницы с путем ссылки
        if (path === linkPath) {
            // Добавляем класс "active" для выделения текущего пункта меню
            link.classList.add("active_path");
        }
    });