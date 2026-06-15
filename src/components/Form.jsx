import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Btn from "./Commons/Btn";

const AcademicForm = ({ closeModal }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema Validation Rules
  const academicSchema = Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .required("Full name is required.")
      // Rejects numbers and special characters via regex, allowing spaces for first/last names
      .matches(/^[A-Za-z\s]+$/, "Full name must only contain letters and spaces."),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
    phoneNumber: Yup.string()
      .required("Phone number is required.")
      .matches(/^[0-9]+$/, "Phone number must contain only digits.")
      .length(11, "Phone number must be exactly 11 digits."),
    message: Yup.string().optional(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      // Strips out numbers and special characters in real-time, allowing only letters and spaces
      const lettersAndSpacesOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersAndSpacesOnly }));
    } else if (name === "phoneNumber") {
      const numbersOnly = value.replace(/[^0-9]/g, "");
      if (numbersOnly.length > 11) return;
      setFormData((prev) => ({ ...prev, [name]: numbersOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (isSubmitting) return; // Hard guard against double-clicks

    try {
      // Validate all form fields using Yup schema rules
      await academicSchema.validate(formData, { abortEarly: false });
      setErrors({});
      setIsSubmitting(true);

      // Append data using FormData to cleanly match PHP's standard $_POST array keys
      const postData = new FormData();
      postData.append("name", formData.fullName);
      postData.append("email", formData.email);
      postData.append("phone", formData.phoneNumber);
      postData.append("message", formData.message);
      postData.append("service", "Academic Help"); 
      postData.append("genre", "General Layout");

      // API Call Execution
      const response = await fetch("https://sourcecodetesting.com/brand/daniyal/send-mail.php", {
        method: "POST",
        mode: "cors", 
        body: postData,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form Sent Successfully:", result.message);

        // Turn off parent component overlay backdrop structures
        if (closeModal) {
          closeModal();
        }

        // Navigate cleanly to the destination page layout layout
        navigate("/thank-you", { state: { userName: formData.fullName } });
      } else {
        // Backend validation or mail transmission problems
        setErrors({ apiError: result.message || "The email could not be delivered." });
      }
    } catch (yupError) {
      // Catch validation schema issues and route them into standard field errors state
      if (yupError instanceof Yup.ValidationError) {
        const newErrors = {};
        yupError.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="academic-form-container">
      <div className="academic-card">
        <div className="academic-badge-wrapper text-center">
          <span className="academic-pill-badge">
            Professional Academic Help
          </span>
        </div>

        {errors.apiError && (
          <div className="alert alert-danger mt-3 text-center" style={{ color: "red", fontWeight: "600" }}>
            {errors.apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-4">
          <div className="form-group-block">
            <label htmlFor="fullName" className="academic-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`academic-input ${errors.fullName ? "input-invalid" : ""}`}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="error-text-msg">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group-block">
            <label htmlFor="email" className="academic-label">
              Email Address
            </label>
            <input
              type="type"
              id="email"
              name="email"
              className={`academic-input ${errors.email ? "input-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-text-msg">{errors.email}</span>
            )}
          </div>

          <div className="form-group-block">
            <label htmlFor="phoneNumber" className="academic-label">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g., 03001234567"
              className={`academic-input ${errors.phoneNumber ? "input-invalid" : ""}`}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error-text-msg">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="form-group-block">
            <label htmlFor="message" className="academic-label">
              Message{" "}
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                (Optional)
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="academic-input academic-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter details about your academic requirements..."
            />
          </div>

          <div className="mt-2">
            <Btn
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className={"btn btn-theme btn-primary w-100"}
              text={isSubmitting ? "Sending Request..." : "Get My Free Quote"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AcademicForm;