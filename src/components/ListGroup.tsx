import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris", "London"];
  let selectedIndex = -1;

  // Event handler
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* above line returns paragraph element if condition 1 is true, otherwise returns nothing */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            // onClick={() => console.log(item, index)}
            onClick={handleClick}
          > 
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
