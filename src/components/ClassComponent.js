import React from "react"
import MainLayout from "./MainLayout"

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log("did mount")
  }
  componentDidUpdate() {
    console.log("did update")
  }
  componentDidCatch() {
    console.log("did catch")
  }

  componentWillUnmount() {
    console.log("will unmount")
  }

  render() {
    return (
      <MainLayout>
        <div>
          <p>Example Class</p>
          <br />
          <>Count: {this.state.count}</>
          <br />
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              })
            }}>
            Click me
          </button>
        </div>
      </MainLayout>
    )
  }
}
