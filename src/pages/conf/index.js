import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
   } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Conf(){
  const navigation = useNavigation()
  return(
    <View style={styles.container} >
      <View style={styles.containerLogo}>
      <Text style={styles.title}>Configurações</Text>
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <View style={styles.boxe}>
            
            <Text style={styles.text}>Nome</Text>
            <Text style={styles.text}>Senha</Text>
            <Text style={styles.text}>Segurança da conta</Text>
            <Text style={styles.text}>Email</Text>
            <Text></Text>
            <Text style={styles.text}>Diretrizes da conta</Text>
            <Text style={styles.text}>Preferencia de genero</Text>
            <Text></Text>
            <Text style={styles.text}>Preferencia de estilo </Text>
            <Text style={styles.text}>Caseiro sim[ ] não [  ]</Text>
            <Text></Text>
            <Text style={styles.text}>Idioma</Text>
            <Text style={styles.text}>Notificações</Text>
            <Text></Text>
            <Text style={styles.text}>Sobre</Text>
            <Text style={styles.text}>Logout</Text>
        </View>
        
        <TouchableOpacity 
          style={ styles.button}
          onPress={ () => navigation.navigate('Perfil')}
        >
          <Text style={styles.buttonText}>Voltar para o perfil</Text>
        </TouchableOpacity>
        
      </Animatable.View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  containerLogo: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white'
  },
  text: {
    color: '#000',
    fontSize: 20,
    paddingEnd: '5%' 
  },
  button: {
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  boxe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    width: '85%',
    height: '75%',
    paddingBottom: '55%'

  }
})