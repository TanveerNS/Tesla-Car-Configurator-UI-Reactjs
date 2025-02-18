import React from "react";
import model1a from "../../assets/images/model-y-stealth-grey.jpg";
import model1b from "../../assets/images/model-y-pearl-white.jpg";
import model1c from "../../assets/images/model-y-deep-blue-metallic.jpg";
import model1d from "../../assets/images/model-y-solid-black.jpg";
import model1e from "../../assets/images/model-y-ultra-red.jpg";
import model1f from "../../assets/images/model-y-quicksilver.jpg";

import model2a from "../../assets/images/model-y-interior-dark.jpg";
import model2b from "../../assets/images/model-y-interior-light.jpg";

const exteriorImages = {
  grey: model1a,
  white: model1b,
  blue: model1c,
  black: model1d,
  red: model1e,
  silver: model1f,
};

const interiorImages = {
  Dark: model2a,
  Light: model2b,
};

const SectionOne = ({ exterior, interior }) => {
    console.log(interior)
  return (
    <section class="w-full md:w-3/4">
      <div class="sticky top-24">
        <div class="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
          <img src={exteriorImages[exterior]} alt="Model Y" class="max-w-full h-auto transform scale-125" id="exterior-image" />
        </div>

        <div class="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
          <img src={interiorImages[interior]} alt="Model Y Interior" class="max-w-full h-auto transform scale-125" id="interior-image" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
