import "./index.css";
import { jsx as $lOYfE$jsx, jsxs as $lOYfE$jsxs } from "react/jsx-runtime";
import {
	useRef as $lOYfE$useRef,
	useEffect as $lOYfE$useEffect,
	createContext as $lOYfE$createContext,
	useState as $lOYfE$useState,
	useCallback as $lOYfE$useCallback,
	useContext as $lOYfE$useContext,
	useMemo as $lOYfE$useMemo,
} from "react";
import $lOYfE$classnames from "classnames";
import {
	LiveProvider as $lOYfE$LiveProvider,
	LivePreview as $lOYfE$LivePreview,
	LiveError as $lOYfE$LiveError,
	LiveEditor as $lOYfE$LiveEditor,
} from "react-live";
import $lOYfE$prettierstandalone from "prettier/standalone";
import $lOYfE$prettierparserbabel from "prettier/parser-babel";
import $lOYfE$prismreactrenderer, {
	Prism as $lOYfE$Prism,
} from "prism-react-renderer";

function $parcel$export(e, n, v, s) {
	Object.defineProperty(e, n, {
		get: v,
		set: s,
		enumerable: true,
		configurable: true,
	});
}
var $9f369ba10a59d731$exports = {};

$parcel$export(
	$9f369ba10a59d731$exports,
	"DocsProvider",
	() => $9f369ba10a59d731$export$b6f3c0f79ad2cc1b,
);

var $b9512df003f3921b$exports = {};

$parcel$export(
	$b9512df003f3921b$exports,
	"ChaptersContext",
	() => $b9512df003f3921b$export$28687e09336c4e41,
);
$parcel$export(
	$b9512df003f3921b$exports,
	"WithChapters",
	() => $b9512df003f3921b$export$3dd47369631f458f,
);
$parcel$export(
	$b9512df003f3921b$exports,
	"useChapters",
	() => $b9512df003f3921b$export$ebea438ed9218f30,
);
$parcel$export(
	$b9512df003f3921b$exports,
	"Chapters",
	() => $b9512df003f3921b$export$97cfaebb6cb6adb9,
);

var $4d8007551d2822fe$exports = {};

$parcel$export(
	$4d8007551d2822fe$exports,
	"Link",
	() => $4d8007551d2822fe$export$a6c7ac8248d6e38a,
);

const $4d8007551d2822fe$export$a6c7ac8248d6e38a = ({
	children: children,
	...props
}) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("a", {
		className:
			"docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline",
		...props,
		children: children,
	});
};

const $b9512df003f3921b$export$28687e09336c4e41 = /*#__PURE__*/ (0,
$lOYfE$createContext)({
	chapters: [],
	registerChapter: () => null,
	unregisterChapter: () => null,
});
const $b9512df003f3921b$export$3dd47369631f458f = ({ children: children }) => {
	const [chapters, setChapters] = (0, $lOYfE$useState)([]);
	const registerChapter = (0, $lOYfE$useCallback)((payload) => {
		setChapters((prev) => [...prev, payload]);
	}, []);
	const unregisterChapter = (0, $lOYfE$useCallback)((id) => {
		setChapters((prev) => [...prev.filter((chapter) => chapter.id !== id)]);
	}, []);
	return /*#__PURE__*/ (0, $lOYfE$jsx)(
		$b9512df003f3921b$export$28687e09336c4e41.Provider,
		{
			value: {
				chapters: chapters,
				registerChapter: registerChapter,
				unregisterChapter: unregisterChapter,
			},
			children: children,
		},
	);
};
const $b9512df003f3921b$export$ebea438ed9218f30 = () =>
	(0, $lOYfE$useContext)($b9512df003f3921b$export$28687e09336c4e41);
const $b9512df003f3921b$export$97cfaebb6cb6adb9 = () => {
	const { chapters: chapters } = $b9512df003f3921b$export$ebea438ed9218f30();
	if (chapters.length === 0) return null;
	return /*#__PURE__*/ (0, $lOYfE$jsx)("ul", {
		className: "docs-my-4 docs-space-y-1",
		children: chapters.map(({ title: title, id: id }, idx) =>
			/*#__PURE__*/ (0, $lOYfE$jsx)(
				"li",
				{
					className: "docs-text-lg",
					children: /*#__PURE__*/ (0, $lOYfE$jsx)(
						(0, $4d8007551d2822fe$export$a6c7ac8248d6e38a),
						{
							href: `#${id}`,
							target: "_self",
							children: title,
						},
					),
				},
				String(idx),
			),
		),
	});
};

