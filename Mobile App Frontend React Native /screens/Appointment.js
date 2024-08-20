import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
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
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';
import { View } from 'react-native';

const { brand, darkLight, primary } = Colors;

const Appointment = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style='dark' />
                <InnerContainer>
                    <PageTitle>Appointment</PageTitle>
                    <SubTitle>Book an appointment with a doctor</SubTitle>

                    <Formik
                        initialValues={{ name: '', email: '', password: '', timing: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                            // Perform appointment booking logic here
                        }}
                    >
                        {({ handleChange, handleBlur, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="John Doe"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    values={values.name}
                                />

                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="john@example.com"
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

                                <MyTextInput
                                    label="Preferred Timing"
                                    icon="clock"
                                    placeholder="Select preferred timing"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('timing')}
                                    onBlur={handleBlur('timing')}
                                    values={values.timing}
                                />


                                <StyledButton onPress={() => navigation.navigate("Home")}>
                                    <ButtonText>
                                        Book Appointment
                                    </ButtonText>
                                </StyledButton>

                                <Line />

                                <ExtraView>
                                    <ExtraText> Already have an account? </ExtraText>
                                    <TextLink onPress={() => navigation.navigate("Login")}>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>

                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidWrap>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Appointment;
