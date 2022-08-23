import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className='flex justify-center items-center flex-col p-10'>
     <div>
     <h1 className='text-blue-500 text-[40px] font-bold mb-5'>My first React App.</h1>
     <p className='text-[20px] leading-9'>Once I master this thing, it's over for y'all! Hit the button and count to infinity... that's how long it'll take me.</p>
     </div>

     <div className='mt-5'>
     <p className='text-[20px]'>Count: {count}</p>
     <button className='rounded-sm bg-blue-500 text-white font-bold p-4' onClick={()=>{incrementCount()}}>Hit me!</button>
     </div>

    </div>
  );
}

export default App;
