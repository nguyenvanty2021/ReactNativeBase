import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
const ProductListing = () => {
  const navigation = useNavigation()
  const onPress = () => {
    alert("123");
    Keyboard.dismiss(); // mỗi lần input xong click sẽ ẩn đi keyboard, khi user click vào input sẽ show ra lại
  };
  const listTemp = [{id: 1, value: '111'}];
  return (
    <ImageBackground resizeMode="cover" source={require("./../../assets/icon.png")}>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./../../assets/favicon.png")}
        />
        <Text onPress={() => navigation.navigate('ProductDetail', {
          productID: 1
        })} >Redirect Product Detail</Text>
        <Pressable onPress={() => alert("123")}>
          <Text>text abc</Text>
        </Pressable>
        <ActivityIndicator color="red" size="large" />
        <View>
          <FlatList
            data={listTemp}
            renderItem={(item) => console.log(item.value)}
          />
        </View>
        <View>
          <FlatList
            data={listTemp}
            renderItem={(item) => <Text>{item.value}</Text>}
            keyExtractor={(item) => item.id}
            // numColumns={2}
          />
        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
          value='AAABBBCCC'
           // secureTextEntry={true} // khi nhập data sẽ hiện dấu * thay vì hiện ra số luôn
            onChangeText={(text) => console.log(text)}
            placeholder="Input Your task"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          disabled={false} // có thể disable hiệu ứng
          onPress={onPress}
        >
          <View>
            <Text>Button</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text>Top Left</Text>
              <Text>Center</Text>
              <Text>Bottom Right</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default ProductListing;
