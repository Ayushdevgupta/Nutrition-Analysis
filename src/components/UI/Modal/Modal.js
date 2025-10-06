import '../../../assets/styles/modal.css';


function Modal ({ children, onClick }) {
    return (
        <div
            className="modal"
            onClick={onClick}
        >
            {children}
        </div>
    );
}


export default Modal;