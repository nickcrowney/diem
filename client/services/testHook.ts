import { useEffect, useState } from "react";

const testHook = () => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);
  //const data = await response.json();
  // setUsers(data);
  return { state };
};

export default testHook;
