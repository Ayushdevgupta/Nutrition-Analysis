import { useState, useEffect, useRef } from "react";
import Input from "./Input";
import Button from "../UI/Button/Button";
import "../../assets/styles/form.css";

function Form({
  setIngredients,
  loader,
  error,
  setError,
  handleClear,
  nutritionData,
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const setInputFocus = () => {
    if (error || loader) return;

    if (!error && !loader) {
      setInput("");
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    inputRef.current.blur();

    if (input.trim() === "") setError("no input");
    else {
      const ingredientsList = input
        .split(",")
        .map((ingredient) => ingredient.toLowerCase().trim());
      setIngredients(ingredientsList);
    }
  };

  const onClearClick = () => {
    handleClear();
    setInput(""); // Is component ki input state ko clear karega
    inputRef.current.focus();
  };

  useEffect(() => {
    setInputFocus();
  }, [error, loader]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input input={input} setInput={setInput} inputRef={inputRef} />

      <Button
        className="form-btn"
        type="submit"
        onClick={handleSubmit}
        disabled={loader}
      >
        {loader ? "Analyzing..." : "Analyze"}
      </Button>

      {nutritionData && (
        <Button
          className="form-btn btn-clear"
          type="button"
          onClick={onClearClick}
        >
          Clear Result
        </Button>
      )}
    </form>
  );
}

export default Form;