const $9f369ba10a59d731$var$defaultTheme = {
	"ui-radius": "4px",
	// main colors
	"color-accent": "#1061ff",
	"color-background-primary": "#ffffff",
	"color-background-secondary": "#eaeaea",
	"color-text-primary": "#000000",
	"color-text-secondary": "#5e5e5e",
	"color-neutral": "#eef0f1",
	"color-neutral-hover": "#d7d7d7",
	// code colors
	"color-code-01": "var(--color-text-secondary)",
	"color-code-02": "#9090909c",
	"color-code-03": "#be4678",
	"color-code-04": "#aa573c",
	"color-code-05": "#a06e3b",
	"color-code-06": "#2a9292",
	"color-code-07": "#398bc6",
	"color-code-08": "#576ddb",
	"color-code-09": "#955ae7",
	// typography
	"font-primary": "sans-serif",
	"font-secondary": "inherit",
	"font-code": '"Monaco"',
};
const $9f369ba10a59d731$export$b6f3c0f79ad2cc1b = ({
	themes: themes,
	currentTheme: currentTheme,
	children: children,
}) => {
	const docsRef = (0, $lOYfE$useRef)(null);
	(0, $lOYfE$useEffect)(() => {
		const theme =
			themes && currentTheme
				? Object.assign(
						$9f369ba10a59d731$var$defaultTheme,
						themes[currentTheme],
				  )
				: $9f369ba10a59d731$var$defaultTheme;
		Object.entries(theme).map(([key, value]) => {
			docsRef.current?.style.setProperty(`--${key}`, value);
		});
	}, [currentTheme, themes]);
	return /*#__PURE__*/ (0, $lOYfE$jsx)(
		(0, $b9512df003f3921b$export$3dd47369631f458f),
		{
			children: /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
				ref: docsRef,
				children: children,
			}),
		},
	);
};

var $235c0a9312f0fa2c$exports = {};

$parcel$export(
	$235c0a9312f0fa2c$exports,
	"Card",
	() => $235c0a9312f0fa2c$export$60332b2344f7fe41,
);

const $235c0a9312f0fa2c$export$60332b2344f7fe41 = ({
	children: children,
	className: className,
	...props
}) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
		className: (0, $lOYfE$classnames)(
			"docs-overflow-hidden docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)]",
			className,
		),
		...props,
		children: children,
	});
};

var $b8c62e45cd83ad6e$exports = {};

$parcel$export(
	$b8c62e45cd83ad6e$exports,
	"Page",
	() => $b8c62e45cd83ad6e$export$6955bcca4cd3539f,
);

const $b8c62e45cd83ad6e$export$6955bcca4cd3539f = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
		className:
			"docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-py-12 docs-font-primary docs-text-[color:var(--color-text-primary)]",
		children: /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
			className: "docs-mx-auto docs-max-w-6xl docs-px-4",
			children: children,
		}),
	});
};

var $a2d03bde4ea999ba$exports = {};

$parcel$export(
	$a2d03bde4ea999ba$exports,
	"ListItem",
	() => $a2d03bde4ea999ba$export$a7b06bfba60a8a78,
);
$parcel$export(
	$a2d03bde4ea999ba$exports,
	"List",
	() => $a2d03bde4ea999ba$export$54c2e3dc7acea9f5,
);

const $a2d03bde4ea999ba$export$a7b06bfba60a8a78 = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("li", {
		className: "docs-text-base",
		children: children,
	});
};
const $a2d03bde4ea999ba$export$54c2e3dc7acea9f5 = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("ul", {
		className: "docs-my-4 docs-list-disc docs-space-y-1 docs-pl-6",
		children: children,
	});
};

var $7194c81d11c092f6$exports = {};

$parcel$export(
	$7194c81d11c092f6$exports,
	"PageTitle",
	() => $7194c81d11c092f6$export$155581e8dc02007a,
);

const $7194c81d11c092f6$export$155581e8dc02007a = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("h1", {
		className: "docs-mb-3 docs-text-4xl",
		children: children,
	});
};

