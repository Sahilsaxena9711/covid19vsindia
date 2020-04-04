import { OrderedMap } from "immutable";

export const COLUMNS = new OrderedMap({
    state: {
        header: "STATE/UT",
        key: "state",
        color: "#000"
    },
    confirmed: {
        header: "C",
        key: "confirmed",
        color: "#2F80ED"
    },
    active: {
        header: "A",
        key: "active",
        color: "#EB5757"
    },
    recovered: {
        header: "R",
        key: "recovered",
        color: "#6FCF97"
    },
    deceased: {
        header: "D",
        key: "deceased",
        color: "#828282"
    }
});

export const CARDS = new OrderedMap({
    confirmed: {
        key: "confirmed",
        render: _ => _.getIn(["delta", "confirmed"]),
        label: "Confirmed",
        border: "0.5px solid rgba(47, 128, 237, 0.4)",
        textColor: "#2F80ED",
        background: "#E6EEF9"
    },
    active: {
        key: "active",
        render: _ => _.getIn(["delta", "active"]),
        label: "Active",
        border: "0.5px solid rgba(235, 87, 87, 0.4)",
        textColor: "#EB5757",
        background: "rgba(235, 87, 87, 0.15)"
    },
    recovered: {
        key: "recovered",
        render: _ => _.getIn(["delta", "recovered"]),
        label: "Recovered",
        border: "0.5px solid rgba(111, 207, 151, 0.4)",
        textColor: "#6FCF97",
        background: "rgba(33, 150, 83, 0.2)"
    },
    deaths: {
        key: "deaths",
        render: _ => _.getIn(["delta", "deaths"]),
        label: "Deceased",
        border: "0.5px solid rgba(130, 130, 130, 0.4)",
        textColor: "#828282",
        background: "#F2F2F2"
    }
});

export const MODAL_COLUMNS = new OrderedMap({
    district: {
        label: "District",
        key: "district"
    },
    confirmed: {
        label: "Confirmed",
        key: "confirmed"
    }
});

export const BODY_COLS = new OrderedMap({
    confirmed: {
        key: "confirmed",
        color: "#2F80ED"
    },
    active: {
        key: "active",
        color: "#EB5757"
    },
    recovered: {
        key: "recovered",
        color: "#6FCF97"
    },
    deaths: {
        key: "deaths",
        color: "#828282"
    }
})