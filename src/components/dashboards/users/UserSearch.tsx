import React from "react";

export const UserSearch: React.FC = () => {
  return (
    <div className="userSearch__content container">
      <div className="userSearch__content__heading">
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          Recent Searches
        </h5>
      </div>
      <div style={{ marginTop: "30px" }} className="userSearch__content__table">
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
                Title
              </th>
              <th
                style={{ backgroundColor: "red", color: "whitesmoke" }}
                scope="col"
              >
                Story
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
