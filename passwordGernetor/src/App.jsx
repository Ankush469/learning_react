import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const[length, setLength] = useState(8);
  const[number,setNumber]=useState(false);
  const[char,setChar]=useState(false);
  const[password,setPassowrd]=useState("")
  const passwordRef=useRef(null)

  const passowrdGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*(){}[]~`=+-_?/"

    for(let i=1;i<=length;i++){
      let passChar=Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(passChar)
    }
    setPassowrd(pass)


  },[length,number,char,password])
  useEffect(()=>{
    passowrdGenerator();
  },[length,number,char])

  const copyPassWord=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type='text'
      value={password}
      ref={passwordRef}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      />
      <button 
      className='outline-none bg-blue-700 text-s-white px-3 py-0.5 shrink-0' 
      onClick={copyPassWord}
      >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={char}
          id="charInput"
          onChange={()=>{
            setChar((prev)=>!prev);
          }}
          />
          <label htmlFor='numberChar'>Characters</label>
        </div>
        
      </div>
    </div>

    </>
  )
}

export default App
