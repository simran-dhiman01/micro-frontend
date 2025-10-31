import ChatWindow from './components/ChatWindow'
import { theme } from "hostApp/design-system";


const App = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-start p-8"
      style={{ backgroundColor: theme.colors.background }} >
      <h1
        className="text-2xl font-bold mb-6"
        style={{ color: theme.colors.textPrimary }} >
        BlueBash Chat
      </h1>
      <ChatWindow />
    </div>
  )
}

export default App