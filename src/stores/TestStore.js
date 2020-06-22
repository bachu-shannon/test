import {
    types,
    flow,
} from "mobx-state-tree";
import axios from 'axios';
import { TEST_API } from "../const/api";
import { sliceCollectionForPagination } from '../utils';

export const TestItemModel = types
    .model('TestItemModel', {
        productName: types.string,
        brandName: types.string,
        price: types.string,
        imageURLs: types.array(types.string),
    });

export const TestStore = types
    .model('TestStore', {
        // TODO: state of pagination need to be created by service "Paginator"
        perPage: types.number,
        currentPage: types.number,
        totalPages: types.number,
        productCount: types.number,
        original: types.array(types.array(TestItemModel)),
        input: types.string,
    })
    .actions(self => {
        return {
            fill(data) {
                self.perPage = 10;
                self.totalPages = data.productCount / self.perPage;
                self.currentPage = data.currentPage;
                self.productCount = data.productCount;
                self.original = sliceCollectionForPagination(data.pageItems, self.totalPages, self.perPage);
            },
            fetchData: flow(function* () {
                const response = yield axios.get(TEST_API)
                self.fill(response.data)
            }),
            filtering(value) {
                self.input = value;
            },
            pagination(e, page) {
                self.currentPage = page;
            },
        }
    })
    .views(self => {
        return {
            collection: () =>
                self.original[self.currentPage - 1]?.filter(item => item['productName'].toLowerCase().includes(self.input.toLowerCase())),
        };
    })