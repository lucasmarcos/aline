import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Template = ({ title, children }) => {
    // const content = Comp ? <Comp/> : "Bem-vindo";
    title = title || "Bem-vindo";
    return (_jsxs("html", { lang: "pt", children: [_jsxs("head", { children: [_jsx("title", { children: title }), _jsx("meta", { charSet: "UTF-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("link", { rel: "stylesheet", href: "out.css" })] }), _jsx("body", { children: _jsx("div", { className: "container", children: children }) })] }));
};
