import { useState } from 'react';
import './App.css';
import Data from './Data';
import Accordian from './Accordian';

function App() {

  const [data, setData] = useState(Data);

  return (
    <>
      <h1><span style={{color:'purple'}}>Pradeep 💗 Janu</span></h1>
        {
          data.map((data) => {
            return (
              <>
                <Accordian 
                    data = {data}
                    setData = {setData}/>
              </>
            )
          })

        }
    </>

  );
}

export default App;
