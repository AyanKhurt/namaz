function namaz() {
    let userInput1 = document.getElementById("input1").value;
    let userInput2 = document.getElementById("input2").value;

  
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${userInput1}&country=${userInput2}`)
        .then(function(response) {
            let namaz = response.data;
            console.log(namaz)
            document.getElementById("namaz1").innerHTML = `<h2>fajar: ${namaz.data.timings.Fajr} br zahor: ${namaz.data.timings.Dhuhr}            ` ;
            console.log(namaz.data.timings.Fajr , namaz.data.timings.Dhuhr)

        })
        .catch(function(err) {
            document.getElementById("namaz1").innerHTML = `<p>Error</p>`;
        });
  }