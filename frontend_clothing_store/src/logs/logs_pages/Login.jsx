import React, { useState } from 'react';

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");



  return (
    <div className="page__login">
      <div className="login__form-login">
        <form
          onSubmit={ (e) => {
            e.preventDefault();
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
            type="button"
            onClick={ () => {} }
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}
