import ButtonOpenOverlay from './componants/Button'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <img src="/hand.webp" alt="main mickey" className='w-[80px] h-auto animate-bounce translate-x-22 mb-4'/>
        <ButtonOpenOverlay />
      </div>
      
    </>
  )
}

export default App
