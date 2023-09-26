import callsites from 'callsites';

/**
 *
 * Pass a pinot logger to this function and it will return a function that logs a trace message.
 * If the logger does not have a trace method, or the log level is not 'trace', it will return
 * a function that does nothing.
 *
 * The trace message will include the file name, line number, column number, function name, and method name.
 *
 * @param {*} logger
 * @returns {function} A function that logs a trace message
 *
 */
// eslint-disable-next-line import/prefer-default-export
export const traceLogger = (logger) => {

    if (logger && logger?.isLevelEnabled('trace') && (typeof logger?.trace === 'function')) {

        return function logTrace() {

            const stack = callsites();

            const caller = stack[1];

            const file = caller.getFileName();

            const lineNumber = caller.getLineNumber();

            const columnNumber = caller.getColumnNumber();

            const functionName = caller.getFunctionName();

            const methodName = caller.getMethodName();

            const message = `trace: ${file}:${lineNumber}:${columnNumber} ${functionName} method:${methodName}`;

            logger.trace(message);

        };

    }

    return function logTrace() {};

};
