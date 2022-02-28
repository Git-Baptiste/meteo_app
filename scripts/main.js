const CLEAPI = '5af19b351fc0b5f2b690f691746f75ee';
let resultatsAPI;

if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {

            // console.log(position);
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            AppelAPI(long, lat);

      }, () => {
            alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, merci de l'activer.`)
      })
}

function AppelAPI(long, lat) {
      // console.log(long, lat);
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely$units=metric$lang=fr$&appid={${CLEAPI}}`)
      // Clé API non valide pour le moment, attendre quelques heures.
      .then((reponse) => {
            return reponse.json();
      })
      .then((data) => {
            console.log(data);
      })


}