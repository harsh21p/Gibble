import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
  },
  label: {
    color: '#979797',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
  },
  selected: {
    color: '#305EFF',
  },
  lineWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperMain: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    alignSelf: 'center',
  },
  buttonView: {
    width: '100%',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '5%',
    marginTop: 20,
  },
  next: {
    paddingHorizontal: 70,
    backgroundColor: '#305EFF',
    height: 40,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  middle: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    marginTop:'0%',
    paddingTop:'0%'
  },
  singleInput: {
    width: '45%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '1.5%',
  },
  input: {
    width: '45%',
  },
  singleInputAge: {
    width: '20%',
  },
  inputMain: {
    height: 40,
    fontSize: 14,
  },
  stylelable: {
    fontSize: 14,
  },
});

export default styles;
