let s = document.getElementById("flight-name");
fetch("http://localhost:9000/api/flights/hyderabad-to-dubai")
  .then(function(res) {
    return res.json();
  })
  .then(function(f) {
    let flightsList = document.getElementById("from");
    f.flights.forEach(flight => {
      const option = document.createElement('option');
      option.value = flight.departure_airport;
      option.textContent = `${flight.airline} - ${flight.departure_airport}`;
      flightsList.appendChild(option);
    });
  })
  fetch("http://localhost:9000/api/flights/hyderabad-to-dubai")
  .then(function (res) {
    return res.json();
  })
  .then(function(t){
    let arrived = document.getElementById("to")
    t.flights.forEach(flight =>{
      const select = document.createElement('option')
      select.value = flight.arrival_airport;
      select.textContent = `${flight.airline}-${flight.arrival_airport}`
      arrived.appendChild(select)
    })
  })
  fetch("http://localhost:9000/api/flights/hyderabad-to-dubai")
  .then(function (res) {
    return res.json();
  })
  .then(function(g){
    let time = document.getElementById("time")
    g.flights.forEach(flight =>{
      const ti = document.createElement('option')
      ti.value = flight.arrival_airport;
      ti.textContent = `${flight.arrival_time}`
      time.appendChild(ti)
    })
  })
  const bookingForm = document.getElementById('booking-form');
  const flightsList = document.getElementById('flights-l');
  const flightSelect = document.getElementById('from');
  const arrivalSelect = document.getElementById('to')
  const timesele = document.getElementById('time')
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedFlight = flightSelect.options[flightSelect.selectedIndex].textContent;
    const selected = arrivalSelect.options[arrivalSelect.selectedIndex].textContent;
    const times = timesele.options[timesele.selectedIndex].textContent;
    const passengerName = document.getElementById('passenger-name').value;
    document.getElementById("booking-form").innerHTML=`<h1>Booking Confirmed!\n\nPassenger Name: ${passengerName}\nSelected Flight from: ${selectedFlight} to:${selected} time:${times}</h1>`
  });
  

  
  
    // flightsList.innerHTML = out;
    // let flightprice = document.getElementById("price")
    // let o = "";
    // s.flights.forEach(flight=>{
    //   o+=`<li>price: ${flight.price}</li>`
    // });
    // flightprice.innerHTML = o;
  // })