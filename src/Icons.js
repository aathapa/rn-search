import { Platform } from 'react-native';

export default Icons = {
  ...Platform.select({
    android: {
      female: 'md-female',
      male: 'md-male',
      mail: 'md-mail',
      dob: 'md-calendar',
      cell: 'md-call'
    },
    ios: {
      female: 'ios-female',
      male: 'ios-male',
      mail: 'ios-mail',
      dob: 'ios-calendar',
      cell: 'ios-call'
    }
  })
}