/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Card = ({ children, className = '', ...props }) => {
    return (jsxRuntime.jsx("div", { className: ['card', className].join(' '), ...props, children: children }));
};

exports.Card = Card;
