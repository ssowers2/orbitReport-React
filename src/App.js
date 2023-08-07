import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData";

function App() {
 const [sat, setSat] = useState(satData); //variable to manage the state of project

  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; // variable to hold the unique values of the orbitType property of the satellite objects

  const filterByType = (currentType) => { //function that filters through the satellites
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });

    setSat(displaySats);
 };

return ( //The above variables and function will be used by the below buttons and table components
  <div>
   <>
   <Banner />
   <Buttons
     filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
   <Table sat={sat} />
 </>
  </div>)
  }

export default App;