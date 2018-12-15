import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';


export default ({ user }) => (
  <div>
    <h3>
      {`User: ${user.name}`}
    </h3>

    <h5>
      Blogs by this user:
    </h5>

    <ListGroup>
      {
        user.blogs.map(blog => <ListGroup.Item key={blog._id}>{blog.title}</ListGroup.Item>)
      }
    </ListGroup>
  </div>
);
