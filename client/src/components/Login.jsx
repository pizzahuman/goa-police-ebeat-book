import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          id,
          pass,
          phone,
        })
        .then((res) => {
          if (res.data === "exists") {
            history("/home", { state: { id: phone } });
            alert("Welcome old uesr");
          } else if (res.data === "notexists") {
            alert("User not signed up or invalid creds");
          }
        })
        .catch(() => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="login-main flex-col-center">
        <div className="login-inner-content flex-col-center">
          <h1>EBeat Login</h1>
          <form action="post">
            <div class="input-group mb-3">
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                class="form-control"
                placeholder="User ID"
                aria-label="UserID"
                aria-describedby="basic-addon1"
              />
            </div>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="pword"
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
              placeholder="Password"
            />
            <div class="input-group mb-3">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                class="form-control"
                placeholder="Phone No"
                aria-label="Phone"
                aria-describedby="basic-addon1"
              />
            </div>
            <button
              type="submit"
              onClick={submit}
              value=""
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
          or
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};
