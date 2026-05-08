import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Experience 1: NOW */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA Final Year</h4>
                <h5>AI & ML Enthusiast</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently building AI-driven applications with a focus on Python, Machine Learning, Generative AI, and Data Science. Developed projects like an AI-powered Foody Bot and a Snap Filter-based real-time facial emotion detection system.
            </p>
          </div>

          {/* Experience 2: AI Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Projects</h4>
                <h5>Practical Learning</h5>
              </div>
              <h3>2026–Present</h3>
            </div>
            <p>
              Designing and developing AI-driven applications, focusing on real-world problem solving, intelligent automation, and data-driven solutions.
            </p>
          </div>

          {/* Experience 3: Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Python, ML & GenAI</h5>
              </div>
              <h3>Oct 2025–Present</h3>
            </div>
            <p>
              Working on data analysis, machine learning models, and Generative AI applications, gaining hands-on experience with real-world datasets and practical implementations.
            </p>
          </div>

          {/* Experience 4: Bootcamp */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Bootcamp</h4>
                <h5>85+ Tools</h5>
              </div>
              <h3>April 2026</h3>
            </div>
            <p>
              Explored 85+ AI tools and technologies, gaining strong exposure to AI workflows, automation, and modern AI ecosystems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;