import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
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
    ExtraView,
    TextLink,
    TextLinkContent,
    ExtraText
} from './../components/styles';

import { Formik } from 'formik';
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';
import { View, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { updateUserProfile } from 'firebase/auth'; // Import your function for updating the user profile

const { brand, darkLight, primary } = Colors;

export default function Editprofile({ navigation })
 {

    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [dob, setDob] = useState();

    const [fullName, setFullName] = useState(""); // Add state for full name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onUpdateProfile = () => {
        // You need to implement updateUserProfile function
        // It should update the user profile with new information
        // For example: updateUserProfile(auth, { fullName, email, password })
        // Then navigate to the profile screen or any other screen
        Alert.alert("Profile updated");
        navigation.navigate("Profile");
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style='dark' />
                <InnerContainer>
                    <PageTitle>Edit Profile</PageTitle>
                    <SubTitle>Update your information</SubTitle>

                    {show && (
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />
                    )}

                    <Formik
                        initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                            // Handle form submission
                            onUpdateProfile(); // Call the function to update user profile
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>

                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="Enter your full name"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={fullName}
                                    keyboardType="default"
                                    onChange={(text) => setFullName(text)}
                                />

                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="Enter your email address"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={email}
                                    keyboardType="email-address"
                                    onChange={(text) => setEmail(text)}
                                />

                                <MyTextInput
                                    label="Date of Birth"
                                    icon="calendar"
                                    placeholder="YYYY - MM - DD"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('dateOfBirth')}
                                    onBlur={handleBlur('dateOfBirth')}
                                    value={dob ? dob.toDateString() : ''}
                                    isDate={true}
                                    editable={false}
                                    showDatePicker={showDatePicker}
                                />

                                <MyTextInput
                                    label="Password"
                                    icon="lock"
                                    placeholder="Enter your password"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                    onChange={(text) => setPassword(text)}
                                />

                                <Msgbox>
                                    {/* Display any messages if needed */}
                                </Msgbox>

                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Update Profile
                                    </ButtonText>
                                </StyledButton>

                                <Line />

                                <ExtraView>
                                    <ExtraText> Want to cancel? </ExtraText>
                                    <TextLink onPress={() => navigation.goBack()}>
                                        <TextLinkContent>Go back</TextLinkContent>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

