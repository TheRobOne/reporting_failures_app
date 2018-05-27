import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/roomActions';

class Room extends Component {

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

    componentDidMount(){
        this.props.getRooms(this.props.building);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.building !== this.props.building) {
            this.props.getRooms(nextProps.building);
         }
    }

    render() {
        const { rooms_list } = this.props.rooms_list;
        let roomsListItem = rooms_list.map(room => (
            <option key={room._id} value={room.number}>{room.number}</option>
        ));
        return (
            <div className="col">
                <select className="form-control" onChange={this.props.onChangeHandler}>
                   {roomsListItem}
                </select>
            </div>
        )
    }
}

Room.propTypes = {
    getRooms: PropTypes.func.isRequired,
    rooms_list: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    rooms_list: state.room
})

export default connect(mapStateToProps, {getRooms})(Room);