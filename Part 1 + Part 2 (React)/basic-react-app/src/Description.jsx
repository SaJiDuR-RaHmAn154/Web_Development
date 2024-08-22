function Description() {
  let name = "Sajid";
  return (
    <div>
      {/* inside curly braces, pure js will work */}
      <p>2*2 = {2 * 2}</p>
      <p>Hi, {name.toUpperCase()}</p>
      <h3>I am the description!</h3>
    </div>
  );
}

export default Description;
