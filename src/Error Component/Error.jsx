import React from 'react';

const Error = props => {
  const { err } = props;
  if (!err) return <h2>Something went wrong...</h2>;
  return (
    <div>
      <h2 className="Error">{err.errStatus}</h2>
      <h3 className="Error-msg"> {err.errMessage}</h3>
    </div>
  );
};

export default Error;
