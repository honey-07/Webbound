// src/components/ContactForm.tsx
import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import CustomDropdown from "./CustomDropdown";

interface ApiResponse {
  success: boolean;
  error?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [formState, setFormState] = useState<{
    isSubmitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    isSubmitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }
    if (formData.message.length < 10) {
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: "Message must be at least 10 characters long.",
      });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: null });

    try {
      // Use environment variable or fallback
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "/api";
      const response = await fetch(`${backendUrl}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setFormState({
          isSubmitting: false,
          submitted: true,
          error: null,
        });
        // Reset form data
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });

        // Scroll to success message
        setTimeout(() => {
          document.querySelector(".success-message")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      } else {
        setFormState({
          isSubmitting: false,
          submitted: false,
          error: result.error || "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState({
        isSubmitting: false,
        submitted: false,
        error: "Network error. Please check your connection and try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Web Development",
    "Mobile App Development",
    "Desktop Applications",
    "WhatsApp Business Solutions",
    "AI & Machine Learning",
    "E-commerce Development",
    "Custom IT Solutions",
    "Digital Marketing & SEO",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
  ];

  const timelines = [
    "ASAP (Rush)",
    "1-2 weeks",
    "1-3 months",
    "3-6 months",
    "6+ months",
  ];

  return (
    <div className="brutalist-container p-6 md:p-8 bg-white dark:bg-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
        Start Your Project
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
        Fill out the form below and we'll get back to you within 24 hours with a
        detailed proposal.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={formState.isSubmitting}
              className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formState.error && !formData.name.trim()
                  ? "border-red-300 dark:border-red-600"
                  : "border-gray-300 dark:border-gray-600"
              } ${
                formState.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={formState.isSubmitting}
              className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                formState.error && !formData.email.trim()
                  ? "border-red-300 dark:border-red-600"
                  : "border-gray-300 dark:border-gray-600"
              } ${
                formState.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div>
            <CustomDropdown
              name="service"
              label="Service Needed"
              options={services}
              value={formData.service}
              onChange={(value) => setFormData({ ...formData, service: value })}
              placeholder="Select a service"
              required
            />
          </div>

          <div>
            <CustomDropdown
              name="budget"
              label="Budget Range"
              options={budgetRanges}
              value={formData.budget}
              onChange={(value) => setFormData({ ...formData, budget: value })}
              placeholder="Select budget"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <CustomDropdown
              name="timeline"
              label="Timeline"
              options={timelines}
              value={formData.timeline}
              onChange={(value) =>
                setFormData({ ...formData, timeline: value })
              }
              placeholder="Select timeline"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={formState.isSubmitting}
            rows={5}
            className={`w-full px-4 py-3 border-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
              formState.error && !formData.message.trim()
                ? "border-red-300 dark:border-red-600"
                : "border-gray-300 dark:border-gray-600"
            } ${formState.isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
          />
        </div>

        {/* Success Message */}
        {formState.submitted && (
          <div className="success-message bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-green-800 dark:text-green-400 font-semibold">
                Message Sent Successfully!
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                Thank you for your inquiry. We'll get back to you within 24
                hours with a detailed proposal.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formState.error && (
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-800 dark:text-red-400 font-semibold">
                Error Sending Message
              </h4>
              <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                {formState.error}
              </p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={`brutalist-button w-full flex items-center justify-center space-x-2 ${
            formState.isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:transform hover:scale-105"
          }`}
        >
          {formState.isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>SENDING...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>SEND MESSAGE</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
