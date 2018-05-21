import React, { createContext } from 'react'

export const filters = [
    {
        active: false,
        disabled: false,
        group: "type",
        name: "type",
        value: "Дома",
        compare: "=",
        type: "BINARY",
        title: "Дома"
    }, {
        active: false,
        disabled: false,
        group: "type",
        name: "type",
        value: "Дачные дома",
        compare: "=",
        type: "BINARY",
        title: "Дачные дома"
    }, {
        active: false,
        disabled: false,
        group: "type",
        name: "type",
        value: "Бытовки/беседки",
        compare: "=",
        type: "BINARY",
        title: "Бытовки/беседки"
    }, {
        active: false,
        disabled: false,
        group: "type",
        name: "type",
        value: "Часовни",
        compare: "=",
        type: "BINARY",
        title: "Часовни"
    }, {
        active: false,
        disabled: false,
        group: "material",
        name: "material",
        value: "металлические",
        compare: "=",
        type: "BINARY",
        title: "металлические"
    }, {
        active: false,
        disabled: false,
        group: "material",
        name: "material",
        value: "деревянные",
        compare: "=",
        type: "BINARY",
        title: "деревянные"
    }, {
        active: true,
        disabled: false,
        group: "area",
        name: "area",
        value: "100",
        compare: "<",
        type: "numeric",
        title: "до 100 м<sup>2</sup>"
    }, {
        active: false,
        disabled: false,
        group: "area",
        name: "area",
        value: "100",
        compare: ">",
        type: "numeric",
        title: "больше 100 м<sup>2</sup>"
    }, {
        active: false,
        disabled: false,
        group: "floors",
        name: "floors",
        value: "1",
        compare: "=",
        type: "CHAR",
        title: "1 этаж"
    }, {
        active: false,
        disabled: false,
        group: "floors",
        name: "floors",
        value: "1.5",
        compare: "=",
        type: "CHAR",
        title: "1,5 эт."
    }, {
        active: false,
        disabled: false,
        group: "floors",
        name: "floors",
        value: "2",
        compare: "=",
        type: "CHAR",
        title: "2 эт."
    }, {
        active: false,
        disabled: false,
        group: "floors",
        name: "floors",
        value: "2.5",
        compare: "=",
        type: "CHAR",
        title: "2,5 эт."
    }
]

export const Context = createContext({
    projects: [],
    filters: filters,
    query: {
        filter: {
            meta_query: {}
        }
    },
    actions: {}
})