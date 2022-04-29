import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({ as: Component = 'button', variant = "white", ...props }) {

  return (
    <Component
      {...props}
      className={classNames(
        " inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "white" &&
          "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500",
        variant === "primary" &&
          "border-transparent text-white focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700",
        variant === "danger" &&
          "border-transparent text-white focus:ring-rose-500 bg-rose-600 hover:bg-rose-700"
      )}
    />
  );
}
