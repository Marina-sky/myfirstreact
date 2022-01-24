import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'

class CarMakeEditPage extends React.Component {
  render() {
    const { makeId } = this.props.match.params
    const { carMakes, editCarMake } = this.props.CarMakePageStore

    const currentCarMake = carMakes.find(
      (make) => make.id === Number(makeId),
    )

    const { error, newName, setError, setNewName } = this.props.CarMakeEditPageStore

    if (!currentCarMake) {
      return (
        <div>
          <p>No car make with this ID</p>
          <Link to="/makes">Back</Link>
        </div>
      )
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (newName) {
        editCarMake(Number(makeId), newName)
        this.props.history.push('/makes')
      } else {
        setError('This field is required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit car make</h2>
        <label>Name</label>
        <input
          className="u-full-width"
          type="text"
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value)
            setError('')
          }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
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

export default inject('CarMakeEditPageStore', 'CarMakePageStore')(observer(withRouter(CarMakeEditPage)))
