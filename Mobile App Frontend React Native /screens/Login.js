import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    SubTitle,
    RightIcon,
    LeftIcon,
    ButtonText,
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    Msgbox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

import {Formik} from 'formik';
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';
import { View } from 'react-native';

const {brand, darkLight, primary} = Colors;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidWrap>
     <StyledContainer>
     <StatusBar style='dark'/>
        <InnerContainer>
             <PageLogo
                 resizeMode="cover" source={require('./../assets/healofy.png')} 
                />
             <PageTitle>HEALOFY</PageTitle>
             <SubTitle>Account Login</SubTitle>
            
             <Formik
             initialValues={{email: '', password: ""}}
             onSubmit={(values) =>{
                console.log(values);
                navigation.navigate("Home");
             }}
             >
               {({handleChange, handleBlur, values})=>(
                <StyledFormArea>
               
                <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="xyz.gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    values={values.email}
                    keyboardType="email-address"
                />

                <MyTextInput
                    label="Password"
                    icon="lock"
                    placeholder="* * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    values={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />

                <Msgbox>
                    ...
                </Msgbox>

                <StyledButton onPress={()=> navigation.navigate("Home")}>
                    <ButtonText>
                       Login 
                    </ButtonText>
                </StyledButton>

                <Line/>

                {/* <StyledButton google={true} onPress={()=> navigation.navigate("Home")}>
                <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>
                       Sign in with Google
                    </ButtonText>
                </StyledButton> */}

                <ExtraView>
                <ExtraText> Don't have an account? </ExtraText>
                <TextLink onPress={()=> navigation.navigate("Signup")}>
                    <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
                </ExtraView>

               </StyledFormArea>)}
             </Formik>
        </InnerContainer>
     </StyledContainer>
     </KeyboardAvoidWrap>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
return(
    <View>
     <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
     </LeftIcon>
     <StyledInputLabel>{label}</StyledInputLabel>
    <StyledTextInput {...props}/>
    {isPassword && (
        <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
         <Ionicons name={hidePassword ? 'eye-off' : 'eye' } size={30} color={darkLight}/>
        </RightIcon>
    )}
    </View>
);
};

export default Login;