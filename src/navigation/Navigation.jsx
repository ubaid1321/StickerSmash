import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="recipe" component={RecipeListScreen} />
          <Stack.Screen name="details" component={RecipeDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;