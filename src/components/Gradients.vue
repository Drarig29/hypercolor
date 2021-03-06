<template>
  <section id="gradients">
    <div>
      <div class="sm:hidden">
        <select aria-label="Selected tab" class="block w-full p-3 rounded shadow-md form-select" v-model="theme">
          <option v-for="gradient in themes" :key="gradient.title" :value="gradient.theme">
            {{ gradient.theme }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="flex items-center justify-center space-x-8">
          <FilterOption
            v-for="gradient in themes"
            :key="gradient.title"
            :theme="gradient.theme"
            :active="theme"
            :colors="gradient.colors"
            @action="handleFilter"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 py-12 lg:py-16 gap-x-8 gap-y-16 lg:grid-cols-3">
      <Gradient
        v-for="gradient in filteredGradients"
        :key="gradient.title"
        :title="gradient.title"
        :colors="gradient.colors"
        data-aos="fade-up"
      />
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import Gradient from '@/components/Gradient'
import FilterOption from '@/components/FilterOption'

import { gradients } from '@/assets/data/gradients'

export default {
  data() {
    return {
      gradients,
      themes: [],
      theme: 'All',
    }
  },
  components: {
    Gradient,
    FilterOption,
  },
  methods: {
    handleFilter(theme) {
      this.theme = theme
    },
  },
  computed: {
    filteredGradients() {
      if (this.theme === 'All') return this.gradients

      const self = this

      let gradients = this.gradients.filter((gradient) => gradient.theme === self.theme)

      return gradients
    },
  },
  beforeMount() {
    let themes = this.gradients.filter(
      (gradient, index, self) => self.findIndex((_gradient) => _gradient.theme === gradient.theme) === index
    )

    themes.unshift({
      theme: 'All',
      colors: 'bg-gradient-to-r from-teal-400 to-green-600',
    })

    this.themes = themes

    AOS.init()
  },
}
</script>
