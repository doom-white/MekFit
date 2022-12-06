import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userHometown, setUserHometown] = useState('');
  const handleSubmit = () => {
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };
    console.log(user);
  };
  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaş"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
