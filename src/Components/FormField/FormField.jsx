import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./FormField.css";

export default function FormField({
  title = "Form",
  subtitle = "",
  fields = [],
  onSubmit,
  onBack,
  buttonText = "Continue",
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="form-field-container">
      <div className="form-field-wrapper">
        {onBack && (
          <button className="form-back-button" onClick={onBack}>
            <ArrowLeft size={20} />
            Back
          </button>
        )}

        <form onSubmit={handleSubmit} className="form-field-form">
          <div className="form-field-header">
            <h2 className="form-field-title">{title}</h2>
            {subtitle && <p className="form-field-subtitle">{subtitle}</p>}
          </div>

          <div className="form-field-group">
            {fields.map((field) => (
              <div key={field.name} className="form-field-item">
                <label className="form-field-label" htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="required">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    className={`form-field-input ${
                      errors[field.name] ? "error" : ""
                    }`}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`form-field-input ${
                      errors[field.name] ? "error" : ""
                    }`}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || "text"}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`form-field-input ${
                      errors[field.name] ? "error" : ""
                    }`}
                  />
                )}

                {errors[field.name] && (
                  <p className="form-field-error">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="form-field-actions">
            <button type="submit" className="form-field-submit-btn">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
