import React, { Component } from 'react';

class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/buildings')
            .then((res) => {
                return res.json()
            })
            .then(data => {
                let buildings = '';
                data.forEach(building => {
                    buildings += `
                        <option value=${building.name}>${building.name}</option>
                    `
                })
                this.setState({ buildings });
            })
    }

    render() {
        return (
            <div className="col">
                <select className="form-control" onChange={this.props.onChangeHandler} dangerouslySetInnerHTML={{ __html: this.state.buildings }} />
            </div> 
        )
    }


}

export default Building;
