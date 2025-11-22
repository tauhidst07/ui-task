import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'

const Step3 = ({ register, errors, roles, challenges, watchChallenge, watchCustomChallenge, onNext, onBack }) => {

    return (
        <form onSubmit={onNext} className="space-y-6">
            <div>
                <label className="block text-sm font-semibold text-[#0F1B2B] mb-3.5">
                    What's your role?
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {roles.map(role => (
                        <label
                            key={role}
                            className="relative"
                        >
                            <input
                                type="radio"
                                {...register('role', { required: 'Role is required' })}
                                value={role}
                                className="peer sr-only"
                            />
                            <div className="px-4 py-3.5 rounded-xl border-2 font-semibold transition-all text-sm cursor-pointer border-gray-200 text-[#0F1B2B] hover:border-gray-300 hover:bg-gray-50 peer-checked:border-[#008DC2] peer-checked:bg-[#008DC2]/8 peer-checked:text-[#008DC2] peer-checked:shadow-md peer-checked:shadow-[#008DC2]/10">
                                {role}
                            </div>
                        </label>
                    ))}
                </div>
                {errors.role && (
                    <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-[#0F1B2B] mb-3.5">
                    Primary work challenge
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                    {challenges.map(challenge => (
                        <label
                            key={challenge}
                            className="relative"
                        >
                            <input
                                type="radio"
                                {...register('challenge', { required: 'Challenge is required' })}
                                value={challenge}
                                className="peer sr-only"
                            />
                            <div className="px-4 py-3 rounded-xl border-2 font-semibold transition-all text-sm cursor-pointer border-gray-200 text-[#0F1B2B] hover:border-gray-300 hover:bg-gray-50 peer-checked:border-[#008DC2] peer-checked:bg-[#008DC2]/8 peer-checked:text-[#008DC2] peer-checked:shadow-md peer-checked:shadow-[#008DC2]/10">
                                {challenge}
                            </div>
                        </label>
                    ))}
                </div>
                {errors.challenge && (
                    <p className="mt-2 text-sm text-red-600">{errors.challenge.message}</p>
                )}
                {watchChallenge === 'Other' && (
                    <input
                        type="text"
                        {...register('customChallenge', {
                            required: watchChallenge === 'Other' ? 'Please describe your challenge' : false
                        })}
                        placeholder="Describe your challenge..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#008DC2] focus:ring-4 focus:ring-[#008DC2]/10 outline-none transition-all mt-3 text-base placeholder:text-gray-400"
                    />
                )}
                {errors.customChallenge && (
                    <p className="mt-2 text-sm text-red-600">{errors.customChallenge.message}</p>
                )}
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

export default Step3