/* @mullerstd/docs version: 0.0.2 */
import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "/*\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.docs-absolute {\n  position: absolute;\n}\n.docs-relative {\n  position: relative;\n}\n.docs-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.docs-my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.docs-mb-2 {\n  margin-bottom: 0.5rem;\n}\n.docs-mb-3 {\n  margin-bottom: 0.75rem;\n}\n.docs-mb-4 {\n  margin-bottom: 1rem;\n}\n.docs-mb-5 {\n  margin-bottom: 1.25rem;\n}\n.docs-mt-1 {\n  margin-top: 0.25rem;\n}\n.docs-mt-3 {\n  margin-top: 0.75rem;\n}\n.docs-mt-9 {\n  margin-top: 2.25rem;\n}\n.docs-block {\n  display: block;\n}\n.docs-flex {\n  display: flex;\n}\n.docs-table-cell {\n  display: table-cell;\n}\n.docs-table-row {\n  display: table-row;\n}\n.docs-grid {\n  display: grid;\n}\n.docs-min-h-screen {\n  min-height: 100vh;\n}\n.docs-w-full {\n  width: 100%;\n}\n.docs-max-w-6xl {\n  max-width: 72rem;\n}\n.docs-list-disc {\n  list-style-type: disc;\n}\n.docs-grid-flow-col {\n  grid-auto-flow: column;\n}\n.docs-flex-col {\n  flex-direction: column;\n}\n.docs-gap-2 {\n  gap: 0.5rem;\n}\n.docs-gap-3 {\n  gap: 0.75rem;\n}\n.docs-space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.docs-divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n.docs-divide-neutral > :not([hidden]) ~ :not([hidden]) {\n  border-color: var(--color-neutral);\n}\n.docs-overflow-hidden {\n  overflow: hidden;\n}\n.docs-overflow-scroll {\n  overflow: scroll;\n}\n.docs-rounded-\\[var\\(--ui-radius\\)\\] {\n  border-radius: var(--ui-radius);\n}\n.docs-rounded-md {\n  border-radius: 0.375rem;\n}\n.docs-border-b-\\[2px\\] {\n  border-bottom-width: 2px;\n}\n.docs-border-current {\n  border-color: currentColor;\n}\n.docs-bg-\\[color\\:var\\(--color-background-primary\\)\\] {\n  background-color: var(--color-background-primary);\n}\n.docs-bg-\\[color\\:var\\(--color-background-secondary\\)\\] {\n  background-color: var(--color-background-secondary);\n}\n.docs-bg-neutral {\n  background-color: var(--color-neutral);\n}\n.docs-p-1 {\n  padding: 0.25rem;\n}\n.docs-p-\\[1rem\\] {\n  padding: 1rem;\n}\n.docs-px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.docs-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.docs-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.docs-py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.docs-py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.docs-pb-1 {\n  padding-bottom: 0.25rem;\n}\n.docs-pl-6 {\n  padding-left: 1.5rem;\n}\n.docs-text-left {\n  text-align: left;\n}\n.docs-font-code {\n  font-family: var(--font-code);\n}\n.docs-font-primary {\n  font-family: var(--font-primary);\n}\n.docs-text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.docs-text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.docs-text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.docs-text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.docs-text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.docs-font-bold {\n  font-weight: 700;\n}\n.docs-font-semibold {\n  font-weight: 600;\n}\n.docs-uppercase {\n  text-transform: uppercase;\n}\n.docs-text-\\[\\#df4b40\\] {\n  --tw-text-opacity: 1;\n  color: rgb(223 75 64 / var(--tw-text-opacity));\n}\n.docs-text-\\[color\\:var\\(--color-text-primary\\)\\] {\n  color: var(--color-text-primary);\n}\n.docs-text-primary {\n  color: var(--color-accent);\n}\n.docs-shadow-\\[0_0_0_1px_var\\(--color-neutral\\)\\] {\n  --tw-shadow: 0 0 0 1px var(--color-neutral);\n  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.docs-outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.selection\\:docs-bg-\\[color\\:var\\(--color-neutral-hover\\)\\] *::-moz-selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[color\\:var\\(--color-neutral-hover\\)\\] *::selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[var\\(--color-neutral-hover\\)\\] *::-moz-selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[var\\(--color-neutral-hover\\)\\] *::selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-text-inherit *::-moz-selection {\n  color: inherit;\n}\n.selection\\:docs-text-inherit *::selection {\n  color: inherit;\n}\n.selection\\:docs-bg-\\[color\\:var\\(--color-neutral-hover\\)\\]::-moz-selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[color\\:var\\(--color-neutral-hover\\)\\]::selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[var\\(--color-neutral-hover\\)\\]::-moz-selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-bg-\\[var\\(--color-neutral-hover\\)\\]::selection {\n  background-color: var(--color-neutral-hover);\n}\n.selection\\:docs-text-inherit::-moz-selection {\n  color: inherit;\n}\n.selection\\:docs-text-inherit::selection {\n  color: inherit;\n}\n.empty\\:before\\:docs-content-\\[\\'-\\'\\]:empty::before {\n  --tw-content: '-';\n  content: var(--tw-content);\n}\n.hover\\:docs-underline:hover {\n  text-decoration-line: underline;\n}\n.focus\\:docs-underline:focus {\n  text-decoration-line: underline;\n}\n.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:docs-rounded-full::-webkit-scrollbar-thumb {\n  border-radius: 9999px;\n}\n.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:docs-bg-neutral-hover::-webkit-scrollbar-thumb {\n  background-color: var(--color-neutral-hover);\n}\n.\\[\\&\\:\\:-webkit-scrollbar\\]\\:docs-h-2::-webkit-scrollbar {\n  height: 0.5rem;\n}\n.\\[\\&\\:\\:-webkit-scrollbar\\]\\:docs-w-2::-webkit-scrollbar {\n  width: 0.5rem;\n}\n";
styleInject(css_248z);

export { css_248z as default };
