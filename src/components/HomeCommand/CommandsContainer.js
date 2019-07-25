import React, { useState } from 'react';

const CommandsContainer = ({
  title, desc, usage, example,
}) => {
  const [test, setTest] = useState(false);

  const handlClick = () => {
    setTest(!test);
  };
  return (
    <div
      className="ccontainer"
      onClick={() => handlClick()}
      role="button"
    >
      <div className="ccontainer-title">
        <h3>{title}</h3>
        {' '}
        {desc}
      </div>
      {
        test
          ? (
            <div className="ccontainer-main">
              <div className="usage">
                Usage:
                {' '}
                <span className="colored">
                  {usage}
                </span>
              </div>
              {
                example
                  ? (
                    <div className="example">
                      <div className="example-inner">
                        Example:
                        <br />
                        {
                          example.map(ex => (
                            <span className="colored" key={ex}>
                              {ex}
                            </span>
                          ))
                    }
                      </div>
                    </div>
                  )
                  : null
              }
            </div>
          )
          : null
      }
    </div>
  );
};

export default CommandsContainer;
