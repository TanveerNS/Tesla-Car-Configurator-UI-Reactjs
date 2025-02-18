import Exterior from "./sidebar/Exterior";
import Interior from "./sidebar/Interior";
import Options from "./sidebar/Options";

const SidebarRight = ({ setConfig, config }) => {
  return (
    <aside class="w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2">
      <h1 class="text-5xl text-center font-bold mb-5">Model Y</h1>
      <h2 class="text-xl text-center font-light">Customize Your Car</h2>
      <Exterior setConfig={setConfig} config={config} />
      <Interior setConfig={setConfig} config={config} />
      <Options />
    </aside>
  );
};

export default SidebarRight;
