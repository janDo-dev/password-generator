import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
import { PwGenProvider } from "./contexts/PwGenContext";

function App() {
  return (
    <PwGenProvider>
      <PasswordGenerator />
    </PwGenProvider>
  );
}

export default App;
