<script setup>
import { ref, reactive, computed, watch } from 'vue'

const products = ref([
  { id: 1, name: 'Vue T-shirt', price: 25 },
  { id: 2, name: 'Vite Mug', price: 12 },
  { id: 3, name: 'Pinia Sticker', price: 4 },
  { id: 4, name: 'shirt', price: 100 }

])

const cart = reactive(
  JSON.parse(localStorage.getItem('cart')) || {
    items: [],
    discount: 0
  }
)

function addToCart(product) {
  const existing = cart.items.find(i => i.id === product.id)
  if (existing) existing.qty++
  else cart.items.push({ ...product, qty: 1 })
}

function removeFromCart(id) {
  const idx = cart.items.findIndex(i => i.id === id)
  if (idx !== -1) cart.items.splice(idx, 1)
}

const subtotal = computed(() =>
  cart.items.reduce((sum, i) => sum + i.price * i.qty, 0)
)

const total = computed(() => subtotal.value * (1 - cart.discount))
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },
  { deep: true }
)
</script>

<template>
  <section class="shop">
    <div class="products">
      <h2>Products</h2>
      <article v-for="p in products" :key="p.id" class="product">
        <h3>{{ p.name }}</h3>
        <p>₹{{ p.price }}</p>
        <button @click="addToCart(p)">Add to cart</button>
      </article>
    </div>

    <aside class="cart">
      <h2>Cart ({{ cart.items.length }})</h2>
      <p v-if="cart.items.length === 0">Cart is empty</p>

<ul v-else>
  <li v-for="item in cart.items" :key="item.id">
    {{ item.name }} × {{ item.qty }} = ₹{{ item.price * item.qty }}
    <button @click="removeFromCart(item.id)">Remove</button>
  </li>
</ul>

      <label>
        Discount:
        <input type="number" v-model.number="cart.discount" step="0.1" min="0" max="1" />
      </label>

      <p>Subtotal: ₹{{ subtotal.toFixed(2) }}</p>
      <p><strong>Total: ₹{{ total.toFixed(2) }}</strong></p>
    </aside>
  </section>
</template>
