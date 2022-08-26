import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className='wrapper'>
      {/* Preloader */}
      <Preloader />

      {/* Navbar */}
      <Navbar />
      {/* /.navbar */}

      {/* Main Sidebar Container */}
      <Sidebar />

      {/* Content Wrapper. Contains page content */}
      <Dashboard />
      {/* /.content-wrapper */}

      <Footer />

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
}

export default App;
