import React, { useEffect, useState } from 'react';

const index = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  function getData() {
    fetch('http://localhost:4000/Users')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res, 'res');
      });
    return;
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>Main Page</div>
      <div className="w-screen h-screen bg-slate-100 flex justify-center items-center ">
        {users &&
          users.map((el) => {
            return (
              <>
                <p>{el.name} </p>
                <p>{el.email} </p>
                <img width={'100px'} src={el.userPhoto}></img>
              </>
            );
          })}
      </div>
    </>
  );
};

export default index;
