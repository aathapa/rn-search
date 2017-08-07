import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native'
import EmployeeList from '../components/EmployeList/EmployeList';

class Employee extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <EmployeeList />
    );
  }
}

export default Employee;