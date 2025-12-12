import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditModal = ({ item, index, saveEdit, cancelEdit }) => {
  const [name, setName] = useState(item.name);
  const [qty, setQty] = useState(item.qty);
  const [category, setCategory] = useState(item.category);

  useEffect(() => {
    setName(item.name);
    setQty(item.qty);
    setCategory(item.category);
  }, [item]);

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View style={styles.modalBg}>
        <View style={styles.modal}>
          <Text style={styles.title}>Edit Item</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <TextInput style={styles.input} value={qty} onChangeText={setQty} keyboardType="numeric"/>
          <TextInput style={styles.input} value={category} onChangeText={setCategory} />
          <Button title="Save Changes" onPress={() => saveEdit(index, { name, qty, category })} color="#2563eb" />
          <Button title="Cancel" onPress={cancelEdit} color="#ef4444" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBg: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)" },
  modal: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: 300 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#aaa", borderRadius: 8, padding: 10, marginBottom: 10 },
});

export default EditModal;
