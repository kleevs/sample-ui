// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

const consoleError = console.error;
const SUPPRESSED_WARNINGS = [
  'Warning: %s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.%s',
  'Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.',
  'Warning: validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s',
  'Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.%s',
  'Warning: An update to %s inside a test was not wrapped in act(...)'
];
console.error = function filterError(msg: string, ...args) {
    if (!SUPPRESSED_WARNINGS.some((entry) => msg === entry || msg && msg.indexOf && msg.indexOf(entry) > -1)) {
      consoleError(msg, ...args);
    }
};

global.React = React;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
