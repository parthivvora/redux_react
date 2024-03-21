import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUser } from "./features/userSlice";
import { useEffect, useState } from "react";
import Users from "./Users";
import GetApiCall from "./GetApiCall";

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const newObjData = {
    name: name,
    age: age,
  };

  const { data, userData, isLoading } = useSelector((state) => state.user);
  console.log("🚀 ~ App ~ isLoading:", isLoading);
  console.log("🚀 ~ App ~ userData:", userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Name"
        className="mt-4 mx-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter Age"
        className="mt-4 mx-4"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button
        onClick={() => dispatch(addUser(newObjData))}
        className="mt-4 mx-4"
      >
        Submit
      </button>

      <Users users={data} />

      <GetApiCall userData={userData} isLoading={isLoading} />
    </div>
  );
}

export default App;
