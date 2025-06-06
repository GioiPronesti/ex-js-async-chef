/*
In questo esercizio,
utilizzerai async/await per creare la funzione getChefBirthday(id).
 Questa funzione accetta un id di una ricetta e deve:

1 Recuperare la ricetta da https://dummyjson.com/recipes/{id}
2 Estrarre la proprietà userId dalla ricetta
3 Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
4 Restituire la data di nascita dello chef

Note del docente
Scrivi la funzione getChefBirthday(id), che deve:

Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch

- Utilizzo funzione
getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));
  
Output = Data di nascita dello chef: 1990-06-15

*/
/*
async function fetchJson(url) {
  const response = await fetch(url);
  const obj = await response.json();
  return obj;
}
*/

/*function getChefBirthday(id) {
  fetchJson(`https://dummyjson.com/recipes/${id}`)
    .then((ricetta) => {
    fetchJson(`https://dummyjson.com/users/${userId}`)
      .then((user) => resolve({ ...ricetta, user }))
      .catch(reject);
  });
}*/

// Gestisco gli errori e controllo l'esito della console

/*
async function getChefBirthday(id) {
  let ricetta;
  try {
    // 1
    ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
  } catch (error) {
    throw new Error(`Non posso recuperare la ricetta: ${id}`);
  }

  if (ricetta.message) {
    throw new Error(ricetta.message);
  }

  let user;
  try {
    // 2
    user = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
  } catch (error) {
    throw new Error(`Non posso recuperare lo chef: ${id}`);
  }
  // 3
  return user.birthDate;
}
*/

async function getChefBirthday(id) {
  const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await ricettaResponse.json();
  const chefResponse = await fetch(
    `https://dummyjson.com/users/${ricetta.userId}`
  );
  const chef = await chefResponse.json();
  return chef.birthDate;
}

// invoco la funzione asincrona getChefBirthday(id)

(async () => {
  try {
    // 4
    const birthday = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", birthday);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Ho trovato la data dello chef !");
  }
})();

/*
getChefBirthday(6)
  .then((birthday) => console.log( birthday))
  .catch((error) => console.error("Errore:", error.message));
*/
