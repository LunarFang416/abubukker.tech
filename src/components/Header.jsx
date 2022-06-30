import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="home">
                <span className="t">&gt; $ cd ~</span>
            </div>        
            {[...Array(50)].map(() => <div class="verticle-line"></div>)}
        </div>
    )
}


export default Header;