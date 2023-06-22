import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

const ProductDetail = () => {
  const router = useRoute()
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button onPress={() => alert('123')} title='Add Favorite' ></Button>
      }
    })
  }, [])
  console.log(router?.params?.productID)
    return (
      <View>
        <Text>BBBB</Text>
      </View>
    );
  };
  export default ProductDetail