function Failure({answer}) {
  return (
    <div className="sad banner">
      <p>
        <strong>Sorry, ythe correct answer is {answer}</strong>
      </p>
    </div>);
}

export default Failure;