import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ExecutionModes from '../components/ExecutionModes';
import PipelineVisualization from '../components/PipelineVisualization';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display">
      <main className="grow">
        <Hero />
        <Stats />
        <ExecutionModes />
        <PipelineVisualization />
      </main>
    </div>
    </div>
  );
}
