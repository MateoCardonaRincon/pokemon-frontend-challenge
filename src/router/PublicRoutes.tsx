import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

type Props = {}

const PublicRoutes: React.FC<Props> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default PublicRoutes