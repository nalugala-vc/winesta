import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Forgot password for:', email);
        setSubmitted(true);
        // TODO: Implement forgot password logic
    };

    if (submitted) {
        return (
            <AuthLayout
                title="Check Your Email"
                subtitle="We've sent password reset instructions"
            >
                <div className="text-center py-8">
                    <div className="mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-text-light mb-8">
                        If an account exists for <strong>{email}</strong>, you will receive an email with instructions to reset your password.
                    </p>
                    <Link
                        to="/login"
                        className="inline-block bg-primary text-white py-3 px-8 uppercase tracking-widest font-bold hover:bg-primary-light transition-colors duration-300"
                    >
                        Back to Sign In
                    </Link>
                </div>
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Forgot Password?"
            subtitle="Enter your email to reset your password"
        >
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 uppercase tracking-widest font-bold hover:bg-primary-light transition-colors duration-300 mb-6"
                >
                    Send Reset Link
                </button>

                <p className="text-center text-text-light">
                    Remember your password?{' '}
                    <Link to="/login" className="text-primary font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;
