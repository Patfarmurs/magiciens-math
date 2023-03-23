import React, { useState } from 'react';

const CalcUserInterface = () => {
  const [state] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;
  return (
    <section>
      <div className="container">
        <div className="header">
          <div className="tag">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="calc-button">
          <button type="submit">AC</button>
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit">÷</button>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit" className="box-color">x</button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit" className="box-color">-</button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit" className="box-color">+</button>
          <button type="submit" className="zero">0</button>
          <button type="submit">.</button>
          <button type="submit" className="box-color">=</button>
        </div>
      </div>
    </section>
  );
};

export default CalcUserInterface;
