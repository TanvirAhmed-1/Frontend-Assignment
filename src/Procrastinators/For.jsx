import "./For.css";
import Img1 from "../assets/img/Frame.png";

const For = () => {
  return (
    <div>
      <div className="for">
        <div className="grid-container">
          {/* Left Column */}
          <div className="testimonials-column">
            <div className="header">
              <span className="who-is">Who is it for?</span>
              <h2 className="heading">What the procrastinators say</h2>
              <p className="intro-text">
                Mi ipsum faucibus vitae aliquet nec. At tempor commodo
                ullamcorper a lacus. Bibendum at varius vel pharetra vel.
              </p>
            </div>

            <div className="box">
              <h3 className="box-title">Convallis tellus id interdum velit</h3>
              <p className="box-text">
                Est pellentesque elit ullamcorper dignissim cras. In
                pellentesque massa placerat duis ultricies.
              </p>
            </div>

            <div className="box">
              <h3 className="box-title">
                Id interdum velit laoreet id donec ultrices
              </h3>
              <p className="box-text">
                Donec massa sapien faucibus et molestie ac feugiat sed. Congue
                mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>

            <div className="box">
              <h3 className="box-title">Sapien et ligula ullamcorper malesuada</h3>
              <p className="box-text">
                Donec massa sapien faucibus et molestie ac feugiat sed. Congue
                mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>
          </div>

          {/* <!-- Right Column - Dashboard Image --> */}
          <div className="dashboard-column">
            <img src={Img1} alt="" className="dashboard-image" />
            <div className="image-label">Fill (592) × 592</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default For;
