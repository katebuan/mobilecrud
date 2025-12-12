import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";
import EditModal from "./components/EditModal";

export default function App() {
  const [inventory, setInventory] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = (item) => setInventory([...inventory, item]);
  const openEdit = (index) => setEditIndex(index);
  const cancelEdit = () => setEditIndex(null);
  const saveEdit = (index, updatedItem) => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = updatedItem;
    setInventory(updatedInventory);
    setEditIndex(null);
  };
  const deleteItem = (index) => {
    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>📦 INVENTORY MANAGEMENT</Text>
      </View>
      <ScrollView style={styles.content}>
        <InventoryForm addItem={addItem} />
        <InventoryTable
          inventory={inventory}
          openEdit={openEdit}
          deleteItem={deleteItem}
        />
      </ScrollView>
      {editIndex !== null && (
        <EditModal
          item={inventory[editIndex]}
          index={editIndex}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef1f5" },
  navbar: { backgroundColor: "#1e3a8a", padding: 20 },
  navbarText: { color: "#fff", fontSize: 22, fontWeight: "600", textAlign: "center" },
  content: { paddingHorizontal: 20, marginTop: 20 },
});
