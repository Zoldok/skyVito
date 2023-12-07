import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from '../store/Service/Service';
import { setUser } from '../store/slices/userSlice';
import Form from './Form';

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSignUp = async () => {
    try {
      const response = await registerUser({
        email,
        password,
        name,
        surname,
        role: 'user',
        phone: '',
        city,
      }).unwrap();

      dispatch(setUser(response));
    } catch (error) {
      // Обработка ошибки, если регистрация не удалась
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        title="string"
        handleClick={handleSignUp}
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        setSurname={setSurname}
        setCity={setCity}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignUp;