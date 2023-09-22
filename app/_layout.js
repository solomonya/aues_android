import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
        }}
      />
      <Tabs.Screen
        name="tabs"
        options={{
          title: "Lab2",
        }}
      />
    </Tabs>
  );
}
