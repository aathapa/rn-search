import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import EmployeData from '../../../config/search';
import IonIcons from 'react-native-vector-icons/Ionicons';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      text: ''
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    let userData = await EmployeData.getAllData();
    this.setState({ userData })
  }
  
  async searchInputOnChange(text) {
    if (text.length < 1) {
      this.getData();
      this.setState({text})
    }
    let res = await EmployeData.getSearchInputName(text);
    this.setState({ text, userData: res })
  }

  renderContent(item, index,navigate) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate('EmployeeDetail', {
            name: `${item.name.first} ${item.name.last}`,
            gender: item.gender,
            email: item.email,
            dob: item.dob,
            cell: item.cell,
            image: item.picture.large
          })
        }  
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 60,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View style={{flex: 1}}>
          <Image
            source={{ uri: item.picture.large}}
            style={{height: 40,width: 40,borderRadius: 20}}
          />
        </View>
        <View style={{flex:5}}>
          <Text>{`${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`}</Text>
        </View>
        
      </TouchableOpacity>
      
    );
  }

  render() {
    const{ navigate } = this.props.navigation
    return (
      <TouchableWithoutFeedback
        onPress={()=> Keyboard.dismiss()}
      >
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <IonIcons name="md-search" size={25} color='#fff' />
            </View>
            <View style={{ flex: 10 }}>
              <TextInput
                style={{ height: 40, }}
                value={this.state.text}
                onChangeText={(text) => this.searchInputOnChange(text)}
                placeholder='Search'
                placeholderTextColor='#fff'
                autoCorrect={false}
                autoCapitalize='none'
                clearTextOnFocus={true}
              />
            </View>

          </View>
          <View style={{ flex: 13, backgroundColor: '#fff' }}>
            <FlatList
              data={this.state.userData}
              renderItem={({ item, index }) => this.renderContent(item, index, navigate)}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
      
      
    );
  }
}

export default EmployeeList