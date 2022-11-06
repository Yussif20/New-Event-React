import "./design-system/main.css";

import OverviewBar from "./design-system/components/OverviewBar/OverviewBar-component";
import Speakers from "./design-system/components/Speakers/Speakers-component";
import OurProgrammsDay from "./design-system/components/OurProgrammsDay/OurProgrammsDay";
import OurSponsors from "./design-system/components/OurSponsors/OurSponsors-component";

function App() {
  return (
    <div className="App">
      <OverviewBar />
      <Speakers />
      <OurProgrammsDay />
      <OurSponsors />
    </div>
  );
}

export default App;
