import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              BHARATI
              <br />
              <span>PATIL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>MCA Student &</h3>
            <div className="landing-info-fixed" style={{ marginTop: '10px' }}>
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', margin: '0' }}>AI / ML</h2>
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', margin: '0', color: 'rgba(255,255,255,0.7)' }}>DATA SCIENCE</h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;