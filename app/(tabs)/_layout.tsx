import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="daily" options={{ title: "Daily Goals" }} />
      <Tabs.Screen name="monthly" options={{ title: "Monthly Goals" }} />
      <Tabs.Screen name="yearly" options={{ title: "Yearly Goals" }} />
    </Tabs>
  );
}
