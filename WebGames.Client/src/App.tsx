import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>
);

export default App;
