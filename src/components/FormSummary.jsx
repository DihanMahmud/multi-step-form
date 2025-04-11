export default function FormSummary({
  formData,
  prevStep,
  handleSubmit,
  isSubmitting,
  submitSuccess,
  resetForm,
}) {
  if (submitSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="rounded-full bg-green-100 dark:bg-green-900 w-16 h-16 flex items-center justify-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Registration Successful!
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for completing the registration process.
        </p>
        <button
          onClick={resetForm}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start New Registration
        </button>
      </div>
    );
  }

  const maskedPassword = formData.password
    ? "*".repeat(formData.password.length)
    : "";

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Review Your Information
      </h2>

      <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
        <h3 className="text-md font-medium text-gray-800 dark:text-white">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Full Name:</p>
          <p className="text-gray-900 dark:text-white">{formData.fullName}</p>
          <p className="text-gray-500 dark:text-gray-400">Email:</p>
          <p className="text-gray-900 dark:text-white">{formData.email}</p>
          <p className="text-gray-500 dark:text-gray-400">Phone Number:</p>
          <p className="text-gray-900 dark:text-white">
            {formData.phoneNumber}
          </p>
        </div>
      </div>

      <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
        <h3 className="text-md font-medium text-gray-800 dark:text-white">
          Address Details
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Street Address:</p>
          <p className="text-gray-900 dark:text-white">
            {formData.streetAddress}
          </p>
          <p className="text-gray-500 dark:text-gray-400">City:</p>
          <p className="text-gray-900 dark:text-white">{formData.city}</p>
          <p className="text-gray-500 dark:text-gray-400">Zip Code:</p>
          <p className="text-gray-900 dark:text-white">{formData.zipCode}</p>
        </div>
      </div>

      <div className="space-y-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
        <h3 className="text-md font-medium text-gray-800 dark:text-white">
          Account Information
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Username:</p>
          <p className="text-gray-900 dark:text-white">{formData.username}</p>
          <p className="text-gray-500 dark:text-gray-400">Password:</p>
          <p className="text-gray-900 dark:text-white">{maskedPassword}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md 
                   hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                  ${
                    isSubmitting
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
