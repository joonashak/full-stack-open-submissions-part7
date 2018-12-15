import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/lib/Table';


export default ({ users }) => (
  <div>
    <h3>
      Users
    </h3>

    <Table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Blogs Added
          </th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/user/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>
                {user.blogs.length}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </div>
);
