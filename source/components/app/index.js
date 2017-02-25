import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class App extends Component {
  render() {
    return  <MuiThemeProvider>
      <div>
        <RaisedButton label='Default' />
        <br/>
        <Avatar src='./source/components/app/test.png'/>
        <br/>
        <TextField
          hintText="Message Field"
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine={true}
          rows={2}
        />
      </div>
    </MuiThemeProvider>
  }
}