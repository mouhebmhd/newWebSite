//for loop
//while loop
//do while loop

//repetition d'une meme action
/* var compteur;
//for loop
for(compteur=1;compteur<=10;compteur++)
{
    console.log(compteur);
}
for(compteur=100;compteur>=1;compteur--)
{
    console.log(compteur);
} */
// finish all the cases(no interruption)
// the number of executions is known

/* var nom=prompt("donner votre nom"); */
/**
 * while le nombre d'execution peut etre 0
 * do-while le nombre d'executions doit etre au moins 1
 */
/*  var invitee=false; */
/* do
{
    console.log("enter to the party ")

}
while(invitee==true); */
/* while(invitee==true)
{
    console.log("enter to the party ");
}
 */
/*
nombre d'executions est-il connu a l'avance?
For est execlu
while
do-while 
*/
/* var nom="";

while(nom=="")
{
 nom=prompt("donner votre nom");

} */

/**
 * generer un nombre cachee aleatoirement  entre 0 et 100
 * repeter 
 *  donner une suggestion
 * jusqu'a nombre donnee par l'utilisateur est egale au nombre cachee
 * a chaque tentative
 *  afficher "plus grand"
 *  afficher "plus petit"
 * en cas de reussite afficher bravo
 * afficher a la fin le nombre totale de tentatives
 */
/**
 *  78 nombre chachee
 * 40 plus grand
 * 90 plus petit
 * 79 plus petit
 * 78 bravo vous avez reussi a deviner le nombre apres 4 tentatives
 * 
 */
//math.random un reel aleatoire entre 0 et 1
//math.round arrondi 2.6-->3   2.1-->2
var rnd=Math.random()*100
console.log(Math.round(rnd))
/**
 * Math.random  un reel entre 0 et 1
 * Maximum 1
 * Minimum 0
 * 0,100
 */