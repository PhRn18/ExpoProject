import React, {useState} from "react";
import {View,Text, TextInput, Button} from "react-native"
import ResultIMC from "./ResultIMC";

export default function Form(){

    const [height,setHeight] = useState(null)
    const [weight, setWeight] = useState(null) 
    const [messageimc, setMessageimc] = useState("Prencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton,setTextButton] = useState(null)

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex 1.75 (metros)" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex 80.60 (Kg)" keyboardType="numeric"/>
                <Button title="Calcular IMC" onPress={() => {alert(1)}}/>
            </View>
            <ResultIMC messageResultIMC ={messageimc} resultIMC = {imc}/>
        </View>
    )
}