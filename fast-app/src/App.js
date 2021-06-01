import {
  FASTDesignSystemProvider,
  FASTCard,
  FASTButton
} from "@microsoft/fast-components";
import "./App.css";
import { CerButton } from "./button.js";

/*
 * Ensure that tree-shaking doesn't remove these components from the bundle.
 * There are multiple ways to prevent tree shaking, of which this is one.
 */
FASTDesignSystemProvider;
// FASTCard;
// FASTButton;
function App() {
  return (
    <fast-design-system-provider use-defaults>
      <fast-card>
        <h2>FAST React</h2>
        <fast-button appearance="accent" onClick={() => console.log("clicked")}>
          Click Me
        </fast-button>
      </fast-card>
      <cer-button label="Testing"></cer-button>
    </fast-design-system-provider>
  );
}

export default App;
