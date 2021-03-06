import React, {Component} from 'react';
//import IntlMessages from "../../../util/IntlMessages";
import LeftList from "../../../components/LeftList";
import EllipsisTooltip from '../../../components/EllipsisTooltip';

import api from '../../../util/Api';

const model = 'partner';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 55,
        render: text => {
            return text
        }
    },
    {
        title: "Fantasia",
        dataIndex: 'name',
        key: 'name',
        onCell: () => {
            return {
                style: {
                    whiteSpace: 'nowrap',
                    maxWidth: 150
                }
            }
        },
        render: text => <EllipsisTooltip title={text}>{text.toUpperCase()}</EllipsisTooltip>
    },
    {
        title: "Razao Social",
        dataIndex:'razaosocial',
        key: 'razaosocial',
        onCell: () => {
            return {
                style: {
                    whiteSpace: 'nowrap',
                    maxWidth: 150
                }
            }
        },
        render: text => <EllipsisTooltip title={text}>{text.toUpperCase()}</EllipsisTooltip>
    },
    {
        title: 'CNPJ',
        dataIndex:'cnpj',
        key: 'cnpj',
        onCell: () => {
            return {
                style: {
                    whiteSpace: 'nowrap',
                    maxWidth: 150
                }
            }
        },
        render: text => <EllipsisTooltip title={text}>{text}</EllipsisTooltip>
    }
]
class CustomerList extends Component {

    constructor(props) {
        super()
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(props) {
        console.log('CustomerList - ComponentWillReceivePropst');
    }

    componentDidMount() {
        console.log('ComponentDidMout - CustomerList');
        this.fetchLeftList();
    } 

    fetchLeftList = () => {
        console.log('fecthLeftlist');
        api.get(`${model}?limit=999`, {})
        .then((result) => {
            this.setState({
                isLoaded: true,
                data: result.data
            });
        },)
        .catch(function(error) {
            console.log('error', error)
        })
    }
    

    render() {
        return (
            <LeftList 
                columns={columns}
                data={this.state.data}
                onRowClick={(record, rowIndex) => {
                    return {
                        onClick : event => this.props.onRowClick(record, rowIndex)
                    }
                }}
            />
        )
    }
}

export default CustomerList;
