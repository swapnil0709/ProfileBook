import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./App.scss";
// States

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromGivenApi();
    getDataFromRestApi();
  }, []);

  const getDataFromRestApi = () => {
    fetch(`http://localhost:3300/profiles`)
      .then((res) => res.json())
      .then((data) => setData((prevData) => [...prevData, ...data]));
  };

  const getDataFromGivenApi = () => {
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  return (
    <div className="App">
      {data.map(({ Image, id, name }) => (
        <Card Image={Image} id={id} key={id} name={name} />
      ))}
    </div>
  );
}

export default App;
