import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBuildings } from '../../actions/buildingActions';
import SelectList from '../common/SelectList';

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
                <SelectList onChange={this.props.onChangeHandler} itemList={buildingItems}/>
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
