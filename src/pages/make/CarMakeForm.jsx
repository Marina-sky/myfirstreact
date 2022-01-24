import React from 'react'
import { inject, observer } from 'mobx-react'

class CarMakeForm extends React.Component {
  render() {
    const { carMakeName, error, setCarMakeName, setError } = this.props.CarMakeFormStore
    const { createCarMake } = this.props.CarMakePageStore

    const handleSubmit = (e) => {
      e.preventDefault()
      if (carMakeName) {
        createCarMake(carMakeName)
        setCarMakeName('')
      } else {
        setError('This field is required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Add car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={carMakeName}
          onChange={(event) => {
            setCarMakeName(event.target.value)
            setError('')
          }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
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
