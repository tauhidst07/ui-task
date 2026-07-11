import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Check, ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Step1 from './steps/Step1.jsx';
import Step2 from './steps/Step2.jsx';
import Step3 from './steps/Step3.jsx';
import Step4 from './steps/Step4.jsx';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [selectedIntegrations, setSelectedIntegrations] = useState([]); 
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isValid }, watch, trigger } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      fullName: '',
      companyName: '',
      companySize: '',
      industry: '',
      role: '',
      challenge: '',
      customChallenge: ''
    }
  });

  const watchEmail = watch('email');
  const watchChallenge = watch('challenge');
  const watchCustomChallenge = watch('customChallenge');

  const companySizes = ['Solo', '2-10', '11-50', '51-250', '250+'];
  const industries = ['IT & Software', 'Consulting', 'Healthcare', 'Finance', 'Marketing', 'Education', 'E-commerce', 'Other'];
  const roles = ['Founder', 'Product Manager', 'Admin', 'Team Member', 'Tech', 'Non-Tech'];
  const challenges = [
    'Boost productivity',
    'Centralize tasks',
    'Improve visibility',
    'Automate reporting',
    'Reduce app fatigue',
    'Other'
  ];
  const integrations = [
    { id: 'slack', name: 'Slack', color: 'bg-purple-100 text-purple-600' },
    { id: 'gmail', name: 'Gmail', color: 'bg-red-100 text-red-600' },
    { id: 'calendar', name: 'Calendar', color: 'bg-blue-100 text-blue-600' },
    { id: 'notion', name: 'Notion', color: 'bg-gray-100 text-gray-900' },
    { id: 'asana', name: 'Asana', color: 'bg-pink-100 text-pink-600' },
    { id: 'jira', name: 'Jira', color: 'bg-blue-100 text-blue-700' },
    { id: 'teams', name: 'Teams', color: 'bg-indigo-100 text-indigo-600' },
    { id: 'zapier', name: 'Zapier', color: 'bg-orange-100 text-orange-600' }
  ];

  const handleGoogleSignup = () => {
    alert('Google signup initiated! (This would redirect to Google OAuth)');
  };

  const handleSendCode = () => {
    if (watchEmail) setCodeSent(true);
  };

  const handleVerifyCode = () => {
    if (otp.every(digit => digit !== '')) {
      setCurrentStep(2);
    }
  };

  const onSubmitStep2 = async (data) => {
    const result = await trigger(['fullName', 'companyName', 'companySize', 'industry']);
    if (result) setCurrentStep(3);
  };

  const onSubmitStep3 = async (data) => {
    const result = await trigger(['role', 'challenge']);
    if (result && (watchChallenge !== 'Other' || watchCustomChallenge)) {
      setCurrentStep(4);
    }
  };

  const onFinalSubmit = (data) => {
    const finalData = {
      ...data,
      selectedIntegrations,
      otp: otp.join('')
    };
    console.log('Final submission:', finalData);
    // alert('Setup complete! Redirecting to dashboard...');  
    navigate("/dashboard")

  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep === 2) {
        setCodeSent(false);
        setCurrentStep(1);
      } else {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#F5F8FA] via-[#E8F4F8] to-[#F5F8FA] flex items-center justify-center p-6">
      
      <div className="w-full max-w-[580px]">
        {/* Main Heading */}
        <div className="text-center mb-8 w-full">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-[#008DC2] to-[#00549A] shadow-lg shadow-[#008DC2]/30 mb-5">
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <h1 className="text-4xl  font-bold text-[#0F1B2B] leading-tight tracking-tight mb-4">
            {currentStep === 1 && 'Welcome to WorkElate'}
            {currentStep === 2 && 'Set up your workspace'}
            {currentStep === 3 && 'Personalize your experience'}
            {currentStep === 4 && 'Connect your tools'}
          </h1>
          <p className="text-lg text-[#0F1B2B]/60 max-w-md mx-auto">
            {currentStep === 1 && "Let's verify your email to get started"}
            {currentStep === 2 && 'Tell us about yourself and your company'}
            {currentStep === 3 && 'Help us tailor WorkElate to your needs'}
            {currentStep === 4 && 'Unlock powerful integrations'}
          </p>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
          {currentStep === 1 && (
            <Step1
              register={register}
              errors={errors}
              watchEmail={watchEmail}
              codeSent={codeSent}
              otp={otp}
              setOtp={setOtp}
              onSendCode={handleSendCode}
              onVerifyCode={handleVerifyCode}
              onGoogleSignup={handleGoogleSignup}
            />
          )}

          {currentStep === 2 && (
            <Step2
              register={register}
              errors={errors}
              companySizes={companySizes}
              industries={industries}
              onNext={handleSubmit(onSubmitStep2)}
              onBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <Step3
              register={register}
              errors={errors}
              roles={roles}
              challenges={challenges}
              watchChallenge={watchChallenge}
              watchCustomChallenge={watchCustomChallenge}
              onNext={handleSubmit(onSubmitStep3)}
              onBack={handleBack}
            />
          )}

          {currentStep === 4 && (
            <Step4
              integrations={integrations}
              selectedIntegrations={selectedIntegrations}
              setSelectedIntegrations={setSelectedIntegrations}
              onFinish={handleSubmit(onFinalSubmit)}
              onBack={handleBack}
            />
          )}
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === currentStep
                  ? 'w-8 bg-[#008DC2]'
                  : step < currentStep
                  ? 'w-1.5 bg-[#008DC2]/60'
                  : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-xs font-medium text-[#0F1B2B]/40 mt-3">
          Step {currentStep} of 4
        </p>
      </div>
    </div>
  );
};










export default OnboardingFlow;