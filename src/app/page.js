"use client";

import { useState } from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import AddressDetailsForm from "../components/AddressDetailsForm";
import AccountSetupForm from "../components/AccountSetupForm";
import FormSummary from "../components/FormSummary";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted successfully:", formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setStep(1);
    setSubmitSuccess(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Multi-step Registration Form
        </h1>

        <ProgressBar currentStep={step} totalSteps={4} />

        <div className="mt-8">
          {step === 1 && (
            <PersonalInfoForm 
              formData={formData} 
              updateFormData={updateFormData} 
              nextStep={nextStep} 
            />
          )}
          {step === 2 && (
            <AddressDetailsForm 
              formData={formData} 
              updateFormData={updateFormData} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {step === 3 && (
            <AccountSetupForm 
              formData={formData} 
              updateFormData={updateFormData} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {step === 4 && (
            <FormSummary 
              formData={formData} 
              prevStep={prevStep} 
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitSuccess={submitSuccess}
              resetForm={resetForm}
            />
          )}
        </div>
      </div>
    </main>
  );
}