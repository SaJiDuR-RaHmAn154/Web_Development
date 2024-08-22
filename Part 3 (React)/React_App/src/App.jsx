import "./App.css";
import Button from "./Button.jsx";
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import LikeBtn from './LikeBtn.jsx';

function App() {

  return (
    <>
      <Button></Button>
      <Form></Form>


      <h2>Like Button Activity</h2>
      <LikeBtn/>
      <hr />
      <h2>States in React (One of the most important topics)</h2>
      <Counter></Counter>
    </>
  );
}

export default App;
