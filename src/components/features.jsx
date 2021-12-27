import animationData1 from "../Lotties/10435-fast.json";
import animationData2 from "../Lotties/67201-security-shield.json";
import animationData3 from "../Lotties/55851-web-deployment-isometric-concept-lottie-animations.json";
import Lottie from "react-lottie";

const Features = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div className="row text-center my-2 justify-content-center align-items-center p-5">
        <div className="col-12 ">
          <h1 className="display-1 text-white">Why React?</h1>
        </div>

        <div className="col-md-4">
          <Lottie options={defaultOptions1} height={200} width={200} />
          <h1 className="display-5 text-white">It's Fast</h1>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions2} height={200} width={200} />
          <h1 className="display-5 text-white">Secure</h1>
        </div>
        <div className="col-md-4">
          <Lottie options={defaultOptions3} height={200} width={200} />
          <h1 className="display-5 text-white">And easy to Deploy</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
