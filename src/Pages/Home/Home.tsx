import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";


export default function Home({ navigation }) {
  function OpenScreen(){
    navigation.navigator('Agendar')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.areaText}>
          <Text style={styles.textMain}>
            Quer um trato na{" "}
            <Text style={{ fontWeight: "bold", color: "#8a4932" }}>
              Peruca
            </Text>?
          </Text>
        </View>
      </View>

      <View style={styles.mainArea}>
        <View style={styles.textAreaCenter}>
          <Text style={styles.textAgendar}>Agende agora um Horário!</Text>
        </View>

        <View style={styles.buttonOutArea}>
          <TouchableOpacity 
          style={styles.buttonInsideArea}
          activeOpacity={0.5}
         
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >
              Clique Aqui!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
