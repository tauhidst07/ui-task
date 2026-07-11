import { ArrowRight, Mail } from 'lucide-react';
import React from 'react'
import OTPInput from '../OtpInput.jsx';

const Step1 = ({ register, errors, watchEmail, codeSent, otp, setOtp, onSendCode, onVerifyCode, onGoogleSignup }) => {
    return (
        <div className="space-y-6">
            {!codeSent ? (
                <>
                    <button
                        type="button"
                        onClick={onGoogleSignup}
                        className="w-full px-6 py-4 bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 hover:shadow-md text-[#0F1B2B] font-semibold rounded-xl transition-all flex items-center justify-center gap-3 text-base"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-[#0F1B2B]/50 font-medium">or</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0F1B2B] mb-2.5">
                            Work email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                placeholder="you@company.com"
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all text-base placeholder:text-gray-400"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                        )}
                        {!errors.email && (
                            <p className="mt-2 text-sm text-[#0F1B2B]/50">
                                We'll send a one-time code to verify your identity
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={onSendCode}
                        disabled={!watchEmail || errors.email}
                        className="w-full px-6 py-4 bg-[#008DC2] hover:bg-[#00549A] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-base shadow-lg shadow-[#008DC2]/25 hover:shadow-xl hover:shadow-[#008DC2]/30 disabled:shadow-none"
                    >
                        Send verification code
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </>
            ) : (
                <>
                    <div>
                        <label className="block text-sm font-semibold text-[#0F1B2B] mb-4">
                            Enter verification code
                        </label>
                        <OTPInput otp={otp} setOtp={setOtp} />
                        <p className="mt-3 text-sm text-[#0F1B2B]/50">
                            Check your inbox for the 6-digit code
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onVerifyCode}
                        disabled={otp.some(d => d === '')}
                        className="w-full px-6 py-4 bg-[#008DC2] hover:bg-[#00549A] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-base shadow-lg shadow-[#008DC2]/25 hover:shadow-xl hover:shadow-[#008DC2]/30 disabled:shadow-none"
                    >
                        Verify & continue
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="w-full text-sm text-[#008DC2] hover:text-[#00549A] transition-colors font-medium"
                    >
                        Didn't receive it? Resend code
                    </button>
                </>
            )}
        </div>
    );
};

export default Step1