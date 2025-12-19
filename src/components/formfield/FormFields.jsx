import React, { useState } from "react";
import "./FormFields.css";

export default function FormFields() {
  const [projectName, setProjectName] = useState("123");

  const [requirements, setRequirements] = useState({
    safety: true,
    environmental: true,
    equipment: false,
    weekend: false,
  });

  const [payment, setPayment] = useState("monthly");

  const [files, setFiles] = useState([
    { name: "project-blueprint.pdf", size: "2.4 MB" },
    { name: "contractor-agreement.doc", size: "1.8 MB" },
  ]);

  const hasError = projectName.length < 5;

  const toggleRequirement = (key) => {
    setRequirements({ ...requirements, [key]: !requirements[key] });
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <h2>Form Field Components</h2>
      <p className="subtitle">
        Input fields and form controls for construction management data entry
      </p>

      {/* TEXT INPUTS */}
      <div className="grid">
        <div className="form-group">
          <label>Project Name</label>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className={hasError ? "error-input" : ""}
            placeholder="Enter project name"
          />
          {hasError && (
            <small className="error-text">
              Project name must be at least 5 characters
            </small>
          )}
 note
        </div>

        <div className="form-group">
          <label>Contractor Name</label>
          <input value="Elite Construction Corp" />
        </div>

        <div className="form-group">
          <label>Disabled Input</label>
          <input disabled value="This field is disabled" />
        </div>

        <div className="form-group icon-input">
          <label>Search Projects</label>
          <span className="icon">🔍</span>
          <input placeholder="Search by name or ID..." />
        </div>

        <div className="form-group icon-input">
          <label>Email Address</label>
          <span className="icon">✉️</span>
          <input value="contractor@example.com" />
        </div>
      </div>

      {/* SELECTS */}
      <h3 className="section-title">Select Dropdowns</h3>
      <div className="grid">
        <div className="form-group">
          <label>Project Type</label>
          <select>
            <option>Select project type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Project Status</label>
          <select>
            <option>On Track</option>
            <option>Delayed</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority Level</label>
          <select>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
          </select>
        </div>

        <div className="form-group">
          <label>Assign Contractor</label>
          <select>
            <option>Choose contractor</option>
            <option>Elite Construction Corp</option>
            <option>ABC Builders</option>
          </select>
        </div>
      </div>

      {/* DATES */}
      <h3 className="section-title">Date Pickers</h3>
      <div className="grid">
        <div className="form-group icon-input">
          <label>Start Date</label>
          <span className="icon">📅</span>
          <input type="date" defaultValue="2025-01-15" />
        </div>

        <div className="form-group icon-input">
          <label>End Date</label>
          <span className="icon">📅</span>
          <input type="date" defaultValue="2026-06-30" />
        </div>

        <div className="form-group icon-input">
          <label>Inspection Date</label>
          <span className="icon">📅</span>
          <input type="date" />
        </div>
      </div>

      {/* TEXT AREAS */}
      <h3 className="section-title">Text Areas</h3>
      <div className="grid">
        <div className="form-group">
          <label>Project Description</label>
          <textarea placeholder="Enter detailed project description..." />
        </div>

        <div className="form-group">
          <label>Special Instructions</label>
          <textarea
            defaultValue={`All work must comply with local building codes.
Safety inspections required every Friday at 3 PM.`}
          />
        </div>
      </div>

      {/* CHECKBOXES & RADIOS */}
      <h3 className="section-title">Checkboxes & Radio Buttons</h3>
      <div className="grid">
        <div className="form-group">
          <label>Project Requirements</label>

          {[
            ["safety", "Safety inspection required"],
            ["environmental", "Environmental clearance needed"],
            ["equipment", "Special equipment required"],
            ["weekend", "Weekend work permitted"],
          ].map(([key, text]) => (
            <div
              key={key}
              className="check-item"
              onClick={() => toggleRequirement(key)}
            >
              <input type="checkbox" checked={requirements[key]} readOnly />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Payment Schedule</label>

          {[
            ["monthly", "Monthly installments"],
            ["milestone", "Milestone-based payments"],
            ["completion", "Payment on completion"],
            ["custom", "Custom payment plan"],
          ].map(([id, text]) => (
            <div
              key={id}
              className="radio-item"
              onClick={() => setPayment(id)}
            >
              <input type="radio" checked={payment === id} readOnly />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FILE UPLOAD */}
      <h3 className="section-title">File Upload</h3>
      <div className="grid">
        <div className="upload-box">
          <div className="upload-inner">
            <div className="upload-icon">📄</div>
            <p><strong>Click to upload</strong> or drag and drop</p>
            <small>PDF, DOC, XLS (max 10MB)</small>
          </div>
        </div>

        <div className="uploaded-files">
          <label>Uploaded Files</label>
          {files.map((file, i) => (
            <div key={i} className="file-item">
              <div>
                <strong>{file.name}</strong>
                <small>{file.size}</small>
              </div>
              <button onClick={() => removeFile(i)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
