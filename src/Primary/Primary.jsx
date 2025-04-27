import { GoHome } from "react-icons/go";
import "./Primary.css";

const Primary = () => {
  return (
    <div className="body">
      <div className="content">
        <div className="icon">
        <GoHome className="home-icon" />
        </div>

        <h1>Work lazily and achieve the result you want.</h1>

        <p>
          Liquam id diam maecenas ultricies mi eget mauris pharetra et. Feugiat
          pretium nibh ipsum consequat nisl vel pretium lectus. Fermentum
          iaculis eu non diam.
        </p>

        <div className="stats">
          <div className="stat">
            <h2>420%</h2>
            <p>Data Efficiency</p>
          </div>

          <div className="stat">
            <h2>708+</h2>
            <p>Conversion Rate</p>
          </div>

          <div className="stat">
            <h2>1.82M</h2>
            <p>AI LLM Scale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
