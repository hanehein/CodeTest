import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomeView from '../view/HomeView'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomeView/>} />
        </Route>
    </Routes>
    )
}

export default MainRouter