import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  msg: {
    fontSize: 14,
    marginTop: 4,
    color: '#666',
    fontStyle: 'italic',
  },
  input: {
    width: '20%',
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    backgroundColor: 'rgba(108, 132, 157, 0.12)',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  success: {
    color: 'green',
    fontSize: 12,
    marginTop: 4,
  },
  red: {
    color: 'red',
  },
});

export default styles;
