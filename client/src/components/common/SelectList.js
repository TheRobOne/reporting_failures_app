import React from 'react';
import PropTypes from 'prop-types';

 const SelectList = ({
     itemList,
     onChange
 }) => {
  return (
    <div>
        <select className="form-control" onChange={onChange}>
            {itemList}
        </select>
    </div>
  )
}

SelectList.propTypes = {
    itemList: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SelectList;