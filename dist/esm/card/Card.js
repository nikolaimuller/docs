/* @mullerstd/docs version: 0.0.1 */
import { __rest, __assign } from '../_virtual/_tslib.js';
import * as React from 'react';

var Card = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", __assign({ className: ['card', className].join(' ') }, props), children));
};

export { Card };
