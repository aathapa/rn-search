import { StackNavigator } from 'react-navigation';
import Employee from './containers/EmployeList/EmployeList';
import EmployeeDetail from './containers/EmployeeDetail/EmployeeDetail';

const AppRouter = StackNavigator({  
  Employee: {
    screen: Employee,
    navigationOptions: {
      title: 'Search Name',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  },
  EmployeeDetail: {
    screen: EmployeeDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
      headerStyle: {
        backgroundColor: '#fff'
      }
    })
  }
});

export default AppRouter;