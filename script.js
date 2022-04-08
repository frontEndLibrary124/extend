// =================================
//    Header Animation Area
// =================================

let header = document.querySelector('header');
let sectionContent = document.querySelector('.section-content');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');
        sectionContent.style.marginTop = header.offsetHeight + 'px';
    } else {
        header.classList.remove('active');
        sectionContent.style.marginTop = 0 + 'px';
    }
}





// hero area start
let heroImg = document.querySelector('.hero-image');
let heroDescription = document.querySelector('.hero-description');

function updateHeroImage(imgIndex) {
    let imgSrc = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'];
    let oldImg = document.querySelector('.hero-image img');
    heroImg.removeChild(oldImg);

    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'animate__animated animate__bounceInDown');
    newImg.src = `img/hero/${imgSrc[imgIndex]}`;

    heroImg.appendChild(newImg);
}

function updateHeroTitle(titleIndex) {
    let txt1 = `The best dried fruits for your family health`;
    let txt2 = `Get your daily needs easy and instant`;
    let txt3 = `Try fresh fruits for better healthy lifestyle`;
    let txt4 = `Get upto 50% discount on every products`;
    let txt5 = `Hot deals available with amazing products`;
    let txt6 = `Fresh vegetables with a big discount`;

    let textAra = [txt1, txt2, txt3, txt4, txt5, txt6];

    let oldText = document.querySelector('.hero-title');
    heroDescription.removeChild(oldText);

    let newTitle = document.createElement('h1');
    newTitle.setAttribute('class', 'animate__animated animate__bounceInRight hero-title');
    newTitle.textContent = `${textAra[titleIndex]}`;

    heroDescription.appendChild(newTitle);
}

function updateHeroButton() {
    let oldButton = document.querySelector('.hero-button');
    heroDescription.removeChild(oldButton);

    let newButton = document.createElement('button');
    newButton.textContent = `Explore`;
    newButton.setAttribute('class', 'animate__animated animate__bounceInUp hero-button');

    heroDescription.appendChild(newButton);
}

let heroIndex = 0;

