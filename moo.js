import { say } from "cowsay";

export function moo(name) {
    return say({
        text: name,
        e: 'xx',
        r: true,
    });
}