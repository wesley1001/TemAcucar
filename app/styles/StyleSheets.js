import { StyleSheet } from 'react-native'
import Colors from "./Colors"

const StyleSheets = StyleSheet.create({
  label: {
    color: Colors.brown,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },

  margin: {
    margin: 10,
  },

  marginBottom: {
    marginBottom: 20,
  },

  marginTop: {
    marginTop: 20,
  },

  bigMarginTop: {
    marginTop: 36,
  },

  bigMarginBottom: {
    marginBottom: 36,
  },

  input: {
    height: 40,
    borderColor: Colors.brown, 
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },

  stretch: {
    alignSelf: 'stretch',
  },

  flexEnd: {
    alignSelf: 'flex-end',
  },

  error: {
    color: Colors.pink,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },
})

export default StyleSheets