function heroSlideRight() {
    heroIndex++;

    if (heroIndex === 6) {
        heroIndex = heroIndex % 6;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}

function heroSlideLeft() {
    heroIndex--;

    if (heroIndex < 0) {
        heroIndex = 5;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}

let heroSlide = setInterval(() => {

    heroSlideRight();

}, 10000);


let heroSlideLeftBtn = document.querySelector('.hero-slide-left');
let heroSlideRightBtn = document.querySelector('.hero-slide-right');

heroSlideLeftBtn.onclick = () => {
    heroSlideLeft();
}

heroSlideRightBtn.onclick = () => {
    heroSlideRight();
}





// new arrival
let arrivalCard = document.querySelectorAll('.new-arrival-card');

let move = (arrivalCard[0].offsetWidth + 20) * 3;

let newArrival = setInterval(() => {

    if (move >= ((arrivalCard[0].offsetWidth + 20) * (arrivalCard.length / 2))) {
        move = 0;
    }

    for (let i = 0; i < arrivalCard.length; i++) {
        arrivalCard[i].style.transform = `translateX(-${move}px)`;
    }

    move += (arrivalCard[0].offsetWidth + 20) * 3;

}, 3000);







// selecting filter menu and filter items
let filterMenu = document.querySelectorAll('.filter-menu li');
let filterContents = document.querySelectorAll('.filter-content');

for (let i = 0; i < filterContents.length; i++) {
    if (filterContents[i].getAttribute('data-item') === 'fruits') {
        filterContents[i].classList.add('activeContents');
    } else {
        filterContents[i].classList.add('deleteContents');
    }
}


for (let i = 0; i < filterMenu.length; i++) {

    filterMenu[i].addEventListener('click', () => {
        for (let j = 0; j < filterMenu.length; j++) {
            filterMenu[j].classList.remove('active-menu');
        }

        filterMenu[i].classList.add('active-menu');
        let attrValue = filterMenu[i].getAttribute('data-list');

        for (let k = 0; k < filterContents.length; k++) {
            // delete all active contents
            filterContents[k].classList.add('deleteContents');
            filterContents[k].classList.remove('activeContents');

            // filter contents: display filter contents
            if (filterContents[k].getAttribute('data-item') === attrValue) {
                filterContents[k].classList.add('activeContents');
                filterContents[k].classList.remove('deleteContents');
            }
        }
    });
}



// selecting lightbox elements
let lightBox = document.querySelector('.lightbox');
let closeBtn = document.querySelector('#close-lightbox');
let imgCategory = document.querySelector('#image-category');
let lightBoxImage = document.querySelector('.image-wrapper img');
let lightBoxShadow = document.querySelector('.lightbox-shadow');
let lightBoxArrow = document.querySelector('.lightbox-arrow');
let controllScrolling = document.querySelector('html');


// slide button
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

// product info
let recProductItemName = document.querySelectorAll('.rec-item-name');
let recProductTotalItems = document.querySelectorAll('.rec-total-items');
let recProductTotalSales = document.querySelectorAll('.rec-total-sales');
let recProductItemUnits = document.querySelectorAll('.rec-item-unit');
let recProductItemStatus = document.querySelectorAll('.rec-item-status');


let recProductName = document.querySelector('#rec-name');
let recProductItems = document.querySelector('#rec-items');
let recProductSales = document.querySelector('#rec-sales');
let recProductUnit = document.querySelector('#rec-unit');
let recProductStatus = document.querySelector('#rec-status');

// store product info
let recProductNameList = [];
let recProductTotalItemsList = [];
let recProductTotalSalesList = [];
let recProductUnitsList = [];
let recProductStatusList = [];




// Update Product Info
function updatePopularProductInfo(index) {
    let getCategory = filterContents[index].getAttribute('data-item');
    let getImg = filterContents[index].querySelector('img').src;

    if (getCategory === 'fruits') {
        imgCategory.textContent = `fruits`;
    } else if (getCategory === 'vegetables') {
        imgCategory.textContent = `vegetables`;
    } else if (getCategory === 'eggs') {
        imgCategory.textContent = `eggs`;
    } else if (getCategory === 'dry-fruits') {
        imgCategory.textContent = `dry fruits`;
    } else if (getCategory === 'spices') {
        imgCategory.textContent = `spices`;
    }

    recProductName.textContent = `${recProductNameList[index]}`;
    recProductItems.textContent = `${recProductTotalItemsList[index]}`;
    recProductSales.textContent = `${recProductTotalSalesList[index]} `;
    recProductUnit.textContent = `${recProductUnitsList[index]}+`;
    recProductStatus.textContent = `${recProductStatusList[index]}`;

    lightBoxImage.src = getImg;
}


for (let i = 0; i < filterContents.length; i++) {

    recProductNameList.push(recProductItemName[i].innerHTML);
    recProductTotalItemsList.push(recProductTotalItems[i].innerHTML);
    recProductTotalSalesList.push(recProductTotalSales[i].innerHTML);
    recProductUnitsList.push(recProductItemUnits[i].innerHTML);
    recProductStatusList.push(recProductItemStatus[i].innerHTML);

    // lightbox show, slide, close
    filterContents[i].addEventListener('click', () => {

        updatePopularProductInfo(i);

        lightBox.classList.add('show-lightbox');
        lightBoxShadow.classList.add('show-shadow');
        lightBoxArrow.classList.add('show-lightbox-arrow');
        controllScrolling.style.overflow = 'hidden';

        let slideIndex = i;

        // slide left
        leftArrow.onclick = () => {
            slideIndex--;

            if (slideIndex < 0) {
                slideIndex = filterContents.length - 1;
            }

            updatePopularProductInfo(slideIndex);
        }

        // slide right
        rightArrow.onclick = () => {
            slideIndex++;

            if (slideIndex >= filterContents.length) {
                slideIndex = 0;
            }

            updatePopularProductInfo(slideIndex);
        }

        // slide when arrow key down
        document.onkeydown = (event) => {

            if (event.keyCode === 37) {
                slideIndex--;

                if (slideIndex < 0) {
                    slideIndex = filterContents.length - 1;
                }

                updatePopularProductInfo(slideIndex);
            }

            if (event.keyCode === 39) {
                slideIndex++;

                if (slideIndex >= filterContents.length) {
                    slideIndex = 0;
                }

                updatePopularProductInfo(slideIndex);
            }
        }

        // close lightbox
        closeBtn.onclick = () => {
            lightBox.classList.remove('show-lightbox');
            lightBoxShadow.classList.remove('show-shadow');
            lightBoxArrow.classList.remove('show-lightbox-arrow');
            controllScrolling.style.overflow = 'auto';
        }
    });
}




// =================================
//    Product Items Controll Area
// =================================

// Selecting elements for product items and product cart area
let shoppingCartBtn = document.querySelector('#icon-shopping-cart');
let cartIconProductCounter = document.querySelector('#item-counter');
let productCartArea = document.querySelector('#product-cart-area');

let favoriteIcon = document.querySelectorAll('.product-icons > .add-to-favorite > span');
let cartWishlistArea = document.querySelector('.shopping-cart-wrap .cart-wishlist-area');

let itemDeleteConfirmationBox = document.querySelector('.remove-confirmation-message');
let itemDeleteConfirmationBoxTitle = document.querySelector('.remove-message-title h2');
let popupShadow = document.querySelector('.popup-shadow');
let removeConfirmBtn = document.querySelector('#remove-confirm-btn');
let removeCancelBtn = document.querySelector('#remove-cancel-btn');


let shoppingCart = document.querySelector('.shopping-cart-area');
let cartContentMenu = document.querySelectorAll('.cart-menu-items h2');
let cartCloseButton = document.querySelector('.cart-close-btn button');
let shoppingCartContentsArea = document.querySelectorAll('.shopping-cart-contents-area');


let productItem = document.querySelectorAll('.featured-products .product-wrap');
let productImage = document.querySelectorAll('.product-img img');
let productDiscount = document.querySelectorAll('.product-icons p .discount');
let productName = document.querySelectorAll('.product-description .product-name');
let currentPrice = document.querySelectorAll('.f-cur-price');
let productUnit = document.querySelectorAll('.f-product-unit');
let productPrice = document.querySelectorAll('.f-product-price');
let addToCartBtn = document.querySelectorAll('.product-description .add-to-cart-btn p');
let shoppingCartArea = document.querySelector('.shopping-cart-area .shopping-cart-wrap');
let cartContentArea = document.querySelector('.shopping-cart-wrap .cart-contents-area');
let shoppingDetailsContent = document.querySelector('.shopping-details-content');
let buyingProductContent = document.querySelector('.buying-product-title');
let buyingDetailsFooter = document.querySelector('.buying-details-footer');
let totalBuyingItems = document.querySelector('.calculate-total-items p span');
let totalBuyingItemsWeight = document.querySelector('.calculate-total-weight p span');
let totalBuyingItemsAmount = document.querySelector('.calculate-total-amount p span');

let totalSelectedProduct = document.querySelector('#total-selected');
let totalFavoriteProduct = document.querySelector('#total-favorite');
let totalSelectedCounter = document.querySelector('#total-selected span');
let totalFavoriteCounter = document.querySelector('#total-favorite span');
let totalAddToBuyCounter = document.querySelector('.total-buying-item p span');

let body = document.querySelector('body');

// Item counter
let countSelectedItem = 0;
let countFavoriteItem = 0;
let countAddToBuyItem = 0;
let countBuyProductSl = 0;
let countTotalWeight = 0;
let countTotalAmount = 0;

let addedToCart = [];
let newCartContent = [];
let shoppingCartItem = [];
let storeShopItemsIndex = [];
let addedForBuy = [];

let addedToFavorite = [];
let newfavoriteItem = [];


// Calculate & update current price
for(let i = 0; i < productItem.length; i ++){
    let oldPrice = productPrice[i].textContent;
    let discount = productDiscount[i].textContent;
    
    let newPrice = oldPrice - Math.round((oldPrice * (discount / 100)));

    currentPrice[i].textContent = newPrice;
}

// Show cart area
shoppingCartBtn.onclick = () => {
    productCartArea.classList.add('active-cart');
    controllScrolling.style.overflowY = 'hidden';
}

// Remove cart area
cartCloseButton.onclick = () => {
    productCartArea.classList.remove('active-cart');
    controllScrolling.style.overflowY = 'auto';
}

// Display cart buying header
function displayBuyingHeader(countValue) {
    let totalShopItems = shoppingDetailsContent.children.length;
    if (countValue > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else if (totalShopItems > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else {
        buyingProductContent.classList.remove('acvie-buying-title');
    }
}

let isSelectedItemActive = true;

// Cart header menu switch and show/hide total items counter
for (let i = 0; i < cartContentMenu.length; i++) {
    cartContentMenu[i].addEventListener('click', function () {
        for (let j = 0; j < cartContentMenu.length; j++) {
            cartContentMenu[j].classList.remove('active-cart-menu');
            shoppingCartContentsArea[j].classList.remove('active-cart-content');
            totalSelectedProduct.classList.remove('active-product-counter');
            totalFavoriteProduct.classList.remove('active-product-counter');
        }
        cartContentMenu[i].classList.add('active-cart-menu');
        shoppingCartContentsArea[i].classList.add('active-cart-content');
        if (cartContentMenu[i].getAttribute('id') === 'selected-products') {
            totalSelectedProduct.classList.add('active-product-counter');
            if (countSelectedItem > 0) {
                buyingProductContent.classList.add('acvie-buying-title');
                totalSelectedCounter.innerHTML = countSelectedItem;
            } else {
                totalSelectedCounter.innerHTML = 'No item found';
            }
            isSelectedItemActive = true;
        } else {
            totalFavoriteProduct.classList.add('active-product-counter');
            buyingProductContent.classList.remove('acvie-buying-title');
            if (countFavoriteItem > 0) {
                totalFavoriteCounter.innerHTML = countFavoriteItem;
            } else {
                totalFavoriteCounter.innerHTML = 'No item found';
            }

            isSelectedItemActive = false;
        }

        displayBuyingHeader(countSelectedItem);

    })
}

for (let i = 0; i < addToCartBtn.length; i++) {
    addedToCart[i] = false;
    addedForBuy[i] = false;
    addedToFavorite[i] = false;
}

// Create items for selected product content
function createSelectedProductsContent(image, name, price, unit, discount, preservative, time) {
    let newCartContent = document.createElement('div');
    newCartContent.setAttribute('class', 'cart-content');

    let newCartImageArea = document.createElement('div');
    newCartImageArea.setAttribute('class', 'cart-image-area');

    let newCartDetails = document.createElement('div');
    newCartDetails.setAttribute('class', 'cart-details');

    //children of newCartImageArea
    let newImage = document.createElement('img');
    newImage.src = image;

    newCartImageArea.appendChild(newImage);

    // Childrens of newCartDetails
    let newHeading2 = document.createElement('h2');
    newHeading2.textContent = 'Product Details';

    let newPara = [];
    let newStrong = [];
    for (let i = 0; i < 6; i++) {
        newPara[i] = document.createElement('p');
        newStrong[i] = document.createElement('strong');
    }

    newStrong[0].textContent = 'Product name: ';
    newStrong[1].textContent = 'Price: ';
    newStrong[2].textContent = 'Discount: ';
    newStrong[3].textContent = 'Quantity: ';
    newStrong[4].textContent = 'Preservatives: ';
    newStrong[5].textContent = 'Added Time: ';

    for (let i = 0; i < 6; i++) {
        newPara[i].appendChild(newStrong[i]);
    }

    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'number');
    newPara[3].appendChild(newInput);

    let newQuantitySpan = document.createElement('span');
    newQuantitySpan.innerHTML = `${unit}`;
    newQuantitySpan.style.paddingLeft = '0.4rem';
    newPara[3].appendChild(newQuantitySpan);

    let newSpan = [];
    for (let i = 0; i < 3; i++) {
        newSpan[i] = document.createElement('span');
    }

    newSpan[0].textContent = name;
    newSpan[1].textContent = price + `Tk/${unit}`;
    newSpan[2].textContent = discount + '%';

    for (let i = 0; i < 3; i++) {
        newPara[i].appendChild(newSpan[i]);
    }

    let preservativeSpan = document.createElement('span');
    preservativeSpan.textContent = preservative;

    let timeSpan = document.createElement('span');
    timeSpan.textContent = time;

    newPara[4].appendChild(preservativeSpan);
    newPara[5].appendChild(timeSpan);

    let newShoppingButton = [];

    for (let i = 0; i < 2; i++) {
        newShoppingButton[i] = document.createElement('button');
    }

    newShoppingButton[0].textContent = 'Add to Buy';
    newShoppingButton[1].textContent = 'Remove Item';

    newShoppingButton[0].setAttribute('class', 'add-to-buy-btn');
    newShoppingButton[1].setAttribute('class', 'remove-item-btn');

    // Adding children to parent element
    newCartDetails.appendChild(newHeading2);

    for (let i = 0; i < 6; i++) {
        newCartDetails.appendChild(newPara[i]);
    }

    for (let i = 0; i < 2; i++) {
        newCartDetails.appendChild(newShoppingButton[i]);
    }

    newCartContent.appendChild(newCartImageArea);
    newCartContent.appendChild(newCartDetails);

    return newCartContent;
}

// Get product added time
function getAddedTime() {
    let dt = new Date();

    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yyyy = dt.getFullYear();

    let HH = dt.getHours();
    let MM = dt.getMinutes();
    let XM;

    (HH >= 12) ? XM = 'PM': XM = 'AM';

    if (HH > 12) {
        HH -= 12;
    }

    if (HH == 0) {
        HH = 12;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (HH < 10) {
        HH = '0' + HH;
    }

    if (MM < 10) {
        MM = '0' + MM;
    }


    let format = `${dd}/${mm}/${yyyy}  ${HH}:${MM} ${XM}`;

    return format;
}

// Add items to selected products
function addItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = 'orangered';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-arrow-down"></span> Added';
    let productCartImage = productImage[productIndex].src;
    let productCartName = productName[productIndex].textContent;
    let productCartPrice = productPrice[productIndex].textContent;
    let productCartUnit = productUnit[productIndex].textContent;
    let productCartDiscount = productDiscount[productIndex].textContent;
    let preservativeName = 'No';
    let addedTime = getAddedTime();
    newCartContent[productIndex] = createSelectedProductsContent(productCartImage, productCartName, productCartPrice, productCartUnit, productCartDiscount, preservativeName, addedTime);
    cartContentArea.insertBefore(newCartContent[productIndex], cartContentArea.firstChild);
}

// Remove Items to selected products
function removeItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = '#459122';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-plus"></span> Add to Cart';
    cartContentArea.removeChild(newCartContent[productIndex]);
}

// Active add to cart button of favorite item
function activeFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = 'orangered';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-arrow-down"></span> Added';
}

// Deactive add to cart button of favorite item
function deactiveFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = '#459122';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-plus"></span> Add to Cart';
}

