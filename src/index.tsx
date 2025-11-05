import '@/assets/css/index.css';
import Login from '@/pages/login';
import Verify from '@/pages/verify';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/verify' element={<Verify />} />
            </Routes>
        </HashRouter>
    );
}
