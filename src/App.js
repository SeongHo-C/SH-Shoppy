import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
