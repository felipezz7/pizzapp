import FoodCard from "../components/FoodCards";
import { foods } from "../constants/foods";

export default function HomeScreen() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.header}>
          <p style={styles.greeting}>
            Olá! 👋
          </p>

          <h1 style={styles.title}>
            O que deseja comer hoje?
          </h1>
        </div>

        <div style={styles.banner}>
          <div style={styles.checkered} />

          <p style={styles.offer}>
            OFERTA ESPECIAL
          </p>

          <h2 style={styles.bannerTitle}>
            Pizza Grande + Refri
          </h2>

          <p style={styles.bannerText}>
            Uma combinação perfeita para seu pedido.
          </p>

          <button style={styles.button}>
            <span style={styles.buttonText}>
              Peça agora
            </span>
          </button>
        </div>

        <h2 style={styles.sectionTitle}>
          Categorias
        </h2>

        <div style={styles.categories}>

          <button style={styles.category}>
            <span style={styles.emoji}>🍕</span>
            <span>Tradicionais</span>
          </button>

          <button style={styles.category}>
            <span style={styles.emoji}>🍫</span>
            <span>Doces</span>
          </button>

          <button style={styles.category}>
            <span style={styles.emoji}>🥤</span>
            <span>Bebidas</span>
          </button>

        </div>

        <h2 style={styles.sectionTitle}>
          Mais pedidos
        </h2>

        <div style={styles.foods}>
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              emoji={food.emoji}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    backgroundColor: "#FFF8EC",
  },

  container: {
    maxWidth: 430,
    margin: "0 auto",
    boxSizing: "border-box",
    padding: "0 20px 40px 20px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    color: "#2A1D17",
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  greeting: {
    margin: 0,
    fontSize: 16,
    color: "#7A6A5F",
  },

  title: {
    margin: "5px 0 0 0",
    fontSize: 28,
    fontWeight: "bold",
  },

  banner: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#C62F1B",
    borderRadius: 16,
    padding: "39px 25px 25px 25px",
  },

  checkered: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 14,
    background:
      "repeating-conic-gradient(#ffffff 0% 25%, #C62F1B 0% 50%) 0 0 / 14px 14px",
  },

  offer: {
    margin: 0,
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    margin: "8px 0 0 0",
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },

  bannerText: {
    margin: "8px 0 0 0",
    color: "#ffffff",
    fontSize: 15,
  },

  button: {
    display: "flex",
    alignItems: "center",
    height: 44,
    padding: "0 24px",
    backgroundColor: "#ffffff",
    borderRadius: 999,
    marginTop: 20,
    alignSelf: "flex-start",
    border: "none",
    cursor: "pointer",
  },

  buttonText: {
    color: "#C62F1B",
    fontWeight: "bold",
    fontSize: 16,
  },

  sectionTitle: {
    margin: "30px 0 15px 0",
    fontSize: 22,
    fontWeight: "bold",
  },

  categories: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: "#ffffff",
    padding: "18px 0",
    borderRadius: 16,
    alignItems: "center",
    border: "1px solid #EBDCC4",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 14,
    color: "#2A1D17",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },

  foods: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

} as const;