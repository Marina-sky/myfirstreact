import React from 'react'
import { inject, observer } from 'mobx-react'

class CarMakeForm extends React.Component {
  render() {
    const { CarMakeFormStore, CarMakePageStore } = this.props

    const handleSubmit = (e) => {
      e.preventDefault()
      if (CarMakeFormStore.carMakeName) {
        CarMakePageStore.createCarMake(CarMakeFormStore.carMakeName)
        CarMakeFormStore.setCarMakeName('')
      } else {
        CarMakeFormStore.setError('This field is required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Add car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={CarMakeFormStore.carMakeName}
          onChange={(event) => {
            this.props.CarMakeFormStore.setCarMakeName(event.target.value)
            this.props.CarMakeFormStore.setError('')
          }}
        />
        {CarMakeFormStore.error && <div style={{ color: 'red' }}>{CarMakeFormStore.error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Add car make
          </button>
        </div>
      </form>
    )
  }
}

export default inject('CarMakeFormStore', 'CarMakePageStore')(observer(CarMakeForm))
