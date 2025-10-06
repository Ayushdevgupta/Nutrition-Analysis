import '../../../assets/styles/button.css';


function Button ({ className, type, onClick, children }) {
    return (
        <button
            className={`btn ${className}`} 
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


export default Button;