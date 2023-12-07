import React from 'react';

const Form = ({ title, handleClick, setEmail, setPassword, setName, setSurname, setCity }) => {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <input type="email" onChange={handleEmailChange} placeholder="Email" />
      <input type="password" onChange={handlePasswordChange} placeholder="Password" />
      <input type="text" onChange={handleNameChange} placeholder="Name" />
      <input type="text" onChange={handleSurnameChange} placeholder="Surname" />
      <input type="text" onChange={handleCityChange} placeholder="City" />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};

export default Form;