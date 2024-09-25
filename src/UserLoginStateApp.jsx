import { useEffect, useMemo, useState } from 'react'
import { emailValidator, passwordValidator } from './LoginValidator'
import './styles.css'

export function UserLoginStateApp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const [emailErrors, setEmailErrors] = useState([])
  // const [passwordErrors, setPasswordErrors] = useState([])
  const [isAfterFirstSubmission, setIsAfterFirstSubmission] = useState(false)

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmission ? emailValidator(email) : []
  }, [isAfterFirstSubmission, email])

  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmission ? passwordValidator(password) : []
  }, [isAfterFirstSubmission, password])

  function onSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmission(true)

    const emailResults = emailValidator(email)
    const passwordResults = passwordValidator(password)

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
          value={email}
          onChange={e => setEmail(e.target.value)
          } />

        { emailErrors.length > 0 && (<div className="msg">{emailErrors.join(", ")}</div>)
        }

      </div>
      <div className={`form-group ${ passwordErrors.length> 0 ? "error": ""}`}>
        <label className="label" htmlFor="password">Password</label>
        <input
          className="input"
          value={password}
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />
        { passwordErrors.length > 0 && (<div className="msg">{passwordErrors.join(", ")}</div>)
        }
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
