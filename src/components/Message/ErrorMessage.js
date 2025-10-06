import '../../assets/styles/message.css';


function ErrorMessage ({ message }) {
    return (
        <>
            <h3 className='message-heading'>Your request could not be processed.</h3>
            {
                message === 'error' && 
                <p className='message-text'>An error occurred while processing the request.</p>
            }
            {
                message === 'incorrect format' && 
                <>
                    <p className='message-text'>Please, enter the ingredient list using the following format:</p>            
                    <p className='format-line'>1 cup rice, 10 oz chickpeas</p>
                </>
            }
            {
                message === 'no input' && 
                <>
                    <p className='message-text'>Please, enter a list of ingredients.</p> 
                    <p className='message-text'>Specify each ingredient name and its quantity.</p> 
                </>
            }
        </>
    );
}


export default ErrorMessage;