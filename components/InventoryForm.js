import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InventoryForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!name || !qty || !category) {
      alert("Please fill all fields");
      return;
    }
    addItem({ name, qty, category });
    setName("");
    setQty("");
    setCategory("");
  };

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={qty}
        onChangeText={setQty}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="+ Add Item" onPress={handleSubmit} color="#2563eb" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 10, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default InventoryForm;
