const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

export default ConditionalWrapper;

export const ConditionalElseWrapper = ({ condition, wrapper, elseWrapper, children }) =>
    condition ? wrapper(children) : elseWrapper(children);

