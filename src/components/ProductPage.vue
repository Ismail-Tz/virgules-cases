<template>
  <div class="flex justify-center mb-[40px] mt-[84px] 750:mt-[148px]">
    <div class="max-w-[1188px] w-full mx-auto px-6 box-border select-none">
      <!-- Hidden Full Resolution Copy -->
      <div
        ref="fullResolutionContainer"
        class="left-[-9999px] absolute top-0 z-[100] no-borders"
        :style="{
          width: naturalImageWidth + 'px',
          height: naturalImageHeight + 'px',
        }"
      >
        <img
          ref="fullResImage"
          :src="imageSrc"
          alt="Full Resolution Case Image"
          class="w-full h-auto object-cover no-borders"
          @load="updateFullResolution"
        />
        <!-- Customizing Cases for Full Resolution Image -->
        <div
          v-if="products[id].isCustomizable && isFullResolutionLoaded"
          class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none no-borders"
          :style="{
            transform: `scale(${getFullResolutionScale()})`,
            marginTop: getFullResolutionMarginTop(), // Adjusted for full resolution
          }"
        >
          <span
            class="custom-text name-text leading-[100%] font-semibold no-borders"
            :style="{ color: darkColor, fontFamily: customFont }"
          >
            {{ customName || "NAME" }}
          </span>
          <span
            class="custom-text number-text leading-[100%] font-bold no-borders"
            :style="{ color: darkColor, fontFamily: customFont }"
          >
            {{ customNumber || "10" }}
          </span>
        </div>
      </div>
      <div
        class="grid grid-cols-12 gap-y-[24px] 750:gap-[30px] 1056:gap-[40px]"
      >
        <div class="relative col-span-12 750:col-span-7">
          <div class="mb-[24px] pl-[2px] block 750:hidden">
            <h1
              class="text-black text-left font-[Visby] font-bold text-[24px] 450:text-[28px] mb-[8px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ this.products[this.id].title }}
            </h1>
            <h2
              class="text-black text-left font-[Visby] font-semibold text-[18px] 450:text-[21px] mb-[6px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ this.products[this.id].type }}
            </h2>
            <h3
              class="text-black text-left text-[16px] 450:text-[18px] mb-[8px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              MAD {{ this.products[this.id].price }}
            </h3>
            <h4
              class="text-gray-500 text-left text-[14px] 450:text-[14px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              By {{ this.products[this.id].designer }}
            </h4>
          </div>

          <div
            class="relative w-full flex justify-center border rounded-[32px] p-[40px] overflow-hidden"
            :style="{
              backgroundColor: lightColor,
              borderColor: darkColor + '26',
            }"
          >
            <img
              ref="image"
              :src="imageSrc"
              alt="Case Image"
              class="w-[75%] 450:w-1/2 h-auto object-cover"
              @load="updateScale"
              :style="{ filter: `drop-shadow(0 0 60px ${darkColor + '4D'})` }"
            />

            <!-- Customizing Cases -->
            <div
              v-if="products[id].isCustomizable && isImageLoaded"
              class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              :style="{
                transform: `scale(${scaledImageText})`,
                marginTop: getMarginTop(), // Dynamically compute margin-top based on brand and scale
              }"
            >
              <span
                class="custom-text name-text leading-[100%] font-semibold"
                :style="{ color: darkColor, fontFamily: customFont }"
              >
                {{ customName || "NAME" }}
              </span>
              <span
                class="custom-text number-text leading-[100%] font-bold"
                :style="{ color: darkColor, fontFamily: customFont }"
              >
                {{ customNumber || "10" }}
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-12 750:col-span-5">
          <div class="mb-[24px] pl-[2px] hidden 750:block">
            <h1
              class="text-black text-left font-[Visby] font-bold text-[24px] 1056:text-[28px] mb-[8px] 1056:mb-[10px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ colorTitle + " " + this.products[this.id].title }}
            </h1>
            <h2
              class="text-black text-left font-[Visby] font-semibold text-[19px] 1056:text-[21px] mb-[6px] 1056:mb-[8px] leading-[100%]"
              :style="{ color: darkColor, borderColor: darkColor }"
            >
              {{ this.products[this.id].type }}
            </h2>
            <h3
              class="text-black text-left text-[17px] 1056:text-[18px] mb-[8px] 1056:mb-[10px] leading-[100%]"
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
          <div class="col-span-12 750:col-span-5">
            <div
              class="relative bg-[#F5F7F6] text-white border p-[24px] rounded-[32px] overflow-hidden"
              :style="{
                backgroundColor: lightColor,
                borderColor: darkColor + '26',
              }"
            >
              <div class="mask-container m-[-24px] p-[24px]">
                <h2
                  class="text-black text-left font-[Visby] font-bold text-[20px] mb-[24px] leading-[100%]"
                  :style="{ color: darkColor, borderColor: darkColor }"
                >
                  Select Device
                </h2>

                <!-- Container for buttons, using negative margins to span full width -->
                <div
                  class="flex gap-[8px] mb-[8px] flex-nowrap overflow-x-auto hide-scrollbar mx-[-24px] px-[24px]"
                >
                  <button
                    v-for="device in availableBrands"
                    :key="device"
                    class="border border-black text-black py-[17px] px-[17px] 450:px-[20px] text-[15px] rounded-full leading-[100%] flex-shrink-0"
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
                      class="border border-black text-black bg-transparent py-[17.5px] px-[20px] text-[15px] leading-[100%] rounded-full focus:outline-none appearance-none focus:ring-indigo-500 focus:border-indigo-500"
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
                    class="text-black text-left font-[Visby] font-bold text-[20px] my-[24px] leading-[100%] after"
                    :style="{ color: darkColor, borderColor: darkColor }"
                  >
                    Customize
                  </h2>
                  <div class="flex gap-[14px]">
                    <div class="relative w-[35%]">
                      <input
                        type="text"
                        id="customNumber"
                        class="w-full h-[52px] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] focus:outline-none focus:ring-none peer pt-[22.5px] pb-[12.5px] transition-all duration-300 ease-in-out rounded-full leading-[100%] focus:ring-1 focus:ring-[#0000006e]"
                        placeholder=" "
                        v-model="customNumber"
                        :style="{
                          borderColor: darkColor,
                          color: darkColor,
                          focusBorderColor: darkColor,
                        }"
                      />
                      <label
                        for="customNumber"
                        :class="[
                          'absolute left-[20px] transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px]',
                          customNumber
                            ? 'top-[13px] text-[10px] text-black opacity-80'
                            : 'text-[15px] text-black opacity-80',
                        ]"
                        :style="{
                          color: darkColor,
                        }"
                        class="flex items-center"
                        >Number
                      </label>
                    </div>
                    <div class="relative w-[65%]">
                      <input
                        type="text"
                        id="customName"
                        class="w-full h-[52px] bg-transparent border border-black text-black py-[17.5px] px-[20px] text-[15px] focus:outline-none focus:ring-none peer pt-[22.5px] pb-[12.5px] transition-all duration-300 ease-in-out rounded-full leading-[100%] focus:ring-1 focus:ring-[#0000006e]"
                        placeholder=" "
                        v-model="customName"
                        :style="{
                          borderColor: darkColor,
                          color: darkColor,
                          focusBorderColor: darkColor,
                        }"
                      />
                      <label
                        for="customName"
                        :class="[
                          'absolute left-[20px] transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px]',
                          customName
                            ? 'top-[13px] text-[10px] text-black opacity-80'
                            : 'text-[15px] text-black opacity-80',
                        ]"
                        :style="{
                          color: darkColor,
                        }"
                        class="flex items-center"
                        >Name
                      </label>
                    </div>
                  </div>
                </div>
                <!-- Color/Style Selection -->
                <h4
                  class="text-black text-left font-[Visby] font-bold text-[15px] mt-[24px] mb-[10px] leading-[100%] after"
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
                <div
                  class="grid grid-cols-5 450:grid-cols-8 750:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-[10px] 750:gap-[6px]"
                >
                  <div
                    v-for="color in products[this.id].colors"
                    :key="color.id"
                    @click="handleClick(color)"
                    :class="[
                      'bg-[#ffffff] border border-black/20 aspect-square rounded-[8px] cursor-pointer flex justify-center items-center',
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
                      class="w-[65%] aspect-square rounded-full inner-shadow"
                      :style="{ backgroundColor: color.colorHex }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                class="w-full transition-colors ease-in-out duration-300 mt-[24px] bg-black text-white py-[17.5px] px-[20px] text-[21px] font-medium border rounded-full leading-[100%] hover:bg-[white] hover:text-black hover:border-black hover:border"
                :class="{
                  'hover:bg-lightColor hover:text-black hover:border-lightColor': true,
                }"
                :style="
                  isAddToCartHovered
                    ? {
                        backgroundColor: darkColor + 'CC',
                        borderColor: darkColor,
                        color: lightColor,
                      }
                    : {
                        backgroundColor: darkColor,
                        borderColor: darkColor,
                        color: lightColor,
                      }
                "
                @mouseenter="isAddToCartHovered = true"
                @mouseleave="isAddToCartHovered = false"
                @mousedown="isAddToCartHovered = true"
                @mouseup="isAddToCartHovered = false"
                @touchstart="isAddToCartHovered = true"
                @touchend="isAddToCartHovered = false"
                @touchcancel="isAddToCartHovered = false"
                @click="addToBag"
              >
                Add to Bag
              </button>
              <div
                class="flex items-center justify-center p-[10px] text-black space-x-[6px] opacity-60"
                :style="{
                  color: darkColor,
                }"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_1360)">
                    <path
                      d="M18.74 8.18902L16.34 5.54902C16.16 5.33902 15.93 5.18902 15.69 5.09902C15.45 4.98902 15.19 4.94902 14.92 4.96912H13.45V3.05912C13.45 2.46912 13.22 1.91912 12.81 1.49912C12.39 1.07912 11.83 0.849121 11.24 0.849121H2.2C1.62 0.849021 1.06 1.07902 0.64 1.49902C0.23 1.91902 0 2.46902 0 3.05902V11.079C0 11.669 0.23 12.229 0.64 12.639C1.05 13.049 1.61 13.279 2.2 13.279H2.52C2.65 13.799 2.92 14.249 3.32 14.579C3.7501 14.949 4.3 15.149 4.87 15.149H4.96C5.48 15.149 5.97 14.989 6.36 14.689C6.76 14.389 7.05 13.959 7.18 13.489H12.45C12.61 13.969 12.91 14.389 13.32 14.689C13.7501 15.009 14.29 15.169 14.84 15.149C15.38 15.129 15.91 14.919 16.32 14.559C16.7 14.239 16.96 13.799 17.08 13.299H17.55C17.77 13.319 17.99 13.299 18.2 13.229C18.4 13.1591 18.59 13.029 18.75 12.869C18.92 12.719 19.04 12.529 19.11 12.319C19.19 12.109 19.22 11.889 19.21 11.679V9.37902C19.21 8.92902 19.04 8.50902 18.74 8.18902ZM17.56 12.179H17.08C17 11.809 16.83 11.469 16.58 11.179C16.29 10.849 15.94 10.609 15.56 10.479C15.16 10.329 14.73 10.289 14.3199 10.369C14.0099 10.429 13.7199 10.539 13.4499 10.709V6.08912H14.9499C15.0299 6.08912 15.1399 6.07912 15.2599 6.12912C15.3399 6.15912 15.4199 6.20912 15.5099 6.29912L17.6199 8.62912L17.9199 8.94912C18.0199 9.05912 18.0799 9.20912 18.0799 9.37912V11.6791C18.0799 11.8791 18.0399 12.0091 17.9699 12.0691C17.9199 12.1191 17.81 12.179 17.56 12.179ZM13.5 12.399L13.5099 12.389L13.5199 12.359C13.5499 12.219 13.6299 12.069 13.7399 11.919C13.8499 11.789 13.9799 11.679 14.1299 11.589C14.2999 11.509 14.4599 11.459 14.6099 11.439C14.7999 11.429 14.9699 11.449 15.1099 11.489C15.2899 11.549 15.4399 11.629 15.5599 11.729C15.6898 11.839 15.7999 11.979 15.8798 12.119C15.9598 12.299 16.0098 12.449 16.0198 12.599C16.0398 12.769 16.0198 12.939 15.9598 13.099V13.109C15.8898 13.369 15.7298 13.599 15.5098 13.769C15.0398 14.109 14.4398 14.109 13.9698 13.779C13.7498 13.5989 13.5898 13.379 13.4998 13.0989C13.4698 12.9789 13.4498 12.8589 13.4498 12.7389C13.4498 12.6289 13.47 12.499 13.5 12.399ZM1.12 3.05902C1.12 2.76902 1.23 2.48902 1.4399 2.29902C1.6299 2.09902 1.9099 1.97902 2.1999 1.97902H11.24C11.53 1.97902 11.8 2.08902 12.01 2.29902C12.21 2.48902 12.33 2.76902 12.33 3.05902V12.369H7.22C7.14 11.849 6.9 11.359 6.51 10.989C6.09 10.599 5.54 10.359 4.97 10.329C4.37 10.309 3.83 10.489 3.38 10.849C2.95 11.169 2.66 11.639 2.53 12.1591H2.2C1.91 12.1591 1.63 12.0491 1.44 11.8391C1.23 11.6391 1.1201 11.3691 1.1201 11.0791L1.12 3.05902ZM3.64 12.359C3.73 12.099 3.89 11.869 4.11 11.699C4.33 11.539 4.6 11.449 4.87 11.449C5.15 11.449 5.41 11.539 5.6299 11.699C5.8599 11.869 6.0199 12.099 6.0899 12.359C6.1399 12.479 6.1599 12.599 6.1599 12.739C6.1599 12.849 6.1399 12.969 6.0999 13.079V13.109C6.0199 13.359 5.8599 13.599 5.6499 13.769C5.4199 13.939 5.1499 14.029 4.8699 14.029C4.5899 14.029 4.3199 13.939 4.0999 13.769C3.8699 13.599 3.7099 13.359 3.6399 13.109L3.6299 13.079C3.56 12.859 3.57 12.609 3.64 12.359Z"
                      fill="currentColor"
                      style="fill: currentColor; fill-opacity: 1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_1360">
                      <rect
                        width="19.2118"
                        height="14.3017"
                        fill="white"
                        style="fill: white; fill-opacity: 1"
                        transform="translate(0 0.849121)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span class="text-[14px] leading-none"
                  >Enjoy Free Shipping on Every Case!</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { lightenColor, darkenColor } from "@/utils";
