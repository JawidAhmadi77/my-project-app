import React, { useState } from "react";
import { contactData } from "../data/ProjectData";

const Form = () => {
  const initialState = contactData.fields.reduce(
    (acc, field) => ({ ...acc, [field.id]: "" }),
    {}
  );

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation
    contactData.fields.forEach((field) => {
      if (!formData[field.id].trim()) {
        formErrors[field.id] = `${field.label} is required!`;
      } else if (
        field.id === "email" &&
        !/\S+@\S+\.\S+/.test(formData[field.id])
      ) {
        formErrors.email = "Invalid email format!";
      }
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // instead of sending immediately, show review
      setReviewMode(true);
    }
  };

  const confirmSubmit = () => {
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData(initialState);
    setReviewMode(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  const cancelReview = () => {
    setReviewMode(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-gray-100 to-gray-200 lg:pt-60 lg:pb-20 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-8 transition-all bg-white shadow-xl rounded-2xl sm:p-10 md:p-12"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          {contactData.title}
        </h2>

        {/* Form Fields */}
        {!reviewMode && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactData.fields.map((field) => (
                <div
                  key={field.id}
                  className={`${
                    field.type === "textarea" ? "sm:col-span-2" : ""
                  }`}
                >
                  <label
                    htmlFor={field.id}
                    className="block mb-1 font-medium text-gray-700"
                  >
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows="4"
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dimgreen"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dimgreen"
                    />
                  )}

                  {errors[field.id] && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-6 font-semibold text-white transition-all bg-dimgreen hover:bg-yellow-300 hover:text-black rounded-xl"
            >
              {contactData.buttonText}
            </button>
          </>
        )}

        {/* Review Section */}
        {reviewMode && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center text-gray-700">
              Review Your Information
            </h3>
            <div className="p-4 border bg-gray-50 rounded-xl">
              {Object.entries(formData).map(([key, value]) => (
                <p key={key} className="mb-2 text-gray-700">
                  <span className="font-semibold capitalize">{key}:</span>{" "}
                  {value || "—"}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4 sm:flex-row">
              <button
                type="button"
                onClick={confirmSubmit}
                className="flex-1 py-2 font-semibold text-white transition-all bg-green-600 hover:bg-green-700 rounded-xl"
              >
                Confirm & Send
              </button>
              <button
                type="button"
                onClick={cancelReview}
                className="flex-1 py-2 font-semibold text-white transition-all bg-gray-400 hover:bg-gray-500 rounded-xl"
              >
                Edit Again
              </button>
            </div>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <p className="mt-4 font-medium text-center text-green-600">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
