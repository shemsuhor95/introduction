import Avatar from "../images/avatar.jpg";
const AvatarUser = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-5 p-5 align-self-center">
          <div>
            <img
              src={Avatar}
              alt=""
              width="90%"
              style={{
                border: "0px solid white ",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>
        <div className="col-lg-7 bg-white">
          <h1 className=" display-2  my-5 text-center">
            My story{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-chat-left-quote"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
              </svg>
            </span>
          </h1>
          <div
            className="col-12 my-5 p-3 "
            style={{
              border: "3px solid ",
              borderTopLeftRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            <h1 className="mt-5 display-3">Hi</h1>
            <h3>
              I am Reza Serpooshan and i am a front-end developer i'm here to
              tell you about my story.
            </h3>
            <h5 className="my-5 text-justify">
              A year ago, I graduated from Damavand AZAD University with a
              degree in Information Technology, but my great interest in the web
              Development led me to become a web programmer. Because I had
              experience working with programming, I quickly learned HTML and
              CSS and switched to JavaScript, and after three months of working
              in the field of Front-end Because I had experience working with
              programming, I quickly learned HTML and CSS and switched to
              JavaScript, and after three months of working in the field of
              Front-end.Now i'm trying to Find job for myself so i created this
              site and uploaded it into my GitHub so you can watch it for free.{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarUser;
