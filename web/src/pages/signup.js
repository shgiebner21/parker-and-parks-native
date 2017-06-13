import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Form, Separator, InputField } from 'react-native-form-generator'
import TextField from '../components/input-text'

 const saveSignup = (family) => (dispatch, getState) => {
  const { db, family } = getState()
  console.log('saveSignup family is ', family)
  db.post(family)
    .then(fam => {
      if (fam.ok) {
        history.push('/')
      }
    })
    .catch(err => console.log(err))
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
{/*                onSubmitEditing={props.dispatch(saveSignup(props.history, props.family)) }   */}
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
          </Form>
        </ScrollView>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Signup))
