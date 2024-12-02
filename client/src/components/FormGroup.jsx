export function FormGroup({ children, errorMessage }) {
  return (
    <>
      <div className={`form-group ${errorMessage != null ? errorMessage : ""}`}>
        { children }
        { errorMessage != null && (
          <div className="error-message">Required</div>
        )}
      </div>
    </>
  )
}


