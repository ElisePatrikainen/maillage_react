import React from "react";

export function shuffle(array) {
    return array.map((el) => ({position: Math.random(), value: el}))
        .sort((el1, el2) => el1.position - el2.position)
        .map((el) => el.value);
}

export function filterByTag(data, tag) {
    return Object.keys(data).filter((key) => tag === data[key].tag);
}
