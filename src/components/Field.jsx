import React from "react";

export default function Field({ as = 'input', label, ...props }) {
  return (
    <div className="no-prose space-y-1">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div>
        {as === 'input' &&  <input {...props} className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />}
        {as === 'select' && <select {...props} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />}
      </div>
    </div>
  );
}
