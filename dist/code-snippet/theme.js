/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = {
    plain: {
        color: 'var(--color-code-01)',
        backgroundColor: 'var(--color-neutral)',
    },
    styles: [
        {
            types: ['changed'],
            style: {
                color: 'rgb(162, 191, 252)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['deleted'],
            style: {
                color: 'rgba(239, 83, 80, 0.56)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['inserted', 'attr-name'],
            style: {
                color: 'var(--color-code-04)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['comment'],
            style: {
                color: 'var(--color-code-02)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['string', 'url'],
            style: {
                color: 'var(--color-code-06)',
            },
        },
        {
            types: ['variable'],
            style: {
                color: 'var(--color-code-08)',
            },
        },
        {
            types: ['number'],
            style: {
                color: 'var(--color-code-04)',
            },
        },
        {
            types: ['builtin', 'char', 'constant', 'function'],
            style: {
                color: 'var(--color-code-03)',
            },
        },
        {
            types: ['statement'],
            style: {
                color: 'var(--color-code-07)',
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: 'var(--color-code-07)',
            },
        },
        {
            types: ['selector', 'doctype'],
            style: {
                color: 'var(--color-code-09)',
                fontStyle: 'italic',
            },
        },
        {
            types: ['class-name'],
            style: {
                color: 'var(--color-code-05)',
            },
        },
        {
            types: ['keyword'],
            style: {
                color: 'var(--color-code-09)',
            },
        },
        {
            types: ['tag', 'operator'],
            style: {
                color: 'var(--color-code-04)',
            },
        },
        {
            types: ['boolean'],
            style: {
                color: 'var(--color-code-04)',
            },
        },
        {
            types: ['property'],
            style: {
                color: 'var(--color-code-05)',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
    ],
};

exports.theme = theme;
