import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Reset password');
        // TODO: Implement reset password logic
        // On success, redirect to login
        navigate('/login');
    };

    return (
        <AuthLayout
            title="Reset Password"
            subtitle="Enter your new password"
        >
            <form onSubmit={handleSubmit}>
                <Input
                    label="New Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    required
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    required
                />

                <div className="mb-6 p-4 bg-background border-l-4 border-secondary">
                    <p className="text-sm text-text-light">
                        Password must be at least 8 characters long and contain a mix of letters, numbers, and symbols.
                    </p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 uppercase tracking-widest font-bold hover:bg-primary-light transition-colors duration-300 mb-6"
                >
                    Reset Password
                </button>

                <p className="text-center text-text-light">
                    <Link to="/login" className="text-primary font-semibold hover:underline">
                        Back to Sign In
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
