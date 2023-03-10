import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote/AddNote';

function App() {
  let handleAddNote =(note)=>{
    console.log(note);
  }
  return(
      <div>
        <Header/>
        <AddNote addNote={handleAddNote}/>
      </div>
  );
}

export default App;