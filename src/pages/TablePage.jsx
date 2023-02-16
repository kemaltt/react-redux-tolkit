import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

export default function TablePage({ isLogin }) {
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log(userData);

  const { users, isAuthenticated } = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="table">
      {isAuthenticated ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>

          <>
            <tbody>
              <tr>
                <td>1</td>
                <td>{users.userName}</td>
                <td>{users.email}</td>
              </tr>
            </tbody>
          </>

          {/* 
          {users.map((el, i) => (
            <>
              <tbody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{el.userName}</td>
                  <td>{el.email}</td>
                </tr>
              </tbody>
            </>
          ))} */}
        </Table>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>Please login!!!</p>
      )}
    </div>
  );
}
