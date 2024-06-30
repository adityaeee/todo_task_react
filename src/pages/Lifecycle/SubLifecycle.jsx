import { Component } from 'react'

class SubLifecycle extends Component {
  componentWillUnmount() {
    console.log("Called from componentWillUnmount")
    // eslint-disable-next-line react/prop-types
    this.props.changeValue("Ngorok")
  }
  render() {
    return (
      <div>
        <h1>Sub Lifecycle</h1>
      </div>
    )
  }
}

export default SubLifecycle
