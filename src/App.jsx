import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Lista de Usuarios</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map(user => (
          <div key={user.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <img src={user.photoUrl} alt={user.name} width="100" height="100" style={{ borderRadius: "50%" }} />
            <h3>{user.name}</h3>
            <p><b>Edad:</b> {user.age}</p>
            <p><b>Tel:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
