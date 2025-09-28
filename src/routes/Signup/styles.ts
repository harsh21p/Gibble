import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  containerlogo: {
    width: '100%',
    height: '20%',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input:{
    width: '70%',
    marginBottom: '5%',
  },
  icon:{
    
  },
  name:{
    fontSize: 24,
    color:'rgba(48, 94, 255, 1)'
  },
  container: {
    width: '100%',
    height: '100%',
  },
  container0: {
    width: '100%',
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container1: {
    width: '40%',
    height: '100%',
  },
  container2: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingTop: '35%',
    marginBottom:'10%'
  },
  container3: {
    width: '59%',
    height: '100%',
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '0.1%',
    height: '60%',
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    lineHeight: 54,
    marginBottom: '1%',
  },

  text1: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#666666',
    lineHeight: 20,
    marginBottom: '1%',
  },
  logomain: {
    width: '30%',
    height: '50%',
    resizeMode: 'contain',
    marginLeft: '5%',
    marginTop: '10%',
  },
  image: {
    width: '30%',
    height: '20%',
    alignContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

    imagemain: {
    width: 350,
    height: 350,
    alignContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderColor: 'rgba(159, 61, 251, 1)',
    borderWidth: 1,
    borderStyle:'dashed',
    backgroundColor: 'rgba(159, 61, 251, 0.09)',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '5%',
    alignSelf: 'center',
  },

  circlebutton: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  
  btntext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
