import React from "react";

function Hero()
{
  return (
    <div className="Hero">
      <div className="container">
        <h1>Exceeds all expectations.</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="button">
          <button>Two Stroke Motors</button>
          <button>four Stroke Motors </button>
          <button>Electric Motors</button>
          <button> 4th button needed</button>
        </div>
        <div className="bottom-show">
          <div className="radio-dark"></div>
          <div className="radio-light"></div>
          <div className="radio-light"></div>
          <div className="radio-light"></div>
          <div className="radio-light"></div>
          <div className="radio-light"></div>
        </div>
        <div className="bottom-dark-shadow"></div>
      </div>
    </div>
  );
}

export default Hero;
