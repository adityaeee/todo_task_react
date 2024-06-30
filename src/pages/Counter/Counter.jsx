import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counter/counterSlice";

// var counter = 0;

const mapStateToProps = (reduxState) => {
  return {
    count: reduxState.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("DEBUG: dispatch", dispatch);
  return {
    counterIncrement: () => dispatch(increment()),
    counterDecrement: () => dispatch(decrement()),
    counterIncrementBy5Amount: () => dispatch(incrementByAmount(5)),
  };
};

class Counter extends Component {
  //   state = { count: 0 };

  counterIncrement = async () => {
    this.setState({ count: this.state.count + 1 });
    // await this.setState({ count: this.state.count + 1 });
    // await this.setState({ count: this.state.count + 1 });
    // await this.setState({ count: this.state.count + 1 });
    // counter += 1;
  };

  counterDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    // counter -= 1;
  };

  render() {
    console.log("DEBUG: props", this.props);
    console.log(
      "DEBUG: props.counterIncrement",
      typeof this.props.counterIncrement
    );
    return (
      <div
        style={{
          backgroundColor: "yellow",
          height: "100%",
        }}
        className="d-flex gap-3 full-height justify-content-center align-items-center"
      >
        <button
          onClick={this.props.counterDecrement}
          className="btn btn-primary rounded-0"
        >
          -
        </button>
        <h1>
          angka: {this.props.count}
          {/* var counter: {} */}
        </h1>
        <button
          onClick={this.props.counterIncrement}
          className="btn btn-primary rounded-0"
        >
          +
        </button>
        <button
          onClick={this.props.counterIncrementBy5Amount}
          className="btn btn-primary rounded-0"
        >
          +=5
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  counterIncrement: PropTypes.func,
  counterDecrement: PropTypes.func,
  counterIncrementBy5Amount: PropTypes.func,
};

// export default Counter;
const ConnectedWithReduxCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedWithReduxCounter;
