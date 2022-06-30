import { Home } from './components/exports'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;