import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//need to fetch alert state, map through alerts state array and provide conditionals to set the component view.

//alerts is destructured state obj from alerts reducer
const Alert = ({ alerts }) => {
  return (
    <div className='alert-wrapper'>
      {alerts.map((alert) => (
        //using dynamic styling with alertType
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ alerts: state.alertReducer }); //state.alert from store.js - combineReducers

export default Alert;
