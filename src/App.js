import logo from './logo.svg';
import './App.css';
import { Logo } from './logo/logo';
import { Content } from './content/content';
import { NavBar } from './navBar/navBar';
import { SideBar } from './sideBar/sideBar';

function App() {
  return (
    <div className="App">

      <div className='header'>

        <div className='logo'>

          < Logo />
        </div>

        <div className='navBar'>
          < NavBar />
        </div>
      </div>


      <div className='sideBar'>
        < SideBar />
      </div>


      <div className='content'>

        < Content />
      </div>
    </div>
  );
}

export default App;
