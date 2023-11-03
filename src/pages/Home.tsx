import { Text, View } from "react-native";

export default function Home(props: HomeProps) {
      return (
            <View className="bg-black w-full min-h-screen flex justify-center items-center">
                  <Text className="text-white text-5xl font-extrabold">Home</Text>
                  <Text className="text-white text-xl font-bold">{"token: " + props.token}</Text>
            </View>
      );
}

type HomeProps = {
      token: String;
};
