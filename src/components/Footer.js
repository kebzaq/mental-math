function Footer(props) {
  const bgcColor = {
    backgroundColor: "grey",
  };
  return (
    <div className="copyright" style={bgcColor}>
      <p>Made with love by {props.name}</p>
    </div>
  );
}

export default Footer;
