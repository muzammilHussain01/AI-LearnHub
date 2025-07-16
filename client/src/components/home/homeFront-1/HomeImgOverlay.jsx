
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import LoginWithGoogle from '../../login-with-google/LoginWithGoogle.jsx';
import SignupModal from '../../signup/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeImgOverlay = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)',
        position: 'relative',
        overflow: 'hidden'
    };

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        color: 'white',
        paddingLeft: '3rem'
    };

    const buttonStyle = {
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        border: 'none',
        borderRadius: '16px',
        transform: 'scale(1)',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={containerStyle}>
            {/* Animated background elements */}
            <div style={{ position: 'absolute', top: '40px', left: '40px', width: '288px', height: '288px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(40px)', animation: 'pulse 2s infinite' }}></div>
            <div style={{ position: 'absolute', top: '160px', right: '40px', width: '288px', height: '288px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '50%', filter: 'blur(40px)', animation: 'pulse 2s infinite', animationDelay: '1s' }}></div>
            <div style={{ position: 'absolute', bottom: '-32px', left: '80px', width: '288px', height: '288px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '50%', filter: 'blur(40px)', animation: 'pulse 2s infinite', animationDelay: '2s' }}></div>

            {/* Content container */}
            <div className="container-fluid h-100 d-flex align-items-center justify-content-center p-4" style={{ position: 'relative', zIndex: 10 }}>
                <div
                    className="row w-100 align-items-center"
                    style={{ maxWidth: '1200px' }}
                >

                    {/* Left side - Welcome content */}
                    <div
                        className="col-lg-6 d-flex flex-column justify-content-center"
                    >
                        <div className="text-white text-center text-lg-start">
                            <h1 className="display-3 fw-bold mb-4 lh-1">
                                Welcome
                                <span className="d-block" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    Discover Learn Build</span>
                            </h1>
                            <p className="fs-5 mb-4 lh-base" style={{ color: '#d1d5db', maxWidth: '32rem' }}>
                                Your AI learning hub awaits. Access resources, challenges, and discussions driving the future of intelligent technology.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Login form */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="w-100" style={{ maxWidth: '400px', ...glassStyle, padding: '2rem' }}>

                            {/* Header */}
                            <div className="text-center mb-4">
                                <h2 className="h3 fw-bold text-white mb-2">Sign In</h2>
                                <p style={{ color: '#d1d5db' }}>Enter your credentials to continue</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Email field */}
                                <div className="mb-3 position-relative">
                                    <div className="position-absolute top-50 translate-middle-y ms-3" style={{ pointerEvents: 'none' }}>
                                        <Mail size={20} color="#9ca3af" />
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control py-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        style={inputStyle}
                                        required
                                    />
                                </div>

                                {/* Password field */}
                                <div className="mb-4 position-relative">
                                    <div className="position-absolute top-50 translate-middle-y ms-3" style={{ pointerEvents: 'none' }}>
                                        <Lock size={20} color="#9ca3af" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control py-3"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        style={{ ...inputStyle, paddingRight: '3rem' }}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="btn position-absolute top-50 translate-middle-y end-0 me-3 p-0 border-0"
                                        style={{ background: 'transparent', color: '#9ca3af' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 fw-semibold"
                                    style={buttonStyle}
                                >
                                    Sign In
                                </button>

                                {/* Divider */}
                                <div className="my-4 position-relative">
                                    <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                                    <span className="position-absolute top-50 start-50 translate-middle px-3" style={{ background: 'transparent', color: '#d1d5db' }}>
                    Or continue with
                  </span>
                                </div>

                                {/* Social login */}
                                <div className="d-grid gap-3">
                                    <LoginWithGoogle />
                                    <SignupModal />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeImgOverlay;
