import Popup from './Popup';
import { saveLocal } from "./popup/saveLocal";

function App() {
  return (
    <Popup saveLocal={saveLocal}/>
  )
}

export default App
