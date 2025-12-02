import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign in:', formData);
        // TODO: Implement sign in logic
        navigate('/dashboard');
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to your account to continue"
        >
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />

                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-2 text-sm text-text">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 uppercase tracking-widest font-bold hover:bg-primary-light transition-colors duration-300 mb-6"
                >
                    Sign In
                </button>

                <p className="text-center text-text-light">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default SignIn;
