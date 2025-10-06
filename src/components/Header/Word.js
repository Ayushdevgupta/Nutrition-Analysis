import '../../assets/styles/header.css';


function Word ({ word, className }) {
    return (
        <div className="word">
            {
                [...word].map((character, index) => (
                    <span 
                        className={className} 
                        key={index}
                    >
                        {character}
                    </span>
                ))
            }
        </div>
    );
}


export default Word;