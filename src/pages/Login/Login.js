// import * as S from './Login.styled';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
    <h1>Login</h1>
    <p>
    Есть аккаунт?
     <Link to="/register" style={{ color: "red" }}>Sing in</Link>
    </p>
    </div>
  );
};

export default Login;