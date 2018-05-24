import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBuildings } from '../../actions/buildingActions';

class Building extends Component {

    componentDidMount() {
        this.props.getBuildings();
    }

    render() {
        const { buildings } = this.props.building;
        let buildingItems;

        buildingItems = buildings.map(building => (
            <option key={building._id} value={building.name}>{building.name}</option>
        ));
        return (
            <div className="col">
                <select className="form-control" onChange={this.props.onChangeHandler}>
                    {buildingItems}
                </select>
            </div> 
        )
    }


}

Building.propTypes = {
    getBuildings: PropTypes.func.isRequired,
    building: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    building: state.building
});

export default connect(mapStateToProps, { getBuildings })(Building);
