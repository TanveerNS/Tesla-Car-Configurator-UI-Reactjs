import grey from "../../../assets/images/button-stealth-grey.avif";
import white from "../../../assets/images/button-pearl-white.avif";
import blue from "../../../assets/images/button-deep-blue-metallic.avif";
import black from "../../../assets/images/button-solid-black.avif";
import red from "../../../assets/images/button-ultra-red.avif";
import silver from "../../../assets/images/button-quicksilver.avif";

const list = [
  { color: "grey", image: grey },
  { color: "white", image: white },
  { color: "blue", image: blue },
  { color: "black", image: black },
  { color: "red", image: red },
  { color: "silver", image: silver },
];

const Exterior = ({ setConfig, config }) => {
  const exteriorHandle = (id) => {
    setConfig((prev) => {
      return {
        ...prev,
        exterior: id,
      };
    });
  };
  return (
    <div class="my-8" id="exterior-buttons">
      <h3 class="font-semibold mb-2">Exterior Color</h3>
      <div class="flex space-x-4">
        {list.map((item) => {
          return (
            <button onClick={() => exteriorHandle(item.color)} class={`${item.color === config.exterior ? "btn-selected" : ""} transition-transform duration-300 hover:scale-110`}>
              <img src={item.image} alt={item.color} class="w-22" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Exterior;
