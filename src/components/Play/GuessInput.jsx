import { useState } from "react";
import { useRef } from "react";
import "./GuessInput.css";


export default function GuessInput({inputRef, onSubmit}) {

  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '') {
      setValue(0);
      return;
    }

    console.log(inputValue);
    const parsedValue = Number.parseInt(inputValue.replace(/,/g, ''), 10);
    console.log(parsedValue)

    if (!Number.isNaN(parsedValue)) {
     console.log(parsedValue)
     setValue(parsedValue);
    }
  }

  const formattedValue = value.toLocaleString('en-US', {
    style: 'decimal'
  })

  return (
    <div className="guess-card">
      <form onSubmit={onSubmit}>
        <button className="guess-submit" type="submit">Guess</button>
        $
        <input className="guess-input-box" onChange={handleChange} ref={inputRef} id="guess" type="text" required={true} value={formattedValue}></input>
      </form>
    </div>
  );
}