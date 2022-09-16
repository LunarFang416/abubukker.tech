/* eslint-disable react/jsx-no-target-blank */
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import info from "../info";
import "./Home.css";

const Home = () => {
  return (
    <div className="contentWrapper">
      <Header />
      <div className="mainContainer">
        <h1>
          <b>Abubukker Chaudhary</b>
        </h1>

        <h3>{info.status}</h3>
        <hr
          style={{
            color: "##ff0000",
            backgroundColor: "##ff0000",
            height: 0.05,
            borderColor: "#ff0000",
          }}
        />
        <p>&gt; $ contact</p>
        <div className="contact">
          {info.contactInfo.map((inf) => {
            return (
              <p className="contact_button" key={inf.mode}>
                [
                <a href={inf.link} target="_blank">
                  {inf.mode}
                </a>
                ]
              </p>
            );
          })}
        </div>
        <hr
          style={{
            color: "##ff0000",
            backgroundColor: "##ff0000",
            height: 0.05,
            borderColor: "#ff0000",
          }}
        />
        <p>&gt; $ recent</p>
        <div>
          <p>
            - Collaborative learning environment at{" "}
            <a href="https://www.oise.utoronto.ca/home"> OISE</a>
          </p>
          <p>
            - DSpace repository management and automation at{" "}
            <a href="https://www.isls.org/">ISLS</a>
          </p>
          <p>
            - Developing 3D architectural visualization at{" "}
            <a href="https://seismic.skule.ca/">UofT Seismic</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home