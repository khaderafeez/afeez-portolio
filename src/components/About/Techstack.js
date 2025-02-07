import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase, SiKicad, SiRaspberrypi, SiEspressif } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
     

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad title="KiCad PCB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi title="Raspberry Pi" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEspressif title="ESP32" />
      </Col>
      
    </Row>
  );
}

export default Techstack;
