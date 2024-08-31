import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', // lavanda claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#D8BFD8', // lavanda média
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
    backgroundColor: '#F8F8FF', // fundo branco fantasma
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7B68EE', // lavanda escura
  },
  temporizador: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40, // maior espaço abaixo do temporizador
    color: '#9370DB', // lavanda moderada
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20, // espaçamento entre o temporizador e os botões
  },
  botao: {
    backgroundColor: '#6A5ACD', // azul ardosia (SlateBlue)
    padding: 10,
    borderRadius: 5,
    width: 90, // define a largura fixa dos botões
    alignItems: 'center', // centraliza o texto dentro dos botões
  },
  botaoTexto: {
    color: '#FFFFFF', // texto branco nos botões
    fontWeight: 'bold',
  },
});
