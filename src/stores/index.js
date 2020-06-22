import { types } from "mobx-state-tree";

// Stores
import { TestStore } from "./TestStore";

const RootModel = types.model({
    TestStore,
});

// Init stores
export const RootStore = RootModel.create({
    TestStore: {
        perPage: 10,
        totalPages: 0,
        currentPage: 0,
        productCount: 0,
        original: [],
        input: '',
    }
});