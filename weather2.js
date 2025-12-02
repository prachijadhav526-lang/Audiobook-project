var APIKey = '3afc7a5688dfc4d13a48365663f45805';
function getWeather(ele){
    //change the modal title and body
    myModal.querySelector(".modal-title").innerText = "Fetching....";
    myModal.querySelector(".modal-body").innerHTML = "<p>Fetching....</p>";
    var lat = ele.parentElement.nextElementSibling.innerText;
    var lon = ele.parentElement.nextElementSibling.nextElementSibling.innerText;
    var cityName = ele.innerText;
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      myModal.querySelector(".modal-title").innerText = cityName;
      myModal.querySelector(".modal-body").innerHTML = 
      `<ul>
          <li>Temperature Now: ${data.main.temp}°C</li>
          <li>Temperature (Min): ${data.main.temp_min}°C</li>
          <li>Temperature (Max): ${data.main.temp_max}°C</li>
          <li>Main: ${data.weather[0].main}</li>
          <li>Description: ${data.weather[0].description}</li>
          <li>Wind Speed: ${data.wind.speed} km/hr</li>
          <li>Wind Direction: ${data.wind.deg}°</li>
      </ul>`;
    });
  }
  
  window.onload = function(){
    var tbl = document.querySelector("table tbody");
    var err = document.querySelector("small");
    var btn = document.querySelector("#btnSubmit");
    var inpSrch = document.querySelector("#inpSrch");
    var myModal = document.querySelector("#myModal");
  
    btn.addEventListener("click", function(){
      var city = inpSrch.value.trim();
      if(city.length < 3){
        alert("Enter more letters");
        return;
      }
  
      var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`;
      fetch(url).then(response => response.json()).then(data => {
        if(!data || data.length == 0){
          alert("No Data");
          return;
        }
        clearTable();
        data.forEach((ele, idx) => {
          tbl.innerHTML = tbl.innerHTML +
          `<tr>
              <td>${idx + 1}</td>
              <td><a href="#" data-bs-toggle="modal"
              data-bs-target = "#myModal" onclick="getWeather(this)">${ele.name}</a></td>
              <td>${ele.lat}</td>
              <td>${ele.lon}</td>
              <td>${ele.state || ""}, ${ele.country}</td>
          </tr>`;
        });
      })
      .catch(err => console.error("Error fetching data:", err));
    });
    function clearTable(){
      while(tbl.childElementCount > 1){
        tbl.removeChild(tbl.lastElementChild);
      }
    }
  };


