<template>
  <nav
    class="fixed top-0 left-0 w-full select-none bg-[#F7FDFC] border-b border-[#0A332E20] h-[60px] z-50 blurry transition-all duration-500 ease-in-out"
    :class="[
      isBagOpen || isDevicesOpen ? '' : 'h-[60px]', // Empty if open, otherwise 'h-[60px]'
      { 'pointer-events-none': isClosing }, // Adds 'pointer-events-none' if isClosing is true
    ]"
    :style="{
      height: isBagOpen
        ? `min(${bagContentHeight + 60 + 24}px, 100vh)` // Limits height to the viewport height
        : isDevicesOpen
        ? `min(${devicesContentHeight + 60 + 24}px, 100vh)` // Limits height to viewport if devices are open
        : '60px',
      backgroundColor: lightColorTp,
      borderColor: navBarDarkColor + '26',
      overflowY: isBagOpen || isDevicesOpen ? 'auto' : 'hidden', // Enables scroll if content overflows
    }"
    @mouseleave="
      closeBag();
      closeDevicesNonHover();
    "
  >
    <div
      class="max-w-[1188px] w-full mx-auto px-6 box-border flex justify-between items-center h-[60px]"
    >
      <!-- Left-aligned section (Logo) -->
      <div class="flex items-center w-1/3">
        <router-link :to="{ path: '/' }" :style="{ color: navBarDarkColor }">
          <svg
            class="w-[32px]"
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
        </router-link>
      </div>

      <!-- Center-aligned section (Text buttons) -->
      <div class="flex justify-center w-1/3">
        <a
          v-if="!isCheckoutPage"
          href="#"
          @mouseenter="toggleDevices"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Devices</a
        >
        <a
          v-if="!isCheckoutPage"
          href="#"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Customization</a
        >
        <a
          v-if="!isCheckoutPage"
          href="#"
          class="text-[#0A332E] hover:bg-[#00000007] px-3 py-2 text-[14px] rounded-xl"
          :style="{ color: navBarDarkColor }"
          >Featured</a
        >
      </div>

      <!-- Right-aligned section (Symbol buttons) -->
      <div class="flex justify-end items-center space-x-4 w-1/3">
        <a
          v-if="!isCheckoutPage"
          :style="{ color: navBarDarkColor }"
          class="cursor-pointer"
        >
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
          class="text-[#0A332E] hover:text-black cursor-pointer"
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
          v-if="!isCheckoutPage"
          class="text-[#0A332E] hover:text-black cursor-pointer"
          :style="{ color: navBarDarkColor }"
          @click="toggleBag"
        >
          <!-- Empty Bag SVG -->
          <svg
            v-if="bagItems.length === 0"
            :key="`empty-bag-${isJumping}`"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.4999 19.5005"
            class="w-[18px] bag-icon"
            :class="isJumping ? 'jump-animation' : ''"
          >
            <g>
              <path
                d="M17.6085,19.5005H1.8917c-.2598,0-.5117-.0488-.748-.1455-.2363-.0947-.4512-.2373-.6338-.4199-.1865-.1904-.3232-.4072-.4102-.6484-.0879-.2451-.1182-.5107-.0889-.7695L1.2931,6.4395c.0518-.4482,.2783-.8589,.6396-1.1558,.3467-.2827,.7861-.4375,1.2402-.4375h2.0361c.0674-1.0298,.4766-2.8438,1.3477-3.6367,.8564-.7798,1.9902-1.2095,3.1934-1.2095,1.2021,0,2.3369,.4297,3.1943,1.2095,.8711,.793,1.2803,2.6069,1.3477,3.6367h2.0361c.9678,0,1.7754,.6855,1.8799,1.5942l1.2803,11.0767c.0566,.4912-.0967,.9697-.4326,1.3477-.3604,.4043-.8877,.6357-1.4473,.6357ZM3.1729,6.3462c-.1084,0-.2139,.0356-.2891,.0977-.0576,.0469-.0938,.1069-.1006,.1675l-1.2822,11.0776c.0234,.126,.0459,.1602,.0771,.1924,.0332,.0332,.0781,.0635,.1279,.083,.0596,.0244,.1221,.0361,.1855,.0361h15.7168c.1318,0,.251-.0488,.3271-.1338,.0488-.0547,.0703-.1143,.0625-.1768l-1.2803-11.0786c-.0166-.146-.1914-.2651-.3896-.2651H3.1729Zm3.5381-1.5h6.0791c-.0703-.8984-.4424-2.1514-.8555-2.5273-1.1445-1.041-3.2256-1.0405-4.3682-.0005-.4131,.376-.7852,1.6294-.8555,2.5278Z"
                fill="currentColor"
              />
            </g>
          </svg>

          <!-- Filled Bag SVG -->
          <svg
            v-else
            :key="`filled-bag-${isJumping}`"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.4999 19.5005"
            class="w-[18px] bag-icon"
            :class="isJumping ? 'jump-animation' : ''"
          >
            <g>
              <g>
                <polygon
                  id="Filling"
                  points="3.7065 7.3325 2.5874 17.001 16.9111 17.001 15.7959 7.3457 3.7065 7.3325"
                  fill="currentColor"
                />
                <path
                  d="M19.4884,17.5171l-1.2803-11.0767c-.1046-.9088-.9121-1.5942-1.8799-1.5942h-2.0361c-.0674-1.0298-.4766-2.8437-1.3477-3.6367-.8574-.7798-1.9922-1.2095-3.1943-1.2095-1.2032,0-2.337,.4297-3.1934,1.2095-.8711,.7929-1.2803,2.6069-1.3477,3.6367H3.1729c-.4541,0-.8935,.1548-1.2402,.4375-.3613,.2969-.5878,.7076-.6396,1.1558L.0108,17.5172c-.0292,.2588,.001,.5244,.0889,.7695,.087,.2412,.2237,.458,.4102,.6484,.1826,.1826,.3975,.3252,.6338,.4199,.2363,.0967,.4882,.1455,.748,.1455h15.7168c.5596,0,1.0869-.2314,1.4473-.6357,.3359-.378,.4892-.8565,.4326-1.3477ZM7.5664,2.3184c1.1426-1.04,3.2237-1.0405,4.3682,.0005,.4131,.3759,.7852,1.6289,.8555,2.5273H6.7111c.0703-.8984,.4423-2.1518,.8553-2.5278Zm10.369,15.5483c-.0761,.085-.1953,.1338-.3271,.1338H1.8915c-.0634,0-.1259-.0117-.1855-.0361-.0498-.0195-.0947-.0498-.1279-.083-.0312-.0322-.0537-.0664-.0771-.1924L2.7832,6.6114c.0068-.0606,.043-.1206,.1006-.1675,.0752-.0621,.1807-.0977,.2891-.0977h13.1551c.1982,0,.373,.1191,.3896,.2651l1.2803,11.0786c.0078,.0625-.0137,.1221-.0625,.1768Z"
                  fill="currentColor"
                />
              </g>
            </g>
            <!-- Number of items in the bag -->
            <text
              v-if="bagItems.length > 0"
              x="50%"
              y="65%"
              text-anchor="middle"
              dy=".3em"
              class="fill-current text-white text-[10px] font-bold font-[visby]"
              :style="{ color: navBarLightColor }"
            >
              {{ totalQuantity <= 99 ? totalQuantity : "99" }}
            </text>
          </svg>
        </a>
      </div>
    </div>
    <!-- Devices Content -->
    <div
      ref="devicesContent"
      :style="{ height: `${devicesContentHeight}px` }"
      class="w-full overflow-hidden select-none transition-all duration-500 ease-in-out"
    >
      <!-- Devices Content Here -->
      <div class="max-w-[1188px] w-full mx-auto px-6 box-border my-[24px]">
        <p class="text-black/60 text-[14px] leading-none mb-[14px] text-left">
          Shop cases for :
        </p>
        <div class="flex justify-between h-full">
          <!-- Loop through brands and models -->
          <div class="flex justify-between space-x-[80px] relative h-fit">
            <div
              v-for="(models, brand, index) in availableDevices"
              :key="brand"
              class="relative"
            >
              <h3
                class="font-semibold font-[visby] mb-[14px] leading-none text-left text-black text-[26px]"
              >
                {{ brand }}
              </h3>
              <ul class="text-left">
                <li
                  v-for="(model, idx) in models"
                  :key="idx"
                  @mouseenter="hoverModel(brand, model)"
                  @mouseleave="unhoverModel"
                  @click="goToModelPage(brand, model)"
                  class="cursor-pointer transition-position text-black/70 hover:text-black text-[16px] py-[7px] leading-none font-normal"
                >
                  {{ model }}
                </li>
                <!-- Add the vertical line centered between two lists -->
                <div
                  v-if="index !== Object.keys(availableDevices).length - 1"
                  class="absolute right-[-40px] top-0 bottom-0 w-[1px] bg-black/10"
                  style="height: 100%"
                ></div>
              </ul>
            </div>
          </div>

          <!-- Image Placeholder (Right Side) -->
          <div class="flex items-center w-[10%]">
            <img
              v-if="hoveredModel"
              :src="getPlaceholderImage(hoveredBrand, hoveredModel)"
              alt="Device Image"
              @load="updateDevicesContentHeight"
              @error="updateDevicesContentHeight"
              class="object-contain w-auto transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Bag Content -->
    <div
      ref="bagContent"
      class="max-w-[1188px] w-full mx-auto px-6 box-border overflow-hidden select-none transition-all duration-500 ease-in-out"
      :style="{ height: `${bagContentHeight}px` }"
    >
      <div class="max-w-[1188px] w-full mx-auto box-border mt-[24px]">
        <div class="flex justify-between items-center mb-[24px] py-[1px]">
          <h2
            class="text-[26px] text-left font-[Visby] font-bold text-[#000000]"
            @click="clearBag"
          >
            {{ $store.state.bag.length === 0 ? "Your Bag is empty" : "Bag" }}
          </h2>

          <div class="flex space-x-[12px]">
            <div
              class="flex items-center justify-center opacity-50 px-[10px] py-[7px] border border-black/45 text-black/55 hover:border-black hover:text-black pointer-events-none font-medium bg-white rounded-full space-x-[6px]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17969 0H4.81974C4.24175 0.000554723 3.68759 0.23151 3.27888 0.642176C2.87018 1.05284 2.64033 1.60967 2.63977 2.19043V13.2265C2.62932 13.4287 2.69344 13.6277 2.81986 13.7855C2.88264 13.8565 2.96044 13.9126 3.04756 13.9496C3.13469 13.9866 3.22894 14.0036 3.32343 13.9994C3.47304 13.9983 3.61842 13.9494 3.73857 13.8598C3.91899 13.7213 4.08898 13.5697 4.24717 13.406L6.98929 10.6577L9.75359 13.4069C9.91286 13.5659 10.0808 13.7158 10.2566 13.8561C10.3771 13.9488 10.5246 13.999 10.6764 13.999C10.7708 14.0033 10.865 13.9863 10.9521 13.9493C11.0391 13.9123 11.1168 13.8562 11.1795 13.7851C11.3061 13.6275 11.3702 13.4284 11.3596 13.2261V2.19043C11.359 1.60968 11.1292 1.05287 10.7205 0.64221C10.3118 0.231547 9.75767 0.000579933 9.17969 0ZM3.77715 2.19043C3.77765 1.91275 3.88766 1.64658 4.08307 1.45023C4.27849 1.25387 4.54339 1.14334 4.81974 1.14284H9.17969C9.45605 1.14334 9.72094 1.25387 9.91636 1.45023C10.1118 1.64658 10.2218 1.91275 10.2223 2.19043L10.2218 12.2646L7.7883 9.84391C7.57785 9.63576 7.29434 9.51918 6.99905 9.51935C6.70375 9.51953 6.42038 9.63646 6.21019 9.84486L3.77715 12.2658V2.19043Z"
                  fill="currentColor"
                  fill-opacity="0.45"
                  style="fill: currentColor; fill-opacity: 1"
                />
              </svg>

              <span class="text-[14px] leading-none">Your Saves</span>
            </div>
            <div
              @click="goToOrders"
              class="flex items-center justify-center px-[10px] py-[7px] border border-black/45 text-black/55 hover:border-black hover:text-black hover:cursor-pointer font-medium bg-white rounded-full space-x-[6px]"
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9094 4.8303C13.7132 4.19909 13.2947 3.66105 12.7322 3.31653L8.22458 0.765728C7.84946 0.55811 7.42801 0.449219 6.99958 0.449219C6.57115 0.449219 6.14971 0.55811 5.77458 0.765728L1.26701 3.31653C1.02433 3.45928 0.808134 3.64311 0.627999 3.85988C0.222017 4.30658 -0.00208379 4.88983 1.46041e-05 5.49431V10.5002C0.000489351 10.9432 0.118075 11.3782 0.340783 11.7607C0.563491 12.1433 0.883353 12.4598 1.26776 12.6779L5.77533 15.2287C6.14927 15.44 6.57118 15.5509 7.00033 15.5509C7.42947 15.5509 7.85138 15.44 8.22532 15.2287L12.7329 12.6779C13.1172 12.4597 13.4369 12.1432 13.6595 11.7606C13.8821 11.3781 13.9996 10.9431 14 10.5002V5.49431C13.9999 5.26988 13.9694 5.04651 13.9094 4.8303ZM6.36364 8.47101V14.0962L1.8933 11.5662C1.70518 11.4594 1.54865 11.3045 1.43966 11.1172C1.33066 10.9299 1.27311 10.717 1.27285 10.5002L1.27592 5.59272L6.36364 8.47101ZM7.00001 7.36451L1.85289 4.45431C1.86604 4.44494 1.87967 4.43628 1.89372 4.42835L3.76283 3.37068L8.95449 6.26013L7.00001 7.36451ZM12.7273 5.59198V10.5002C12.727 10.717 12.6695 10.9299 12.5605 11.1172C12.4515 11.3045 12.2949 11.4594 12.1068 11.5662L7.63637 14.0962V8.47101L12.7273 5.59198ZM7.59914 1.87744L12.1067 4.42824C12.1208 4.43617 12.1344 4.44484 12.1475 4.4542L10.2552 5.52442L5.0626 2.63497L6.40087 1.87744C6.58446 1.77625 6.79054 1.7232 7.00001 1.7232C7.20948 1.7232 7.41556 1.77625 7.59914 1.87744Z"
                  fill="currentColor"
                  fill-opacity="0.45"
                  style="fill: currentColor; fill-opacity: 1"
                />
              </svg>

              <span class="text-[14px] leading-none">Orders</span>
            </div>
            <div class="flex space-x-2">
              <!-- Back Button -->
              <button
                :class="{ 'opacity-20 pointer-events-none': !canScrollLeft }"
                @click="scrollLeft"
                class="text-black text-[16px] select-none"
              >
                <!-- SVG for forward arrow -->
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
                :class="{ 'opacity-20 pointer-events-none': !canScrollRight }"
                @click="scrollRight"
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
          ref="scrollContainer"
          :class="{ 'select-none': scrolling }"
          class="relative rounded-[32px] overflow-x-auto whitespace-nowrap hide-scrollbar"
        >
          <div class="flex gap-[24px] w-max">
            <!-- Bag Items -->
            <div
              v-for="(item, index) in bagItems"
              :key="index"
              class="relative bg-[#FFFFFF] border border-[#00000020] rounded-[32px] w-[233px] h-[465px] p-[24px] flex flex-col items-center"
            >
              <!-- Delete Button -->
              <button
                class="absolute top-[20px] right-[20px] z-50 text-black"
                @click="deleteItem(index)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="10"
                    fill="black"
                    fill-opacity="0.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4298 5.56995C14.7227 5.86285 14.7227 6.33772 14.4298 6.63061L11.0607 9.99977L14.4298 13.3689C14.7227 13.6618 14.7227 14.1367 14.4298 14.4296C14.1369 14.7225 13.662 14.7225 13.3692 14.4296L10 11.0604L6.63084 14.4296C6.33795 14.7225 5.86308 14.7225 5.57018 14.4296C5.27729 14.1367 5.27729 13.6618 5.57018 13.3689L8.93934 9.99977L5.57018 6.63061C5.27729 6.33772 5.27729 5.86285 5.57018 5.56995C5.86308 5.27706 6.33795 5.27706 6.63084 5.56995L10 8.93911L13.3692 5.56995C13.662 5.27706 14.1369 5.27706 14.4298 5.56995Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
              </button>
              <img
                :src="item.image"
                alt="Product Image"
                class="mb-[20px] mt-[20px] w-9/12 object-contain"
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
                class="text-black opacity-[60%] text-left text-[14px] mb-[5px] leading-snug w-[100%] truncate"
              >
                {{ item.color }}
                {{ item.customizations ? "- Customized" : "" }}
              </h3>
              <div class="mt-auto w-full flex items-center justify-between">
                <h3
                  class="text-black text-left text-[15px] leading-snug truncate"
                >
                  MAD {{ item.price }}
                </h3>

                <div
                  class="flex items-center h-[24px] rounded-full border border-black"
                >
                  <button
                    @click="decrementQuantity(index)"
                    class="text-black rounded-full pl-[8px] pr-[5px] text-[14px] font-bold h-full"
                  >
                    <svg
                      width="13"
                      height="2"
                      viewBox="0 0 13 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.470703 1C0.470703 0.585786 0.80649 0.25 1.2207 0.25H12.2501C12.6643 0.25 13.0001 0.585786 13.0001 1C13.0001 1.41421 12.6643 1.75 12.2501 1.75H1.2207C0.80649 1.75 0.470703 1.41421 0.470703 1Z"
                        fill="black"
                        style="fill: black; fill-opacity: 1"
                      />
                    </svg>
                  </button>
                  <input
                    :value="item.quantity"
                    @input="validateQuantity(index, $event.target.value)"
                    type="number"
                    min="1"
                    max="99"
                    class="text-center w-[35px] rounded-[4px] text-black text-[15px] no-arrows focus:outline-none bg-transparent"
                  />
                  <button
                    @click="incrementQuantity(index)"
                    class="text-black rounded-full pl-[5px] pr-[8px] text-[14px] font-bold h-full"
                  >
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.26471 0.735352C6.67892 0.735352 7.01471 1.07114 7.01471 1.48535V6.25006H11.7794C12.1936 6.25006 12.5294 6.58584 12.5294 7.00006C12.5294 7.41427 12.1936 7.75006 11.7794 7.75006H7.01471V12.5148C7.01471 12.929 6.67892 13.2648 6.26471 13.2648C5.85049 13.2648 5.51471 12.929 5.51471 12.5148V7.75006H0.75C0.335786 7.75006 0 7.41427 0 7.00006C0 6.58584 0.335786 6.25006 0.75 6.25006H5.51471V1.48535C5.51471 1.07114 5.85049 0.735352 6.26471 0.735352Z"
                        fill="black"
                        style="fill: black; fill-opacity: 1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Placeholder Wrapper -->
            <template v-if="bagItems.length < 5">
              <!-- Placeholder Items -->
              <div
                v-for="index in 5 - bagItems.length"
                :key="'placeholder-' + index"
                class="bg-[#0000000C] rounded-[32px] w-[233px] h-[465px] flex flex-col items-center justify-center"
              >
                <div
                  v-if="index === 1"
                  class="flex flex-col items-center justify-center w-full h-full p-[30px]"
                >
                  <div
                    class="w-32 h-32 bg-[#0000000C] rounded-full flex justify-center items-center cursor-pointer"
                    style="padding: 30px; box-sizing: border-box"
                    @click="closeBag"
                  >
                    <svg
                      class="opacity-40"
                      height="100%"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.26471 0.735352C6.67892 0.735352 7.01471 1.07114 7.01471 1.48535V6.25006H11.7794C12.1936 6.25006 12.5294 6.58584 12.5294 7.00006C12.5294 7.41427 12.1936 7.75006 11.7794 7.75006H7.01471V12.5148C7.01471 12.929 6.67892 13.2648 6.26471 13.2648C5.85049 13.2648 5.51471 12.929 5.51471 12.5148V7.75006H0.75C0.335786 7.75006 0 7.41427 0 7.00006C0 6.58584 0.335786 6.25006 0.75 6.25006H5.51471V1.48535C5.51471 1.07114 5.85049 0.735352 6.26471 0.735352Z"
                        fill="black"
                        style="fill: black; fill-opacity: 1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div
          :class="[
            'mt-[24px] text-black p-5 bg-white rounded-[32px] h-[93px] border border-[#00000020] flex items-center justify-between',
            $store.state.bag.length === 0
              ? 'opacity-50 pointer-events-none'
              : '',
          ]"
        >
          <div class="flex items-center space-x-4 h-[40px] ml-[20px]">
            <span>Cases: {{ totalQuantity }}</span>
            <span class="block h-full border-l border-gray-300"></span>
            <span>Subtotal: MAD {{ subtotal }}</span>
            <span class="block h-full border-l border-gray-300"></span>
            <span>
              Shipping:
              <span
                class="text-[#00A354] font-medium"
                :class="
                  shippingCost === 'Free' ? 'text-[#00A354]' : 'text-black'
                "
                >{{ shippingCost }}</span
              >
            </span>
            <span class="block h-full border-l border-gray-300"></span>
            <span
              >Total: <span class="font-semibold">MAD {{ total }}</span></span
            >
          </div>
          <button
            :class="[
              'flex items-center px-6 py-2 border border-black h-full font-medium rounded-[20px]',
              $store.state.bag.length === 0
                ? 'cursor-not-allowed  bg-none text-gray-400 border-gray-400'
                : 'hover:bg-[#000000cc] hover:border-[#00000000] hover:text-white',
            ]"
            @click="goToCheckout"
          >
            Continue
            <svg
              class="ml-[8px] w-[14px] h-[14px]"
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
  </nav>
  <!-- Overlay for blur and darkness -->
  <div
    v-if="isBagOpen || isDevicesOpen"
    class="fixed inset-0 bg-black bg-opacity-[0.035] z-40 transition-opacity duration-500 ease-in-out"
    :class="
      isBagOpen || isDevicesOpen
        ? 'backdrop-blur-[50px] opacity-100'
        : 'opacity-0'
    "
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
      bagContentHeight: 0,
      isDevicesOpen: false,
      isClosing: false,
      devicesContentHeight: 0,

      //for devices dropdown
      hoveredBrand: null,
      hoveredModel: null,
      /////////////////////////////////////

      isJumping: false,

      scrolling: false,
      canScrollLeft: false,
      canScrollRight: true,
    };
  },

  created() {
    this._previousQuantity = this.totalQuantity; // Initialize previous quantity
  },

  watch: {
    totalQuantity: {
      handler(newQuantity) {
        this.$nextTick(() => {
          if (newQuantity > this._previousQuantity) {
            this.triggerJump();
          }
          this._previousQuantity = newQuantity;
        });
      },
      immediate: true, // Ensure it works immediately
    },

    hoveredModel() {
      this.$nextTick(() => {
        this.updateDevicesContentHeight();
      });
    },
    // Watch for route changes
    $route(to) {
      this.checkIfOnProductPage(to);
    },

    lightColorMsg(newVal) {
      // Update navbar color based on lightColorMsg and bag state
      if (!this.isBagOpen) {
        this.navBarLightColor = newVal;
        this.updateSafariTabColor(
          this.isDarkMode ? this.navBarDarkColor : newVal
        );
      }
    },
    darkColorMsg(newVal) {
      // Update navbar color based on darkColorMsg and bag state
      if (!this.isBagOpen) {
        this.navBarDarkColor = newVal;
        this.updateSafariTabColor(
          this.isDarkMode ? newVal : this.navBarLightColor
        );
      }
    },
    isBagOpen() {
      // Update navbar colors when bag state changes
      this.updateNavBarColors();
    },
    isDevicesOpen() {
      // Update navbar colors when bag state changes
      this.updateNavBarColors();
    },
  },
  mounted() {
    // Check on initial load
    this.checkIfOnProductPage(this.$route);
    this.updateNavBarColors();

    this.$nextTick(() => {
      this.$refs.scrollContainer.addEventListener(
        "scroll",
        this.updateScrollButtons
      );
    });
  },

  computed: {
    ...mapGetters(["availableDevices"]), // Get dynamically extracted devices from Vuex

    itemWidth() {
      const item = this.$refs.scrollContainer.querySelector(".flex > div");
      const gap = parseFloat(
        getComputedStyle(this.$refs.scrollContainer.querySelector(".flex")).gap
      );
      return item ? item.offsetWidth + gap : 0;
    },

    isCheckoutPage() {
      return this.$route.path === "/checkout"; // Check if the current route is checkout
    },
    bagItems() {
      return this.$store.getters.bagItems;
    },
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

    // Calculate the total quantity of products in the bag
    totalQuantity() {
      return this.$store.state.bag.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    // Calculate the subtotal of the products in the bag
    subtotal() {
      return this.$store.state.bag.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    // Calculate the total including shipping (example: free shipping)
    shippingCost() {
      return this.subtotal > 200 ? "Free" : "N/A";
    },
    // Calculate the grand total including shipping
    total() {
      return this.subtotal; // Assuming no extra shipping cost
    },
  },

  methods: {
    goToOrders() {
      this.closeBag();
      this.$router.push("/your-orders");
    },
    //for mouse wheel support
    onScroll(event) {
      // Check if the event has significant vertical scroll
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        // If vertical scroll is significant, handle it
        this.$refs.scrollContainer.scrollLeft += event.deltaY;
        event.preventDefault(); // Prevent default scrolling
      }
      // If horizontal scroll, let it pass through
    },
    updateScrollButtons() {
      const scrollContainer = this.$refs.scrollContainer;
      this.canScrollLeft = scrollContainer.scrollLeft > 0;
      this.canScrollRight =
        scrollContainer.scrollLeft + scrollContainer.clientWidth <
        scrollContainer.scrollWidth;
    },
    scrollLeft() {
      if (!this.scrolling) {
        // Check if it's already scrolling
        this.scrolling = true; // Set scrolling to true to prevent new scrolls
        const scrollContainer = this.$refs.scrollContainer;
        scrollContainer.scrollBy({ left: -this.itemWidth, behavior: "smooth" });

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.updateScrollButtons();
            this.scrolling = false; // Reset after scroll finishes
          }, 200); // Adjust timing based on the scroll speed
        });
      }
    },
    scrollRight() {
      if (!this.scrolling) {
        // Same handling for the right scroll
        this.scrolling = true;
        const scrollContainer = this.$refs.scrollContainer;
        scrollContainer.scrollBy({ left: this.itemWidth, behavior: "smooth" });

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.updateScrollButtons();
            this.scrolling = false;
          }, 200); // Adjust timing based on the scroll speed
        });
      }
    },

    goToModelPage(brand, model) {
      this.closeDevicesNonHover();
      this.$router.push(`/model/${brand}/${model}`);
    },
    triggerJump() {
      this.isJumping = true;
      setTimeout(() => {
        this.isJumping = false; // Reset after animation
      }, 500); // 500ms matches the jump animation duration
    },
    //methods for devices dropdown
    updateDevicesContentHeight() {
      const content = this.$refs.devicesContent;
      this.devicesContentHeight = content.scrollHeight; // Recalculate based on current content
    },
    hoverModel(brand, model) {
      this.hoveredBrand = brand;
      this.hoveredModel = model;
      this.$nextTick(() => {
        this.updateDevicesContentHeight(); // Trigger height update when the image is hovered (loaded)
      });
    },
    unhoverModel() {
      this.hoveredBrand = null;
      this.hoveredModel = null;
      this.$nextTick(() => {
        this.updateDevicesContentHeight(); // Trigger height update when the image is unhovered (unloaded)
      });
    },
    getPlaceholderImage(brand, model) {
      // Placeholder logic for demonstration purposes.
      // You would replace these with actual image paths based on the brand and model.
      try {
        // Use require to resolve the path correctly with Webpack
        return require(`@/assets/Placeholders/${brand}_${model}.png`);
      } catch (e) {
        // Fallback to a default image if the specific one is not found
        return require("@/assets/Placeholders/Apple_iPhone 15.png");
      }
    },
    ///////////////////////////////////////////
    goToCheckout() {
      this.closeBag();
      this.$router.push({ path: "/checkout" });
    },

    deleteItem(index) {
      // Mutation in Vuex store to remove an item
      this.$store.commit("REMOVE_ITEM", index);
    },
    clearBag() {
      this.$store.commit("clearBag"); // This commits the clearCart mutation to empty the cart
    },

    // Toggle the Bag

    toggleBag() {
      this.isBagOpen = !this.isBagOpen;
      if (this.isDevicesOpen) this.closeDevices(); // Close devices if open

      this.$nextTick(() => {
        const bagContentEl = this.$refs.bagContent;
        if (bagContentEl) {
          this.bagContentHeight = this.isBagOpen
            ? bagContentEl.scrollHeight
            : 0;
        }
      });
    },
    closeBag() {
      this.isBagOpen = false;

      this.$nextTick(() => {
        this.bagContentHeight = 0;
      });
    },
    toggleDevices() {
      if (!this.isDevicesOpen) {
        this.isDevicesOpen = !this.isDevicesOpen;
      }

      if (this.isBagOpen) this.closeBag(); // Close bag if open

      this.$nextTick(() => {
        const devicesContentEl = this.$refs.devicesContent;
        if (devicesContentEl) {
          this.devicesContentHeight = this.isDevicesOpen
            ? devicesContentEl.scrollHeight
            : 0;
        }
      });
    },
    closeDevices() {
      this.isDevicesOpen = false;
      this.$nextTick(() => {
        this.devicesContentHeight = 0;
      });
    },
    closeDevicesNonHover() {
      this.isClosing = true; // Start closing
      this.isDevicesOpen = false;
      this.$nextTick(() => {
        this.devicesContentHeight = 0;
        // Reset the isClosing flag after the animation duration (500ms)
        setTimeout(() => {
          this.isClosing = false;
        }, 300);
      });
    },

    // Increment and decrement quantity in bagged items

    incrementQuantity(index) {
      const product = this.$store.state.bag[index];
      if (product.quantity < 99) {
        product.quantity++;
      }
    },

    decrementQuantity(index) {
      const product = this.$store.state.bag[index];
      if (product.quantity > 1) {
        product.quantity--;
      }
    },

    validateQuantity(index, value) {
      const product = this.$store.state.bag[index];

      // Check if the product exists
      if (!product) {
        console.error("Product not found at index:", index);
        return;
      }

      if (value === "" || isNaN(value)) {
        // If value is empty or not a number, revert to last valid value or default to 1
        value = 1;
      } else {
        // Parse the numeric value and enforce the range
        value = Math.max(1, Math.min(99, parseInt(value, 10)));
      }

      // Update the quantity directly in the store
      this.$store.state.bag[index] = {
        ...product,
        quantity: value,
      };
    },

    checkIfOnProductPage(route) {
      if (route.name === "ProductPage" || route.path.startsWith("/product/")) {
        // On product page, set product colors if neither the bag nor devices are open
        if (!this.isBagOpen && !this.isDevicesOpen) {
          this.navBarLightColor = this.lightColorMsg;
          this.navBarDarkColor = this.darkColorMsg;
        }
      } else {
        // Not on product page, set default colors if neither the bag nor devices are open
        if (!this.isBagOpen && !this.isDevicesOpen) {
          this.navBarLightColor = "#F9F9F9";
          this.navBarDarkColor = "#000000";
          this.updateSafariTabColor(this.isDarkMode ? "#000000" : "#F9F9F9");
        }
      }
    },
    updateNavBarColors() {
      if (this.isBagOpen || this.isDevicesOpen) {
        // Either bag or devices dropdown is open, set default colors
        this.navBarLightColor = "#F9F9F9";
        this.navBarDarkColor = "#000000";
      } else {
        // Both bag and devices are closed, update colors based on route
        this.checkIfOnProductPage(this.$route);
      }
      this.updateSafariTabColor(
        this.isDarkMode ? this.navBarDarkColor : this.navBarLightColor
      );
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

.bag-icon {
  transition: transform 0.3s ease-in-out;
}

.jump-animation {
  animation: jump 0.5s ease-in-out; /* Adjust duration as needed */
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px); /* Jump up the original position */
  }
  60% {
    transform: translateY(2px); /* Slightly under the original position */
  }
  100% {
    transform: translateY(0); /* Back to the original position */
  }
}
</style>
