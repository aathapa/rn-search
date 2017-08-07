import UserData from './UserAPI';

class EmployeesApi {
  static getAllData() {
    return new Promise((resolve,reject) => resolve(UserData))
  }
  
  static getSearchInputName(query) {
    return new Promise((resolve, reject) => {
      let result = UserData.filter(employee => {
        const fullName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`
        return fullName.indexOf(query.toLowerCase()) > -1
      })
      resolve(result)
    })
  }
}

export default EmployeesApi;