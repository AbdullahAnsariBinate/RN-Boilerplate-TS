import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Decrement, Increment } from 'src/redux/constant';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [iscount, setIsCount] = useState(0);
  const GetData = useSelector((state: any) => state?.pageList?.count);
  console.log('GetData', GetData);

  useEffect(() => {
    console.log('GetData:', GetData);
    if (GetData) {
      setIsCount(GetData);
    }
  }, [GetData]);

  return (
    <View style={{marginTop: 30}}>
      <Text style={{color: 'black'}}>Count: {iscount}</Text>
      <Button title="Increment" onPress={() => dispatch({type: Increment})} />
      <Button title="Decrement" onPress={() => dispatch({type: Decrement})} />
    </View>
  );
};

export default Register;
