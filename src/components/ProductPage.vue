<template>
  <div class="flex justify-center mb-[40px] mt-[148px]">
    <div style="width: calc(1680px - 540px)" class="container">
      <div class="grid grid-cols-12 gap-[40px]">
        <div class="relative col-span-7">
          <div
            class="relative w-full h-full flex justify-center border rounded-[32px] p-[40px] overflow-hidden"
            :style="{
              backgroundColor: lightColor,
              borderColor: darkColor + '26',
            }"
          >
            <img
              :src="imageSrc"
              alt="Case Image"
              class="w-1/2 h-full object-cover"
              :style="{filter: `drop-shadow(0 0 60px ${darkColor + '60'})`}"
            />
            <!-- Customizing Cases -->
            <div
              v-if="products[id].isCustomizable"
              class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <span
                class="custom-text name-text leading-[100%] font-semibold"
                :style="{ color: darkColor, fontFamily: customFont }"
                >{{ customName || "VIRGULES" }}</span
              >
              <span
                class="custom-text number-text leading-[100%] font-bold"
                :style="{ color: darkColor, fontFamily: customFont }"
                >{{ customNumber || "00" }}</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-5">
          <div class="mb-[24px] pl-[2px]">
            <h1
              class="text-black text-left font-[Visby] font-bold text-[28px] mb-[10px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ colorTitle + " " + this.products[this.id].title }}
            </h1>
            <h2
              class="text-black text-left font-[Visby] font-semibold text-[21px] mb-[8px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ this.products[this.id].type }}
            </h2>
            <h3
              class="text-black text-left text-[18px] mb-[10px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              MAD {{ this.products[this.id].price }}
            </h3>
            <h4
              class="text-gray-500 text-left text-[14px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              By {{ this.products[this.id].designer }}
            </h4>
          </div>
          <div
            class="bg-[#F5F7F6] text-white border p-[24px] rounded-[32px]"
            :style="{
              backgroundColor: lightColor,
              borderColor: darkColor + '26',
            }"
          >
            <h2
              class="text-black text-left font-[Visby] font-extrabold text-[20px] mb-[24px] leading-[100%] after"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Select Device
            </h2>
            <div class="flex gap-[8px] mb-[8px]">
              <button
                v-for="device in availableBrands"
                :key="device"
                class="border border-black text-black py-[17.5px] px-[20px] text-[15px] rounded-[62px] leading-[100%]"
                @mouseenter="hoveredButton = device"
                @mouseleave="hoveredButton = null"
                @click="selectBrand(device)"
                :style="buttonStyles(device)"
              >
                {{ device }}
              </button>
            </div>
            <div class="flex">
              <label for="device-model-dropdown"></label>
              <div class="select-wrapper w-full">
                <select
                  v-model="selectedModel"
                  id="device-model-dropdown"
                  class="border border-black text-black bg-transparent py-[17.5px] px-[20px] text-[15px] leading-[100%] rounded-[62px] focus:outline-none appearance-none focus:ring-indigo-500 focus:border-indigo-500"
                  :style="{ borderColor: darkColor, color: darkColor }"
                >
                  <option
                    v-for="model in currentBrandModels"
                    :key="model"
                    :value="model"
                  >
                    {{ model }}
                  </option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-[15px] h-[15px] text-black absolute right-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                  :style="{ borderColor: darkColor, color: darkColor }"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.293l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <!-- Customize section (only in customizable products) -->
            <div v-if="products[id].isCustomizable">
              <h2
                class="text-black text-left font-[Visby] font-extrabold text-[20px] my-[24px] leading-[100%] after"
                :style="{ color: darkColor, borderColor: darkColor }"
              >
                Customize
              </h2>
              <div class="flex gap-[8px] mb-[8px]">
                <div class="flex w-full space-x-2">
                  <input
                    type="text"
                    class="w-[30%] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] italic rounded-[62px] leading-[100%] focus:outline-none focus:ring-1 focus:ring-[#0000006e]"
                    placeholder="Number"
                    v-model="customNumber"
                    :style="{
                      borderColor: darkColor,
                      color: darkColor,
                      focusBorderColor: darkColor,
                    }"
                  />
                  <input
                    type="text"
                    class="w-[70%] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] italic rounded-[62px] leading-[100%] focus:outline-none focus:ring-1 focus:ring-[#0000006e]"
                    placeholder="Name"
                    v-model="customName"
                    :style="{ borderColor: darkColor, color: darkColor }"
                  />
                </div>
              </div>
            </div>
            <!-- Color/Style Selection -->
            <h4
              class="text-black text-left font-[Visby] font-extrabold text-[15px] mt-[24px] mb-[10px] leading-[100%] after"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Other colors
            </h4>
            <p
              class="text-black text-left text-[12px] mb-[6px]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              Selected: <span class="font-bold">{{ colorTitle }}</span>
            </p>
            <div class="grid grid-cols-7 gap-[6px]">
              <div
                v-for="color in products[this.id].colors"
                :key="color.id"
                @click="handleClick(color)"
                :class="[
                  'bg-[#ffffff] border border-black/20 aspect-square rounded-[8px] p-[10px] cursor-pointer',
                ]"
                :style="
                  selectedColor === color.id
                    ? {
                        borderColor: darkColor,
                        boxShadow: '0 0 20px rgba(0,0,0,0.10)',
                      }
                    : {}
                "
              >
                <!-- <svg
                class="full-size-svg" 
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet">
                <circle  cx="50" cy="50" r="50" :fill="color.colorHex" />
              </svg> -->
                <div
                  class="w-full aspect-square rounded-full inner-shadow"
                  :style="{ backgroundColor: color.colorHex }"
                ></div>
              </div>
            </div>
          </div>
          <div>
            <button
              class="w-full mt-[24px] bg-black text-white py-[17.5px] px-[20px] text-[21px] font-medium border rounded-[62px] leading-[100%] hover:bg-[white] hover:text-black hover:border-black hover:border"
              :class="{
                'hover:bg-lightColor hover:text-black hover:border-lightColor': true,
              }"
              :style="
                isAddToCartHovered
                  ? {
                      backgroundColor: lightColor,
                      color: 'black',
                      borderColor: darkColor,
                    }
                  : { backgroundColor: darkColor, borderColor: darkColor }
              "
              @mouseenter="isAddToCartHovered = true"
              @mouseleave="isAddToCartHovered = false"
              @click="addToBag"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { lightenColor, darkenColor } from "@/utils";

