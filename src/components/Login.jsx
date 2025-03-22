import { useState } from "react";

export default function Login() {

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');
  console.log(emailIsInvalid);

  function handleInputChange(identifier, value) {
    setEnteredValue((prevEnteredValue) => {
      return {
        ...prevEnteredValue,
        [identifier]: value,
      };
    }); 
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }


  function handleInputBlur(identifier) {
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier]: true,
    }));
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(e) => handleInputChange('email', e.target.value)}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          onBlur={() => handleInputBlur('password')}
          onChange={(e) => handleInputChange('password', e.target.value)}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
