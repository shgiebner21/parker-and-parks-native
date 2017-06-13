import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView } from 'react-native'
import { Form, Separator, InputField } from 'react-native-form-generator'

class Login extends Component {
  render() {
    const props = this.props

    return(
      <View cls='mt3'>
        <Text>I am a Login page</Text>
        <View cls='ma3'>
          <ScrollView>
            <Form ref='login form'>
              <InputField ref='e-mail'
                          label='E-Mail Address'
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
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Login))
