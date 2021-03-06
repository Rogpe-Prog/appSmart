import React  from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const App = () => {
  
  
  const addEntry = () => {
    alert('Abrir tela de adiconar lançamento')
  }


  return(
    <View style={{padding: 10,}}>
      <Text style={{
        fontSize: 22, 
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        }}>Saldo: $2.102,45</Text>
        <Button 
         onPress={addEntry}
         title='Adicionar'></Button>

         <Text style={{
          fontSize: 22, 
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10, }}>Categorias</Text>

          <FlatList
            data={[
              {key: 'Alimentação: $200'},
              {key: 'Conbustível: $12'},
              {key: 'Aluguel: $120'},
              {key: 'Lazer: $250'},
              {key: 'Outros: $1200'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
            keyExtractor={(item) => item.key}
          ></FlatList>
         
         
         <Text style={{
          fontSize: 22, 
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10, }}>Últimos Lançamentos</Text>

          <FlatList
            data={[
              {key: 'Padaria Asa Branca: $10'},
              {key: 'Supermercado Isadora: $190'},
              {key: 'Posto Ipiranga: $190'},
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
            keyExtractor={(item) => item.key}
          ></FlatList>

    </View>
  )
}

const styles = StyleSheet.create({

})

export default App