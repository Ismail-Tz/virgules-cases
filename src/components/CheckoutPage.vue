<template>
  <div class="flex justify-center min-h-screen mt-[108px]">
    <div :style="computedWidth">
      <h2
        class="text-[26px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
      >
        Checkout
      </h2>
      <div class="grid grid-cols-3 gap-[40px]">
        <div
          class="col-span-2 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <div>
            <!-- Contact Info -->
            <h2
              class="text-[22px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Contact Information
            </h2>
            <div class="relative w-full mb-[14px]">
              <input
                type="text"
                id="email"
                class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
              >
                Email
              </label>
            </div>
            <div class="flex gap-[14px]">
              <div
                class="relative flex items-center h-[50px] bg-white border border-[#00000033] text-black text-[15px] rounded-full focus-within:border-[#000000] transition-all duration-300 ease-in-out w-auto"
              >
                <select
                  id="countryCode"
                  class="w-full bg-transparent text-[15px] border-none outline-none pl-[20px] pr-[40px] py-[10px] leading-[100%] cursor-pointer appearance-none"
                >
                  <option value="+212">+212</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-black h-4 w-4 pointer-events-none"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </div>

              <div class="relative flex-grow mb-[14px]">
                <input
                  type="text"
                  id="phoneNum"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="phoneNum"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <!-- Shipping Adress -->

            <h2
              class="text-[22px] mt-[32px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Shipping Address
            </h2>
            <div class="flex gap-[14px] mb-[14px]">
              <div class="relative w-1/2">
                <input
                  type="text"
                  id="firstName"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="firstName"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  First Name
                </label>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="lastName"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="lastName"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div class="flex gap-[14px] mb-[14px]">
              <div class="relative w-1/2">
                <input
                  type="text"
                  id="address"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="address"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Address
                </label>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="postalCode"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="postalCode"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Postal Code
                </label>
              </div>
            </div>

            <div class="flex gap-[14px]">
              <div
                class="relative flex items-center h-[50px] bg-white border border-[#00000033] text-black text-[15px] rounded-full focus-within:border-[#000000] w-1/2"
              >
                <select
                  id="countryCode"
                  class="w-full bg-transparent text-[15px] border-none outline-none pl-[20px] pr-[40px] py-[10px] leading-[100%] cursor-pointer appearance-none"
                >
                  <option value="Casablanca-Settat">Casablanca-Settat</option>
                  <option value="Marrakech-Safi">Marrakech-Safi</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-black h-4 w-4 pointer-events-none"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </div>

              <div class="relative w-1/2">
                <input
                  type="text"
                  id="city"
                  class="w-full bg-white border border-[#00000033] text-black px-[20px] text-[15px] rounded-full leading-[100%] focus:outline-none focus:ring-none focus:border-[#000000] peer pt-[22.5px] pb-[12.5px] h-[50px] transition-all duration-300 ease-in-out"
                  placeholder=" "
                />
                <label
                  for="city"
                  class="absolute left-[20px] text-[15px] text-black opacity-80 transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 peer-focus:top-[13px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  City
                </label>
              </div>
            </div>

            <!-- Shipping Adress -->

            <h2
              class="text-[22px] mt-[32px] mb-[24px] text-left font-[Visby] font-bold text-[#000000]"
            >
              Payment
            </h2>
            <div class="flex gap-[14px]">
              <!-- First div (Selected by default) -->
              <div
                class="w-1/2 p-[20px] bg-white rounded-[24px] border-[1.5px] border-black shadow-[0_0_25px_rgba(0,0,0,0.1)] cursor-pointer"
              >
                <div class="flex items-start">
                  <!-- Icon container -->
                  <div
                    class="flex items-center justify-center w-[90px] h-[90px] rounded-[12px] bg-[#FBFBFB] border border-[#000000B3]"
                  >
                    <!-- Icon -->
                    <svg
                      width="59"
                      height="44"
                      class="aspect-square w-[50px]"
                      viewBox="0 0 59 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M56.9019 22.7134L49.614 14.7042C49.1212 14.1583 48.5109 13.7313 47.8291 13.4555C47.1473 13.1796 46.4118 13.0621 45.678 13.1119H40.7238V6.85976C40.7238 5.2049 40.0664 3.61783 38.8962 2.44767C37.726 1.27751 36.139 0.620117 34.4841 0.620117H7.02968C5.37483 0.620117 3.78775 1.27751 2.61759 2.44767C1.44743 3.61783 0.790039 5.2049 0.790039 6.85976V31.1944C0.790039 32.8492 1.44743 34.4363 2.61759 35.6065C3.78775 36.7766 5.37483 37.434 7.02968 37.434H8.39741C8.67398 39.0226 9.50177 40.4627 10.7352 41.5012C11.9687 42.5398 13.5288 43.1102 15.1412 43.1121C16.6668 43.1836 18.1692 42.7184 19.3875 41.7974C20.6058 40.8764 21.463 39.5577 21.8102 38.0705H38.485C38.8934 39.5688 39.7989 40.8838 41.053 41.7998C42.3071 42.7158 43.8353 43.1784 45.3868 43.1116C46.9384 43.0449 48.4212 42.4528 49.592 41.4325C50.7628 40.4122 51.5521 39.0243 51.8303 37.4964H53.6648C54.2692 37.557 54.8796 37.4836 55.4525 37.2814C56.0253 37.0792 56.5466 36.7532 56.9791 36.3266C57.4117 35.9001 57.7448 35.3834 57.955 34.8134C58.1651 34.2434 58.2469 33.6341 58.1948 33.0288V26.0205C58.1989 24.794 57.7367 23.6119 56.9019 22.7134ZM19.3243 37.434C19.0694 38.3475 18.5226 39.1525 17.7672 39.7259C17.0119 40.2994 16.0896 40.6098 15.1412 40.6098C14.1929 40.6098 13.2706 40.2994 12.5152 39.7259C11.7599 39.1525 11.213 38.3475 10.9582 37.434C10.6995 36.62 10.7127 35.744 10.9956 34.9382C11.2686 34.0518 11.8185 33.2763 12.5646 32.7254C13.3107 32.1745 14.2138 31.8772 15.1412 31.8772C16.0687 31.8772 16.9717 32.1745 17.7178 32.7254C18.4639 33.2763 19.0138 34.0518 19.2868 34.9382C19.5696 35.7441 19.5827 36.62 19.3243 37.434ZM21.8725 35.5746C21.7234 33.9393 20.9879 32.4131 19.8016 31.2776C18.6154 30.1421 17.0585 29.474 15.4182 29.3964C13.778 29.3189 12.165 29.8372 10.877 30.8557C9.58889 31.8742 8.71265 33.3242 8.40989 34.9382H7.02968C6.03717 34.9368 5.08569 34.542 4.38388 33.8402C3.68207 33.1384 3.28722 32.1869 3.2859 31.1944V6.85976C3.28722 5.86725 3.68207 4.91577 4.38388 4.21396C5.08569 3.51215 6.03717 3.1173 7.02968 3.11597H34.4841C35.4766 3.1173 36.4281 3.51215 37.1299 4.21396C37.8317 4.91577 38.2266 5.86725 38.2279 6.85976V35.5746H21.8725ZM49.2571 37.4964C48.9943 38.3975 48.4464 39.189 47.6955 39.7522C46.9446 40.3154 46.0314 40.6198 45.0928 40.6198C44.1542 40.6198 43.2409 40.3154 42.49 39.7522C41.7391 39.189 41.1912 38.3975 40.9284 37.4964C40.6569 36.6866 40.6569 35.8104 40.9284 35.0006C41.0856 34.446 41.3516 33.9283 41.7107 33.4774C42.0699 33.0266 42.5151 32.6517 43.0205 32.3745C43.5258 32.0973 44.0813 31.9234 44.6545 31.8628C45.2277 31.8022 45.8072 31.8563 46.3594 32.0217C46.9115 32.1872 47.4253 32.4608 47.8707 32.8266C48.3161 33.1924 48.6844 33.6432 48.954 34.1526C49.2237 34.6621 49.3893 35.22 49.4414 35.7941C49.4934 36.3681 49.4308 36.9468 49.2571 37.4964ZM55.6989 33.0288C55.6989 34.449 55.1273 35.0006 53.6648 35.0006H51.8303C51.62 33.8223 51.1029 32.7202 50.3312 31.8052C49.5595 30.8902 48.5604 30.1947 47.4345 29.7886C46.3085 29.3825 45.0955 29.2802 43.9174 29.4919C42.7393 29.7036 41.6378 30.222 40.7238 30.9947V15.6077H45.6805C46.0664 15.5621 46.4576 15.6094 46.8214 15.7458C47.1853 15.8821 47.5112 16.1035 47.7721 16.3914L55.0774 24.4131C55.4789 24.852 55.7007 25.4257 55.6989 26.0205V33.0288Z"
                        fill="black"
                        fill-opacity="0.5"
                        style="fill: black; fill-opacity: 0.4"
                      />
                    </svg>
                  </div>
                  <div
                    class="ml-[20px] flex flex-col justify-between h-[90px] text-left"
                  >
                    <p
                      class="text-[22px] font-medium leading-[110%] font-[Visby]"
                    >
                      Payment on delivery
                    </p>
                    <span
                      class="text-[12px] text-black/70 border border-black/70 rounded-full px-2 py-[1px] inline-block w-fit"
                      >Fast Shipping</span
                    >
                  </div>
                </div>
              </div>

              <!-- Second div (Unselectable) -->
              <div
                class="w-1/2 p-[20px] bg-white rounded-[24px] border-[0.5px] border-[#000000] shadow-[0_0_25px_rgba(0,0,0,0.1)] opacity-20 cursor-default pointer-events-none"
              >
                <div class="flex items-start">
                  <!-- Empty Icon container (SVG removed) -->
                  <div
                    class="flex items-center justify-center w-[90px] h-[90px] rounded-[12px] bg-[#FBFBFB] border border-[#000000B3]"
                  ></div>
                  <div
                    class="ml-[20px] flex flex-col justify-between h-[90px] text-left"
                  >
                    <p
                      class="text-[22px] font-medium leading-[110%] font-[Visby]"
                    >
                      Credit Card
                    </p>
                    <span
                      class="text-[12px] text-black/70 border border-black/70 rounded-full px-2 py-[1px] inline-block w-fit"
                      >Fast Shipping</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative col-span-1 bg-[#F9F9F9] border border-[#00000010] rounded-[32px] p-[24px]"
        >
          <div class="bg-gray-600 h-full">x</div>
        
          <!-- Bottom section -->
          <div
            class="absolute bottom-0 left-0 right-0 p-[24px]  backdrop-blur-[50px] bg-[#ffffffcc] rounded-b-[32px] z-50 border-t border-[#00000010]"
          >
            <div class="flex justify-between mb-[10px]">
              <span class="text-black">Subtotal</span>
              <span class="text-black">MAD 995</span>
            </div>
            <div class="flex justify-between mb-[20px]">
              <span class="text-black">Shipping</span>
              <span class="text-green-500">Free</span>
            </div>
            <hr class="border-t-[1px] border-black opacity-20 mb-[20px]" />
            <div class="flex justify-between mb-[24px]">
              <span class="text-black font-bold">Total</span>
              <span class="text-black font-bold">MAD 1194</span>
            </div>
            <button
            class="flex items-center justify-center px-6 py-[10px] text-[18px] border border-black w-full rounded-[20px]
                hover:bg-[#000000cc] hover:border-[#00000000] hover:text-white"
            
          >
            Continue
            <svg
              class="ml-[8px] w-[15px] h-[15px]"
              fill="currentColor"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.1824 13.9504C8.85482 13.6132 8.86263 13.0743 9.19984 12.7467L13.7246 8.35116L1.35151 8.35116C0.881386 8.35116 0.500273 7.97004 0.500273 7.49992C0.500273 7.02979 0.881386 6.64868 1.35151 6.64868L13.7246 6.64868L9.19984 2.25315C8.86263 1.92558 8.85482 1.38666 9.1824 1.04945C9.50998 0.712234 10.0489 0.704423 10.3861 1.032L16.4157 6.88934C16.5807 7.04963 16.6738 7.26988 16.6738 7.49992C16.6738 7.72996 16.5807 7.9502 16.4157 8.11049L10.3861 13.9678C10.0489 14.2954 9.50997 14.2876 9.1824 13.9504Z"
                fill="currentColor"
                viewBox="0 0 17 15"
                style="fill: currentColor; fill-opacity: 1"
              />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      // Your data properties go here
    };
  },
  methods: {
    // Your methods go here
  },
  mounted() {
    // Code to run when the component is mounted goes here
  },
  computed: {
    computedWidth() {
      return "width: calc(1680px - 540px)";
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Add any custom styles here if needed */
</style>
