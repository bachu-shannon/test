import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import List from './components/List'
import Field from '../../components/Field'
import Pagination from "@material-ui/lab/Pagination";
import { Container } from '@material-ui/core';

class App extends Component {
    componentDidMount() {
        const { TestStore } = this.props.store;
        TestStore.fetchData();
    }

    render() {
        const { TestStore } = this.props.store;
        return (
            <div className="app-wrapper">
                <Container size="lg">
                    <Field value={TestStore.input} handleChange={TestStore.filtering} />
                    <List items={TestStore.collection()} />
                    <Pagination
                        count={TestStore.totalPages}
                        variant="outlined"
                        shape="rounded"
                        onChange={TestStore.pagination}
                    />
                </Container>
            </div>
        );
    }
}

export default inject('store')(observer(App));
