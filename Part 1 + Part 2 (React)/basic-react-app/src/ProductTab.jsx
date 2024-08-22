import Product from "./Product.jsx";

function prodcutTab() {
  let options1 = ["hi-tech", "durable", "fast"]; //array
  let options2 = { a: "hi-tech", b: "durable", c: "fast" };

  return (
    <>
      {/* Passing the informations as argument of the component functions */}
      {/* Numbers can be passed by using curly braces */}
      {/* string bade onno format a pass korte curly braces use korbo */}
      {/* we can pass an array like mentioned in the features */}
      {/* we can pass an object like mentioned in the features2 */}

      {/* <Product title="Pen"></Product> */}
      <Product
        title="Laptop"
        price="50000"
        features1={options1}
        features2={options2}
      ></Product>
        {/* passing object and arrays directly */}
      <Product
        title="Phone"
        price={30000}
        features1={["hi-tech", "durable"]}
        features2={{ a: "durable", b: "hi-tech" }}
        ></Product>
    </>
  );
}

export default prodcutTab;
