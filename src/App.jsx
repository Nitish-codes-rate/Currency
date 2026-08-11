import { useState, useEffect} from 'react'

function App() {
  const [currency, setCurrency] = useState("inr")
  const [newcurrency, setNewCurrency] = useState("usd")
  const [rate, setRate] = useState(0)

  const rnad=() => {
  setRate((fact[currency]?.[newcurrency])*R)
   
  }

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

  const [fact, setFact] = useState({})
  const [R, setR] = useState(0)

  
 const ram=Object.keys(fact[currency]||{})
 useEffect(() => {
  const rollIt = async () => {
    let result = await fetch(url)
    
    let res = await result.json()
    setFact(res)
    
      
  }
  rollIt()
 }, [currency])
 

  return (
    <><div className="bg-[linear-gradient(rgba(0,0,0,0.81),rgba(0,0,0,0.81)),url('backone.jpg')] p-1  flex justify-center text-center items-center bg-cover bg-center h-screen w-full">
    <div className='bg-purple-300 flex-col rounded-lg p-1  w-100 p-10 h-100 '>
      <h1 className='text-2xl font-bold text-black'>Currency Converter</h1>
      <select  className='bg-white p-1 mt-10 rounded-lg border-1 h-9 w-70' value={currency} onChange={(e)=>{setCurrency(e.target.value)}} >
     {ram.map((i) => (
        <option key={i} value={i}>{i}</option>
      ))}
      </select>
      <input type="text"  placeholder='Enter amount'
        className="  bg-white border-1 h-9 p-1 my-4 rounded-lg w-70 border-black cursor-pointer " 
        onChange={(e)=>{setR(e.target.value)}} >
      </input>  
        
     
      
      <select className="bg-white border-1  mb-4 p-1 h-9 rounded-lg   w-70 " value={newcurrency} onChange={(e)=>{setNewCurrency(e.target.value)}} >
         {ram.map((i) => (
        <option key={i} value={i}>{i}</option>
      ))}
      </select>
       
      <input value={rate} className="border-1 my-5 h-7 bg-white text-center   w-70 border-gray-300 " readOnly type="text" placeholder="Price"></input>
      <button
        className="w-18  p-1 rounded-lg h-10 bg-black text-white hover:bg-gray-700"
        onClick={() => {rnad()}}
      >
        Convert
      </button>
   
    </div></div>
    </>
  )
}

export default App