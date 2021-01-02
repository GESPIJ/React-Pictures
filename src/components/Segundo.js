import React from "react"
import ReactDOM from "react-dom"

class SearchBar extends React.Component {
    
    state={
        texto:null,
        error:null
    }
    onInputChange=(e)=>{
        this.setState({
            texto:e.target.value
        })
    }
    // onSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(this.state.texto)
    // }
    render(){
        return (
            <div className="ui-segment">
                <form className="ui form" onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.onSubmit(this.state.texto)
                }}>
                        <div className="field">
                            <input type="text" value={this.state.texto}
                            onChange={this.onInputChange}></input>
                        </div>
                </form>
            </div>
        )
    }
}

export default SearchBar