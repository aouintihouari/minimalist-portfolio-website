import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("Message sent successfully!");

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="my-[6%] h-[1px] w-full bg-[#33323D] opacity-30 sm:my-[5%] lg:my-[3%]"></div>
      <div className="lg:grid lg:grid-cols-2">
        <h3 className="ibarra text-blue my-[5%] text-[40px] leading-[42px] font-bold tracking-[-0.36px] sm:my-[2%]">
          Contact Me
        </h3>
        <div className="sans">
          <div className="flex flex-col">
            <label className="my-5 text-[13px] leading-[30px] font-bold tracking-[0px] opacity-80">
              Name
            </label>
            <input
              className={`bg-opacity-10 border-opacity-10 focus:border-opacity-100 h-[48px] bg-[rgb(209,207,207)] px-4 text-[#33323D] placeholder:text-[#33323D] placeholder:opacity-60 focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Appleseed"
            />
            {errors.name && (
              <span className="mt-1 text-sm text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="my-5 text-[13px] leading-[30px] font-bold tracking-[0px] opacity-80">
              Email Address
            </label>
            <input
              className={`bg-opacity-10 border-opacity-10 focus:border-opacity-100 h-[48px] bg-[rgb(209,207,207)] px-4 text-[#33323D] placeholder:text-[#33323D] placeholder:opacity-60 focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            {errors.email && (
              <span className="mt-1 text-sm text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="my-5 text-[13px] leading-[30px] font-bold tracking-[0px] opacity-80">
              Message
            </label>
            <textarea
              className={`bg-opacity-10 border-opacity-10 focus:border-opacity-100 h-[96px] resize-none bg-[rgb(209,207,207)] px-4 py-3 text-[#33323D] placeholder:text-[#33323D] placeholder:opacity-60 focus:outline-none ${
                errors.message ? "border-red-500" : ""
              }`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?"
            />
            {errors.message && (
              <span className="mt-1 text-sm text-red-500">
                {errors.message}
              </span>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`sans mt-10 flex h-[48px] w-[200px] cursor-pointer items-center justify-center bg-[#203A4C] text-[12px] tracking-[2px] text-white transition-all hover:bg-[#2a4a5e] disabled:cursor-not-allowed disabled:opacity-50 ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 text-sm ${
                  submitStatus.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
