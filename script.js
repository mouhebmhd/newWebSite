<<<<<<< HEAD
/*
console.log
document.write
alert
prompt
string
boolean
number
*/
//date datatype getDate setDates
//loops les boucles
var todayDate = new Date();
console.log(todayDate);
//Date Get Methods
/**
 * getFullYear -- get the full year from a date
 * getMonth  return value from 0 to 11
 * getDate return the date 1-31
 * getDay 0-6 dimanche 0  lundi  1 mardi 2  samedi 6
 * getHours heures
 * getMinutes  minutes
 * getSeconds secondes
 * getMilliseconds millisecondes
 * getTime return the number of milliseconds since 1 janvier 1970 until today
 */
//Date Set Methods
/* var year=todayDate.getFullYear();
console.log(year)
var month=todayDate.getMonth();
console.log(month)
var date=todayDate.getDate();
console.log(date);
var day=todayDate.getDay();
console.log(day)
var time=todayDate.getTime();
console.log(((time/1000)/60)/(60*24*365)) */
/**
 * hour=60 minutes
 * minute=60 seconds
 * 1 second=1000 milliseconds
 */
/*
ecrire un script js qui permet de lire une date de l'utilisateur et 
affiche le jour de la semaine dont il est nee
YYYY-MM-JJ */
/* var year = prompt("donner l'annee");
var month = prompt("donner le mois");
var day = prompt("donner le jour");
var birthDate = new Date(year + "-" + month + "-" + day);
var jourSemaine = birthDate.getDay(); //0-6
switch (jourSemaine) {
  case 0: {
    document.write("Dimanche");
    break;
  }
  case 1: {
    document.write("Lundi");
    break;
  }
  case 2: {
    document.write("Mardi");
    break;
  }
  case 3: {
    document.write("Mercredi");
    break;
  }
  case 4: {
    document.write("Jeudi");
    break;
  }
  case 5: {
    document.write("Vendredi");
    break;
  }
  case 6: {
    document.write("Samedi");
    break;
  }
}
 */
//Date Set Methods
/**
 * setFullYear -- get the full year from a date
 * setMonth  return value from 0 to 11
 * setDate return the date 1-31
 * setHours heures
 * setMinutes  minutes
 * setSeconds secondes
 * setMilliseconds millisecondes
 * setTime return the number of milliseconds since 1 janvier 1970 until today
 */

function sommeElements(tableau) {
  somme = 0;
  for (var indice = 0; indice < tableau.length; indice++) {
    somme += tableau[indice];
    console.log(somme);
    return somme;
  }
}

const pi=3.14;
//pi=6.18;
try
{
  pi=6.18;
  console.log("pi changee");
}
catch( e)
{
  console.log(e)
}
=======
console.log("hello world")
console.log("server launched on port 8080")
console.log("user logged ing ")
console.log("dahsboard loaded")
>>>>>>> 137d2fce428ee5ec88115a11f5b3944c5eb092a7
