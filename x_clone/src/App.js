
import './App.css';
import MainBar from './component/layout/mainbar/Mainbar';
import RightSide from './component/layout/RightSideBar/RightSide';
import Sidebar from './component/layout/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
 <div className="main" >


<Sidebar className='sidebar'/>




<MainBar  className='Contant_div'/>


<RightSide/>

 </div>
  );
}

export default App;
