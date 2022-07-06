/* @mullerstd/docs version: 0.0.2 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';

const useClickOutside = (ref, handler) => {
    const handleClick = useCallback((event) => {
        if (ref.current && event.target) {
            !ref.current.contains(event.target) && handler();
        }
    }, [handler, ref]);
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);
};
const TypeCell = ({ type }) => {
    const [isShowDetails, setShowDetails] = useState(false);
    const containerRef = useRef(null);
    const closeModal = () => {
        setShowDetails(false);
    };
    const toggleModal = () => {
        setShowDetails((prev) => !prev);
    };
    useClickOutside(containerRef, closeModal);
    if (typeof type === 'string')
        return jsx("div", { children: type });
    return (jsx("div", { className: "docs-relative", children: jsxs("div", { ref: containerRef, style: { display: 'contents' }, children: [jsx("button", { tabIndex: 0, onClick: () => toggleModal(), className: "docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline", children: type.shortName }), isShowDetails && (jsx("div", { className: "docs-z-1 docs-absolute docs-mt-1 docs-rounded-md docs-bg-[color:var(--color-background-secondary)] docs-px-2 docs-py-1", children: jsx("p", { className: "docs-text-sm", children: type.details }) }))] }) }));
};
const PropsTable = ({ data = [] }) => {
    return (jsx("div", { children: jsxs("table", { className: "docs-w-full", children: [jsx("thead", { children: jsxs("tr", { children: [jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Name" }), jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Type" }), jsx("th", { className: "docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase", children: "Default" })] }) }), jsx("tbody", { className: "docs-divide-y docs-divide-neutral docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)] ", children: data.map(({ name, type, defaultValue, required }) => (jsxs("tr", { children: [jsxs("td", { className: "docs-px-2 docs-py-1.5", children: [name, required && jsx("span", { children: "*" })] }), jsx("td", { className: "docs-px-2 docs-py-1.5", children: jsx(TypeCell, { type: type }) }), jsx("td", { className: "docs-px-2 docs-py-1.5 empty:before:docs-content-['-']", children: defaultValue })] }, name))) })] }) }));
};

export { PropsTable };
