function Success ({guessCount}){
return       (
<div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessCount} guess{guessCount > 1 && ('es')}</strong>.
        </p>
      </div>);
}

export default Success;