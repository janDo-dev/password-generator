import "./App.css";
import StyledPasswordGenerator from "./components/PasswordGenerator";
import { PwGenProvider } from "./contexts/PwGenContext";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <PwGenProvider>
      <GlobalStyle />
      <StyledPasswordGenerator />
    </PwGenProvider>
  );
}

export default App;