var $00f6cae7b3336269$exports = {};

$parcel$export(
	$00f6cae7b3336269$exports,
	"SectionTitle",
	() => $00f6cae7b3336269$export$69bc41ee738923ec,
);

const $00f6cae7b3336269$export$69bc41ee738923ec = ({ children: title }) => {
	const {
		registerChapter: registerChapter,
		unregisterChapter: unregisterChapter,
	} = (0, $b9512df003f3921b$export$ebea438ed9218f30)();
	const id = (0, $lOYfE$useMemo)(
		() => title.toLowerCase().split(" ").join("-"),
		[title],
	);
	(0, $lOYfE$useEffect)(() => {
		registerChapter({
			id: id,
			title: title,
		});
		return () => {
			unregisterChapter(id);
		};
	}, [id, registerChapter, title, unregisterChapter]);
	return /*#__PURE__*/ (0, $lOYfE$jsx)("h2", {
		id: id,
		className:
			"docs-mt-9 docs-mb-5 docs-border-b-[2px] docs-border-current docs-pb-1 docs-text-2xl docs-font-bold",
		children: title,
	});
};

var $b51f2f9cc231a713$exports = {};

$parcel$export(
	$b51f2f9cc231a713$exports,
	"Paragraph",
	() => $b51f2f9cc231a713$export$358a232cca1ab2ac,
);

const $b51f2f9cc231a713$export$358a232cca1ab2ac = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("p", {
		className: "docs-my-4",
		children: children,
	});
};

var $8625737674838067$exports = {};

$parcel$export(
	$8625737674838067$exports,
	"PropsTable",
	() => $8625737674838067$export$e1b46d8df2b2ac2,
);

const $8625737674838067$var$useClickOutside = (ref, handler) => {
	const handleClick = (0, $lOYfE$useCallback)(
		(event) => {
			if (ref.current && event.target)
				!ref.current.contains(event.target) && handler();
		},
		[handler, ref],
	);
	(0, $lOYfE$useEffect)(() => {
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [handleClick]);
};
const $8625737674838067$var$TypeCell = ({ type: type }) => {
	const [isShowDetails, setShowDetails] = (0, $lOYfE$useState)(false);
	const containerRef = (0, $lOYfE$useRef)(null);
	const closeModal = () => {
		setShowDetails(false);
	};
	const toggleModal = () => {
		setShowDetails((prev) => !prev);
	};
	$8625737674838067$var$useClickOutside(containerRef, closeModal);
	if (typeof type === "string")
		return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
			children: type,
		});
	return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
		className: "docs-relative",
		children: /*#__PURE__*/ (0, $lOYfE$jsxs)("div", {
			ref: containerRef,
			style: {
				display: "contents",
			},
			children: [
				/*#__PURE__*/ (0, $lOYfE$jsx)("button", {
					tabIndex: 0,
					onClick: () => toggleModal(),
					className:
						"docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline",
					children: type.shortName,
				}),
				isShowDetails &&
					/*#__PURE__*/ (0, $lOYfE$jsx)("div", {
						className:
							"docs-z-1 docs-absolute docs-mt-1 docs-rounded-md docs-bg-[color:var(--color-background-secondary)] docs-px-2 docs-py-1",
						children: /*#__PURE__*/ (0, $lOYfE$jsx)("p", {
							className: "docs-text-sm",
							children: type.details,
						}),
					}),
			],
		}),
	});
};
const $8625737674838067$export$e1b46d8df2b2ac2 = ({ data: data = [] }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
		children: /*#__PURE__*/ (0, $lOYfE$jsxs)("table", {
			className: "docs-w-full",
			children: [
				/*#__PURE__*/ (0, $lOYfE$jsx)("thead", {
					children: /*#__PURE__*/ (0, $lOYfE$jsxs)("tr", {
						children: [
							/*#__PURE__*/ (0, $lOYfE$jsx)("th", {
								className:
									"docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase",
								children: "Name",
							}),
							/*#__PURE__*/ (0, $lOYfE$jsx)("th", {
								className:
									"docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase",
								children: "Type",
							}),
							/*#__PURE__*/ (0, $lOYfE$jsx)("th", {
								className:
									"docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase",
								children: "Default",
							}),
						],
					}),
				}),
				/*#__PURE__*/ (0, $lOYfE$jsx)("tbody", {
					className:
						"docs-divide-y docs-divide-neutral docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)] ",
					children: data.map(
						({
							name: name,
							type: type,
							defaultValue: defaultValue,
							required: required,
						}) =>
							/*#__PURE__*/ (0, $lOYfE$jsxs)(
								"tr",
								{
									children: [
										/*#__PURE__*/ (0, $lOYfE$jsxs)("td", {
											className: "docs-px-2 docs-py-1.5",
											children: [
												name,
												required &&
													/*#__PURE__*/ (0, $lOYfE$jsx)("span", {
														children: "*",
													}),
											],
										}),
										/*#__PURE__*/ (0, $lOYfE$jsx)("td", {
											className: "docs-px-2 docs-py-1.5",
											children: /*#__PURE__*/ (0, $lOYfE$jsx)(
												$8625737674838067$var$TypeCell,
												{
													type: type,
												},
											),
										}),
										/*#__PURE__*/ (0, $lOYfE$jsx)("td", {
											className:
												"docs-px-2 docs-py-1.5 empty:before:docs-content-['-']",
											children: defaultValue,
										}),
									],
								},
								name,
							),
					),
				}),
			],
		}),
	});
};

