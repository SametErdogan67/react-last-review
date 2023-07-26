import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("  ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    username:${username} 
    email:${email} 
    password:${password}
`);

    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">Forms</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username : <span>{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleUsername}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleEmail}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password : <span>{password}</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlePassword}
            value={password}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
