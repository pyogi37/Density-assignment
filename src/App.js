import Navbar from "./components/Navbar";
import Intro from "./components/Cards/Intro";
import EqIq from "./components/Cards/EqIq";
import Familiar from "./components/Cards/Familiar";
import MeetCard from "./components/Cards/MeetCard";
import SelfImprovement from "./components/Cards/SelfImprovement";
import EqBest from "./components/Cards/EqBest";
import TestCard from "./components/Cards/TestCard";
import SocialSkills from "./components/Cards/SocialSkills";

function App() {
  return (
    <div className="App p-5">
      <Navbar />
      <Intro />
      <EqIq />
      <Familiar />
      <MeetCard />
      <SelfImprovement />
      <EqBest />
      <SocialSkills />
      <TestCard />
    </div>
  );
}

export default App;
