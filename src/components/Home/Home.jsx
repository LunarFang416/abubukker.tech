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
        <h2>
          <b>Abubukker Chaudhary</b>
        </h2>

        <h4>{info.status}</h4>
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
        <p>
          - Collaborative learning environment at{" "}
          <a href="https://www.oise.utoronto.ca/home">OISE</a> <br />- DSpace
          repository management at <a href="https://www.isls.org/">ISLS</a>{" "}
          <br />- Developing 3d architectural visualization at{" "}
          <a href="https://seismic.skule.ca/">UofT Seismic</a>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home