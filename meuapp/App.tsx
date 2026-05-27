import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [lista, setLista] = useState([
    { id: '1', nome: 'Arroz', quantidade: 2 },
    { id: '2', nome: 'Feijão', quantidade: 1 },
    { id: '3', nome: 'Macarrão', quantidade: 3 },
    { id: '4', nome: 'Leite', quantidade: 4 },
    { id: '5', nome: 'Pão', quantidade: 10 },
    { id: '6', nome: 'Ovos', quantidade: 12 },
    { id: '7', nome: 'Café', quantidade: 1 },
    { id: '8', nome: 'Açúcar', quantidade: 2 },
  ]);

  const removerItem = (id: string) => {
    setLista(lista.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>
              {item.nome} - {item.quantidade}
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => removerItem(item.id)}
            >
              <Text style={styles.textoBotao}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  item: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
  },
  botao: {
    backgroundColor: 'red',
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
});