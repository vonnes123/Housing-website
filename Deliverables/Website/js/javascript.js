let filterCityNamesInput = document.getElementById('filter-city-names');

filterCityNamesInput.addEventListener('keyup', filterCityNames);

function filterCityNames(){

    let filterCityValue = filterCityNamesInput.value.toUpperCase()
    console.log(filterCityValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');


    for (let index = 0; index < li.length; index++) {
        let h1 = li[index].getElementsByTagName('h1')[0];

        if(h1.innerHTML.toUpperCase().indexOf(filterCityValue) > -1){
            li[index].style.display = "block";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

let filterMinPriceInput = document.getElementById('filter-min-price');

filterMinPriceInput.addEventListener('keyup', filterByMinPrice);

function filterByMinPrice(){

    let filterMinPriceValue = filterMinPriceInput.value.toUpperCase()
    console.log(filterMinPriceValue + 1);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    console.log(filterMinPriceValue);
    for (let index = 0; index < li.length; index++) {
        let h2 = li[index].getElementsByClassName('searchprice')[0];
        console.log(h2);
        let h2int = parseInt(h2)
        console.log(h2int)
        let valueint = parseInt(filterMinPriceValue)
        if(h2int >= valueint){
            li[index].style.display = "block";

        }else{
            li[index].style.display = "none";

        }
        
    }
}
let filterHousingTypeInput = document.getElementById('filter-housing-type');

filterHousingTypeInput.addEventListener('keyup', filterHousingType);

function filterHousingType(){

    let filterHousingTypeValue = filterHousingTypeInput.value.toUpperCase()
    console.log(filterHousingTypeValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    for (let index = 0; index < li.length; index++) {
        let h2 = li[index].getElementsByClassName('housingType')[0];

        if(h2.innerHTML.toUpperCase().indexOf(filterHousingTypeValue) > -1){
            li[index].style.display = "block";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

let filterNumberRoomsInput = document.getElementById('filter-number-rooms');

filterNumberRoomsInput.addEventListener('keyup', filterNumberRooms);

function filterNumberRooms(){

    let filterNumberRoomsValue = filterNumberRoomsInput.value.toUpperCase()
    console.log(filterNumberRoomsValue);

    let ul = document.getElementById('houses');

    let li = ul.querySelectorAll('li.house');

    for (let index = 0; index < li.length; index++) {
        let h3 = li[index].getElementsByTagName('h3')[0];

        console.log(h3)
        if(h3.innerHTML.toUpperCase().indexOf(filterNumberRoomsValue) > -1){
            li[index].style.display = "block";

        }else{
            li[index].style.display = "none";

        }
        
    }
}

validate();

function validate() {
    var remember = document.getElementById("GWEcheck");
    if (remember.checked) {
      alert("checked");
    } else {
      console.log("hi");
    }
}