import Background from "./components/background"
import Foreground from "./components/Foreground"
import HowerButton from "./components/HowerButton"
import { toast} from 'react-toastify';
import HowerUserIcon from "./components/HowerUserIcon";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background/>
      <Foreground/>
      <HowerButton onClickCall={()=>{toast("Let's add some new Notes!");}}/>
      <HowerUserIcon onClickCall={()=>{toast("Access your Notes any time any where!");}}/>
    </div>
  )
}

export default App