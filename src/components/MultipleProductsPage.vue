<template>
  <div class="flex justify-center mb-[40px] mt-[108px]">
    <div class="max-w-[1188px] w-full mx-auto px-6 box-border">
      <h2
        class="text-[26px] mb-[40px] text-left font-[Visby] font-bold text-[#000000] leading-none"
      >
        {{ this.brand ? this.model : "All" }} Cases
      </h2>
      <div class="grid grid-cols-12 gap-[24px] 750:gap-[30px] lg:gap-[40px]">
        <!-- Filter button (visible on mobile) -->
        <div class="750:hidden flex col-span-12 bg-[#f9f9f9] border border-black/15 items-center rounded-[24px] px-[10px] py-[8px]">
          <button
            @click="toggleFilter"
            class="py-[5px] px-[10px] text-[15px] 450:text-[16px] font-normal font-black/70 z-20 relative"
          >
            Filter
          </button>
        </div>

        <!-- Filter overlay (manually handle the animation with Tailwind) -->
        <div
          :class="{
            'fixed inset-x-0 bottom-0 top-[84px] bg-[#F8F8F8CC] blurry z-50 p-4 transform transition-transform ease-in-out duration-500': true,
            'translate-y-full opacity-0': !isFilterOpen,
            'translate-y-0 opacity-100': isFilterOpen,
          }"
        >
          <!-- Arrow down button to close the filter -->
          <button @click="closeFilter" class="self-end p-2">
            &#x25BC;
            <!-- Arrow Down Icon -->
          </button>

          <!-- Dropdown data (reusing the same loop) -->
          <div class="w-full">
            <div
              v-for="(dropdown, key, index) in dropdownsData"
              :key="key"
              :style="{
                borderBottomWidth:
                  index !== Object.keys(dropdownsData).length - 1
                    ? '1px'
                    : '0px',
              }"
              class="cursor-pointer border-b border-[#00000020] px-[10px]"
            >
              <div
                @click="toggleDropdown(key)"
                @mousedown.prevent
                class="flex justify-between items-center py-[17.5px] h-[52px]"
              >
                <span class="font-semibold text-[17px] text-black">{{
                  dropdown.title
                }}</span>
                <svg
                  :class="{ 'rotate-180': openDropdowns[key] }"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-transform duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div v-if="openDropdowns[key]" class="py-2 text-left">
                <div
                  v-for="(option, index) in dropdown.options"
                  :key="index"
                  class="flex items-center cursor-pointer py-1 px-2 mb-2 rounded-[32px]"
                  :class="{
                    'bg-blue-100': selectedOptions[key].includes(option),
                    'hover:bg-blue-200': selectedOptions[key].includes(option),
                    'hover:bg-gray-300': !selectedOptions[key].includes(option),
                  }"
                  @click="toggleSelection(key, option)"
                >
                  <span
                    :class="{
                      'text-blue-600': selectedOptions[key].includes(option),
                      'text-gray-900': !selectedOptions[key].includes(option),
                    }"
                  >
                    {{ option }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- desktop dropdowns -->
        <div
          class="col-span-5 1056:col-span-4 bg-[#F9F9F9] border border-[#00000026] rounded-[32px] p-[15px] 450:p-[20px] lg:p-[24px] h-fit hidden 750:block"
        >
          <div>
            <!-- Loop over dropdown data -->
            <div
              v-for="(dropdown, key, index) in dropdownsData"
              :key="key"
              :style="{
                borderBottomWidth:
                  index !== Object.keys(dropdownsData).length - 1
                    ? '1px'
                    : '0px',
              }"
              class="cursor-pointer border-b border-[#00000020] px-[10px]"
            >
              <div
                @click="toggleDropdown(key)"
                @mousedown.prevent
                class="flex justify-between items-center py-[17.5px] h-[52px]"
              >
                <span class="font-semibold text-[17px] text-black">{{
                  dropdown.title
                }}</span>
                <svg
                  :class="{ 'rotate-180': openDropdowns[key] }"
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition-transform duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div v-if="openDropdowns[key]" class="py-2 text-left">
                <div
                  v-for="(option, index) in dropdown.options"
                  :key="index"
                  class="flex items-center cursor-pointer py-1 px-2 mb-2 rounded-[32px]"
                  :class="{
                    'bg-blue-100': selectedOptions[key].includes(option),
                    'hover:bg-blue-200': selectedOptions[key].includes(option),
                    'hover:bg-gray-300': !selectedOptions[key].includes(option),
                  }"
                  @click="toggleSelection(key, option)"
                >
                  <span
                    :class="{
                      'text-blue-600': selectedOptions[key].includes(option),
                      'text-gray-900': !selectedOptions[key].includes(option),
                    }"
                  >
                    {{ option }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 750:col-span-7 md:col-span-7 1056:col-span-8 rounded-[32px]"
        >
          <div
            class="grid grid-cols-2 1056:grid-cols-3 gap-[20px] lg:gap-[24px]"
          >
            <div
              v-for="(item, index) in filteredProductsByModel"
              :key="index"
              @click="goToProductPage(item, index)"
              @mouseover="applyHoverColors(index)"
              @mouseleave="clearHoverColors"
              @mousemove="updateMouseGradient(index, $event)"
              class="cursor-pointer text-left bg-[#F9F9F9] border border-[#00000020] rounded-[24px] 450:rounded-[32px] p-[15px] 450:p-[20px] lg:p-[24px] flex flex-col items-center"
              :style="{
                backgroundImage: hoveredIndex === index ? gradient : 'none',
                borderColor:
                  hoveredIndex === index ? darkColor + 60 : '#00000026',
              }"
            >
              <img
                :src="
                  item.colors[0].availableModels[routeBrand]?.find(
                    (m) => m.name === routeModel
                  )?.image || item.colors[0].availableModels.Apple[0].image
                "
                :alt="item.altText"
                class="mb-[16px] 450:mb-[24px] mt-[12px] w-8/12 750:w-10/12 object-contain"
                style="filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.1))"
              />
              <h1
                class="text-black font-[Visby] font-semibold 450:font-bold text-[14px] 450:text-[16px] mb-[3px] leading-tight truncate w-[100%]"
                :style="{
                  color: hoveredIndex === index ? darkColor : '#000000',
                }"
              >
                {{ item.title }}
              </h1>
              <h2
                class="text-black font-[Visby] font-semibold text-[13px] 450:text-[15px] opacity-[60%] mb-[5px] leading-tight w-[100%]"
                :style="{
                  color: hoveredIndex === index ? darkColor : '#000000',
                }"
              >
                {{ item.type }}
              </h2>
              <h3
                class="text-black text-[12px] 450:text-[14px] opacity-[60%] mb-[5px] leading-tight w-[100%]"
                :style="{
                  color: hoveredIndex === index ? darkColor : '#000000',
                }"
              >
                {{ item.isCustomizable ? "Customizable" : "Not Customizable" }}
              </h3>
              <div
                class="mt-[8px] w-full flex flex-wrap gap-y-2 items-center justify-between"
              >
                <h3
                  :style="{
                    color: hoveredIndex === index ? darkColor : '#000000',
                  }"
                  class="text-black font-light text-left text-[12px] 450:text-[15px] leading-tight truncate mr-2"
                >
                  MAD {{ item.price }}
                </h3>

                <div
                  :style="{
                    color: hoveredIndex === index ? darkColor : '#000000',
                    borderColor: hoveredIndex === index ? darkColor : '#000000',
                  }"
                  class="flex items-center justify-center opacity-[70%] px-[8px] h-6 border border-[#000000] text-[#00000099] rounded-full"
                >
                  <span class="text-[12px] 450:text-[14px]">{{ item.colors.length }} Styles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { lightenColor, darkenColor } from "@/utils";
