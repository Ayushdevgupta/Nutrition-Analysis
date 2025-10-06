import '../../assets/styles/form.css';


function Input ({ input, setInput, inputRef }) {
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <input 
            className="input-field"
            type='text'
            placeholder='Example: 1 cup rice, 10 oz chickpeas'
            value={input}
            ref={inputRef}
            onChange={handleInput}
        />
    );
}


export default Input;