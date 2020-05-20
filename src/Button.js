import React from "react";

// Generates random colours any time it's called
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// A memoized button with a random background colour
const Button = React.memo(props => (
  <button onClick={props.onClick} style={{ background: randomColour() }}>
    {props.children}
  </button>
));

export default Button;
