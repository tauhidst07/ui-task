import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'

const Step2 = ({ register, errors, companySizes, industries, onNext, onBack }) => {
    return (
        <form onSubmit={onNext} className="space-y-6">
            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-[#0F1B2B] mb-2.5">
                        Full name
                    </label>
                    <input
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all text-base placeholder:text-gray-400"
                    />
                    {errors.fullName && (
                        <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#0F1B2B] mb-2.5">
                        Company name
                    </label>
                    <input
                        type="text"
                        {...register('companyName', { required: 'Company name is required' })}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all text-base placeholder:text-gray-400"
                    />
                    {errors.companyName && (
                        <p className="mt-2 text-sm text-red-600">{errors.companyName.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-[#0F1B2B] mb-2.5">
                            Company size
                        </label>
                        <select
                            {...register('companySize', { required: 'Company size is required' })}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all bg-white text-base"
                        >
                            <option value="">Select</option>
                            {companySizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                        {errors.companySize && (
                            <p className="mt-2 text-sm text-red-600">{errors.companySize.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0F1B2B] mb-2.5">
                            Industry
                        </label>
                        <select
                            {...register('industry', { required: 'Industry is required' })}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all bg-white text-base"
                        >
                            <option value="">Select</option>
                            {industries.map(ind => (
                                <option key={ind} value={ind}>{ind}</option>
                            ))}
                        </select>
                        {errors.industry && (
                            <p className="mt-2 text-sm text-red-600">{errors.industry.message}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex gap-3 pt-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-[#0F1B2B] font-semibold rounded-xl transition-all flex items-center gap-2.5"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-[#008DC2] hover:bg-[#00549A] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#008DC2]/25 hover:shadow-xl hover:shadow-[#008DC2]/30"
                >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
};


export default Step2