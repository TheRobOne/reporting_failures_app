import React, { Component } from 'react';

class Building extends Component {
    constructor() {
        super();
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
                let buildings = `<select class="form-control">`;
                data.forEach(building => {
                    buildings += `
                        <option>${building.name}</option>
                    `
                })
                buildings += '</select>';
                console.log(buildings)
                this.setState({ buildings });
            })
    }

    render() {
        return (
            <div className="col" dangerouslySetInnerHTML={{ __html: this.state.buildings }} />
        )
    }


}

export default Building;
