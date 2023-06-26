import React, { useState, useContext } from 'react';
import MyContext from '../../context/MyContext';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { logging } = useContext(MyContext)

  return (
    <div className="page__login">
      <div className="login__form-login">
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            logging(email, password);
          } }
        >
          <input 
            type="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            placeholder="example@email.com"
          />
          <input 
            type="password"
            placeholder="P@ssword123"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value)}
          />

          <button
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}
