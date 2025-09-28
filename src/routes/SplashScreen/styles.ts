import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
    color: '#666666', 
    lineHeight: 54, 
    fontStyle: 'italic',
    marginBottom: '1%'
  },
  
  logo: {
    width: '30%',
    height: '20%',
    alignContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  button:{
    width: '25%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '5%',
  },
  btntext:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  }
});

export default styles;
