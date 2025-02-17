import { atomFamily } from "recoil";

export const subjectAtomFamily = atomFamily({
    key: "subjectAtomFamily",
    default: () => ({ marks: 0 })
});

export const iaMarkAtomFamily = atomFamily({
    key: "iaMarkAtomFamily",
    default: () => ({ marks: 0 })
});

export const creditsAtomFamily = atomFamily({
    key: "creditsAtomFamily",
    default: () => ({ credits: 1 })
});