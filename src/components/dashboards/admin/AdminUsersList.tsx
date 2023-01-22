import React from "react";
import bin from "../../../assets/bin.png";
export const AdminUsersList: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }} className="admin__content container">
      <div className="admin__content__heading">
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          Users List
        </h5>
      </div>
      <div style={{ marginTop: "30px" }} className="admin__content__table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                style={{ backgroundColor: "red", color: "whitesmoke" }}
                scope="col"
              >
                ID
              </th>
              <th
                style={{ backgroundColor: "red", color: "whitesmoke" }}
                scope="col"
              >
                Username
              </th>
              <th
                style={{ backgroundColor: "red", color: "whitesmoke" }}
                scope="col"
              >
                Email
              </th>
              <th
                style={{ backgroundColor: "red", color: "whitesmoke" }}
                scope="col"
              >
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <img src={bin} style={{ height: "30px" }} />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <img src={bin} style={{ height: "30px" }} />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>
                <img src={bin} style={{ height: "30px" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
