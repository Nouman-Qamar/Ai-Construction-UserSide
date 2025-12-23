import React from "react"
import "./Button.css"

export default function Button({ children, variant = "primary", size = "medium", onClick, ...props }) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Button Examples/Demo Component
export function ButtonExamples() {
  return (
    <div className="button-examples">
      <h3>Button Components</h3>
      <div className="button-group">
        <Button variant="primary" onClick={() => alert('Submit clicked!')}>
          Submit
        </Button>
        <Button variant="secondary" onClick={() => alert('Save clicked!')}>
          Save
        </Button>
        <Button variant="outline" onClick={() => alert('Cancel clicked!')}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => alert('Delete clicked!')}>
          Delete
        </Button>
        <Button variant="success" onClick={() => alert('Success!')}>
          Success
        </Button>
        <Button variant="warning" onClick={() => alert('Warning!')}>
          Warning
        </Button>
      </div>

      <h3>Button Sizes</h3>
      <div className="button-group">
        <Button variant="primary" size="small" onClick={() => alert('Small button!')}>
          Small
        </Button>
        <Button variant="primary" size="medium" onClick={() => alert('Medium button!')}>
          Medium
        </Button>
        <Button variant="primary" size="large" onClick={() => alert('Large button!')}>
          Large
        </Button>
      </div>
    </div>
  )
}