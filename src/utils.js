
//Color utils
export function hexToHSL(hex) {
    hex = hex.replace(/^#/, "");

      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((hex) => hex + hex)
          .join("");
      }

      const r = parseInt(hex.slice(0, 2), 16) / 255;
      const g = parseInt(hex.slice(2, 4), 16) / 255;
      const b = parseInt(hex.slice(4, 6), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return {
        h: h * 360,
        s: s * 100,
        l: l * 100,
      };
  }
  
  export function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);

      const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };

      return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
  }
  
  export function lightenColor(color, lightness) {
    const hsl = hexToHSL(color);
      return hslToHex(hsl.h, hsl.s, lightness);
  }
  
  export function darkenColor(color, darkness) {
    // Darken the color
    const hsl = hexToHSL(color);
    return hslToHex(hsl.h, hsl.s, darkness);
  }