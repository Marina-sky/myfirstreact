import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'

class CarMakeEditPage extends React.Component {
  componentDidMount() {
    const { makeId } = this.props.match.params
    const {CarMakeEditPageStore, CarMakePageStore} = this.props
    const currentCarMake = CarMakePageStore.carMakes.find(
      (make) => make.id === Number(makeId),
    )
    CarMakeEditPageStore.setNewName(currentCarMake ? currentCarMake.name : '')
  }

  render() {
    const { makeId } = this.props.match.params
    const {CarMakeEditPageStore, CarMakePageStore} = this.props

    if (!CarMakeEditPageStore.newName) {
      return (
        <div>
          <p>No car make with this ID</p>
          <Link to="/makes">Back</Link>
        </div>
      )
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (CarMakeEditPageStore.newName) {
        CarMakePageStore.editCarMake(Number(makeId), CarMakeEditPageStore.newName)
        this.props.history.push('/makes')
      } else {
        CarMakeEditPageStore.setError('This field is required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={CarMakeEditPageStore.newName}
          onChange={(event) => {
            CarMakeEditPageStore.setNewName(event.target.value)
            CarMakeEditPageStore.setError('')
          }}
        />
        {CarMakeEditPageStore.error && <div style={{ color: 'red' }}>{CarMakeEditPageStore.error}</div>}
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

export default inject('CarMakeEditPageStore', 'CarMakePageStore')(withRouter(observer(CarMakeEditPage)))
