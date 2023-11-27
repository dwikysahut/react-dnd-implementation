import logo from './logo.svg';
import './App.css';
import BoxCard from './components/BoxCard';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

const petArr=[
  {id:1,
  name:'cat'},
  {id:2,
  name:'dog'},
  {id:3,
  name:'turtle'},
  {id:4,
  name:'penyu'},
  {id:5,
  name:'gajah'},
  {id:6,
  name:'keong'},
]
function App() {

  const [basket,setBasket]= useState([])
console.log(basket)
  const [{isOver},dropRef]=useDrop({
    accept:'pet',
    drop:(item)=>{setBasket(basket=>(basket.filter(pet=>pet.id===item.id).length>0?[...basket]:[...basket,item]))
    console.log(basket.includes(item))
    console.log(item)
  },
    collect: (monitor) => ({
      isOver: monitor.isOver()
  })
  })
  const [{isOver:isOverDel},dropDelRef]=useDrop({
    accept:'pet',
    drop:(item)=>{
      const newArr=basket.filter(pet=>pet.id!==item.id)
  
      setBasket(newArr)

    console.log(basket.includes(item))
    console.log(item)
  },
    collect: (monitor) => ({
      isOver: monitor.isOver()
  })
  })
  return (
    <div className="App flex gap-2 py-3 px-3  flex-col ">
      <div ref={dropDelRef} className='flex  gap-3'>
      {petArr.map((item)=>(
        <BoxCard id={item.id} key={item.id} name={item.name}/>
      ))}
      </div>

      <h1 className='mt-5 text-yellow-600 text-left text-[50px] font-bold'>Box</h1>
      <div ref={dropRef} className='gap-3 mt-2 h-[200px] w-[100%] bg-slate-200 flex items-center px-5'>
      {basket.map(item=>(
        <BoxCard id={item.id} key={item.id} name={item.name}/>
      ))}

      </div>
    
    </div>
  );
}

export default App;
