import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './shop'; // Компонент с магазином
import Login from './components/Login/login'; // Компонент с логином

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Shop />} /> 
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;