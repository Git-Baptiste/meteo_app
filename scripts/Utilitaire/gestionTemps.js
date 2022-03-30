const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];


let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString('fr-FR', options);
// console.log(jourAcutel, ajd);


//Permet de réécrire le jour retourné 'jourActuel' avec la première lettre en majuscule.
jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);



// On replace les jours de la semaine dans l'odre, depuis le jour actuel.
let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
// console.log(tabJoursEnOrdre);

export default tabJoursEnOrdre;