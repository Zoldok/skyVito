import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import SellerProfile from '../pages/SellerProfile/SellerProfile'
import Main from '../pages/Main/Main'
import AdDetails from '../pages/AdDetails/AdDetails'
import Registration from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Main} />
      <Route exact path="/register" Component={Registration} />
      <Route exact path="/login" Component={Login} />
      <Route element={<ProtectedRoute />}>
        <Route exact path="/profile" Component={Profile} />
      </Route>
      <Route exact path="/seller/:idSeller" Component={SellerProfile} />
      <Route path="/ad/:adId" Component={AdDetails} />
      <Route path="*" Component={NotFound} />
    </Routes>
  )
}

export default AppRoutes
