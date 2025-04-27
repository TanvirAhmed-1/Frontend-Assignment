import "./For.css";
import Img1 from "../assets/img/Frame.png";

const For = () => {
  return (
    <div>
      <div class="for">
        <div class="grid-container">
          {/* Left Column */}
          <div class="testimonials-column">
            <div class="header">
              <span class="who-is">Who is it for?</span>
              <h2 class="heading">What the procrastinators say</h2>
              <p class="intro-text">
                Mi ipsum faucibus vitae aliquet nec. At tempor commodo
                ullamcorper a lacus. Bibendum at varius vel pharetra vel.
              </p>
            </div>

            <div class="box">
              <h3 class="box-title">Convallis tellus id interdum velit</h3>
              <p class="box-text">
                Est pellentesque elit ullamcorper dignissim cras. In
                pellentesque massa placerat duis ultricies.
              </p>
            </div>

            <div class="box">
              <h3 class="box-title">
                Id interdum velit laoreet id donec ultrices
              </h3>
              <p class="box-text">
                Donec massa sapien faucibus et molestie ac feugiat sed. Congue
                mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>

            <div class="box">
              <h3 class="box-title">Sapien et ligula ullamcorper malesuada</h3>
              <p class="box-text">
                Donec massa sapien faucibus et molestie ac feugiat sed. Congue
                mauris rhoncus aenean vel elit scelerisque.
              </p>
            </div>
          </div>

          {/* <!-- Right Column - Dashboard Image --> */}
          <div class="dashboard-column">
            <img src={Img1} alt="" class="dashboard-image" />
            <div class="image-label">Fill (592) × 592</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default For;
