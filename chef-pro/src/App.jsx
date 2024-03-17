
import './App.css'
import Banner from './components/header/Banner'
import Navbar from './components/header/Navbar'
import Our from './components/main/Our';
import Recipes from './components/main/Recipes';
import SideBar from './components/main/SideBar';

function App() {

  return (
    <div>
      <header className="mx-auto container">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="mx-auto container">
        <Our></Our>
        <div className='flex'>
          <Recipes></Recipes>
          <SideBar></SideBar>
        </div>
      </main>
    </div>
  );
}

export default App
