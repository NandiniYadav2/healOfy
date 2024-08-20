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
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {
    
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000,0,1));
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

  return (
    <KeyboardAvoidWrap>
     <StyledContainer>
     <StatusBar style='dark'/>
        <InnerContainer>
             <PageTitle>HEALOFY</PageTitle>
             <SubTitle>Sign Up</SubTitle>

             {show &&(
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display= "compact"
                    onChange={onChange}
                />
             )}

             <Formik
             initialValues={{fullName:'', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
             onSubmit={(values) =>{
                console.log(values);
                navigation.navigate("Home");
             }}
             >
               {({handleChange, handleBlur, handleSubmit, values})=>(
                <StyledFormArea>
               
                <MyTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="xyz"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    values={values.fullName}
                />

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
                    label="Date of Birth"
                    icon="calendar"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('dateOfBirth')}
                    onBlur={handleBlur('dateOfBirth')}
                    values={dob ? dob.toDateString() : ''}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
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

                <MyTextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    values={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                />

                <Msgbox>
                    ...
                </Msgbox>

                <StyledButton onPress={handleSubmit}>
                    <ButtonText>
                       Signup
                    </ButtonText>
                </StyledButton>

                <Line/>

                {/* <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>
                       Sign in with Google
                    </ButtonText>
                </StyledButton> */}

                <ExtraView>
                <ExtraText> Already have an account? </ExtraText>
                <TextLink onPress={()=> navigation.navigate("Login")}>
                    <TextLinkContent>Login</TextLinkContent>
                </TextLink>
                </ExtraView>

               </StyledFormArea>)}
             </Formik>
        </InnerContainer>
     </StyledContainer>
     </KeyboardAvoidWrap>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
return(
    <View>
     <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
     </LeftIcon>
     <StyledInputLabel>{label}</StyledInputLabel>
   {!isDate &&  <StyledTextInput {...props}/>}
   {isDate && (
    <TouchableOpacity onPress={showDatePicker}>
    <StyledTextInput {...props}/>
   </TouchableOpacity>
   )}
    {isPassword && (
        <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
         <Ionicons name={hidePassword ? 'eye-off' : 'eye' } size={30} color={darkLight}/>
        </RightIcon>
    )}
    </View>
);
};

export default Signup;