// Create favorite content wrapper
function favoriteContentWrapper() {
    let newProductWrapper = document.createElement('div');
    newProductWrapper.setAttribute('class', 'product-wrap');

    return newProductWrapper;
}

// Add items to favorite products
function addItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = 'orangered';
    clone = productItem[productIndex].cloneNode(true);
    let favoriteContentWrap = favoriteContentWrapper();
    newfavoriteItem[productIndex] = favoriteContentWrap.appendChild(clone);
    cartWishlistArea.appendChild(newfavoriteItem[productIndex]);
}

// Remove items to favorite products
function removeItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = '#61790a';
    cartWishlistArea.removeChild(newfavoriteItem[productIndex]);
}

// Show confirmation box
function activeConfirmationBox(confirmMessage) {
    itemDeleteConfirmationBox.classList.add('active-confirmation-box');
    itemDeleteConfirmationBoxTitle.innerHTML = confirmMessage;
    popupShadow.classList.add('active-popup-shadow');
    shoppingCart.style.overflow = 'hidden';
}

// Remove confirmation box
function removeConfirmationBox() {
    itemDeleteConfirmationBox.classList.remove('active-confirmation-box');
    popupShadow.classList.remove('active-popup-shadow');
    shoppingCart.style.overflow = 'auto';
}

