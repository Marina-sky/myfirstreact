import React from 'react'
import { inject, observer } from 'mobx-react'
import CarMakeFormStore from './CarMakeFormStore'
import Field from '../../components/Field.jsx'
import Button from '../../components/Button.jsx'

class CarMakeForm extends React.Component {
  render() {
    const { carMakeFormStore, onCreate } = this.props

    return (
      <form onSubmit={async (event) => {
        onCreate(await carMakeFormStore.handleSubmit(event))
      }}>
        <h2>Add car make</h2>
        <div className="space-y-3">
          <Field
            label="Name"
            type="text"
            value={carMakeFormStore.carMakeName}
            onChange={(event) => {
              this.props.carMakeFormStore.setCarMakeName(event.target.value)
              this.props.carMakeFormStore.setError('')
            }}
          />
          {carMakeFormStore.error && <div style={{ color: 'red' }}>{carMakeFormStore.error}</div>}
          <div>
            <Button variant="primary" type="submit">
              Add car make
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default inject(() => ({
  carMakeFormStore: new CarMakeFormStore()
}))(observer(CarMakeForm))
