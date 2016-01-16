import { StyleSheet } from 'react-native'
import Colors from "./Colors"

const StyleSheets = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 40,
  },

  headline: {
    color: Colors.brown,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 36,
    marginBottom: 36,
  },

  label: {
    color: Colors.brown,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },

  margin: {
    margin: 10,
  },

  marginTop: {
    marginTop: 20,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: Colors.white,
    backgroundColor: Colors.pink,
    textAlign: 'center',
  },

  link: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.brown,
    textDecorationLine: 'underline',
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
})

export default StyleSheets
