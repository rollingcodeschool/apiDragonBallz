import { Card } from "react-bootstrap";

const Personaje = ({datoPersonaje}) => {
  return (
    <Card>
      <Card.Header className="fw-bold fs-3">{datoPersonaje.name}</Card.Header>
      <Card.Img
        variant="top"
        src={datoPersonaje.image}
        className="img-card"
      />
      <Card.Body>
        <Card.Title>Caracteristicas</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Raza: {datoPersonaje.race}</li>
          <li className="list-group-item">ki: {datoPersonaje.ki}</li>
          <li className="list-group-item">Grupo: {datoPersonaje.affiliation}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Personaje;
