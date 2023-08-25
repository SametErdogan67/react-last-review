import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { AddModal } from "./AddModal";
import { useState } from "react";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");

  const handleClick = (drName) => {
    setShow(true);
    setSelectedDrName(drName);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-4" style={{ color: "white" }}>
        Our Doctors
      </h3>

      <Row className="justify-content-center ">
        {doctors.map((item, key) => {
          return (
            <Col key={item.id} xs={6} sm={4} md={3} className="mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="img-thumbnail doctor-img mb-3"
                onClick={() => handleClick(item.name)}
              />
              <h5 className="text-white">{item.name}</h5>
              <h6 className="text-white">{item.dep}</h6>
            </Col>
          );
        })}
      </Row>
      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
