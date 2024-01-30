import { useCallback, useMemo, useState } from "react";
import Screen from "../components/Screen";
// import validator from 'validator';
import { ScrollView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
});

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [name, setName] = useState('');

    // 입력값 확인
    // const emailErrorText = useMemo(() => {
    //     if (email.length === 0) {
    //         return '이메일을 입력해 주세요';
    //     }
    //     if (!validator.isEmail(email)) {
    //         return '올바른 이메일이 아닙니다'
    //     }
    //     return null;
    // }, [email]);
    
    const passwordErrorText = useMemo(() => {
        if (password.length === 0) {
          return '비밀번호를 입력해주세요.';
        }
        if (password.length < 6) {
          return '비밀번호는 6자리 이상이여야합니다';
        }
        if (password !== confirmedPassword) {
          return '비밀번호를 확인해주세요.';
        }
        return null;
    }, [password, confirmedPassword]);
    
    const confirmedPasswordErrorText = useMemo(() => {
        if (confirmedPassword.length === 0) {
            return '비밀번호를 입력해주세요.';
        }
        if (confirmedPassword.length < 6) {
            return '비밀번호는 6자리 이상이여야합니다';
        }
        if (password !== confirmedPassword) {
            return '비밀번호를 확인해주세요.';
        }
    }, [password, confirmedPassword]);
    
    const nameErrorText = useMemo(() => {
        if (name.length === 0) {
            return '이름을 입력해주세요.';
        }
        return null;
    }, [name.length]);
    
    // 입력 받은 내용 저장
    const onChangeEmailText = useCallback((text: string) => {
        setEmail(text);
    },[]);

    const onChangePasswordText = useCallback((text: string) => {
        setPassword(text);
    }, []);
    
    const onChangeConfirmedPasswordText = useCallback((text: string) => {
        setConfirmedPassword(text);
    }, []);
    
    const onChangeNameText = useCallback((text: string) => {
        setName(text);
    }, []);

    

    return <Screen title="회원가입">
        <ScrollView style={styles.container}>
            
        </ScrollView>
    </Screen>;
}

export default SignupScreen;