import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {


  // URL de la API
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  const [data, setData] = useState([])

  useEffect(() => {

    for (let i = 1; i <= 20; i++) {
      // Realiza la solicitud fetch
      fetch(apiUrl + i)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error al obtener datos del Pokémon ${pokemonNameOrId}`);
          }
          return response.json();
        })
        .then(data => {
          // Aquí puedes procesar los datos del Pokémon
          setData(old => {old.push(data);return[...old]})
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }



  }, [])

  console.log(data)


  return (
    <>
      <div>
        <h1 className="text-slate-600">Pokeapi</h1>

        <div className="grid grid-cols-4 m-20 gap-10">
          {data?.map((item, idx) => {

            return (
              <div key={idx} className="bg-zinc-900 border-2 border-amber-400  h-96 rounded-md p-5">
                <img src={item.sprites.other.home.front_default}/>
                {item.name}
              </div>

            )
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
