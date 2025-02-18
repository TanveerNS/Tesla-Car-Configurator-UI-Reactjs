import React, { useState, useEffect } from "react";
const Options = () => {
  const basePrice = 52490;
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [selectedOptions, setSelectedOptions] = useState({
    "Performance Wheels": false,
    "Performance Package": false,
    "Full Self-Driving": false,
    Accessories: {},
  });
  const pricing = {
    "Performance Wheels": 2500,
    "Performance Package": 5000,
    "Full Self-Driving": 8500,
    Accessories: {
      "Center Console Trays": 35,
      Sunshade: 105,
      "All-Weather Interior Liners": 225,
    },
  };
  useEffect(() => {
    let newPrice = basePrice;
    Object.keys(selectedOptions).forEach((option) => {
      if (option !== "Accessories" && selectedOptions[option]) {
        newPrice += pricing[option];
      }
    });
    Object.keys(selectedOptions.Accessories).forEach((acc) => {
      if (selectedOptions.Accessories[acc]) {
        newPrice += pricing.Accessories[acc];
      }
    });
    setCurrentPrice(newPrice);
  }, [selectedOptions]);
  return (
    <div className="container mx-auto ">
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Wheels</h2>
        <button
          className={`w-full py-4 mb-2 rounded-lg border ${selectedOptions["Performance Wheels"] ? "bg-gray-700 text-white" : "bg-gray-200"}`}
          onClick={() =>
            setSelectedOptions({
              ...selectedOptions,
              "Performance Wheels": !selectedOptions["Performance Wheels"],
            })
          }
        >
          Performance Wheels (+$2,500)
        </button>
        <button
          className={`w-full py-4 mb-2 rounded-lg border ${selectedOptions["Performance Package"] ? "bg-gray-700 text-white" : "bg-gray-200"}`}
          onClick={() =>
            setSelectedOptions({
              ...selectedOptions,
              "Performance Package": !selectedOptions["Performance Package"],
            })
          }
        >
          Performance Package (+$5,000)
        </button>
      </div>
      <div className="border p-4 mb-8 rounded-lg shadow mt-8">
        <h2 className="text-lg font-semibold">Full Self-Driving</h2>
        <input
          type="checkbox"
          checked={selectedOptions["Full Self-Driving"]}
          onChange={() =>
            setSelectedOptions({
              ...selectedOptions,
              "Full Self-Driving": !selectedOptions["Full Self-Driving"],
            })
          }
        />
        <span className="ml-2">Add Full Self-Driving for $8,500</span>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-semibold mb-2">Accessories</h2>
        <div class="space-y-4">
          {Object.keys(pricing.Accessories).map((acc) => (
            <label key={acc} className="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
              <span className="ml-2">
                {acc} (+${pricing.Accessories[acc]})
              </span>
              <input
                type="checkbox"
                checked={selectedOptions.Accessories[acc] || false}
                onChange={() =>
                  setSelectedOptions({
                    ...selectedOptions,
                    Accessories: {
                      ...selectedOptions.Accessories,
                      [acc]: !selectedOptions.Accessories[acc],
                    },
                  })
                }
              />
            </label>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Total Price: </h2>
        <h2 className="text-2xl font-bold">${currentPrice.toLocaleString()}</h2>
      </div>
    </div>
  );
};
export default Options;
