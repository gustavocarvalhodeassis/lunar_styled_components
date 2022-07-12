import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;