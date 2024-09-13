<template>
  <div class="w-full overflow-hidden mt-[108px] mb-[40px]">
    <div
      class="max-w-[1188px] w-full mx-auto px-6 box-border mt-[40px] overflow-hidden"
    >
      <div class="flex justify-between items-end">
        <h1
          @click="clearOrders"
          class="text-left font-[visby] font-semibold text-black text-[22px] leading-none"
        >
          Your Orders
        </h1>
        <p class="font-medium text-[14px] text-black">
          Don't see your order?
          <span class="text-[#00A354] hover:underline hover:cursor-pointer"
            >Contact Us Now
          </span>
          <svg
            class="inline-block -rotate-90 align-middle text-[#00A354]"
            width="10"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.497812 1.64518C0.218392 1.34935 0.218363 0.886876 0.497746 0.591005V0.591005C0.800665 0.27021 1.31101 0.270169 1.61398 0.590916L6.13652 5.37882C6.33382 5.58771 6.66618 5.58771 6.86348 5.37882L11.386 0.590916C11.689 0.27017 12.1993 0.27021 12.5023 0.591005V0.591005C12.7816 0.886876 12.7816 1.34935 12.5022 1.64518L7.22699 7.2303C6.83237 7.6481 6.16763 7.6481 5.77301 7.2303L0.497812 1.64518Z"
              fill="currentColor"
              style="fill: currentColor; fill-opacity: 1"
            />
          </svg>
        </p>
      </div>
      <!-- Orders Desktop -->
      <div v-if="orders.length > 0 && !isMobile">
        <div
          v-for="(order, index) in orders.slice().reverse()"
          :key="index"
          class="mx-auto mt-[24px] w-full rounded-[32px] border border-black/45 py-[24px] overflow-hidden"
        >
          <div
            class="flex justify-between items-center mb-[24px] px-[24px] py-[1px]"
          >
            <h2
              class="text-[30px] leading-none text-left font-normal text-[#000000]"
            >
              Order n°{{ order.id }}
            </h2>
            <div class="flex items-center space-x-[12px]">
              <div
                class="flex items-center justify-center px-[10px] py-[7px] border border-black text-black rounded-full"
              >
                <span class="text-[14px] leading-none"
                  >MAD {{ order.checkoutInfo.total }}</span
                >
              </div>
              <div
                class="flex items-center justify-center px-[10px] py-[7px] border border-black text-black rounded-full space-x-[6px]"
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
                      fill="black"
                      style="fill: black; fill-opacity: 1"
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

                <span class="text-[14px] leading-none">On Its Way</span>
              </div>
              <div class="flex space-x-2">
                <!-- Back Button -->
                <button
                  :class="{
                    'opacity-20 pointer-events-none': !canScrollLeft[index],
                  }"
                  @click="scrollLeft(index)"
                  class="text-black text-[16px] select-none"
                >
                  <!-- SVG for backward arrow -->
                  <svg
                    class="rotate-180"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="white"
                      style="fill: white; fill-opacity: 1"
                    />
                    <circle
                      cx="15"
                      cy="15"
                      r="14.5"
                      stroke="black"
                      stroke-opacity="0.45"
                      style="stroke: black; stroke-opacity: 0.45"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6454 20.5021C13.3496 20.7815 12.8871 20.7815 12.5912 20.5022C12.2704 20.1992 12.2704 19.6889 12.5911 19.3859L17.379 14.8634C17.5879 14.6661 17.5879 14.3337 17.379 14.1364L12.5911 9.6139C12.2704 9.3109 12.2704 8.8006 12.5912 8.4976C12.8871 8.2183 13.3496 8.2183 13.6454 8.4977L19.2305 13.7729C19.6483 14.1675 19.6483 14.8323 19.2305 15.2269L13.6454 20.5021Z"
                      fill="black"
                      fill-opacity="0.55"
                      style="fill: black; fill-opacity: 0.55"
                    />
                    <path
                      d="M12.4196 20.6839L12.4196 20.6839C12.8118 21.0543 13.4249 21.0542 13.817 20.6838C13.817 20.6838 13.817 20.6838 13.817 20.6838L19.4022 15.4086C19.9244 14.9154 19.9244 14.0844 19.4022 13.5912L13.817 8.31595L13.6454 8.4977L13.817 8.31595C13.4249 7.94555 12.8118 7.94556 12.4196 8.3158L12.4195 8.31585C11.9943 8.71749 11.9942 9.39396 12.4194 9.79563L12.4195 9.79564L17.2074 14.3182L17.2074 14.3182C17.3118 14.4168 17.3118 14.583 17.2074 14.6816L17.2074 14.6816L12.4195 19.2042C11.9943 19.6058 11.9943 20.2824 12.4196 20.6839Z"
                      stroke="black"
                      stroke-opacity="0.55"
                      style="stroke: black; stroke-opacity: 0.55"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>

                <!-- Forward Button -->
                <button
                  :class="{
                    'opacity-20 pointer-events-none': !canScrollRight[index],
                  }"
                  @click="scrollRight(index)"
                  class="text-black text-[16px] select-none"
                >
                  <!-- SVG for forward arrow -->
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="white"
                      style="fill: white; fill-opacity: 1"
                    />
                    <circle
                      cx="15"
                      cy="15"
                      r="14.5"
                      stroke="black"
                      stroke-opacity="0.45"
                      style="stroke: black; stroke-opacity: 0.45"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6454 20.5021C13.3496 20.7815 12.8871 20.7815 12.5912 20.5022C12.2704 20.1992 12.2704 19.6889 12.5911 19.3859L17.379 14.8634C17.5879 14.6661 17.5879 14.3337 17.379 14.1364L12.5911 9.6139C12.2704 9.3109 12.2704 8.8006 12.5912 8.4976C12.8871 8.2183 13.3496 8.2183 13.6454 8.4977L19.2305 13.7729C19.6483 14.1675 19.6483 14.8323 19.2305 15.2269L13.6454 20.5021Z"
                      fill="black"
                      fill-opacity="0.55"
                      style="fill: black; fill-opacity: 0.55"
                    />
                    <path
                      d="M12.4196 20.6839L12.4196 20.6839C12.8118 21.0543 13.4249 21.0542 13.817 20.6838C13.817 20.6838 13.817 20.6838 13.817 20.6838L19.4022 15.4086C19.9244 14.9154 19.9244 14.0844 19.4022 13.5912L13.817 8.31595L13.6454 8.4977L13.817 8.31595C13.4249 7.94555 12.8118 7.94556 12.4196 8.3158L12.4195 8.31585C11.9943 8.71749 11.9942 9.39396 12.4194 9.79563L12.4195 9.79564L17.2074 14.3182L17.2074 14.3182C17.3118 14.4168 17.3118 14.583 17.2074 14.6816L17.2074 14.6816L12.4195 19.2042C11.9943 19.6058 11.9943 20.2824 12.4196 20.6839Z"
                      stroke="black"
                      stroke-opacity="0.55"
                      style="stroke: black; stroke-opacity: 0.55"
                      stroke-width="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            ref="scrollOrderContainer"
            class="relative overflow-x-auto whitespace-nowrap hide-scrollbar py-[1px]"
          >
            <div class="flex gap-[24px] w-max px-[24px]">
              <div
                v-for="(item, itemIndex) in order.items"
                :key="itemIndex"
                class="relative bg-[#FFFFFF] border border-black/20 rounded-[22px] w-[233px] h-[465px] p-[24px] flex flex-col items-center"
              >
                <img
                  :src="item.image"
                  alt="Product Image"
                  class="mb-[28px] mt-[12px] w-9/12 object-contain"
                />
                <h1
                  class="text-black text-left font-[Visby] font-bold text-[16px] mb-[5px] leading-[125%] truncate w-[100%]"
                >
                  {{ item.title }}
                </h1>
                <h2
                  class="text-black opacity-[60%] text-left font-[Visby] font-semibold text-[14px] mb-[5px] leading-tight w-[100%] truncate"
                >
                  {{ item.model }} - {{ item.type }}
                </h2>
                <h3
                  class="text-black opacity-[60%] text-left text-[14px] mb-[5px] leading-tight w-[100%] truncate"
                >
                  {{ item.color }}
                  {{ item.customizations ? "- Customized" : "" }}
                </h3>
                <div class="mt-auto w-full flex items-center justify-between">
                  <h3
                    class="text-black text-left text-[15px] leading-tight truncate"
                  >
                    MAD {{ item.price }}
                  </h3>

                  <div
                    class="flex items-center justify-center px-[8px] h-6 border border-[#00000099] text-[#00000099] rounded-full ml-2"
                  >
                    <span class="text-sm">x{{ item.quantity }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Orders Mobile -->
      <div v-if="orders.length > 0 && isMobile">
        <div
          v-for="(order, index) in orders.slice().reverse()"
          :key="index"
          class="mx-auto mt-[24px] w-full rounded-[32px] border border-black/45 py-[24px] overflow-hidden"
        >
          <!-- Order Header -->
          <div
            class="flex justify-between flex-wrap space-y-2 items-center mb-[24px] px-[24px] py-[1px]"
          >
            <h2
              class="text-[22px] leading-none text-left font-normal text-[#000000]"
            >
              Order n°{{ order.id }}
            </h2>
            <div class="flex items-center space-x-[12px]">
              <div
                class="flex items-center justify-center px-[10px] py-[7px] border border-black text-black rounded-full"
              >
                <span class="text-[12px] leading-none"
                  >MAD {{ order.checkoutInfo.total }}</span
                >
              </div>
              <div
                class="flex items-center justify-center px-[10px] py-[7px] border border-black text-black rounded-full space-x-[6px]"
              >
                <!-- SVG Icon and Status -->
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- SVG content omitted for brevity -->
                </svg>
                <span class="text-[12px] leading-none">On Its Way</span>
              </div>
            </div>
          </div>

          <!-- Stack of Items -->
          <div class="relative overflow-x-auto whitespace-nowrap py-[1px]">
            <div
              class="relative min-h-[171px] h-fit max-h-[500px] rounded-[18px] px-[24px] space-y-[10px] cursor-pointer"
              @click="toggleExpanded(order.id)"
            >
              <div
                v-for="(item, itemIndex) in order.items"
                :key="itemIndex"
                :class="[
                  'p-4 rounded-[18px] border bg-[#F9F9F9] 750:bg-white border-[#00000010] transition-transform duration-300 ease-in-out',
                  expandedOrder === order.id
                    ? ''
                    : getStackedClass(itemIndex),
                ]"
                :style="getZIndexStyle(itemIndex)"
              >
                <!-- Item Content -->
                <div class="flex">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-[55px] h-[110px] object-cover mr-4"
                  />
                  <div
                    class="flex flex-col flex-grow justify-between text-left min-w-0"
                  >
                    <div>
                      <h2
                        class="text-base text-black truncate font-semibold flex-grow mr-2"
                      >
                        {{ item.title }}
                      </h2>
                      <p class="text-[13px] text-black/60 mb-1">
                        {{ item.model }}
                      </p>
                      <p class="text-[13px] text-black/60 mb-1">
                        {{ item.type }}
                      </p>
                      <p class="text-xs text-black/60">
                        {{ item.color }}
                        {{ item.customizations ? "- Customized" : "" }}
                      </p>
                    </div>
                    <div class="flex justify-between items-end mt-2">
                      <span class="text-sm text-black/80"
                        >MAD {{ item.price }}</span
                      >
                      <div
                        class="flex items-center justify-center px-[8px] h-6 border border-[#00000099] text-[#00000099] rounded-full ml-2"
                      >
                        <span class="text-sm">x{{ item.quantity }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- No Orders Message -->
      <div v-else class="flex justify-center items-center h-64 mt-8">
        <h2
          class="text-3xl sm:text-5xl font-semibold text-black/75 text-center"
        >
          You have no orders yet.
          <span class="whitespace-nowrap">Start shopping now!</span>
        </h2>
      </div>
      <div class="flex justify-center items-baseline mt-[40px]">
        <div
          @click="goHome"
          class="px-[25px] py-[20px] border border-black/45 rounded-full text-black/45 hover:bg-black hover:border-black hover:cursor-pointer hover:text-white transition-colors duration-200 ease-in-out"
        >
          <h1 class="text-left font-normal text-[18px] leading-none">
            Continue Shopping
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourOrdersPage",
  // Your component options here
  data() {
    return {
      scrolling: false,
      canScrollLeft: [], // Initialize as an empty array to track each container's state
      canScrollRight: [], // Initialize as an empty array to track each container's state

      isMobile: window.innerWidth < 750,
      expandedOrder: null,
    };
  },

  mounted() {
    // First tick to ensure items are populated before iterating
    this.$nextTick(() => {
      if (Array.isArray(this.items) && this.items.length > 0) {
        this.items.forEach((item, index) => {
          const scrollContainer = this.$refs.scrollOrderContainer?.[index];
          if (scrollContainer) {
            // Bind updateScrollButtons to maintain the correct context
            scrollContainer.addEventListener("scroll", () =>
              this.updateScrollButtons(index)
            );
          }
        });
      }
    });

    // Second tick to initialize scroll buttons and add listeners
    this.$nextTick(() => {
      if (this.$refs.scrollOrderContainer?.length > 0) {
        this.$refs.scrollOrderContainer.forEach((_, index) => {
          // Initially, can't scroll left but can scroll right
          this.canScrollLeft[index] = false;
          this.canScrollRight[index] = true;

          // Update scroll state based on actual dimensions
          this.updateScrollButtons(index);

          // Add scroll listener to each container
          const scrollContainer = this.$refs.scrollOrderContainer[index];
          if (scrollContainer) {
            scrollContainer.addEventListener("scroll", () =>
              this.updateScrollButtons(index)
            );
          }
        });
      }

      if (this.$refs.scrollOrderContainer?.length > 0) {
        // Add window resize listener to update scroll buttons when the container sizes change
        window.addEventListener("resize", this.handleResize);
      }
    });
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 750;
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("resize", () => {
      this.isMobile = window.innerWidth < 750;
    });
  },

  computed: {
    orders() {
      return this.$store.state.orders;
    },

    itemWidth() {
      // Assuming you want to calculate the width for a specific container, e.g., the first one
      const index = 0; // Example: use index 0 for demonstration, adjust as needed
      const scrollContainer = this.$refs.scrollOrderContainer[index];

      if (!scrollContainer) return 0; // Ensure scrollContainer exists

      const item = scrollContainer.querySelector(".flex > div");
      const gap = parseFloat(
        getComputedStyle(scrollContainer.querySelector(".flex")).gap
      );
      return item ? item.offsetWidth + gap : 0;
    },
  },
  methods: {
    toggleExpanded(orderId) {
      // Toggle the expansion of the clicked order
      this.expandedOrder = this.expandedOrder === orderId ? null : orderId;
    },
    getStackedClass(index) {
  // Default styles for the top item
  let translateY = 'translate-y-0';  // No vertical translation for the top item
  let scale = 'scale-100';  // No scaling for the top item
  let opacity = 'opacity-100';  // Full opacity for the top item
  let width = 'w-fill';  // Maintain full width for scaling
  let margin = 'mx-[24px]';  // Center the item horizontally
  let height = 'h-fit';  // Maintain full height for scaling

  // Adjust styles based on index
  if (index === 0) {
    translateY = 'translate-y-0';  // No translation for the top item
    scale = 'scale-100';  // No scaling
    opacity = 'opacity-100';  // Full opacity
  } else if (index === 1) {
    translateY = 'translate-y-2';  // Move down for the second item
    scale = 'scale-[0.9]';  // Scale down slightly
    opacity = 'opacity-80';  // Reduce opacity
  } else if (index === 2) {
    translateY = 'translate-y-6';  // Move down further for the third item
    scale = 'scale-[0.80]';  // Scale down more
    opacity = 'opacity-60';  // Further reduce opacity
  } else if (index >= 3) {
    return 'hidden';  // Hide items beyond the third when not expanded
  }

  return `absolute inset-0 ${translateY} ${scale} ${opacity} ${width} ${height} ${margin}`;  // Ensure the absolute position
},
getZIndexStyle(index) {
  return { zIndex: `${10 - index}` };  // Use inline style to guarantee z-index control
},
    handleResize() {
      // Update the scroll buttons for all containers on resize
      this.$refs.scrollOrderContainer.forEach((_, index) => {
        this.updateScrollButtons(index);
      });
    },
    updateScrollButtons(index) {
      const scrollContainer = this.$refs.scrollOrderContainer[index];

      // Ensure you update the correct state for each container
      this.canScrollLeft[index] = scrollContainer.scrollLeft > 0;
      this.canScrollRight[index] =
        scrollContainer.scrollLeft + scrollContainer.clientWidth <
        scrollContainer.scrollWidth;
    },
    scrollLeft(index) {
      if (!this.scrolling) {
        this.scrolling = true;
        const scrollContainer = this.$refs.scrollOrderContainer[index];

        scrollContainer.scrollBy({ left: -this.itemWidth, behavior: "smooth" });

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.updateScrollButtons(index); // Update after scrolling left
            this.scrolling = false;
          }, 200); // Adjust based on scroll speed
        });
      }
    },
    scrollRight(index) {
      if (!this.scrolling) {
        this.scrolling = true;
        const scrollContainer = this.$refs.scrollOrderContainer[index];

        scrollContainer.scrollBy({ left: this.itemWidth, behavior: "smooth" });

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.updateScrollButtons(index); // Update after scrolling right
            this.scrolling = false;
          }, 200); // Adjust based on scroll speed
        });
      }
    },

    goHome() {
      this.$router.push("/");
    },
    clearOrders() {
      this.$store.commit("CLEAR_ORDERS");
      localStorage.removeItem("orders"); // Clear the local storage
    },
    //for mouse wheel support
    onScroll(event) {
      // Check if the event has significant vertical scroll
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        // If vertical scroll is significant, handle it
        this.$refs.scrollOrderContainer.scrollLeft += event.deltaY;
        event.preventDefault(); // Prevent default scrolling
      }
      // If horizontal scroll, let it pass through
    },
  },
};
</script>

<style scoped>
/* Your component styles here */

/* Hide scrollbar for Chrome, Safari, and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