export default {
  name: "ProductPage",
  props: ["id"], // Add id prop to receive the product ID

  data() {
    return {
      message: "Hello, Vue with Tailwind CSS!",

      colorTitle: "",
      imageSrc: "",
      productName: "",
      selectedColor: null,
      hoveredButton: null,
      isAddToCartHovered: false,
      availableBrands: [],
      availableModels: [],
      selectedBrand: "",
      selectedModel: "", // Default selected model

      // Customizing Cases
      customNumber: "",
      customName: "",
      customFont: "visby, sans-serif",
    };
  },

  created() {
    // Fetch product using the `id` from route params or another source
    this.product = this.$store.state.products[this.id];

    // Set initial color and its details
    const firstColor = this.product.colors[0];
    this.colorTitle = firstColor.colorName;
    this.selectedColor = firstColor.id;

    // Get the route params for brand and model, if provided
    const routeBrand = this.$route.query.brand;
    const routeModel = this.$route.query.model;

    // Initialize available brands based on the first color in the colors array
    this.availableBrands = Object.keys(firstColor.availableModels);

    // If a brand and model are provided in the route, use them. Otherwise, use defaults.
    if (routeBrand && firstColor.availableModels[routeBrand]) {
      this.selectedBrand = routeBrand;
      const availableModelsForBrand = firstColor.availableModels[routeBrand];

      // If a model is provided in the route, use it. Otherwise, default to the first model.
      const modelExists = availableModelsForBrand.some(
        (model) => model.name === routeModel
      );
      this.selectedModel = modelExists
        ? routeModel
        : availableModelsForBrand[0].name;

      // Set the image source based on the selected brand and model
      const selectedModelObj = availableModelsForBrand.find(
        (model) => model.name === this.selectedModel
      );
      this.imageSrc = selectedModelObj ? selectedModelObj.image : null;
    } else {
      // Default to the first available brand and model if no route params are provided
      this.selectedBrand =
        this.availableBrands.length > 0 ? this.availableBrands[0] : null;
      this.selectedModel =
        firstColor.availableModels[this.selectedBrand][0].name;
      this.imageSrc = firstColor.availableModels[this.selectedBrand][0].image;
    }

    // Initialize product name from the first color
    this.productName = firstColor.name;

    // Initialize Safari tab bar color
    this.updateSafariTabBarColor();
  },

  methods: {
    goBack() {
      this.$router.back(); // Navigate back to the previous page
    },
    addToBag() {
      // Create the product object to be added to the shopping bag
      const baggedProduct = {
        image: this.imageSrc,
        title: this.products[this.id].title,
        model: this.selectedModel,
        type: this.products[this.id].type,
        price: this.products[this.id].price,
        color: this.products[this.id].colors[this.selectedColor - 1].colorName,
        colorHex:
          this.products[this.id].colors[this.selectedColor - 1].colorHex,
        device: this.selectedModel,
        customizations: this.products[this.id].isCustomizable,
        quantity: 1, // Initialize quantity to 1 by default
      };

      // Check if the product with the same model and color already exists in the bag
      const existingProductIndex = this.$store.state.bag.findIndex(
        (item) =>
          item.model === baggedProduct.model &&
          item.color === baggedProduct.color
      );

      if (existingProductIndex !== -1) {
        // If it exists, check if the quantity is less than 99 before increasing
        if (this.$store.state.bag[existingProductIndex].quantity < 99) {
          this.$store.state.bag[existingProductIndex].quantity += 1;
        }
      } else {
        // If it doesn't exist, add the product to the bag
        this.$store.dispatch("addToBag", baggedProduct);
      }

      // Save the bag to local storage
      this.saveBagToLocalStorage();
      console.log("Product added to bag:", baggedProduct);
    },

    saveBagToLocalStorage() {
      const bag = this.$store.getters.bagItems;
      localStorage.setItem("bag", JSON.stringify(bag));
    },

    // Method to handle click event
    handleClick(color) {
      // Update clicked to true when button is clicked
      // Set clickedElement to the target element of the event

      this.colorTitle = color.colorName;
      this.productName = color.name;
      this.selectedColor = color.id;
      this.availableBrands = Object.keys(color.availableModels);

      const selectedColorData = this.products[this.id].colors.find(
        (c) => c.id === this.selectedColor
      );

      // Update Safari tab bar color
      this.updateSafariTabBarColor();

      if (!selectedColorData) {
        // Handle the case where no matching color data is found
        this.imageSrc = "";
        return;
      }

      // Check if the selected brand exists for the new color
      let modelsForSelectedBrand =
        selectedColorData.availableModels[this.selectedBrand];

      if (!modelsForSelectedBrand) {
        // If the selected brand is not available, default to the first available brand
        this.selectedBrand = this.availableBrands[0] || ""; // Default to the first available brand
        modelsForSelectedBrand =
          selectedColorData.availableModels[this.selectedBrand];
        this.selectedModel = modelsForSelectedBrand[0]?.name || ""; // Select the first model or reset if no models are available
      }

      // Find the image for the selected model and color
      const modelData = modelsForSelectedBrand.find(
        (model) => model.name === this.selectedModel
      );

      // Update imageSrc based on selected model
      this.imageSrc = modelData ? modelData.image : "";
    },

    selectBrand(device) {
      // Check if the selected brand is already the same as the new device
      if (this.selectedBrand === device) {
        return; // Exit the function if the same brand is selected
      }

      this.selectedBrand = device;

      // Update the image source based on the selected brand and first model
      const selectedColorData = this.products[this.id].colors.find(
        (c) => c.id === this.selectedColor
      );

      if (!selectedColorData) {
        // Handle the case where no matching color data is found
        this.imageSrc = "";
        return;
      }

      const firstModel =
        selectedColorData.availableModels[this.selectedBrand]?.[0];
      if (!firstModel) {
        // Handle the case where no models are available for the selected brand
        this.imageSrc = "";
        return;
      }

      this.selectedModel = firstModel.name; // First model of the selected brand
      this.imageSrc = firstModel.image || ""; // Fallback to empty string if no image is available
    },

    buttonStyles(device) {
      if (this.hoveredButton === device) {
        return {
          backgroundColor: this.darkColor,
          color: this.lightColor,
          borderColor: this.darkColor,
        };
      }
      if (this.selectedBrand === device) {
        return {
          backgroundColor: this.darkColor,
          color: this.lightColor,
          borderColor: this.darkColor,
        };
      }
      return { borderColor: this.darkColor, color: this.darkColor };
    },

    updateSafariTabBarColor() {
      const metaTag = document.querySelector('meta[name="theme-color"]');
      const color = this.themeColor; // Use the computed themeColor
      if (metaTag) {
        metaTag.setAttribute("content", color);
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.setAttribute("name", "theme-color");
        newMetaTag.setAttribute("content", color);
        document.head.appendChild(newMetaTag);
      }
    },
  },

  computed: {
    // VUEX: Using mapGetters to access the colors array from the store
    ...mapGetters(["products"]),

    lightColor() {
      const color = this.products[this.id].colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      const lightColor = lightenColor(color, 98.5); // Adjust the amount to get very light color
      this.$emit("lightColorEvent", lightColor);
      return lightColor;
    },
    darkColor() {
      const color = this.products[this.id].colors.find(
        (c) => c.id === this.selectedColor
      ).colorHex;
      const darkColor = darkenColor(color, 12); // Adjust the amount to get a darker color
      this.$emit("darkColorEvent", darkColor);
      return darkColor;
    },
    currentBrandModels() {
      return this.selectedBrand
        ? this.products[this.id].colors
            .find((c) => c.id === this.selectedColor)
            .availableModels[this.selectedBrand].map((model) => model.name)
        : [];
    },

    //for safari tab bar color

    isDarkMode() {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    },

    themeColor() {
      return this.isDarkMode ? this.darkColor : this.lightColor;
    },
  },

  watch: {
    // Watching for Customizing Cases Inputs
    customNumber(value) {
      if (!/^\d{0,2}$/.test(value)) {
        this.customNumber = value.replace(/[^\d]/g, "").slice(0, 2);
      }
    },
    customName(value) {
      // Remove extra spaces and ensure no more than 9 characters
      value = value.trim().replace(/\s+/g, " ").slice(0, 8);

      // Allow only uppercase letters and spaces between letters
      this.customName = value
        .toUpperCase()
        .replace(/[^A-Z ]|(?<=\b\s)\s+/g, "");
    },

    selectedModel(newModel) {
      // Find the selected color data
      const selectedColorData = this.products[this.id].colors.find(
        (c) => c.id === this.selectedColor
      );

      // Find the image for the selected model
      const modelData = selectedColorData.availableModels[
        this.selectedBrand
      ].find((model) => model.name === newModel);

      // Update imageSrc based on selected model
      this.imageSrc = modelData ? modelData.image : "";
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.select-wrapper {
  @apply relative inline-block;
}

#device-model-dropdown {
  @apply block w-full pr-[45px];
}

.inner-shadow {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2); /* Inner shadow */
}

/* Customizing Cases */

.custom-text {
  text-align: center;
  pointer-events: none;
}

.number-text,
.name-text {
  position: relative;
  width: 100%;
}

.number-text {
  margin-top: 0;
  font-size: 200px; /* Adjust the font size as needed */
}

.name-text {
  margin-top: 0;
  font-size: 40px; /* Adjust the font size as needed */
}
</style>
