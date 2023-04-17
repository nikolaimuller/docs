/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

const Card = ({ children, className, ...props }) => {
    return (jsxRuntime.jsx("div", { className: cx__default["default"]("docs-overflow-hidden docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)]", className), ...props, children: children }));
};

exports.Card = Card;
