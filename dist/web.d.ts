declare const chatbot: {
    initFull: (props: {
        chatflowid: string;
        user: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        observersConfig?: import("./components/Bot").observersConfigType | undefined;
    } & {
        id?: string | undefined;
    }) => void;
    init: (props: {
        chatflowid: string;
        user: string;
        apiHost?: string | undefined;
        chatflowConfig?: Record<string, unknown> | undefined;
        observersConfig?: import("./components/Bot").observersConfigType | undefined;
    }) => void;
    destroy: () => void;
};
export default chatbot;
//# sourceMappingURL=web.d.ts.map