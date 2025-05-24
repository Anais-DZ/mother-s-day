import ButtonOpenOverlay from './componants/Button'
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col relative">

        {/* Contenu centré verticalement */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <img
            src="/hand.webp"
            alt="main mickey"
            className="w-[80px] h-auto animate-bounce translate-x-5 mb-4"
          />
          <ButtonOpenOverlay />
        </div>

        {/* Footer */}
        <p className="text-white text-center mb-2 text-shadow-2xs text-shadow-rose-900 text-sm">
          ©2025 Anaïs DIEZ
        </p>
      </div>
    </>
  );
}
export default App
