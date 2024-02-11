import './App.css';
import MainPage from './layouts/MainPage'
import Post from './postComp';

//this is the root component. A function called App.
function App() {
  return (
    <Post title = "HI" text = "How are you"/>
    //<MainPage />
  );
}

export default App;
