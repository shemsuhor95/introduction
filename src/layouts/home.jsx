import Banner from "../components/banner";

import Features from "../components/features";
import Footer from "../components/footer";
import Submit from "../components/submit";

const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <Banner />
      <Features />
      <Footer color="white"/>
    </div>
  );
};

export default Home;
