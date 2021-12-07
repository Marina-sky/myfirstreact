import React from "react"

export const CarMakeContext = React.createContext()
export const CarContext = React.createContext()

export const useCarMakeStore = () => {
  return React.useContext(CarMakeContext)
}
export const useCarStore = () => {
  return React.useContext(CarContext)
}