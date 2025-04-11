export default function ProgressBar({ currentStep, totalSteps }) {
    return (
      <div className="w-full">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="text-sm text-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-1 
                  ${
                    currentStep > index + 1
                      ? "bg-green-500 text-white"
                      : currentStep === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
              >
                {index + 1}
              </div>
              <div className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">
                {index === 0
                  ? "Personal"
                  : index === 1
                  ? "Address"
                  : index === 2
                  ? "Account"
                  : "Review"}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  }