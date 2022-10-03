import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
