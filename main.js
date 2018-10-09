



if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
var lon= position.coords.longitude;
var lat=position.coords.latitude;
    console.log(lon);
    console.log(lat);
     $.get( "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon,function(response){
 document.getElementById("new").innerHTML=`<p> ${response.sys.country},${response.name} <br> <p> ${response.main.temp}&deg </p><img src=${response.weather[0].icon} </img> <button id="transform" onclick="clickMe()"> Click for fahrenheight </button> </p>`;
var res= response.main.temp;
  $("#transform").click(function() {
       let resFahr= parseFloat(res) * 9/5 +32;
 document.getElementById("new").innerHTML+=`<p id="resu"> in Fahrenheight is ${resFahr}&degF </p>`;
  })
  });
});
}
