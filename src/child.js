import React, { useState } from 'react';

function Child(props) {
  const key = useState(props.key);
  const value = useState(props.value);
  console.log('render');
  return <div key={key}>{value}</div>;
}
export default Child;
