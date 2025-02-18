import img7 from "../../../assets/images/button-dark.avif";
import img8 from "../../../assets/images/button-light.avif";

const list = [
  {
    color: "Dark",
    image: img7,
  },
  {
    color: "Light",
    image: img8,
  },
];

const Interior = ({ setConfig, config }) => {
  const interiorHandle = (id) => {
    setConfig((prev) => {
      return {
        ...prev,
        interior: id,
      };
    });
  };
  return (
    <div class="my-8" id="interior-buttons">
      <h3 class="font-semibold mb-2">Interior Color</h3>
      <div class="flex space-x-4">
        {list.map((item) => {
          return (
            <button onClick={() => interiorHandle(item.color)} class={`${item.color === config.interior ? "btn-selected" : ""} transition-transform duration-300 hover:scale-110`}>
              <img src={item.image} alt={item.color} class="w-12" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Interior;
