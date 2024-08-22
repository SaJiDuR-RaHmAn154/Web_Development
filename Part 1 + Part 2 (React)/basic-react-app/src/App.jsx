import "./App.css";
import Description from "./Description.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

// Description1 dileo kaj korbe but na deyai better karon ata confusing

// Creating New Component(Protita component alada file a create kora highly prefered)

function Title() {
  return <h1>I am the Title!</h1>;
}

function App() {
  //atai App (function) component and ata jeta return korbe atai UI(Page a show hobe)
  //only one element can be returned at a time
  // multiple element dorkar porle div er vitore embed kore then return korte hobe
  return (
    // Childrens k group korte alada div na create kore <></> atao use kora jay jetake React Fragment bole
    // <div className="mainBox">
    <>
      <h2>New Activity</h2>
      <MsgBox userName="Sajid" textColor="blue"/>

      <button>Hello World!</button>
      {/* Both syntax are correct */}
      <Title></Title>
      <Description></Description>
      <Title />
      <ProductTab></ProductTab>
    </>
    // </div>
  );
}

export default App;
