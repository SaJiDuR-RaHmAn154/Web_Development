function handleClick(event) {
  console.log("Hello!!");
  console.log(event);//event object print hobe(contains methods and attributes)
}

function handleHover() {
  console.log("bye");
}

function handleDblClick() {
  console.log("You double clicked me!!");
}

export default function Button() {
  // check the changes in inspect and console
  //onclick akta function pass korbo jeta oi button a click korle event hisebe kaj korbe
  //check mdn document for events
  //onMouseOver - hover korle

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleHover}>
        This para is for event demo. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Exercitationem quidem minus tempora labore sed,
        explicabo incidunt error rem non expedita laborum nostrum consectetur
        unde nisi alias, corrupti dolores vitae enim!
      </p>
      <button onDoubleClick={handleDblClick}>Double click me</button>
    </div>
  );
}
