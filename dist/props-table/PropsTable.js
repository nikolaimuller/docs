/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const useClickOutside = (ref, handler) => {
    const handleClick = react.useCallback((event) => {
        if (ref.current && event.target) {
            !ref.current.contains(event.target) && handler();
        }
    }, [handler, ref]);
    react.useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);
};
const TypeCell = ({ type }) => {
    const [isShowDetails, setShowDetails] = react.useState(false);
    const containerRef = react.useRef(null);
    const closeModal = () => {
        setShowDetails(false);
    };
    const toggleModal = () => {
        setShowDetails((prev) => !prev);
    };
    useClickOutside(containerRef, closeModal);
    if (typeof type === 'string')
        return jsxRuntime.jsx("div", { children: type });
    return (jsxRuntime.jsx("div", { className: "docs-relative", children: jsxRuntime.jsxs("div", { ref: containerRef, style: { display: 'contents' }, children: [jsxRuntime.jsx("button", { tabIndex: 0, onClick: () => toggleModal(), className: "docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline", children: type.shortName }), isShowDetails && (jsxRuntime.jsx("div", { className: "docs-z-1 docs-absolute docs-mt-1 docs-rounded-md docs-bg-[color:var(--color-background-secondary)] docs-px-2 docs-py-1", children: jsxRuntime.jsx("p", { className: "docs-text-sm", children: type.details }) }))] }) }));
};
const PropsTable = ({ data = [] }) => {
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs("table", { className: "docs-w-full", children: [jsxRuntime.jsx("thead", { children: jsxRuntime.jsxs("tr", { children: [jsxRuntime.jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Name" }), jsxRuntime.jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Type" }), jsxRuntime.jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Default" })] }) }), jsxRuntime.jsx("tbody", { className: "docs-divide-y docs-divide-neutral docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)] ", children: data.map(({ name, type, defaultValue, required }) => (jsxRuntime.jsxs("tr", { children: [jsxRuntime.jsxs("td", { className: "docs-px-2 docs-py-1.5", children: [name, required && jsxRuntime.jsx("span", { children: "*" })] }), jsxRuntime.jsx("td", { className: "docs-px-2 docs-py-1.5", children: jsxRuntime.jsx(TypeCell, { type: type }) }), jsxRuntime.jsx("td", { className: "docs-px-2 docs-py-1.5 empty:before:docs-content-['-']", children: defaultValue })] }, name))) })] }) }));
};

exports.PropsTable = PropsTable;
