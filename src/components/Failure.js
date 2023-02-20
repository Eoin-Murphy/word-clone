function Failure({answer}) {
  return (
    <div className="sad banner">
      <p>
        <strong>Sorry, you failed to guess the word. {answer}</strong>
      </p>
    </div>);
}

export default Failure;