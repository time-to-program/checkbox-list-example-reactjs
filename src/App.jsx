import React, { useState } from "react";
import './App.css'

const LIST_DATA = [
  { id: "1", value: "Javascript" },
  { id: "2", value: "Python" },
  { id: "3", value: "Java" },
  { id: "4", value: "Kotlin" },
  { id: "5", value: "Dart" },
  { id: "6", value: "C#" },
];

function App() {
  const [checkedList, setCheckedList] = useState([]);
  

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Select Programming Language</p>
        </div>

        <div className="list-container">
          <label>You Selected:</label>
          {checkedList.map((item, index) => {
            return (
              <div className="chip">
                <p className="chip-label">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="card-body">
          {LIST_DATA.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                  type="checkbox"
                  name="languages"
                  id={item.id}
                  value={item.value}
                  onChange={handleSelect}
                />
                <label for={item.id}>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
