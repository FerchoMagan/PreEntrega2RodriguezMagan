import NavBar from "./navBar/navBar"
import ItemListContainer from "./itemListContainer/itemListContainer"


function App() {


  
  return (
    <>
      <header className="App-header">
       <nav>
          <NavBar />
       </nav>
      </header>

      <div>
      <ItemListContainer  />
      </div>

    </>
  );
}

export default App;


