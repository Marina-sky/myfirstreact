import React from 'react'
import { inject, observer } from 'mobx-react'
import CarMakeFormStore from './CarMakeFormStore'

class CarMakeForm extends React.Component {
  render() {
    const { carMakeFormStore, onCreate } = this.props

    return (
      <form onSubmit={async (event) => {
        onCreate(await carMakeFormStore.handleSubmit(event))
      }}>
        <h2>Add car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={carMakeFormStore.carMakeName}
          onChange={(event) => {
            this.props.carMakeFormStore.setCarMakeName(event.target.value)
            this.props.carMakeFormStore.setError('')
          }}
        />
        {carMakeFormStore.error && <div style={{ color: 'red' }}>{carMakeFormStore.error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Add car make
          </button>
        </div>
      </form>
    )
  }
}

export default inject(() => ({
  carMakeFormStore: new CarMakeFormStore()
}))(observer(CarMakeForm))
