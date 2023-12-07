import { Link } from 'react-router-dom';
import SignUp from '../../components/SingUp';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p >
        Есть аккаунт? <Link to="/login" style={{ color: "red" }}>Sing in</Link>
      </p>
    </div>
  );
};

export default Register;
