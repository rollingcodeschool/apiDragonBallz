import Personaje from "./components/Personaje";
import logo from "./assets/Dragon_Ball_Z_logo.svg";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [datoPersonaje, setDatoPersonaje] = useState({});

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async() => {
    try {
      //aqui van todas las lineas de codigo que quiero
      const respuesta = await fetch('https://dragonball-api.com/api/characters/1')
      console.log(respuesta)
      if(respuesta.status === 200){
        const datos = await respuesta.json()
        console.log(datos)
        setDatoPersonaje(datos)
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <main className="container my-5 text-center">
      <img src={logo} alt="logo de dragon ball z" className="w-50 mb-4" />
      <Personaje></Personaje>
      <Button variant="danger" className="mt-4">
        Obtener personaje
      </Button>
    </main>
  );
}

export default App;