import { Object } from "core-js";

export default {
  name: "MultipleProductsPage",
  props: ["brand", "model"],
  data() {
    return {
      isFilterOpen: false, // Controls the visibility of the filter overlay
      openDropdowns: {
        customizable: false,
        collection: false,
        artist: false,
        printStyle: false,
        color: false,
      },

      dropdownsData: {
        customizable: {
          title: "Customizable",
          options: ["Customizable"],
        },
        collection: {
          title: "Collection",
          options: ["Option A", "Option B", "Option C"],
        },
        artist: {
          title: "Artist",
          options: ["Artist X", "Artist Y", "Artist Z"],
        },
        printStyle: {
          title: "Print Style",
          options: ["Style 1", "Style 2", "Style 3"],
        },
      },

      colorOptions: [
        { id: "black1", name: "Black", colorClass: "bg-black" },
        { id: "black2", name: "Black", colorClass: "bg-black" },
        { id: "black3", name: "Black", colorClass: "bg-black" },
        // Add more options as needed
      ],

      hoveredIndex: null,
      gradient: "",
      lightColor: "#F9F9F9", // default light color
      darkColor: "#000000", // default dark color
    };
  },
  computed: {
    // VUEX: Using mapGetters to access the products through optional filters
    ...mapState(["selectedOptions"]),
    ...mapGetters(["filteredProducts"]),

    filteredProductsByModel() {
      return this.$store.getters.filteredProducts.filter((product) => {
        if (this.brand && this.model) {
          // Filter products by the selected brand and model
          return product.colors.some((color) =>
            color.availableModels[this.brand]?.some(
              (m) => m.name === this.model
            )
          );
        }
        // Return all products if no brand or model is selected
        return true;
      });
    },
    routeBrand() {
      return this.$route.params.brand;
    },
    routeModel() {
      return this.$route.params.model;
    },

    computedWidth() {
      return "width: calc(1680px - 540px)";
    },
  },
  methods: {
    ...mapActions(["toggleOption"]),

    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },
    closeFilter() {
      this.isFilterOpen = false;
    },
    toggleSelection(key, option) {
      this.toggleOption({ key, option });
    },

    applyHoverColors(index) {
      const color = this.filteredProducts[index].colors[0].colorHex;
      this.lightColor = lightenColor(color, 97); // Adjust to your preference
      this.darkColor = darkenColor(color, 12); // Adjust to your preference
      this.hoveredIndex = index;
    },
    clearHoverColors() {
      this.hoveredIndex = null;
      this.lightColor = "#F9F9F9"; // Reset to default background
      this.darkColor = "#000000"; // Reset to default border
      this.gradient = ""; // Clear gradient when mouse leaves
    },
    updateMouseGradient(index, event) {
      if (this.hoveredIndex !== index) return;

      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Dynamically generate the gradient
      this.gradient = `radial-gradient(circle at ${x}px ${y}px, ${this.lightColor} 20%, #F9F9F9 90%)`;
    },

    toggleDropdown(dropdown) {
      this.openDropdowns[dropdown] = !this.openDropdowns[dropdown];
    },

    // Method to navigate to the product page
    // Modified goToProductPage to extract brand and model from the item data
    goToProductPage(item, index) {
      const selectedColor = item.colors[0]; // Adjust this based on the actual selected color
      const availableModels = selectedColor.availableModels;
      const selectedBrand = this.routeBrand || Object.keys(availableModels)[0]; // Default to Apple or the first available brand
      const selectedModel =
        this.routeModel || availableModels[selectedBrand][0].name; // Default to the first model in the brand

      this.$router.push({
        path: `/product/${index}`, // Use index or a unique identifier
        query: { brand: selectedBrand, model: selectedModel },
      });
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Add any custom styles here if needed */
.blurry {
  backdrop-filter: blur(30px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(30px); /* Safari compatibility */
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-up-enter, .slide-up-leave-to /* .slide-up-leave-active in <2.1.0 */ {
  transform: translateY(100%);
}
.slide-up-enter-to, .slide-up-leave /* .slide-up-enter-active in <2.1.0 */ {
  transform: translateY(0);
}
</style>
