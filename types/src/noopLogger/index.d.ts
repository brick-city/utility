export namespace noopLogger {
    function fatal(): void;
    function error(): void;
    function warn(): void;
    function info(): void;
    function debug(): void;
    function trace(): void;
    function silent(): void;
    function child(): {
        fatal: () => void;
        error: () => void;
        warn: () => void;
        info: () => void;
        debug: () => void;
        trace: () => void;
        silent: () => void;
        child: () => any;
        level: number;
        isLevelEnabled: () => boolean;
    };
    const level: number;
    function isLevelEnabled(): boolean;
}
//# sourceMappingURL=index.d.ts.map