import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm: React.FunctionComponent = () => {
  // function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   console.log(e.currentTarget.value);
  // }

  return (
    <div className={styles.form_container}>
      <form id="loginForm" name="loginForm" className={styles.form}>
        <label htmlFor="userLogin">login</label>
        <input
          type="text"
          id="userLogin"
          name="userLogin"
          className="py-2 px-4 rounded"
        />
        <label htmlFor="userPassword">password</label>
        <input type="text" id="userPassword" className="py-2 px-4 rounded" />
        <input
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
};

export default LoginForm;
