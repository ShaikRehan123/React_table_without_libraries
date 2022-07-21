import { useState } from "react";
import "./App.css";
function App() {
  const tableData = [
    {
      id: 1,
      name: "John",
      age: "20",
      email: "johnisnotlazy@gmail.com",
    },
    {
      id: 2,
      name: "Gokul",
      age: "20",
      email: "gokulisnotlazy@gmail.com",
    },
    {
      id: 3,
      name: "Abraham",
      age: "20",
      email: "abrahamisnotlazy@gmail.com",
    },
    {
      id: 4,
      name: "Prasham",
      age: "20",
      email: "prashanisnotlazy@gmail.com",
    },
    {
      id: 5,
      name: "Hari",
      age: "20",
      email: "hariisnotlazy@gmail.com",
    },
    {
      id: 6,
      name: "Sachin",
      age: "20",
      email: "sachinisnotlazy@gmail.com",
    },
    {
      id: 7,
      name: "Ashwin",
      age: "20",
      email: "ashwinisnotlazy@gmail.com",
    },
    {
      id: 8,
      name: "Vishal",
      age: "20",
      email: "vishalisnotlazy@gmail.com",
    },
    {
      id: 9,
      name: "Sai",
      age: "20",
      email: "saiisnotlazy@gmail.com",
    },
    {
      id: 10,
      name: "Koli",
      age: "20",
      email: "koliisnotlazy@gmail.com",
    },
  ];
  const usersPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = tableData.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <table className="table">
        <thead className="theadw">
          <tr>
            <th className="thead">Name</th>
            <th className="thead">Age</th>
            <th className="thead">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="tbody">{user.name}</td>
              <td className="tbody">{user.age}</td>
              <td className="tbody">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn_wrapper">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev_btn"
        >
          Previous
        </button>
        <div className="page_numbers" onClick={() => paginate(1)}>
          1
        </div>
        <div className="page_numbers" onClick={() => paginate(2)}>
          2
        </div>
        <div className="page_numbers" onClick={() => paginate(3)}>
          3
        </div>
        <div className="page_numbers" onClick={() => paginate(4)}>
          4
        </div>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * usersPerPage >= tableData.length}
          className="next_btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
