import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Icons from '../../Icons';

class EmployeeDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderGenderIcon(gender) {
    switch (gender){
      case 'male':
        return (
          <IonIcons
            name={Icons.male}
            size={20}
            color='#ecf0f1'
          />
        );  
      case 'female':
        return (
          <IonIcons
            name={Icons.female}
            size={20}
            color='#ecf0f1'
          />
        );          
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    const { name, gender, email, dob, cell, image } = params;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}> 
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Image
            source={{ uri: image }}
            style={{height: 70,width: 70,borderRadius: 35}}
          />
          <Text style={{fontSize: 14,marginTop: 10}}>{name.toUpperCase()}</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: '#2ecc71'}}>
          <View style={styles.detailInfo}>
            <View style={styles.icon}>
              {this.renderGenderIcon(gender)}
            </View>
            <View style={styles.text}>
              <Text style={styles.textStyle}>{gender.toUpperCase()}</Text>
            </View>
            
          </View>
          <View style={styles.detailInfo}>
            <View style={styles.icon}>
              <IonIcons
                name={Icons.mail}
                size={20}
                color='#ecf0f1'
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.textStyle}>{email}</Text>
            </View>

          </View>
          <View style={styles.detailInfo}>
            <View style={styles.icon}>
              <IonIcons
                name={Icons.dob}
                size={20}
                color='#ecf0f1'
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.textStyle}>{dob.toUpperCase()}</Text>
            </View>

          </View>
          <View style={styles.detailInfo}>
            <View style={styles.icon}>
              <IonIcons
                name={Icons.cell}
                size={20}
                color='#ecf0f1'
              />
            </View>
            <View style={styles.text}>
              <Text style={styles.textStyle}>{cell.toUpperCase()}</Text>
            </View>

          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  detailInfo: {
    marginTop: 25,
    flexDirection: 'row',
    
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 4,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  }
}

export default EmployeeDetail;