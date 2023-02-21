module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TwoUnits": "32px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "Unit": "16px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px",
        "Round": "50%"
      },
      "scale": {
        "XLarge": "192px",
        "XXLarge": "288px",
        "XSmall": "16px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "Small": "48px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}