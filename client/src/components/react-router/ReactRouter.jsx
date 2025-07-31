import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    useParams,
    useNavigate,
    Outlet
} from "react-router-dom";

export default function ReactRouter() {
    // 🔸 Define all internal components inside this one
    const Home = () => <h2>🏠 Home Page</h2>;

    const About = () => <h2>ℹ️ About Page</h2>;

    const Contact = () => {
        const navigate = useNavigate();
        return (
            <div>
                <h2>📞 Contact Page</h2>
                <button className="btn btn-primary mt-2" onClick={() => navigate("/")}>
                    Go to Home
                </button>
            </div>
        );
    };

    const User = () => {
        const { username } = useParams();
        return <h2>👤 User Profile: {username}</h2>;
    };

    const Dashboard = () => (
        <div>
            <h2>📊 Dashboard</h2>
            <nav className="mb-2">
                <Link to="stats" className="me-3">Stats</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet />
        </div>
    );

    const Stats = () => <p>📈 Dashboard Stats</p>;
    const Settings = () => <p>⚙️ Dashboard Settings</p>;

    const NotFound = () => <h2>❌ 404 - Page Not Found</h2>;

    const Navigation = () => (
        <nav className="mb-4">
            <NavLink to="/" className="me-3" end>Home</NavLink>
            <NavLink to="/about" className="me-3">About</NavLink>
            <NavLink to="/contact" className="me-3">Contact</NavLink>
            <NavLink to="/user/johndoe" className="me-3">User</NavLink>
            <NavLink to="/dashboard" className="me-3">Dashboard</NavLink>
        </nav>
    );

    return (
        <BrowserRouter>
            <div className="container p-4">
                <h1 className="mb-4">🌐 React Router - All in One Component</h1>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:username" element={<User />} />

                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="stats" element={<Stats />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
