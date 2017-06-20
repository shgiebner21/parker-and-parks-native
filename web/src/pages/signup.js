import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Form, Separator, InputField } from 'react-native-form-generator'
import TextField from '../components/input-text'


const addFamily = {parentFirst: "Jen",
  parentLast: "Kloska",
  eMail: "kloska@lowes.com",
  cellPhone: "8036227075",
  streetAddress: "5555 Main Street",
  city: "Charlotte",
  state: "NC",
  zip: "55555",
  password: "kloska",
  timeStamp: "June 16th 2017, 3:14 pm",
  familyId: "JenKloskakloska@lowes.com8036227075"}

const handleSubmit = (formData) => {
  console.log('inside handleSubmit function, JSON formData is ', JSON.stringify(formData))
  fetch('https://localhost:8080/family', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then(resp => console.log('exiting handleSubmit function'))
}


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {}
    }
  }
  handleFormChange(formData) {
    console.log(formData)
    this.setState({ formData: formData })
    this.props.onFormChange && this.props.onFormChange(formData)
  }


  render() {

    return(
      <View cls='mt3'>
        <View cls='aic ma3'>
          <Text cls='red bg-lightgreen b h2'>Signup page</Text>
        </View>
        <ScrollView>
          <Form ref='signup form'
                onChange={this.handleFormChange.bind(this)}
          >
            <InputField ref='first_name'
                        label='Parent First Name'
                        placeholder='enter first name here'

                        optional={false}
            />
            <InputField ref='last_name'
                        label='Parent Last Name'
                        placeholder='enter last name here'
                        optional={false}
            />
            <InputField ref='e-mail'
                        label='E-Mail Address'
                        keyboardType='email-address'
                        optional={false}
            />
            <InputField ref='cell_phone'
                          label='Cell Phone'
                          optional={false}
            />
            <InputField ref='street_address'
                          label='Street Address'
                          optional={false}
            />
            <InputField ref='street_address2'
                            label='Street Address 2 (optional)'
                            optional={true}
            />
            <InputField ref='city'
                          label='City'
                          optional={false}
            />
            <InputField ref='state'
                          label='State'
                          optional={false}
            />
            <InputField ref='zip'
                          label='Zip Code'
                          optional={false}
            />
            <InputField ref='password'
                          label='Password'
                          placeholder='Must contain xxx'
                          optional={false}
            />
          <Button title='Signup'
                  onPress={ () => handleSubmit(addFamily) } />
          </Form>
        </ScrollView>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Signup))