import domtoimage from "dom-to-image-more";
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
      imageScale: 1, // Holds the image scale
      scaleFactor: 2.5, // Allows you to adjust the text scaling factor
      isImageLoaded: false, // Flag to check if the image has been loaded
      isFullResolutionLoaded: false,
      naturalImageWidth: 0, // Store natural width
      naturalImageHeight: 0, // Store natural height
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

  mounted() {
    this.updateScale();
    window.addEventListener("resize", this.updateScale);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScale);
  },

  methods: {
    updateScale() {
      const image = this.$refs.image;
      if (image) {
        const imageWidth = image.naturalWidth; // Intrinsic width of the image
        const displayedWidth = image.clientWidth; // Rendered (current) width of the image
        this.imageScale = displayedWidth / imageWidth; // Scale based on actual image size

        // Set the flag to true once the image is loaded and scaling is applied
        this.isImageLoaded = true;
      }
    },
    getMarginTop() {
      // Base margin values in pixels
      const samsungMargin = 120; // Margin for Samsung
      const otherMargin = 40; // Margin for other brands

      // Calculate scaled margin
      const scaleAdjustedSamsungMargin = samsungMargin * this.scaledImageText;
      const scaleAdjustedOtherMargin = otherMargin * this.scaledImageText;

      // Return margin-top based on the selected brand
      return this.selectedBrand === "Samsung"
        ? `${scaleAdjustedSamsungMargin}px`
        : `${scaleAdjustedOtherMargin}px`;
    },
    updateFullResolution() {
      const fullResImage = this.$refs.fullResImage;
      if (fullResImage) {
        this.naturalImageWidth = fullResImage.naturalWidth;
        this.naturalImageHeight = fullResImage.naturalHeight;
        this.isFullResolutionLoaded = true;
      }
    },
    getFullResolutionScale() {
      // Inverse of the scale applied to the visible image, to match full resolution scaling
      return 2.5;
    },
    getFullResolutionMarginTop() {
      const samsungMargin = 120;
      const otherMargin = 40;
      const scaledSamsungMargin = samsungMargin * this.getFullResolutionScale();
      const scaledOtherMargin = otherMargin * this.getFullResolutionScale();
      return this.selectedBrand === "Samsung"
        ? `${scaledSamsungMargin}px`
        : `${scaledOtherMargin}px`;
    },

    goBack() {
      this.$router.back(); // Navigate back to the previous page
    },
    addToBag() {
      const product = this.products[this.id];

      // Create a placeholder image initially
      const placeholderImage = this.imageSrc; // or a transparent placeholder
      const baggedProduct = {
        image: placeholderImage, // Use the placeholder image
        title: product.title,
        model: this.selectedModel,
        type: product.type,
        price: product.price,
        color: product.colors[this.selectedColor - 1].colorName,
        colorHex: product.colors[this.selectedColor - 1].colorHex,
        device: this.selectedModel,
        quantity: 1,
        customizations: product.isCustomizable
          ? {
              customName: this.customName || "NAME",
              customNumber: this.customNumber || "10",
            }
          : null,
      };

      // Immediately finalize the addition of the product to the bag
      this.finalizeAddToBag(baggedProduct);

      // Defer the screenshot generation to avoid UI blocking
      if (product.isCustomizable) {
        // Use setTimeout to delay the screenshot process by 500ms (or any delay)
        setTimeout(() => {
          this.generateProductScreenshot(baggedProduct);
        }, 500); // Adjust the delay based on your animation duration
      }
    },

    generateProductScreenshot(baggedProduct) {
      const fullResolutionContainer = this.$refs.fullResolutionContainer;

      if (fullResolutionContainer) {
        fullResolutionContainer.classList.add("no-borders");

        // Capture the screenshot in the background after the delay
        domtoimage
          .toPng(fullResolutionContainer, {
            bgcolor: null, // Ensure transparent background
          })
          .then((dataUrl) => {
            // Update the product image in the bag once the screenshot is ready
            this.updateProductImageInBag(baggedProduct, dataUrl);

            fullResolutionContainer.classList.remove("no-borders");
          })
          .catch((error) => {
            console.error("Error capturing screenshot:", error);
            fullResolutionContainer.classList.remove("no-borders");
          });
      }
    },

    updateProductImageInBag(baggedProduct, newImage) {
      // Find the product in the bag
      const productIndex = this.$store.state.bag.findIndex(
        (item) =>
          item.model === baggedProduct.model &&
          item.color === baggedProduct.color &&
          (!item.customizations ||
            !baggedProduct.customizations ||
            (item.customizations.customName ===
              baggedProduct.customizations.customName &&
              item.customizations.customNumber ===
                baggedProduct.customizations.customNumber))
      );

      if (productIndex !== -1) {
        // Update the product's image without triggering reactivity issues
        this.$store.dispatch("updateProductImage", {
          productIndex,
          newImage,
        });

        // Optionally save the updated bag to local storage
        this.saveBagToLocalStorage();
      }
    },

    finalizeAddToBag(baggedProduct) {
      const existingProductIndex = this.$store.state.bag.findIndex(
        (item) =>
          item.model === baggedProduct.model &&
          item.color === baggedProduct.color &&
          (!item.customizations ||
            !baggedProduct.customizations ||
            (item.customizations.customName ===
              baggedProduct.customizations.customName &&
              item.customizations.customNumber ===
                baggedProduct.customizations.customNumber))
      );

      if (existingProductIndex !== -1) {
        if (this.$store.state.bag[existingProductIndex].quantity < 99) {
          this.$store.state.bag[existingProductIndex].quantity += 1;
        }
      } else {
        // Dispatch Vuex action to add the product to the bag
        this.$store.dispatch("addToBag", baggedProduct);
      }

      // Save the bag to local storage immediately
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

    scaledImageText() {
      return this.imageScale * this.scaleFactor;
    },

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

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.mask-container {
  position: relative;
  /* Apply a linear gradient mask to create the fade-out effect */
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 24px,
    rgba(0, 0, 0, 1) calc(100% - 24px),
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 24px,
    rgba(0, 0, 0, 1) calc(100% - 24px),
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden; /* Ensure the mask effect is contained within this container */
}

/* Apply a class to remove borders */
/* Force no border and anti-aliasing adjustments */
.no-borders {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  image-rendering: crisp-edges; /* Adjusts how images are rendered */
  -webkit-font-smoothing: antialiased; /* Improves font rendering */
  background-color: none !important; /* Match your desired background */
}
</style>