// Display cart item counter
function displayCartCounter(countValue) {
    if (countValue > 0) {
        cartIconProductCounter.classList.add('active-item-counter');
    } else {
        cartIconProductCounter.classList.remove('active-item-counter');
    }
}

// Create shopping cart item
function createShoppingCartItem(itemName, itemPrice, itemUnit, itemDiscount, presentPrice, itemQuantity) {
    let newParentDiv = document.createElement('div');
    newParentDiv.setAttribute('class', 'shopping-details');

    let newChildDiv = [];

    for (let i = 0; i < 8; i++) {
        newChildDiv[i] = document.createElement('div');
    }

    newChildDiv[0].setAttribute('class', 'product-sl');
    newChildDiv[1].setAttribute('class', 'product-name');
    newChildDiv[2].setAttribute('class', 'regular-price');
    newChildDiv[3].setAttribute('class', 'discount');
    newChildDiv[4].setAttribute('class', 'present-price');
    newChildDiv[5].setAttribute('class', 'product-quantity');
    newChildDiv[6].setAttribute('class', 'total-amount');
    newChildDiv[7].setAttribute('class', 'remove-item-btn');

    let newChildPara = [];

    for (let i = 0; i < 7; i++) {
        newChildPara[i] = document.createElement('p');
    }

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.setAttribute('class', 'remove-shop-item');

    let totalPrice = itemQuantity * presentPrice;
    totalPrice = totalPrice.toFixed(2);

    newChildPara[1].innerHTML = itemName;
    newChildPara[2].innerHTML = itemPrice + `Tk/${itemUnit}`;
    newChildPara[3].innerHTML = itemDiscount + `%`;
    newChildPara[4].innerHTML = presentPrice + `Tk/${itemUnit}`;
    newChildPara[5].innerHTML = itemQuantity + ` ${itemUnit}`;
    newChildPara[6].innerHTML = totalPrice + ` Tk`;

    for (let i = 0; i < 7; i++) {
        newChildDiv[i].appendChild(newChildPara[i]);
    }

    newChildDiv[7].appendChild(removeBtn);

    for (let i = 0; i < 8; i++) {
        newParentDiv.appendChild(newChildDiv[i]);
    }

    return newParentDiv;

}

