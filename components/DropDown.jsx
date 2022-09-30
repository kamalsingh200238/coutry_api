import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const listOfOptions = [
  {
    text: "None",
    value: "",
  },
  {
    text: "Africa",
    value: "Africa",
  },
  {
    text: "America",
    value: "America",
  },
  {
    text: "Asia",
    value: "Asia",
  },
  {
    text: "Antarctic",
    value: "Antarctic",
  },
  {
    text: "Europe",
    value: "Europe",
  },
  {
    text: "Oceania",
    value: "Oceania",
  },
];

export default function DropDown(props) {
  const [selected, setSelected] = useState(listOfOptions[0]);

  // change regionForFilter state whenever the selected value in dropdown changes
  useEffect(() => {
    props.setRegionForFilter(selected.value);
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        {/* This is button to open selection menu */}
        <Listbox.Button className="flex justify-between items-center gap-4 border border-gray-300 rounded-lg px-6 py-3 shadow-lg w-full focus:outline-none focus:border-gray-600 focus:ring-gray-700 focus-visible:border-gray-600 focus-visible:ring-1 focus-visible:ring-offset-gray-700">
          <span className="block truncate">
            {selected.text === "None" ? "Filter by region" : selected.text}
          </span>
          <span className="pointer-events-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        {/* These are the options in the List */}
        <Listbox.Options className="absolute z-50 w-full bg-white mt-1">
          {listOfOptions.map((option, index) => (
            <Listbox.Option key={index} value={option}>
              {({ active, selected }) => (
                <button
                  value={option.value}
                  className={`${active ? "bg-blue-400" : ""} ${
                    selected ? "bg-yellow-200" : ""
                  } w-full text-left px-6 py-3 rounded-lg`}
                >
                  {option.text}
                </button>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