var $6e89aa2d3b662d7e$exports = {};

$parcel$export(
	$6e89aa2d3b662d7e$exports,
	"ColorsTable",
	() => $6e89aa2d3b662d7e$export$f72bd0925e50dbd3,
);

const $6e89aa2d3b662d7e$var$ColorSwatch = ({ name: name, color: color }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsxs)("div", {
		children: [
			/*#__PURE__*/ (0, $lOYfE$jsx)("span", {
				className: "docs-block docs-rounded-[var(--ui-radius)]",
				style: {
					background: color,
				},
			}),
			/*#__PURE__*/ (0, $lOYfE$jsx)("p", {
				className: "docs-mt-1 docs-text-sm docs-font-semibold",
				children: name,
			}),
		],
	});
};
const $6e89aa2d3b662d7e$var$ColorPallete = ({
	title: title,
	swatches: swatches,
}) => {
	return /*#__PURE__*/ (0, $lOYfE$jsxs)("div", {
		children: [
			/*#__PURE__*/ (0, $lOYfE$jsx)("h3", {
				className: "docs-mb-4 docs-text-lg docs-font-bold",
				children: title,
			}),
			/*#__PURE__*/ (0, $lOYfE$jsx)("div", {
				className: "docs-grid docs-grid-flow-col docs-gap-2",
				children: swatches.map(({ name: name, color: color }) =>
					/*#__PURE__*/ (0, $lOYfE$jsx)(
						$6e89aa2d3b662d7e$var$ColorSwatch,
						{
							name: name,
							color: color,
						},
						name,
					),
				),
			}),
		],
	});
};
const $6e89aa2d3b662d7e$export$f72bd0925e50dbd3 = ({ palletes: palletes }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
		className: "docs-flex docs-flex-col docs-gap-3",
		children: palletes.map(({ title: title, swatches: swatches }) =>
			/*#__PURE__*/ (0, $lOYfE$jsx)(
				$6e89aa2d3b662d7e$var$ColorPallete,
				{
					title: title,
					swatches: swatches,
				},
				title,
			),
		),
	});
};

var $83f6b47bd0fdf92d$exports = {};

$parcel$export(
	$83f6b47bd0fdf92d$exports,
	"Subtitle",
	() => $83f6b47bd0fdf92d$export$cf345ef34cd72655,
);

const $83f6b47bd0fdf92d$export$cf345ef34cd72655 = ({ children: children }) => {
	return /*#__PURE__*/ (0, $lOYfE$jsx)("h3", {
		className: "docs-mt-3 docs-mb-2 docs-text-lg docs-font-bold",
		children: children,
	});
};

var $7b95adae13dc7cc8$exports = {};

$parcel$export(
	$7b95adae13dc7cc8$exports,
	"Playground",
	() => $7b95adae13dc7cc8$export$7ef678626f3575cb,
);

var $50639002e20f208a$exports = {};

