"use client"

import React, { useState } from "react"
import "./FormFields.css"
import { Search, Mail, Calendar, FileText, X } from "lucide-react"
import Button, { ButtonExamples } from "../Button/Button"

export default function FormFields() {
  const [projectName, setProjectName] = useState("123")
  const [contractorName, setContractorName] = useState("Elite Construction Corp")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("contractor@example.com")
  const [projectType, setProjectType] = useState("")
  const [projectStatus, setProjectStatus] = useState("On Track")
  const [priorityLevel, setPriorityLevel] = useState("High Priority")
  const [assignedContractor, setAssignedContractor] = useState("")
  const [startDate, setStartDate] = useState("2025-01-15")
  const [endDate, setEndDate] = useState("2026-06-30")
  const [inspectionDate, setInspectionDate] = useState("")
  const [description, setDescription] = useState("")
  const [instructions, setInstructions] = useState(
    `All work must comply with local building codes.\nSafety inspections required every Friday at 3 PM.`
  )

  const [requirements, setRequirements] = useState({
    safety: true,
    environmental: true,
    equipment: false,
    weekend: false,
  })

  const [payment, setPayment] = useState("monthly")

  const [files, setFiles] = useState([
    { name: "project-blueprint.pdf", size: "2.4 MB" },
    { name: "contractor-agreement.doc", size: "1.8 MB" },
  ])

  const hasError = projectName.length < 5

  const toggleRequirement = (key) => {
    setRequirements({ ...requirements, [key]: !requirements[key] })
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleFileUpload = (e) => {
    const uploadedFiles = e.target.files
    if (uploadedFiles) {
      const newFiles = Array.from(uploadedFiles).map((file) => ({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      }))
      setFiles([...files, ...newFiles])
    }
  }

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
        </div>

        <div className="form-group">
          <label>Contractor Name</label>
          <input
            value={contractorName}
            onChange={(e) => setContractorName(e.target.value)}
            placeholder="Enter contractor name"
          />
        </div>

        <div className="form-group">
          <label>Disabled Input</label>
          <input disabled value="This field is disabled" />
        </div>

        <div className="form-group icon-input">
          <label>Search Projects</label>
          <Search className="input-icon" size={18} />
          <input
            placeholder="Search by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="form-group icon-input">
          <label>Email Address</label>
          <Mail className="input-icon" size={18} />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email address"
          />
        </div>
      </div>

      {/* SELECTS */}
      <h3 className="section-title">Select Dropdowns</h3>
      <div className="grid">
        <div className="form-group">
          <label>Project Type</label>
          <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
            <option value="">Select project type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Project Status</label>
          <select value={projectStatus} onChange={(e) => setProjectStatus(e.target.value)}>
            <option value="On Track">On Track</option>
            <option value="Delayed">Delayed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority Level</label>
          <select value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)}>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
          </select>
        </div>

        <div className="form-group">
          <label>Assign Contractor</label>
          <select value={assignedContractor} onChange={(e) => setAssignedContractor(e.target.value)}>
            <option value="">Choose contractor</option>
            <option value="elite">Elite Construction Corp</option>
            <option value="abc">ABC Builders</option>
          </select>
        </div>
      </div>

      {/* DATES */}
      <h3 className="section-title">Date Pickers</h3>
      <div className="grid">
        <div className="form-group icon-input">
          <label>Start Date</label>
          <Calendar className="input-icon" size={18} />
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <div className="form-group icon-input">
          <label>End Date</label>
          <Calendar className="input-icon" size={18} />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        <div className="form-group icon-input">
          <label>Inspection Date</label>
          <Calendar className="input-icon" size={18} />
          <input type="date" value={inspectionDate} onChange={(e) => setInspectionDate(e.target.value)} />
        </div>
      </div>

      {/* TEXT AREAS */}
      <h3 className="section-title">Text Areas</h3>
      <div className="grid">
        <div className="form-group">
          <label>Project Description</label>
          <textarea
            placeholder="Enter detailed project description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Special Instructions</label>
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
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
            <div key={key} className="check-item" onClick={() => toggleRequirement(key)}>
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
            <div key={id} className="radio-item" onClick={() => setPayment(id)}>
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
          <input type="file" id="file-upload" multiple onChange={handleFileUpload} style={{ display: "none" }} />
          <label htmlFor="file-upload" className="upload-inner">
            <FileText className="upload-icon" size={40} />
            <p>
              <strong>Click to upload</strong> or drag and drop
            </p>
            <small>PDF, DOC, XLS (max 10MB)</small>
          </label>
        </div>

        <div className="uploaded-files">
          <label>Uploaded Files</label>
          {files.map((file, i) => (
            <div key={i} className="file-item">
              <div>
                <strong>{file.name}</strong>
                <small>{file.size}</small>
              </div>
              <button onClick={() => removeFile(i)} className="remove-btn">
                <X size={16} />
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON EXAMPLES */}
      <ButtonExamples />
    </div>
  )
}
