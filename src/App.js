import "./design-system/main.css";

import OverviewBar from "./design-system/components/OverviewBar/OverviewBar-component";
import Speakers from "./design-system/components/Speakers/Speakers-component";
import OurProgrammsDay from "./design-system/components/OurProgrammsDay/OurProgrammsDay";

function App() {
  return (
    <div className="App">
      <OverviewBar />
      <Speakers />
      <OurProgrammsDay />
    </div>
  );
}

export default App;
