import { useState } from 'react';
import './App.css';
import Data from './Data';
import Accordian from './Accordian';

function App() {

  const [data, setData] = useState(Data);

  return (
    <>
        <div className='body'>
      
      <h1><span>Prasath 💗 Jijju</span></h1>
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
       


    </div>

    
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TB7uaFZP8oQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TB7uaFZP8oQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




    </>

    

  );
}

export default App;
