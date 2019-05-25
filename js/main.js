window.onload = function () {
  jQuery("#user-city").text(ymaps.geolocation.city);
  jQuery("#user-region").text(ymaps.geolocation.region);
  jQuery("#user-country").text(ymaps.geolocation.country);
  
//  if(ymaps.geolocation.country == ("Азербайджан" || "Армения" || "Белоруссия" || "Казахстан" || "Киргизия" || "Молдавия" || "Таджикистан" || "Узбекистан") ) {
//    document.getElementById("tax").classList.remove("d-none");
//  }
  
  if(ymaps.geolocation.country == "Азербайджан" ||
     ymaps.geolocation.country == "Армения" ||
     ymaps.geolocation.country == "Беларусь" ||
     ymaps.geolocation.country == "Казахстан" ||
     ymaps.geolocation.country == "Киргизия" ||
     ymaps.geolocation.country == "Молдова" ||
     ymaps.geolocation.country == "Таджикистан" ||
     ymaps.geolocation.country == "Узбекистан" ) {
    document.getElementById("tax").classList.remove("d-none");
  }
  
}

