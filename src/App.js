import './App.css'
import { Header, Footer, Content } from './components/exports'

const App = () => {
    return (
        <div className="mainContainer">
            <div className="contentWrapper">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>);
}

export default App;