import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";
import animationData from "../Lotties/81945-breath.json";
import "../css/banner.css";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container ">
      <div className="row text-center align-content-center my-5">
        <div className="col-lg-6">
          <h1>
            {" "}
            <Lottie options={defaultOptions} height={600} width={400} />
          </h1>
        </div>
        <div className="col-lg-6 align-self-center ">
          <h1 className="display-2">Hi</h1>
          <h1>My Name is</h1>
          <h1>Reza Serpooshan</h1>
          <h4>if you are trying to find a Front-end Developer</h4>
          <h5>you can count on me</h5>
          <h6 className="mb-4">
            want more about me?? Click here{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-down-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"
                />
              </svg>
            </span>
          </h6>
          <NavLink className="glow-on-hover" to="/about-me">
            About Me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
