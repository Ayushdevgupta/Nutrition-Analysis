import '../../assets/styles/style.css';


function MainContent ({ children }) {
    return (
        <main className="content-container">
            {children}
        </main>
    );
}


export default MainContent;