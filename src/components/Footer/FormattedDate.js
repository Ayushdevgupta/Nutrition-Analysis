import '../../assets/styles/footer.css';


const date = new Date().getFullYear();


function FormattedDate () {
    return (
        <div className='footer-date'>
            {date}
        </div>
    );
}


export default FormattedDate;