// flow-typed signature: c8378f171d8080f069317887b6637041
// flow-typed version: 622c2ee76d/js-cookie_v2.x.x/flow_>=v0.25.x

declare module 'js-cookie' {
    declare type CookieOptions = {
        expires?: number | Date,
        path?: string,
        domain?: string,
        secure?: boolean
    }
    declare type ConverterFunc = (value: string, name: string) => string;
    declare type ConverterObj = {
        read: ConverterFunc,
        write: ConverterFunc
    };
    declare class Cookie {
        defaults: CookieOptions;
        set(name: string, value: mixed, options?: CookieOptions): void;
        get(...args: Array<void>): { [key: string]: string };
        get(name: string, ...args: Array<void>): string | void;
        remove(name: string, options?: CookieOptions): void;
        getJSON(name: string): mixed;
        withConverter(converter: ConverterFunc | ConverterObj): this;
        noConflict(): this;
    }

    declare module.exports: Cookie;
}
