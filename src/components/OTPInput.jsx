import React, { useEffect, useRef } from 'react'



const OTPInput = ({ otp, setOtp }) => {
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, idx) => {
            if (idx < 6) newOtp[idx] = char;
        });
        setOtp(newOtp);

        const nextEmpty = newOtp.findIndex(val => val === '');
        if (nextEmpty !== -1) {
            inputRefs.current[nextEmpty]?.focus();
        } else {
            inputRefs.current[5]?.focus();
        }
    };

    return (
        <div className="flex gap-2.5 justify-between max-w-sm mx-auto">
            {otp.map((digit, idx) => (
                <input
                    key={idx}
                    ref={el => inputRefs.current[idx] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                    className="w-12 h-14 text-center text-xl font-bold rounded-xl border-2 border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all"
                />
            ))}
        </div>
    );
};

export default OTPInput