// Add items to shopping cart area
function addItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = ++countAddToBuyItem;
    buyBtn.style.background = 'crimson';
    buyBtn.innerHTML = 'Added';
    let getQuantity = itemQuantity.value;
    let getItemName = productName[itemIndex].textContent;
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);
    getPresentPrice = getPresentPrice.toFixed(2);
    shoppingCartItem[itemIndex] = createShoppingCartItem(getItemName, getItemPrice, getItemUnit, getItemDiscount, getPresentPrice, getQuantity);
    shoppingDetailsContent.appendChild(shoppingCartItem[itemIndex]);
    countTotalWeight += parseInt(getQuantity);
    countTotalAmount += getPresentPrice * parseInt(getQuantity);
}

// Remove items to shopping cart area
function removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = --countAddToBuyItem;
    buyBtn.style.background = '#267247';
    buyBtn.innerHTML = 'Add to Buy';
    let getQuantity = itemQuantity.value;
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);
    shoppingDetailsContent.removeChild(shoppingCartItem[itemIndex]);
    countTotalWeight -= parseInt(getQuantity);
    countTotalAmount -= getPresentPrice * parseInt(getQuantity);
    itemQuantity.value = '';
}



// Display buying details footer
function displayBuyingDetailsFooter(countValue) {
    if (countValue > 0) {
        buyingDetailsFooter.classList.add('active-buying-details-footer');
    } else {
        buyingDetailsFooter.classList.remove('active-buying-details-footer');
    }

    totalBuyingItems.innerHTML = shoppingDetailsContent.children.length;
    totalBuyingItemsWeight.innerHTML = countTotalWeight;
    totalBuyingItemsAmount.innerHTML = countTotalAmount.toFixed(1);
}

