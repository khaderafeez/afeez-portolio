import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey everyone, I'm Khader Afeez from <span className="purple">Mangalore, India.</span> <br /> 
          I'm the <span className="purple">Founder and CTO </span> at <span className="purple">Drift Pure Innovation Private Limited.</span> <br /> 
          My background is in<span className="purple"> Electronics and Communication Engineering</span> <br /> 
          I studied at <span className="purple">Yenpoya Institute of Technology in Mangalore.</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />competing in robotics competitions
            </li>
            <li className="about-activity">
              <ImPointRight />Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />coding
            </li> <li className="about-activity">
              <ImPointRight />exploring how business case studies connect with geopolitics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you change the way you look at things, the things you look at change."{" "}
          </p>
          <footer className="blockquote-footer">Khader Afeez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
