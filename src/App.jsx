import './App.css'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Exp } from './components/Exp';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';

export const App = () => {
  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Exp/>
    <Projects/>
    <Contact/>
    </>
  );
}