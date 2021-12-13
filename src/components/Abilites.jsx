import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import frontEnd from "../images/front-boot.png";
import ReactLogo from "../images/react.png";
import Lottie from "react-lottie";
import animationData from "../Lotties/16317-emoji-wink.json";

const Abilites = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-12">
          <h1 className="display-lg-4 text-center text-white">
            I list Some of my Abilities here{" "}
          </h1>
          <h2 className="text-center text-white mt-5">
            so You can find out about my specs here
            <span>
              {" "}
              <div>
                <Lottie options={defaultOptions} height={200} width={200} />
              </div>
            </span>
          </h2>
        </div>

        <div className="col-lg-6">
          {" "}
          <h1 className="text-center">
            <span>
              <img src={frontEnd} alt="" style={{ width: "45%" }} />
            </span>
          </h1>
        </div>
        <div className="col-lg-4 d-lg-none">
          {" "}
          <h1 className="text-center text-white">
            I know about all of
            <h1>these</h1>
            Guys
            <h1>
              {" "}
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-arrow-down-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>{" "}
            </h1>
          </h1>
        </div>
        <div className="col-lg-6 text-center">
          <h1 className="text-center">
            <span>
              <img src={ReactLogo} alt="" style={{ width: "45%" }} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Abilites;
