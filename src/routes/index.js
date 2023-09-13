import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import Perfil from '../pages/perfil'
import Cadastro from '../pages/cadastro'
import Conf from '../pages/conf'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="Cadastro" 
        component= { Cadastro } 
        options= { {headerShown: false} }
        />
        <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Conf'
        component={Conf}
        options={{headerShown: false}}
        />
        
    </Stack.Navigator>
  )
}