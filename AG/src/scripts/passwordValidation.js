export function validatePassword(password) {
    const conditions = [];
    if (!/^([A-Z])[A-Za-z0-9_]{7,14}$/.test(password)) {
      if (password.length < 8 || password.length > 15) {
        conditions.push("Password must be between 8 and 15 characters");
      }
      if (!/^[A-Z]/.test(password)) conditions.push("Start with uppercase");
      if (!/[A-Z]/.test(password)) conditions.push("At least one uppercase letter");
      if (!/[a-z]{2}/.test(password)) conditions.push("At least two lowercase letters");
      if (!/[0-9]/.test(password)) conditions.push("At least one numeric value");
      if (!/_/.test(password)) conditions.push("Include '_' character");
    }
    return conditions;
  }
  