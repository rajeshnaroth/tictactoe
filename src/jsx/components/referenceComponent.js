var React = require('react')
var ReferenceComponent = React.createClass({
	// Initial render
	// getDefaultProps()
	// getInitialState()
	// componentWillMount()
	// render()
	// componentDidMount()

	getInitialState: function() { 
		return {
			items: [{id:1, name:'apple'}, {id:2, name:'banana'}]
		}
	},

	getDefaultProps: function() {

	},

	componentWillMount: function() { // called once before initial render

	},

	componentDidMount: function() { // called once after initial render

	},

	// State change triggers:
	// 1. shouldComponentUpdate(nextProps, nextState)
	// 2. componentWillUpdate(nextProps, nextState)
	// 3. render()
	// 4. componentDidUpdate(oldProps, oldState)
	shouldComponentUpdate: function(nextProps, nextState) { // should render be called?
		return true;
	},
	componentWillUpdate: function(nextProps, nextState) { // prepare for an upcoming update
		// only triggered if shouldComponentUpdate() returns true;
	},
	componentDidUpdate: function(prevProps, prevState) { // prepare for an upcoming update
	
	},

	// Property change triggers:
	// 0. componentWillReceiveProps(nextProps)
	// 1. shouldComponentUpdate(nextProps, nextState)
	// 2. componentWillUpdate(nextProps, nextState)
	// 3. render()
	// 4. componentDidUpdate(oldProps, oldState)
	// 
	// opportunity to react to a property transition before render()
	componentWillReceiveProps: function(nextProps) {

	},

	render: function() {
   		return <ul>{ this.state.items.map(item => <li key={item.name} >{item.name}</li>) }</ul>;
    }
})

export default ReferenceComponent;
