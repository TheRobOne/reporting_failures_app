import React, { Component } from 'react';

class Room extends Component {
    constructor() {
        super();
        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/rooms')
            .then((res) => {
                return res.json()
            })
            .then(data => {
                let rooms = '<select class="form-control">';
                data.forEach(room => {
                    rooms += `
                        <option>${room.number}</option>
                    `
                })
                rooms += '<select/>';
                this.setState({ rooms });
            })
    }

    render() {
        return (
            <div className="col" dangerouslySetInnerHTML={{ __html: this.state.rooms }}/>
        )
    }


}

export default Room;