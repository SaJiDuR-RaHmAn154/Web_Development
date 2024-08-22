import "./Product.css";
// Product er css er file jsx er file ai import korte hoy

// props er default value o avabe set kore rakha jay.Pen er jonno price pass na koray 5 set hoye jabe by default
function Product({ title, price = "5", features1, features2 }) {
  //destructured the arguments that are coming from productTab.jsx
  // console.log(prop s.title);

  // Rendering array in list format

  // const list = features1.map((feature)=><li>{feature}</li>);//protita array item list item a convert hobe
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "yellow" : "" }; //creating a style object
  return (
    // style conditional er sathe jsx a use kora dynamic styling
    <div className="Product" style={styles}>
      <h1> {title}</h1>
      <h5>Price: {price} Tk</h5>
      {/* <p>{list}</p> */}
      {/* Directly map method avabe likhe dileo kaj hobe */}
      <p>
        {features1.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      {/* accessing object keys */}
      <p>{features2.a}</p>

      {/* Conditionals in React(null er jaygay onno jekono html tag use kore onno kaj o kora jabe like anchor tag add kora jabe) */}

      {/* {isDiscount ? <p>Discount of 10%</p>:null} */}
      {isDiscount ? <p>Discount of 10%</p> : <a href="/">Get Discount</a>}
      {/* OR (another way) */}
      {isDiscount && <p>Discount of 10%</p>}
    </div>
  );
}

export default Product;
