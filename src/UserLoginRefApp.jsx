import { useEffect, useRef, useState } from 'react'
import { emailValidator, passwordValidator } from './LoginValidator'
import './styles.css'

export function UserLoginRefApp() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [isAfterFirstSubmission, setIsAfterFirstSubmission] = useState(false)


  function onSubmit(e) {
    e.preventDefault()

    setIsAfterFirstSubmission(true)

    const emailResults = emailValidator(emailRef.current.value)
    const passwordResults = passwordValidator(passwordRef.current.value)

    setEmailErrors(emailResults)
    setPasswordErrors(passwordResults)

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("success")
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`form-group ${ emailErrors.length> 0 ? "error": ""}`}>
        <label className="label" htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          id="email"
          onChange={isAfterFirstSubmission ? ((e) => setEmailErrors(emailValidator(e.target.value))) : undefined }
          ref={emailRef} />

        { emailErrors.length > 0 && (<div className="msg">{emailErrors.join(", ")}</div>)
        }

      </div>
      <div className={`form-group ${ passwordErrors.length> 0 ? "error": ""}`}>
        <label className="label" htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          onChange={isAfterFirstSubmission ? ((e) => setPasswordErrors(passwordValidator(e.target.value))) : undefined }
          ref={passwordRef} />
        { passwordErrors.length > 0 && (<div className="msg">{passwordErrors.join(", ")}</div>)
        }
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
