import Footer from './Footer';
// import Podcast from './Podcast';
import Video from './Video';
import './App.css';
import Portfolio from './Portfolio';
import  Summary from'./Summary'
import Home from './Home';
import Landing from './Landing';

function App() {
  return (
    <div>
      <Landing/>
      <Home/>
    <Portfolio/>
       {/* <Podcast/> */}
       <Video/>
      <Summary/>
      
    
      <Footer/>
    </div>
  );
}
export default App;