import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles'; // importa os estilos do arquivo separado

export default function App() {
  // estados para armazenar o nome de usuário, senha, autenticação e mensagem de status
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [mensagem, setMensagem] = useState('');

  // função para lidar com o login
  const handleLogin = async () => {
    // verifica se o usuário e a senha estão corretos
    if (usuario === 'admin' && senha === 'senha') {
      setMensagem('Autenticação bem-sucedida. Redirecionando...');
      setAutenticado(true); // se correto, autentica o usuário
    } else {
      setMensagem('Credenciais inválidas. Tente novamente.'); // mensagem de erro se incorreto
    }
  };

  // se o usuário estiver autenticado, exibe a tela principal do Pomodoro
  if (autenticado) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Temporizador Pomodoro</Text>
        <Text style={styles.temporizador}>25:00</Text>
        <View style={styles.botoesContainer}>
          <View style={styles.botao}>
            <Text style={styles.botaoTexto}>Iniciar</Text>
          </View>
          <View style={styles.botao}>
            <Text style={styles.botaoTexto}>Pausar</Text>
          </View>
          <View style={styles.botao}>
            <Text style={styles.botaoTexto}>Redefinir</Text>
          </View>
        </View>
      </View>
    );
  }

  // se o usuário não estiver autenticado, exibe a tela de login
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="usuário"
          value={usuario}
          onChangeText={setUsuario} // atualiza o estado do nome de usuário
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry // oculta o texto digitado para senha
          value={senha}
          onChangeText={setSenha} // atualiza o estado da senha
        />
        <View style={styles.botao}>
          <Text style={styles.botaoTexto} onPress={handleLogin}>Entrar</Text>
        </View>
      </View>
      <View>
        {mensagem !== '' ? <Text>{mensagem}</Text> : null} {/* exibe a mensagem de status */}
      </View>
    </View>
  );
}