$parcel$export(
	$50639002e20f208a$exports,
	"CodeSnippetTheme",
	() => $50639002e20f208a$export$e8fb8baa534d55de,
);
$parcel$export(
	$50639002e20f208a$exports,
	"CodeSnippet",
	() => $50639002e20f208a$export$9066f76bf3f31022,
);
$parcel$export(
	$50639002e20f208a$exports,
	"InlineCode",
	() => $50639002e20f208a$export$7f1bf47c7f50a6aa,
);

const $50639002e20f208a$export$e8fb8baa534d55de = {
	plain: {
		color: "var(--color-code-01)",
		padding: "0",
	},
	styles: [
		{
			types: ["changed"],
			style: {
				color: "rgb(162, 191, 252)",
				fontStyle: "italic",
			},
		},
		{
			types: ["deleted"],
			style: {
				color: "rgba(239, 83, 80, 0.56)",
				fontStyle: "italic",
			},
		},
		{
			types: ["inserted", "attr-name"],
			style: {
				color: "var(--color-code-04)",
				fontStyle: "italic",
			},
		},
		{
			types: ["comment"],
			style: {
				color: "var(--color-code-02)",
				fontStyle: "italic",
			},
		},
		{
			types: ["string", "url"],
			style: {
				color: "var(--color-code-06)",
			},
		},
		{
			types: ["variable"],
			style: {
				color: "var(--color-code-08)",
			},
		},
		{
			types: ["number"],
			style: {
				color: "var(--color-code-04)",
			},
		},
		{
			types: ["builtin", "char", "constant", "function"],
			style: {
				color: "var(--color-code-03)",
			},
		},
		{
			types: ["statement"],
			style: {
				color: "var(--color-code-07)",
			},
		},
		{
			// This was manually added after the auto-generation
			// so that punctuations are not italicised
			types: ["punctuation"],
			style: {
				color: "var(--color-code-07)",
			},
		},
		{
			types: ["selector", "doctype"],
			style: {
				color: "var(--color-code-09)",
				fontStyle: "italic",
			},
		},
		{
			types: ["class-name"],
			style: {
				color: "var(--color-code-05)",
			},
		},
		{
			types: ["keyword"],
			style: {
				color: "var(--color-code-09)",
			},
		},
		{
			types: ["tag", "operator"],
			style: {
				color: "var(--color-code-04)",
			},
		},
		{
			types: ["boolean"],
			style: {
				color: "var(--color-code-04)",
			},
		},
		{
			types: ["property"],
			style: {
				color: "var(--color-code-05)",
			},
		},
		{
			types: ["namespace"],
			style: {
				opacity: 0.7,
			},
		},
	],
};
const $50639002e20f208a$export$9066f76bf3f31022 = ({
	children: code,
	language: language,
}) => {
	const prettify = (code) => {
		switch (language) {
			case "tsx":
				return (0, $lOYfE$prettierstandalone)
					.format(code, {
						parser: "babel",
						plugins: [(0, $lOYfE$prettierparserbabel)],
					})
					.trim();
			default:
				return code.trim();
		}
	};
	return /*#__PURE__*/ (0, $lOYfE$jsx)(
		(0, $235c0a9312f0fa2c$export$60332b2344f7fe41),
		{
			children: /*#__PURE__*/ (0, $lOYfE$jsx)((0, $lOYfE$prismreactrenderer), {
				Prism: (0, $lOYfE$Prism),
				code: prettify(code),
				language: language,
				theme: $50639002e20f208a$export$e8fb8baa534d55de,
				children: ({
					tokens: tokens,
					getLineProps: getLineProps,
					getTokenProps: getTokenProps,
				}) =>
					/*#__PURE__*/ (0, $lOYfE$jsx)("pre", {
						className:
							"docs-overflow-scroll docs-bg-neutral docs-p-[1rem] docs-font-code selection:docs-bg-[color:var(--color-neutral-hover)] selection:docs-text-inherit",
						children: tokens.map((line, key) =>
							/*#__PURE__*/ (0, $lOYfE$jsx)(
								"div",
								{
									...getLineProps({
										line: line,
									}),
									className: "docs-table-row",
									children: /*#__PURE__*/ (0, $lOYfE$jsx)("div", {
										className: "docs-table-cell",
										children: line.map((token, key) =>
											/*#__PURE__*/ (0, $lOYfE$jsx)(
												"span",
												{
													...getTokenProps({
														token: token,
													}),
												},
												String(key),
											),
										),
									}),
								},
								String(key),
							),
						),
					}),
			}),
		},
	);
};
const $50639002e20f208a$export$7f1bf47c7f50a6aa = ({ children: children }) =>
	/*#__PURE__*/ (0, $lOYfE$jsx)("code", {
		className: "docs-rounded-md docs-bg-neutral docs-p-1",
		children: children,
	});

