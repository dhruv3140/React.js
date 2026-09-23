import react from 'react'
import {useState, useCallback, useEffect, useRef} from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(6)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[CharacterAllowed, setCharacterAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    const numbers = "0123456789"
    const characters = "!@#$%^&*()_+~`|}{[]:;?><,./-="
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let allowedChars = letters
    let password = ""
    if (numberAllowed) {
      allowedChars += numbers
    }
    if (CharacterAllowed) {
      allowedChars += characters
    }
    for (let i = 1; i <=length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length + 1)
      password += allowedChars.charAt(randomIndex)
    }
    setPassword(password)
  }, [length, numberAllowed, CharacterAllowed])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!");
  }, [password])

  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, CharacterAllowed, passwordGenerator])

  return (
    <>
      <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className = "flex flex-col items-center justify-center py-4">
          <input 
            type = "text"
            value = {password} 
            className = "w-full text-center bg-gray-700 text-white rounded-md py-2 px-4 mb-4" 
            placeholder = "Generated Password" 
            readOnly
            ref ={passwordRef} 
          />
          <button className = "bg-orange-500 text-white rounded-md py-2 px-4 mt-4" onClick = {copyToClipboard}>
            Copy to Clipboard
          </button>
          
        </div>
        <div className = "flex flex-col items-center justify-center py-4">
            <div>
              <label htmlFor = "length" className = "text-white">Password Length: {length}</label>
              <input 
                type = "range"
                id = "length"
                min = "6"
                max = "12"
                value = {length}
                onChange = {(e) => setLength(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor = "numberAllowed" className = "text-white">Allow Numbers</label>
              <input 
                type = "checkbox"
                id = "numberAllowed"
                checked = {numberAllowed}
                onChange = {(e) => setNumberAllowed((prev) => !prev)}
              />
            </div>
            <div>
              <label htmlFor = "CharacterAllowed" className = "text-white">Allow Characters</label>
              <input 
                type = "checkbox"
                id = "CharacterAllowed"
                checked = {CharacterAllowed}
                onChange = {(e) => setCharacterAllowed((prev) => !prev)}
              />
            </div>
            <button 
              className = "bg-orange-500 text-white rounded-md py-2 px-4 mt-4"
              onClick = {passwordGenerator}
            >
              Generate Password
            </button>
        </div>
      </div>
    </>
  )
}

export default App