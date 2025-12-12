import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const InventoryTable = ({ inventory, openEdit, deleteItem }) => {
  return (
    <View style={styles.card}>
      {inventory.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{index + 1}</Text>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.qty}</Text>
          <Text style={styles.cell}>{item.category}</Text>
          <View style={styles.actions}>
            <Button title="Edit" onPress={() => openEdit(index)} color="#10b981" />
            <Button title="Delete" onPress={() => deleteItem(index)} color="#ef4444" />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  cell: { flex: 1, textAlign: "center" },
  actions: { flexDirection: "row", gap: 5 },
});

export default InventoryTable;
