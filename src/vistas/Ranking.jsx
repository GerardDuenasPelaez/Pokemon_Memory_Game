import { useContext, useEffect, useState } from "react";
import GrupoTarjeta from "../componentes/GrupoTarjeta"
import { ContextoGlobal } from "../context/ContextoGlobal.jsx";

export default function Juego() {
    const {puntuacion} = useContext(ContextoGlobal)
    const {contadorGlobal} = useContext(ContextoGlobal)

    useEffect(() => {

    }, []);
 
    return (

            <div className="container mx-auto">
                        <h1 className="text-3xl text-center uppercase mt-3">Pokemons Memory</h1>
                        <ContadorGlobal />
                        <button className="text-white bg-gray-800 px-4 py-2 rounded mt-4">Tiempo Restante: {timeLeft}s</button>
                        <button className="text-white bg-gray-800 px-4 py-2 rounded ml-4 mt-4">Puntuacion: {puntuacion}</button>
                        <GrupoTarjeta tarjetas={pokemonAletorios} setPokemonsAleatorios={setPokemonsAleatorios}/>
            </div>

    )
}