// Controll Product Serial Number
function setProductSl() {
    let sl = 0;
    let shopItems = shoppingDetailsContent.children;
    for (let i = 0; i < shopItems.length; i++) {
        shopItems[i].children[0].children[0].innerHTML = ++sl;
    }
}

// Remove shop itmes index from array
function removeShopItemsIndex(index) {
    for (let i = 0; i < storeShopItemsIndex.length; i++) {
        if (storeShopItemsIndex[i] === index) {
            for (let j = i; j < storeShopItemsIndex.length; j++) {
                storeShopItemsIndex[j] = storeShopItemsIndex[j + 1];
            }
        }
    }
    storeShopItemsIndex.length--;
}

// Shopping items controll area
function controllShoppingProductItems(itemIndex, addToBuyBtn) {

    let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];

    if (addedForBuy[itemIndex] === false && itemQuantity.value !== '' && itemQuantity.value > 0) {
        addItemsToShoppingCartArea(itemIndex, addToBuyBtn, itemQuantity);
        displayBuyingDetailsFooter(countAddToBuyItem);
        itemQuantity.setAttribute('disabled', 'true');
        storeShopItemsIndex.push(itemIndex);
        setProductSl();
        let shopItemRemoveBtn = shoppingCartItem[itemIndex].children[7].children[0];
        shopItemRemoveBtn.addEventListener('click', function () {
            removeItemsToShoppingCartArea(itemIndex, addToBuyBtn, itemQuantity);
            displayBuyingDetailsFooter(countAddToBuyItem);
            displayBuyingHeader(countSelectedItem);
            itemQuantity.removeAttribute('disabled');
            removeShopItemsIndex(itemIndex);
            setProductSl();
            addedForBuy[itemIndex] = false;
        })
        addedForBuy[itemIndex] = true;
    } else if (addedForBuy[itemIndex] === true && itemQuantity.value !== '' && itemQuantity.value > 0) {
        removeItemsToShoppingCartArea(itemIndex, addToBuyBtn, itemQuantity);
        displayBuyingDetailsFooter(countAddToBuyItem);
        displayBuyingHeader(countSelectedItem);
        itemQuantity.removeAttribute('disabled');
        removeShopItemsIndex(itemIndex);
        setProductSl();
        addedForBuy[itemIndex] = false;
    } else {
        if (itemQuantity.value === '') {
            alert('Please fill the quantity of your item');
        } else {
            alert('Please enter a valid quantity of your item');
        }
    }
}

