import "./Concept.css";

function Concept(props) {
  return (
    <li className='concept'>
      <img src={props.concepts.image} alt={props.concepts.title} />
      <h2>{props.concepts.title}</h2>
      <p>{props.concepts.description} </p>
    </li>
  );
}

export default Concept;
