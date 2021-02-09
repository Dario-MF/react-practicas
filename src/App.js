import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Card from './card';


function App() {
  return (
    <>
      <div className="App">
        <div className="parallax-container">
          <div className="parallax"><img src="https://materializecss.com/images/parallax1.jpg" /></div>
        </div>
        <div className="section white">
          <p>efecto parallax</p>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src="https://materializecss.com/images/parallax2.jpg" /></div>
        </div>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  );
}

export default App;
