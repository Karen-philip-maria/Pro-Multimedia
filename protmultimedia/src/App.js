import Footer from './Footer';
// import Podcast from './Podcast';
import Video from './Video';
import './App.css';
import Navbar from './Home';
import Page from './Landing';
import Portfolio from './Portfolio';
import  Summary from'./Summary'

function App() {
  return (
    <div>
       <Page/>
       <Navbar/>
    <Portfolio/>
       {/* <Podcast/> */}
       <Video/>
      <Summary/>
      
    
      <Footer/>
    </div>
  );
}
export default App;