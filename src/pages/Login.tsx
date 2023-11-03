import { Button, Image, Pressable, Text, TextInput, View } from "react-native";

import { SvgXml } from "react-native-svg";

import appleSVG from "../../assets/apple.svg";

export default function Login(props: LoginProps) {
      return (
            <View className="bg-black w-full min-h-screen items-center pt-24">
                  <Text className="text-white text-5xl font-extrabold">Login</Text>
                  <View className="w-3/4 rounded-xl border border-gray-600 flex  items-center bg-black m-0 px-2 py-1">
                        <View className="flex flex-row justify-center items-center gap-4" onTouchStart={() => props.action("apple")}>
                              <SvgXml xml={appleSVG} width={40} height={40}></SvgXml>
                              <Text className="text-xl font-bold text-stone-300  text-center">Apple</Text>
                        </View>
                  </View>

                  <View className="w-3/4 rounded-xl border border-gray-600 flex  items-center bg-black m-0 px-2 py-1">
                        <View className="flex flex-row justify-center items-center gap-4" onTouchStart={() => props.action("github")}>
                              <SvgXml xml={appleSVG} width={40} height={40}></SvgXml>
                              <Text className="text-xl font-bold text-stone-300  text-center">Github</Text>
                        </View>
                  </View>
            </View>
      );
}

type LoginProps = {
      action: Function;
};
