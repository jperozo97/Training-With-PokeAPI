// URL de la API
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


// Realiza la solicitud fetch
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al obtener datos del Pokémon ${pokemonNameOrId}`);
    }
    return response.json();
  })
  .then(data => {
    // Aquí puedes procesar los datos del Pokémon
    console.log('Datos del Pokémon:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