// Controll product items and product cart area
for (let i = 0; i < addToCartBtn.length; i++) {

    // actions while click 'Add to Cart' button
    addToCartBtn[i].addEventListener('click', function () {
        if (addedToCart[i] === false) {
            addItemsToSelectedProducts(i);
            if (newfavoriteItem[i] !== undefined) {
                activeFavoriteItemAddToCartBtn(i);
            }
            let removeCartContentBtn = newCartContent[i].children[1].children[8];
            removeCartContentBtn.onclick = () => {
                    removeItemsToSelectedProducts(i);
                    if (newfavoriteItem[i] !== undefined) {
                        deactiveFavoriteItemAddToCartBtn(i);
                    }
                    --countSelectedItem;
                    totalSelectedCounter.innerHTML = countSelectedItem;
                    cartIconProductCounter.innerHTML = countSelectedItem;
                    displayBuyingHeader(countSelectedItem);
                    displayCartCounter(countSelectedItem);
                    addedToCart[i] = false;
                }
                ++countSelectedItem;
            totalSelectedCounter.innerHTML = countSelectedItem;
            cartIconProductCounter.innerHTML = countSelectedItem;
            addedToCart[i] = true;
        } else {
            removeItemsToSelectedProducts(i);
            if (newfavoriteItem[i] !== undefined) {
                deactiveFavoriteItemAddToCartBtn(i);
            }
            --countSelectedItem;
            totalSelectedCounter.innerHTML = countSelectedItem;
            cartIconProductCounter.innerHTML = countSelectedItem;
            displayBuyingHeader(countSelectedItem);
            displayCartCounter(countSelectedItem);
            addedToCart[i] = false;
        }

        let addToBuyBtn = newCartContent[i].children[1].children[7];

        addToBuyBtn.onclick = () => {
            controllShoppingProductItems(i, addToBuyBtn);
        }
        displayBuyingHeader(countSelectedItem);
        displayCartCounter(countSelectedItem);
    });

    // actions while click favorite icon 
    favoriteIcon[i].addEventListener('click', function () {
        if (addedToFavorite[i] === false) {
            addItemsToFavoriteProducts(i);
            totalFavoriteCounter.innerHTML = ++countFavoriteItem;
            addedToFavorite[i] = true;
        } else {
            removeItemsToFavoriteProducts(i);
            totalFavoriteCounter.innerHTML = --countFavoriteItem;
            addedToFavorite[i] = false;
        }

        let favoriteContent = newfavoriteItem[i].children[1].children[0];

        favoriteContent.addEventListener('click', function () {
            activeConfirmationBox('Remove item from wishlist?');
            removeConfirmBtn.onclick = () => {
                removeItemsToFavoriteProducts(i);
                totalFavoriteCounter.innerHTML = --countFavoriteItem;
                addedToFavorite[i] = false;
                removeConfirmationBox();
            }

            removeCancelBtn.onclick = () => {
                removeConfirmationBox();
            }

        });

        // Select 'Add to Cart' button of favorite item
        let favoriteItemAddToCartBtn = newfavoriteItem[i].children[2].children[2].children[0];

        // actions while click 'Add to Cart' button of favorite item 
        favoriteItemAddToCartBtn.addEventListener('click', function () {
            if (newfavoriteItem[i] !== undefined && addedToCart[i] === false) {
                addItemsToSelectedProducts(i);
                activeFavoriteItemAddToCartBtn(i);
                let removeCartContentBtn = newCartContent[i].children[1].children[8];
                removeCartContentBtn.onclick = () => {
                        removeItemsToSelectedProducts(i);
                        deactiveFavoriteItemAddToCartBtn(i);
                        --countSelectedItem;
                        totalSelectedCounter.innerHTML = countSelectedItem;
                        cartIconProductCounter.innerHTML = countSelectedItem;
                        displayBuyingHeader(countSelectedItem);
                        displayCartCounter(countSelectedItem);
                        addedToCart[i] = false;
                    }
                    ++countSelectedItem;
                totalSelectedCounter.innerHTML = countSelectedItem;
                cartIconProductCounter.innerHTML = countSelectedItem;
                addedToCart[i] = true;
            } else {
                removeItemsToSelectedProducts(i);
                deactiveFavoriteItemAddToCartBtn(i);
                --countSelectedItem;
                totalSelectedCounter.innerHTML = countSelectedItem;
                cartIconProductCounter.innerHTML = countSelectedItem;
                displayBuyingHeader(countSelectedItem);
                displayCartCounter(countSelectedItem);
                addedToCart[i] = false;
            }

            let addToBuyBtn = newCartContent[i].children[1].children[7];

            addToBuyBtn.onclick = () => {
                controllShoppingProductItems(i, addToBuyBtn);
            }
            displayBuyingHeader(countSelectedItem);
            displayCartCounter(countSelectedItem);
        });
    });
}

// Product cart 'Buy Items' button
let buyNowBtn = document.querySelector('#buy-items');
let buyingDetailsArea = document.querySelector('.buying-details-area');
let closeBuyingDetailsArea = document.querySelector('.close-buy-area');

