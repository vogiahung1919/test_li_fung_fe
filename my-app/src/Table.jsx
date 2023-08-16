import React from "react";
import { AiFillEye } from "react-icons/ai";

const Table = ({ data }) => {
  return (
    <table striped bordered hover>
      <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>gender</th>
          <th></th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <th>
              <AiFillEye />
            </th>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default Table;
