/* 

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const prezzo = 0.21;
let percorso = parseFloat(prompt("inserisci la distanza che vuoi percorrere"));
let eta = parseInt(prompt("inserisci la tua età"));
let sconto = "nessuno";
let prezzo_totale;

while(isNaN(percorso) || isNaN(eta))
{
    alert("c'è stato un errore nell'inserimento, ritenta")
    percorso = parseFloat(prompt("inserisci la distanza che vuoi percorrere"));
    eta = parseInt(prompt("inserisci la tua età"));
}

prezzo_totale = (percorso * prezzo);

if(eta < 18)
{
    sconto = 20;
    prezzo_totale = prezzo_totale - (prezzo_totale / 100 * sconto);
    sconto = `${sconto}%`;
}

if(eta >= 65) 
{
    sconto = 40;
    prezzo_totale = prezzo_totale - (prezzo_totale / 100 * sconto);
    sconto = `${sconto}%`;
}



prezzo_totale = prezzo_totale.toFixed(2);

document.getElementById("my-div").innerHTML = `
<table class='table'>
<thead>
  <tr>
    <th scope='col'>Costo del Biglietto</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">età passeggero: </th>
    <td>${eta}</td>
  </tr>
  <tr>
    <th scope="row">sconto applicato: </th>
    <td>${sconto}</td>
  </tr>
  <tr>
    <th scope="row">prezzo totale: </th>
    <td>${prezzo_totale}€</td>
  </tr>
</tbody>
</table>`;
