import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';


const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/profile" Component={Profile}/>

    </Routes>
  );
};

export default AppRoutes;