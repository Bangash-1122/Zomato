import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/UserRegister.jsx'
import UserLogin from '../pages/UserLogin.jsx'
import FoodPartnerLogin from '../pages/FoodPartnerLogin.jsx'
import FoodPartnerRegister from '../pages/FoodPartnerRegister.jsx'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
                <Route path="*" element={<UserLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

