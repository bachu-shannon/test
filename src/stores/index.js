import { types } from "mobx-state-tree";

import {TestItemModel, TestStore} from "./TestStore";

const RootModel = types.model({
    TestStore,
});

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