// Show shopping cart area
buyNowBtn.onclick = () => {
    buyingDetailsArea.classList.add('active-buying-details');
}

// Remove shopping cart area
closeBuyingDetailsArea.onclick = () => {
    buyingDetailsArea.classList.remove('active-buying-details');
}

// Select 'Remove all' button of shopping cart area
let removeAllShopItems = document.querySelector('#remove-all-items');

// Remove all shopping cart items
removeAllShopItems.onclick = () => {
    if (countAddToBuyItem > 0) {
        activeConfirmationBox('Remove all items from cart?');
        removeConfirmBtn.onclick = () => {
            for (let i = 0; i < storeShopItemsIndex.length; i++) {
                let itemIndex = storeShopItemsIndex[i];
                let buyBtn = newCartContent[itemIndex].children[1].children[7];
                let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];
                removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity);
                itemQuantity.removeAttribute('disabled');
                addedForBuy[itemIndex] = false;
            }
            storeShopItemsIndex = [];
            displayBuyingDetailsFooter(countAddToBuyItem);
            displayBuyingHeader(countSelectedItem);
            removeConfirmationBox();
        }
        removeCancelBtn.onclick = () => {
            removeConfirmationBox();
        }
    } else {
        alert('No items found in shopping cart');
    }

}

// =====================================
//    Product Items Controll Area End
// =====================================










// ==========================
//    Countdown Timer Area
// ==========================

// Big Deals Countdown Timer
const bigDealsDay = document.getElementById('day');
const bigDealsHour = document.getElementById('hour');
const bigDealsMinute = document.getElementById('minute');
const bigDealsSecond = document.getElementById('second');

// Great Deals Countdown Timer
const greatDealsDay = document.querySelectorAll('.gd-timer-days');
const greatDealsHour = document.querySelectorAll('.gd-timer-hours');
const greatDealsMinute = document.querySelectorAll('.gd-timer-minutes');
const greatDealsSecond = document.querySelectorAll('.gd-timer-seconds');

// Initialize date, month, year
let date = new Date();
let monthIndex = date.getMonth();
let year = date.getFullYear();

function createInfiniteCountdown(date, time) {
    let curntTime = Date.now();
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex = (monthIndex + 1) % 12;

        if (monthIndex === 0) {
            year = year + 1;
        }

        let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    let dayConst = 86400;
    let hourConst = 3600;
    let minuteConst = 60;

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return [days, hours, minutes, seconds];
}

function updateCountDownTimer(time, dest){
    dest[0].textContent = time[0];
    dest[1].textContent = time[1];
    dest[2].textContent = time[2];
    dest[3].textContent = time[3];
}

// Infinite Countdown Timer
let timeCount = setInterval(() => {
    let createCountdown, updateDest;

    createCountdown = createInfiniteCountdown('18', '20:00:00');
    updateDest = [bigDealsDay, bigDealsHour, bigDealsMinute, bigDealsSecond];

    updateCountDownTimer(createCountdown, updateDest);

    for(let i = 0; i < 3; i ++){
        if(i === 0){
            createCountdown = createInfiniteCountdown('18', '22:20:00');
        }else if(i === 1){
            createCountdown = createInfiniteCountdown('20', '18:40:00');
        }else if(i === 2){
            createCountdown = createInfiniteCountdown('22', '16:20:00');
        }else if(i === 3){
            createCountdown = createInfiniteCountdown('16', '20:20:00');
        }

        updateDest = [greatDealsDay[i], greatDealsHour[i], greatDealsMinute[i], greatDealsSecond[i]];

        updateCountDownTimer(createCountdown, updateDest);
    }
    
}, 1000);

// ==============================
//    Countdown Timer Area End
// ==============================









// faq section

let faqTitle = document.querySelectorAll('.faq-title');
let faqText = document.querySelectorAll('.faq-text');
let faqIcon = document.querySelectorAll('.faq-icon');

let prevIndex = null;

for (let i = 0; i < faqTitle.length; i++) {
    faqTitle[i].addEventListener('click', () => {
        for (let j = 0; j < faqText.length; j++) {
            faqText[j].classList.remove('active-faq-text');
            faqIcon[j].classList.remove('active-faq-icon');
        }

        if (prevIndex === i) {
            faqText[i].classList.remove('active-faq-text');
            prevIndex = null;
        } else {
            faqText[i].classList.add('active-faq-text');
            faqIcon[i].classList.add('active-faq-icon');
            prevIndex = i;
        }

    });
}