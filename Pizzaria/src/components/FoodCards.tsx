import { Text, TouchableOpacity, View } from "react-native";

type FoodCardProps = {
  name: string;
  price: number;
  emoji: string;
};

export default function FoodCard({ name, price, emoji }: FoodCardProps) {
  return (
    <View className="w-[48%] items-center bg-white border border-[#EBDCC4] rounded-2xl p-4 mb-3">
      <Text className="text-5xl">{emoji}</Text>

      <Text className="mt-3 min-h-[56px] text-lg font-bold text-center text-stone-900">
        {name}
      </Text>

      <Text className="mt-1 font-bold text-stone-800">
        R$ {price.toFixed(2).replace(".", ",")}
      </Text>

      <TouchableOpacity className="mt-3 w-full h-11 items-center justify-center bg-red-600 rounded-full">
        <Text className="font-bold text-white">
          Adicionar
        </Text>
      </TouchableOpacity>
    </View>
  );
}