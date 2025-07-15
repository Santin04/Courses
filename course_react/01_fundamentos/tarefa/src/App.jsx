import "./App.css";
import ShowUsers from "./components/ShowUsers";

function App() {
  const users = [
    { id: 1, name: "Mateus", age: 16, country: "Brazil" },
    { id: 2, name: "Bruno", age: 20, country: "Germany" },
    { id: 3, name: "Márcio", age: 40, country: "Spanish" },
  ];

  return (
    <>
      {users.map((user) => (
        <ShowUsers
          key={user.id}
          name={user.name}
          age={user.age}
          country={user.country}
        />
      ))}
    </>
  );
}

export default App;
