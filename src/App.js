import { useState } from 'react';
import './App.css';
import Data from './Data';
import Accordian from './Accordian';

function App() {

  const [data, setData] = useState(Data);

  return (

    <div className='body'>

      <h1><span>React Accordian</span></h1>
      {
        data.map((data) => {
          return (
            <>
              <Accordian
                data={data}
                setData={setData} />
            </>
          )
        })
      }

    </div>





  );
}

export default App;
