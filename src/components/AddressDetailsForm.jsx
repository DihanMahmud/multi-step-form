"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addressSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must contain only numbers"),
});

export default function AddressDetailsForm({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      streetAddress: formData.streetAddress,
      city: formData.city,
      zipCode: formData.zipCode,
    },
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Address Details
      </h2>

      <div>
        <label
          htmlFor="streetAddress"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Street Address
        </label>
        <input
          id="streetAddress"
          type="text"
          {...register("streetAddress")}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                   focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.streetAddress && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.streetAddress.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          City
        </label>
        <input
          id="city"
          type="text"
          {...register("city")}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                   focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.city && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.city.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Zip Code
        </label>
        <input
          id="zipCode"
          type="text"
          {...register("zipCode")}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                   focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
        {errors.zipCode && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.zipCode.message}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md 
                   hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </form>
  );
}