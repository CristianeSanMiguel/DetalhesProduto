import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/271/271228.png",
            }}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Produto</Text>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Image
            source={{
              uri: liked
                ? "https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                : "https://cdn-icons-png.flaticon.com/128/2589/2589175.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.productCard}>
        <Text style={styles.productTitle}>Panquecas</Text>
        <Image
          source={{
            uri: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/fluffyamericanpancak_74828_16x9.jpg",
          }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>R$ 12,99</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/616/616490.png",
            }}
            style={styles.icon}
          />
          <Text style={styles.infoText}>4.8</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/599/599502.png",
            }}
            style={styles.icon}
          />
          <Text style={styles.infoText}>60 calorias</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/1584/1584892.png",
            }}
            style={styles.icon}
          />
          <Text style={styles.infoText}>20-30 Min</Text>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.descriptionText}>
          Deliciosas panquecas fofinhas, perfeitas para um café da manhã
          especial. Feitas com ingredientes selecionados para garantir sabor e
          qualidade.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Compre Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  smallIcon: {
    width: 12,
    height: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  productCard: {
    backgroundColor: "#ffecb3",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffca28",
    borderRadius: 25,
  },
  quantityButton: {
    fontSize: 22,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#333",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 5,
    color: "#333",
  },
  descriptionBox: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCartButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#ffca28",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffca28",
    alignItems: "center",
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "#ffca28",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
