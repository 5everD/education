import React from "react";

class Homework1 extends React.Component {

    constructor(props) {
        super();
        this.s2 = 201
        this.state = {
            s1: props.p1
        }
        console.log(props)
    }

    componentDidMount(){
      let countMount = this.state.s1;
      countMount=countMount*5;
      this.setState({
          s1: countMount
      });
      this.s2 = this.s2 * 5;
      return (this.state.s1, this.s2)
    }

    buttonHandler = () => {
        let countMount = this.state.s1;
        countMount=countMount*50;
        this.setState({
            s1: countMount
        });
        this.s2 = this.s2 * 50;
        return (this.state.s1, this.s2)
    }

    render() {

        return (
            <>
            <button onClick={this.buttonHandler}>Button</button>
            <div>{this.state.s1}</div>
            <div>{this.s2}</div>
            </>
        )
    }
}

export default Homework1;