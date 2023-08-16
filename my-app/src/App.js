import { useState } from "react";
import "./app.css";
import { data } from "./user";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  console.log(query);

  const search = (data) => {
    return data.filter(item => item.id.toLowerCase().includes(query)
                                || item.name.toLowerCase().includes(query)
                                || item.gender.toLowerCase().includes(query)
                                || item.age.toString().includes(query))
  }

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <Table data={search(data)}/>
    </div>
  );
}

export default App;
