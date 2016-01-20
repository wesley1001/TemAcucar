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
  },

  label: {
    color: Colors.brown,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },

  paragraph: {
    color: Colors.brown,
    fontSize: 16,
    marginBottom: 20,
  },

  scrollView: {
    alignSelf: 'stretch',
    backgroundColor: Colors.beige,
    padding: 10,
  },

  margin: {
    margin: 10,
  },

  noMargin: {
    margin: 0,
  },

  marginVertical: {
    marginVertical: 20,
  },

  marginBottom: {
    marginBottom: 20,
  },

  marginTop: {
    marginTop: 20,
  },

  bigMarginBottom: {
    marginBottom: 36,
  },

  bigMarginVertical: {
    marginVertical: 36,
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

  map: {
    height: 200,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: Colors.brown,
  },

  error: {
    color: Colors.pink,
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
  }
})

export default StyleSheets
