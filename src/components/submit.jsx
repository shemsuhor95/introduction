import { Hidden } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Submit = () => {
  const [error, handlingError] = useState(true);
  const [success, handlingSuccess] = useState(true);

  const email = useRef(null);
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 text-center">
          <Alert severity="error" hidden={error}>
            Please enter a valid Email
          </Alert>
          <Alert severity="success" hidden={success}>
            Thank your we will be in touch soon
          </Alert>
          <h2>do you want to contact me?</h2>
          <h4>go to contact page</h4>
          <h5>from here</h5>
          <h5>
            {" "}
            <span>
              <NavLink
                to="/contact-me"
                className="btn btn-outline-primary btn-sm mx-2"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg>
                </span>
              </NavLink>
            </span>
          </h5>
          <h3>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="18"
                fill="currentColor"
                class="bi bi-arrow-90deg-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"
                />
              </svg>
            </span>
            or write your Email in here
          </h3>
        </div>
        <div className="col-12 d-flex flex-column align-items-center">
          {
            <>
              <div className="col-lg-6">
                <FormGroup>
                  <Label for="exampleEmail">
                    Contact by{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="green"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    :
                  </Label>
                  <input
                    type="
                  email"
                    placeholder="please enter an email"
                    className="form-control"
                    ref={email}
                  />
                </FormGroup>
              </div>
              <div className="col-12 text-center">
                <a
                  onClick={() => {
                    SubmitBtn();
                  }}
                  role="button"
                  className="btn btn-primary p-2"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-send"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                  </span>
                  submit
                </a>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );

  function SubmitBtn() {
    if (!email.current.value || !email.current.value.includes("@")) {
      handlingError(false);
      setTimeout(() => {
        handlingError(true);
      }, 3000);
    } else {
      handlingSuccess(false);
      setTimeout(() => {
        handlingSuccess(true);
      }, 3000);
      console.log(email.current.value);
    }
  }
};
export default Submit;
