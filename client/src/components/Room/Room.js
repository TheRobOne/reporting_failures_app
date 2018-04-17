import React, { Component } from 'react';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
    }

    fetchRooms(props) {
        const { building } = props || this.props;
        fetch(`http://localhost:3000/rooms/building/${building}`)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                let rooms = '';
                data.forEach(room => {
                    rooms += `
                        <option value="${room.number}">${room.number}</option>
                    `
                })
                this.setState({ rooms });
            })
    }

    componentDidMount() {
        this.fetchRooms();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.building !== this.props.building) {
            this.fetchRooms(nextProps);
         }
    }

    render() {
        return (
            <div className="col">
                <select className="form-control" dangerouslySetInnerHTML={{ __html: this.state.rooms }} onChange={this.props.onChangeHandler}/>
            </div>
        )
    }


}

export default Room;