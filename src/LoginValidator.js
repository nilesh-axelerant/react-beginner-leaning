export function emailValidator(email) {

  const errors = []

  // Check if email is empty.
  if (email.length === 0) {
    errors.push("Email is required")
  }

  // Check if email ends with specific string.
  if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("Must end with @webdevsimplified.com");
  }

  return errors
}

export function passwordValidator(password) {
  const errors = [];

  // Check password length.
  if (password.length < 10) {
    errors.push("Must be at least 10 characters");
  }

  // Check if password has lowercase.
  if (!password.match(/[a-z]/)) {
    errors.push("Must include at least 1 lowercase letter");
  }

  // Check if password has uppercase.
  if (!password.match(/[A-Z]/)) {
    errors.push("Must include at least 1 uppercase letter");
  }

  // Check if password has numeric value.
  if (!password.match(/[0-9]/)) {
    errors.push("Must include at least 1 number");
  }

  return errors;
}
