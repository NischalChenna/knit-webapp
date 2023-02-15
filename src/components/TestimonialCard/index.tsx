import { Avatar, Card } from "antd";
import "./../TestimonialCard/TestimonialCard.scss";

function TestimonialCard() {
  return (
    <Card className="testimonial-card">
      <div className="logo-section">Logo here</div>
      <h3 className="header-text">What our client says</h3>
      <p className="paragraph-text">
        “Lörem ipsum dånde abilig såsom telehide setenade: bokashi nenat, såväl
        som sunera div i var. Pren emplastisk vare, nysam nätdeklarant exohis,
        vövan förlåtande sedan made. Dening polyk vörade sans stuprörspolitik
        belig.”
      </p>
      <div className="avatar-container">
        <Avatar size={164.74} />
      </div>
      <div className="name-container">
        <h4 className="name-text">Name Name</h4>
        <p className="title-text">System Engineer</p>
      </div>
      <div className="avatar-box">
        <Avatar size={59} />
        <Avatar size={59} />
      </div>
    </Card>
  );
}

export default TestimonialCard;
