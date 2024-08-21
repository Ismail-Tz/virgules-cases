<template>
  <nav
    class="fixed top-0 left-0 w-full bg-[#F7FDFC] border-b border-[#0A332E20] h-[60px] z-50 blurry transition-all duration-500 ease-in-out"
    :class="isBagOpen ? 'h-[85vh]' : 'h-[60px]'"
    :style="{
      backgroundColor: lightColorTp, //tp stands for transparent
      borderColor: navBarDarkColor + '20',
    }"
    @mouseleave="closeBag"
  >
    <div
      class="container mx-auto flex justify-between items-center h-[60px]"
      style="width: calc(1680px - 540px)"
    >
      <!-- Left-aligned section (Logo) -->
      <div class="flex items-center w-1/3">
        <a href="#" :style="{ color: navBarDarkColor }">
          <svg
            class="w-[36px]"
            width="51"
            height="39"
            viewBox="0 0 51 39"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.6706 16.5134C34.6706 19.673 33.9071 22.8033 32.4625 25.5663C32.1723 26.1217 31.6074 26.4671 30.9879 26.4671C30.3909 26.4671 29.8515 26.1521 29.5453 25.6244C29.2396 25.0976 29.2255 24.4608 29.5081 23.9206C30.0694 22.847 30.5048 21.7143 30.8068 20.5431L30.7553 20.5434C28.7458 20.5434 27.0326 18.9348 26.8552 16.881C26.7562 15.7339 27.115 14.6368 27.8656 13.7924C28.6057 12.9599 29.6589 12.4823 30.7545 12.4823C31.072 12.4823 31.3894 12.5222 31.6977 12.6007C33.4479 13.0459 34.6706 14.655 34.6706 16.5134ZM21.1883 12.651C20.88 12.5726 20.5626 12.5326 20.2448 12.5326C19.1492 12.5326 18.0961 13.0103 17.3559 13.8428C16.6054 14.6871 16.2465 15.7842 16.3455 16.9314C16.523 18.9855 18.2361 20.594 20.2456 20.594L20.2971 20.5938C19.9951 21.7649 19.5598 22.8976 18.9987 23.971C18.7161 24.5109 18.7299 25.148 19.0356 25.6748C19.3418 26.2025 19.8812 26.5177 20.4782 26.5177C21.0974 26.5177 21.6627 26.1724 21.9531 25.6166C23.3974 22.8539 24.1609 19.7236 24.1609 16.5641C24.1609 14.7054 22.9382 13.0962 21.1883 12.651ZM33.6223 2.35807L45.8812 10.0912C52.7063 14.3965 52.7063 24.6035 45.8812 28.9088L33.6223 36.6419C28.6382 39.786 22.3618 39.786 17.3777 36.6419L5.11879 28.9088C-1.70626 24.6035 -1.70626 14.3965 5.11879 10.0912L17.3777 2.35807C22.3618 -0.786024 28.6382 -0.786024 33.6223 2.35807ZM8.3616 25.4368L17.3779 31.1239C22.362 34.2676 28.638 34.2674 33.6219 31.1235L42.6372 25.4367C46.9437 22.7201 46.9439 16.2796 42.6375 13.5627L33.6227 7.87536C28.6384 4.73077 22.3616 4.73065 17.3771 7.87504L8.36124 13.5626C4.05455 16.2794 4.05474 22.7202 8.3616 25.4368Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <!-- Center-aligned section (Text buttons) -->
      <div class="flex justify-center w-1/3">
        <a
          href="#"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Devices</a
        >
        <a
          href="#"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Customization</a
        >
        <a
          href="#"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Featured</a
        >
      </div>

      <!-- Right-aligned section (Symbol buttons) -->
      <div class="flex justify-end items-center space-x-4 w-1/3">
        <a href="#" :style="{ color: navBarDarkColor }">
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.2803 19.2808"
            class="w-[18px]"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M18.2197,19.2808l-4.6904-4.6904c-1.48,1.2363-3.3281,1.9102-5.2793,1.9102-2.2031,0-4.2749-.8584-5.8335-2.417-1.5581-1.5576-2.4165-3.6294-2.4165-5.8335S.8584,3.9746,2.4165,2.4165,6.0464,0,8.25,0s4.2749,.8579,5.8335,2.4165,2.4165,3.6304,2.4165,5.8335c0,1.9517-.6733,3.8003-1.9097,5.2798l4.6899,4.6904-1.0605,1.0605ZM8.25,1.5c-1.8027,0-3.498,.7021-4.7729,1.9771s-1.9771,2.9702-1.9771,4.7729,.7021,3.4985,1.9771,4.7729c1.2754,1.2754,2.9702,1.9775,4.7729,1.9775s3.4971-.7021,4.7729-1.9775c1.2749-1.2754,1.9771-2.9702,1.9771-4.7729s-.7021-3.4976-1.9771-4.7729c-1.2754-1.2749-2.9707-1.9771-4.7729-1.9771Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </a>
        <a
          href="#"
          class="text-[#0A332E] hover:text-black"
          :style="{ color: navBarDarkColor }"
        >
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.5 19.5"
            class="w-[18px]"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M18.2401,4.97c-.84-1.51-2.08-2.77-3.57-3.64-1.49-.87-3.19-1.33-4.92-1.33s-3.43,.46-4.92,1.33c-1.49,.88-2.73,2.13-3.58,3.64-.8199,1.45-1.25,3.1-1.25,4.78,0,.82,.1,1.64,.3101,2.44,.54,2.09,1.77,3.96,3.47,5.27,1.7,1.32,3.82,2.04,5.97,2.04s4.27-.72,5.97-2.04c1.7-1.31,2.93-3.18,3.47-5.27,.21-.79,.31-1.61,.31-2.44,0-1.67-.43-3.33-1.2599-4.78ZM9.75,1.5c1.38,0,2.4,2.2,2.73,5.67-.88,.22-1.79,.33-2.71,.33-.91,.03-1.86-.11-2.76-.33,.34-3.48,1.35-5.67,2.74-5.67ZM1.5,9.75c0-1.12,.23-2.23,.66-3.25,1.01,.74,2.11,1.33,3.27,1.75-.02,.48-.03,.98-.03,1.5,0,1.18,.06,2.26,.17,3.24-1.35-.34-2.66-.83-3.89-1.48-.12-.58-.1801-1.17-.1801-1.76Zm3.2,6.53c-.96-.75-1.75-1.7-2.3-2.77,1.1,.46,2.25,.83,3.41,1.08,.24,1.14,.56,2.1,.97,2.86-.74-.29-1.45-.6801-2.08-1.17Zm.85-9.59c-.95-.38-1.85-.89-2.66-1.52,.69-1.04,1.61-1.91,2.69-2.54,.39-.23,.79-.42,1.2-.58-.61,1.12-1.02,2.69-1.23,4.64Zm4.2,11.31c-1.0099,0-1.83-1.16-2.3199-3.14,.77,.09,1.54,.14,2.3199,.14,.77,.03,1.55-.04,2.32-.14-.5,1.98-1.31,3.14-2.32,3.14Zm2.6201-4.69c-.86,.13-1.72,.19-2.59,.19-.86,.01-1.78-.06-2.65-.2-.15-1.05-.23-2.24-.23-3.55,0-.36,.01-.72,.02-1.07,.92,.21,1.87,.32,2.83,.32,.95-.03,1.91-.1,2.83-.31,.01,.34,.02,.7,.02,1.06,0,1.31-.08,2.51-.23,3.56Zm1.54-10.68c1.08,.63,2.01,1.5,2.7,2.54-.82,.63-1.71,1.14-2.66,1.52-.21-1.95-.63-3.52-1.24-4.64,.42,.16,.82,.35,1.2,.58Zm.89,13.65c-.64,.49-1.34,.88-2.08,1.17,.41-.76,.73-1.72,.96-2.86,1.17-.25,2.31-.61,3.41-1.08-.55,1.0699-1.33,2.02-2.29,2.77Zm3.01-4.77c-1.23,.65-2.53,1.15-3.88,1.48,.11-.98,.17-2.06,.17-3.24,0-.52-.01-1.02-.03-1.5,1.16-.42,2.26-1,3.26-1.75,.44,1.03,.67,2.13,.67,3.25,0,.59-.06,1.18-.1899,1.76Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </a>
        <a
          href="#"
          class="text-[#0A332E] hover:text-black"
          :style="{ color: navBarDarkColor }"
          @click="toggleBag"
        >
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.4999 19.5005"
            class="w-[18px]"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M17.6085,19.5005H1.8917c-.2598,0-.5117-.0488-.748-.1455-.2363-.0947-.4512-.2373-.6338-.4199-.1865-.1904-.3232-.4072-.4102-.6484-.0879-.2451-.1182-.5107-.0889-.7695L1.2931,6.4395c.0518-.4482,.2783-.8589,.6396-1.1558,.3467-.2827,.7861-.4375,1.2402-.4375h2.0361c.0674-1.0298,.4766-2.8438,1.3477-3.6367,.8564-.7798,1.9902-1.2095,3.1934-1.2095,1.2021,0,2.3369,.4297,3.1943,1.2095,.8711,.793,1.2803,2.6069,1.3477,3.6367h2.0361c.9678,0,1.7754,.6855,1.8799,1.5942l1.2803,11.0767c.0566,.4912-.0967,.9697-.4326,1.3477-.3604,.4043-.8877,.6357-1.4473,.6357ZM3.1729,6.3462c-.1084,0-.2139,.0356-.2891,.0977-.0576,.0469-.0938,.1069-.1006,.1675l-1.2822,11.0776c.0234,.126,.0459,.1602,.0771,.1924,.0332,.0332,.0781,.0635,.1279,.083,.0596,.0244,.1221,.0361,.1855,.0361h15.7168c.1318,0,.251-.0488,.3271-.1338,.0488-.0547,.0703-.1143,.0625-.1768l-1.2803-11.0786c-.0166-.146-.1914-.2651-.3896-.2651H3.1729Zm3.5381-1.5h6.0791c-.0703-.8984-.4424-2.1514-.8555-2.5273-1.1445-1.041-3.2256-1.0405-4.3682-.0005-.4131,.376-.7852,1.6294-.8555,2.5278Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
    <!-- Cart Content -->
    <div
      ref="bagContent"
      class="w-full overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ height: bagContentHeight }"
    >
      <div style="width: calc(1680px - 540px)" class="mx-auto mt-[24px]">
        <h2
          class="text-[26px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
        >
          Bag
        </h2>
        <div
          class="relative rounded-[32px] overflow-x-auto whitespace-nowrap hide-scrollbar"
        >
          <div class="flex gap-[24px] w-max">
            <div
              v-for="(item, index) in products"
              :key="index"
              class="bg-[#FFFFFF] border border-[#00000020] rounded-[32px] w-[233px] h-[465px] p-[24px] flex flex-col items-center"
            >
              <img
                :src="item.image"
                :alt="item.altText"
                class="mb-[12px] mt-[12px] h-[300px] w-auto object-contain"
              />
              <h1
                class="text-black text-left font-[Visby] font-bold text-[16px] mb-[5px] leading-[125%] truncate w-[100%]"
              >
                {{ item.title }}
              </h1>
              <h2
                class="text-black opacity-[60%] text-left font-[Visby] font-semibold text-[14px] mb-[5px] leading-[100%] w-[100%]"
              >
                {{ item.type }}
              </h2>
              <h3
                class="text-black opacity-[60%] text-left font-[Arial] text-[14px] mb-[5px] leading-[100%] w-[100%]"
              >
                {{ item.colors[0].colorName }}
                {{ item.isCustomizable ? "- Customized" : "" }}
              </h3>
              <div class="mt-auto w-full flex items-center justify-between">
                <h3
                  class="text-black text-left font-[Arial] text-[15px] leading-[100%]"
                >
                  MAD {{ item.price }}
                </h3>

                <div
                  class="flex items-center h-[24px] rounded-full border border-black"
                >
                  <button
                    @click="decrementQuantity(index)"
                    class="text-black rounded-full px-[10px] text-[14px] font-bold"
                  >
                    -
                  </button>
                  <input
                    v-model="quantities[index]"
                    @input="validateQuantity(index)"
                    type="number"
                    min="1"
                    max="99"
                    class="text-center w-[35px] rounded-[4px] text-black text-[15px] no-arrows focus:outline-none "
                  />
                  <button
                    @click="incrementQuantity(index)"
                    class="text-black rounded-full px-[10px] text-[14px] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-6 p-5 bg-white rounded-[32px] h-[93px] border border-[#00000020] flex items-center justify-between"
        >
          <div class="flex items-center space-x-4 h-[40px] ml-[20px]">
            <span>Cases: 6</span>
            <span class="block h-6 border-l border-gray-300"></span>
            <span>Subtotal: MAD 995</span>
            <span class="block h-6 border-l border-gray-300"></span>
            <span>
              Shipping:
              <span class="text-[#00A354] font-medium">Free</span>
            </span>
            <span class="block h-6 border-l border-gray-300"></span>
            <span class="">Total: MAD 1194</span>
          </div>
          <button
            class="flex items-center px-4 py-2 border border-black h-full rounded-[20px] hover:bg-[#000000cc] hover:border-[#000000cc] hover:text-white"
          >
            Continue
            <svg
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- Overlay for blur and darkness -->
  <div
    v-if="isBagOpen"
    class="fixed inset-0 bg-black bg-opacity-[0.035] z-40 transition-opacity duration-500 ease-in-out"
    :class="isBagOpen ? 'backdrop-blur-[50px] opacity-100' : 'opacity-0'"
  ></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  props: ["lightColorMsg", "darkColorMsg"],

  data() {
    return {
      navBarLightColor: "",
      navBarDarkColor: "",
      isBagOpen: false,
      bagContentHeight: "0px",

      quantities: {}, // Keep track of quantities separately
    };
  },

  watch: {
    // Watch for route changes
    $route(to) {
      this.checkIfOnProductPage(to);
    },
    lightColorMsg(newVal) {
      this.navBarLightColor = newVal;
    },
    darkColorMsg(newVal) {
      this.navBarDarkColor = newVal;
    },
  },
  mounted() {
    // Check on initial load
    this.checkIfOnProductPage(this.$route);

    // Initialize quantities to 1 for each product when the component is mounted
    this.quantities = this.products.map(() => 1);
  },

  computed: {
    //using them as placeholders to test Bag
    ...mapGetters(["products"]),

    lightColorTp() {
      return this.calculateBlendedColor(this.navBarLightColor, 0.8, "#FFFFFF");
    },
    isDarkMode() {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    },
  },

  methods: {
    // Toggle the cart

    closeBag() {
      this.isBagOpen = false;

      // Manually set the height
      this.$nextTick(() => {
        const bagContentEl = this.$refs.bagContent;
        if (this.isBagOpen) {
          // Measure the actual height of the content
          const contentHeight = bagContentEl.scrollHeight + "px";
          this.bagContentHeight = contentHeight;
        } else {
          this.bagContentHeight = "0px";
        }
      });
    },
    toggleBag() {
      this.isBagOpen = !this.isBagOpen;

      // Manually set the height
      this.$nextTick(() => {
        const bagContentEl = this.$refs.bagContent;
        if (this.isBagOpen) {
          // Measure the actual height of the content
          const contentHeight = bagContentEl.scrollHeight + "px";
          this.bagContentHeight = contentHeight;
        } else {
          this.bagContentHeight = "0px";
        }
      });
    },

    // Increment and decrement quantity in bagged items

    incrementQuantity(index) {
      if (this.quantities[index] < 99) {
        this.quantities[index]++;
      }
    },
    decrementQuantity(index) {
      if (this.quantities[index] > 1) {
        this.quantities[index]--;
      }
    },
    // Validate the quantity input
    validateQuantity(index) {
      // Remove all non-numeric characters and enforce range
      const value = this.quantities[index];
      if (isNaN(value)) {
        this.quantities[index] = 1;
      } else {
        const numericValue = Math.max(1, Math.min(99, parseInt(value, 10)));
        this.quantities[index] = numericValue;
      }
    },

    checkIfOnProductPage(route) {
      if (route.name === "ProductPage" || route.path.startsWith("/product/")) {
        console.log("You are on the Product Page");
        this.navBarLightColor = this.lightColorMsg;
        this.navBarDarkColor = this.darkColorMsg;
      } else {
        console.log("You are NOT on the Product Page");
        this.navBarLightColor = "#F9F9F9";
        this.navBarDarkColor = "#000000";
        this.updateSafariTabColor(this.isDarkMode ? "#000000" : "#F9F9F9"); // Reset the color of the tab in Safari
      }
    },

    //Reset the color of the tab in Safari
    updateSafariTabColor(color) {
      let metaTag = document.querySelector("meta[name='theme-color']");
      if (metaTag) {
        metaTag.setAttribute("content", color);
      } else {
        metaTag = document.createElement("meta");
        metaTag.name = "theme-color";
        metaTag.content = color;
        document.head.appendChild(metaTag);
      }
    },

    calculateBlendedColor(colorX, opacity, baseColor) {
      const hexToRgb = (hex) => {
        let r = 0,
          g = 0,
          b = 0;
        if (hex.length === 4) {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
          r = parseInt(hex[1] + hex[2], 16);
          g = parseInt(hex[3] + hex[4], 16);
          b = parseInt(hex[5] + hex[6], 16);
        }
        return [r, g, b];
      };

      const rgbToRgba = (r, g, b, a) => {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      };

      const [rX, gX, bX] = hexToRgb(colorX);
      const [rBase, gBase, bBase] = hexToRgb(baseColor);

      const rY = Math.round((rX - (1 - opacity) * rBase) / opacity);
      const gY = Math.round((gX - (1 - opacity) * gBase) / opacity);
      const bY = Math.round((bX - (1 - opacity) * bBase) / opacity);

      // Cap values to be within the 0-255 range
      return rgbToRgba(
        Math.min(255, Math.max(0, rY)),
        Math.min(255, Math.max(0, gY)),
        Math.min(255, Math.max(0, bY)),
        opacity
      );
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Additional styles if necessary */
.blurry {
  backdrop-filter: blur(30px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(30px); /* Safari compatibility */
}
/* Hide scrollbar for Chrome, Safari, and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide arrows for number input */
.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows {
  -moz-appearance: textfield;
}
</style>
