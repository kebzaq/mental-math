function Heading(props) {
  const redColor = {
    color: "red",
  };
  const bgcColor = {
    backgroundColor: "yellow",
  };
  return (
    <div className="heading-section" style={bgcColor}>
      <div>
        <h1>Don't miss this deal!</h1>
      </div>
      <div>
        <h2>
          Welcome to Mental Math, <span style={redColor}>{props.name}!</span>
        </h2>
      </div>
    </div>
  );
}

export default Heading;
