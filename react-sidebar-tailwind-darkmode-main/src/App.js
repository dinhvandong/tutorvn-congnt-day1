import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Tutor from './pages/Tutor';
import UpdateTutor from './pages/tutor/update-tutor';
import InsertTutor from './pages/tutor/insert-tutor';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/tutor' element={<Tutor />} />
                    <Route path='/tutor/detail' element={<UpdateTutor />} />
                    <Route path='/tutor/insert' element={<InsertTutor />} />

                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
