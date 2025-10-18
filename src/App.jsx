import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import pokemonLogo from "./assets/pokemon-logo.png";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data.users || []);
      })
      .catch(() => {
        alert("No se pudo conectar con la API. Asegúrate de que esté corriendo en el puerto 3000.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Cargando Pokédex...</div>;

  return (
    <div className="pokedex">
      <header className="pokedex-header">
        <img src={pokemonLogo} alt="Pokémon" className="pokemon-logo" />
        <h1 className="title">Pokédex de Usuarios</h1>
      </header>

      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="pokedex-card">
            <div className="screen">
              <img src={user.photoUrl} alt={user.name} className="pokemon-img" />
              <h2 className="pokemon-name">{user.name}</h2>
              <p><strong>Edad:</strong> {user.age ?? "??"}</p>
              <p><strong>Ciudad:</strong> {user.address ?? "Desconocida"}</p>
              <p><strong>Correo:</strong> {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
