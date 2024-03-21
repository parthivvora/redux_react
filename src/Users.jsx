import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditUser from "./EditUser";
import { useDispatch } from "react-redux";
import { deleteUser } from "./features/userSlice";

function Users({ users }) {
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const updateData = (id, name, age) => {
    setShowEdit(true);
    setId(id);
    setName(name);
    setAge(age);
  };
  const dispatch = useDispatch();
  return (
    <div className="mt-4 mx-4">
      <h3 className="m-0">User List</h3>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "auto" }}
        className="mt-2"
      >
        <thead>
          <tr>
            <th className="px-4">Name</th>
            <th className="px-4">Age</th>
            <th className="px-4" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td className="px-4"> {user?.name} </td>
              <td className="px-4"> {user?.age} </td>
              <td className="px-4">
                <FaEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => updateData(index, user?.name, user?.age)}
                />
              </td>
              <td className="px-4">
                <MdDelete
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(deleteUser(index))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showEdit && (
        <EditUser
          id={id}
          name={name}
          age={age}
          setName={setName}
          setAge={setAge}
        />
      )}
    </div>
  );
}

export default Users;
