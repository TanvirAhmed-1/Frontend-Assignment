import { GoHome } from "react-icons/go";
import "./Primary.css";

const Primary = () => {
  return (
    <div class="body">
      <div class="content">
        <div class="icon">
        <GoHome class="home-icon" />
        </div>

        <h1>Work lazily and achieve the result you want.</h1>

        <p>
          Liquam id diam maecenas ultricies mi eget mauris pharetra et. Feugiat
          pretium nibh ipsum consequat nisl vel pretium lectus. Fermentum
          iaculis eu non diam.
        </p>

        <div class="stats">
          <div class="stat">
            <h2>420%</h2>
            <p>Data Efficiency</p>
          </div>

          <div class="stat">
            <h2>708+</h2>
            <p>Conversion Rate</p>
          </div>

          <div class="stat">
            <h2>1.82M</h2>
            <p>AI LLM Scale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
