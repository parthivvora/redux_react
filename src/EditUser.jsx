import React from "react";
import { useDispatch } from "react-redux";
import { editUser } from "./features/userSlice";

function EditUser({ id, name, age, setName, setAge }) {
  const editUserObj = {
    id: id,
    name: name,
    age: age,
  };
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <h3 className="m-0">Edit User</h3>
      <input
        type="text"
        placeholder="Enter Name"
        className="mt-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Age"
        className="mt-4"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(editUser(editUserObj))} className="mt-4">
        Edit
      </button>
    </div>
  );
}

export default EditUser;
