import {Image, StyleSheet, Text, View, Pressable, } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')}/>
     <View style={styles.actions}>
      <Text style={styles.timer}>25:00</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>
    </View>
    <View style={styles.footer}>
      <Text  style={styles.footerText} >
        Projeto Criado com Alura.
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:  
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: '#021123',
              gap: 40

            },

  actions: 
          	{
              padding: 24,
              backgroundColor: '#14448080',
              width: '80%',
              borderRadius: 32,
              borderWidth: 2,
              borderColor: '#144480',
              gap: 32,
            },
  timer: 
            {
              fontSize: 54,
              color: '#FFF',
              fontWeight: 'bold',
              textAlign: 'center',
            },
  button:
            {
              backgroundColor: '#B872FF',
              borderRadius: 32,
              padding: 8,
            },
  buttonText:
            {
              fontSize: 18,
              color: '#021123',
              textAlign: 'center',
              fontWeight: 'bold',
            },
  footer:
            {
              width: '80%',
            },
  footerText: 
            {
              textAlign: 'center',
              color: '#98A0A8',
              fontSize: 12.5,
            }
})
