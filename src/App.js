import { useState } from "react";
import { Data } from "./Data";

function App() {

  const [search, setSearch] = useState('') 

  return (
    <div className="app">
      <h1>Contact Form</h1>
      <form>
        <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search Contact" />
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.filter(item => {
              return search.toLowerCase() === '' ? item : item.first_name.includes(search) 
            })
            .map(item => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
