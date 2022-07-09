import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/Index'
import Balance from '../../components/Balance/Index'
import Moviments from '../../components/Moviments/Index'
import Actions from '../../components/Actions/Index'

const list = [
    {
        id:1,
        label: 'Boleto conta luz',
        value: '300,50',
        date: '17/09/2022',
        type: 0 //Despesa
    },
    {
        id:2,
        label: 'Pix Cliente X',
        value: '2.500,00',
        date: '20/09/2022',
        type: 1 //Receita
    },    
    {
        id:3,
        label: 'Boleto conta luz',
        value: '7.200,00',
        date: '22/09/2022',
        type: 1 //Receita
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Iago Ferreira"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Moviments data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
