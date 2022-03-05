import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import CarMakeEditPageStore from './CarMakeEditPageStore'

class CarMakeEditPage extends React.Component {
  componentDidMount() {
    const { carMakeEditPageStore, match, history } = this.props
    carMakeEditPageStore.initialize(Number(match.params.makeId), history)
  }

  render() {
    const {carMakeEditPageStore} = this.props

    if (!carMakeEditPageStore.newName) {
      return (
        <div>
          <p>No car make with this ID</p>
          <Link to="/makes">Back</Link>
        </div>
      )
    }

    return (
      <form onSubmit={(event) => {
        carMakeEditPageStore.handleSubmit(event)
      }}>
        <h2>Edit car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={carMakeEditPageStore.newName}
          onChange={(event) => {
            carMakeEditPageStore.setNewName(event.target.value)
            carMakeEditPageStore.setError('')
          }}
        />
        {carMakeEditPageStore.error && <div style={{ color: 'red' }}>{carMakeEditPageStore.error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Edit car make
          </button>
          <Link to="/makes" className="button">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

export default inject(() => ({
  carMakeEditPageStore: new CarMakeEditPageStore()
}))(withRouter(observer(CarMakeEditPage)))