const $7b95adae13dc7cc8$export$7ef678626f3575cb = ({
	code: code,
	language: language,
	scope: scope,
}) => {
	const prettify = (code) => {
		return (0, $lOYfE$prettierstandalone)
			.format(code, {
				parser: "babel",
				plugins: [(0, $lOYfE$prettierparserbabel)],
				singleQuote: true,
			})
			.trim();
	};
	return /*#__PURE__*/ (0, $lOYfE$jsx)(
		(0, $235c0a9312f0fa2c$export$60332b2344f7fe41),
		{
			children: /*#__PURE__*/ (0, $lOYfE$jsxs)((0, $lOYfE$LiveProvider), {
				code: prettify(code),
				lang: language,
				// rome-ignore lint/a11y/noHeaderScope: <explanation>
				scope: scope,
				theme: (0, $50639002e20f208a$export$e8fb8baa534d55de),
				children: [
					/*#__PURE__*/ (0, $lOYfE$jsxs)("div", {
						className: "docs-p-[1rem]",
						children: [
							/*#__PURE__*/ (0, $lOYfE$jsx)((0, $lOYfE$LivePreview), {}),
							/*#__PURE__*/ (0, $lOYfE$jsx)((0, $lOYfE$LiveError), {
								className: "docs-text-[#df4b40]",
							}),
						],
					}),
					/*#__PURE__*/ (0, $lOYfE$jsx)((0, $lOYfE$LiveEditor), {
						className:
							"docs-bg-neutral docs-p-[1rem] selection:docs-bg-[var(--color-neutral-hover)] [&::-webkit-scrollbar]:docs-h-2 [&::-webkit-scrollbar]:docs-w-2 [&::-webkit-scrollbar-thumb]:docs-rounded-full [&::-webkit-scrollbar-thumb]:docs-bg-neutral-hover",
					}),
				],
			}),
		},
	);
};

export {
	$9f369ba10a59d731$export$b6f3c0f79ad2cc1b as DocsProvider,
	$235c0a9312f0fa2c$export$60332b2344f7fe41 as Card,
	$b9512df003f3921b$export$28687e09336c4e41 as ChaptersContext,
	$b9512df003f3921b$export$3dd47369631f458f as WithChapters,
	$b9512df003f3921b$export$ebea438ed9218f30 as useChapters,
	$b9512df003f3921b$export$97cfaebb6cb6adb9 as Chapters,
	$b8c62e45cd83ad6e$export$6955bcca4cd3539f as Page,
	$4d8007551d2822fe$export$a6c7ac8248d6e38a as Link,
	$a2d03bde4ea999ba$export$a7b06bfba60a8a78 as ListItem,
	$a2d03bde4ea999ba$export$54c2e3dc7acea9f5 as List,
	$7194c81d11c092f6$export$155581e8dc02007a as PageTitle,
	$00f6cae7b3336269$export$69bc41ee738923ec as SectionTitle,
	$b51f2f9cc231a713$export$358a232cca1ab2ac as Paragraph,
	$8625737674838067$export$e1b46d8df2b2ac2 as PropsTable,
	$6e89aa2d3b662d7e$export$f72bd0925e50dbd3 as ColorsTable,
	$83f6b47bd0fdf92d$export$cf345ef34cd72655 as Subtitle,
	$7b95adae13dc7cc8$export$7ef678626f3575cb as Playground,
	$50639002e20f208a$export$e8fb8baa534d55de as CodeSnippetTheme,
	$50639002e20f208a$export$9066f76bf3f31022 as CodeSnippet,
	$50639002e20f208a$export$7f1bf47c7f50a6aa as InlineCode,
};
//# sourceMappingURL=index.js.map
