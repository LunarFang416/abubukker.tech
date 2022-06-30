/* eslint-disable react/jsx-no-target-blank */
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import info from "../info";
import "./Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="contentWrapper">
        <Header />
        <div className="contentContainer">
          <div className="introContainer">
            <h2>
              <bold>Abubukker Chaudhary</bold>
            </h2>
            <h4>{info.status}</h4>
            <div class="contact">
              {info.contactInfo.map((info) => {
                return (
                  <p class="contact_button">
                    [
                    <a href={info.link} target="_blank">
                      {info.mode}
                    </a>
                    ]
                  </p>
                );
              })}
            </div>
            <hr style={{ color: "white", backgroundColor: "white", height: 0.01 }} />
          </div>
          <div className="projectsContainer"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home