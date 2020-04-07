import React from 'react';  // 必须引用，不然jsp语法要报错
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// 如果能写成无状态组件就写，原因是性能提升，注意去掉this，参数是props
const TodoListUI = (props) => ( 
    <div style={{ padding: '10px' }}>
        <div>
        <Input
            placeholder={props.inputValue}
            onChange={props.changeInputValue}
            value={props.inputValue}
            style={{ width: '250px', marginRight: '10px' }} />
        <Button type="primary" onClick={props.clickBtn}>增加</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
        <List
            bordered
            dataSource={props.list}
            renderItem={
                (item, index) => (
                    <List.Item onClick={() => props.deleteItem(index)}>
                        {item}
                    </List.Item>
                )
            }
        />
        </div>
    </div>
);

// class TodoListUI extends Component {
//     render() { 
//         return ( 
//             <div style={{ padding: '10px' }}>
//                 <div>
//                 <Input
//                     placeholder={this.props.inputValue}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}
//                     style={{ width: '250px', marginRight: '10px' }} />
//                 <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 </div>
//                 <div style={{margin: '10px', width: '300px'}}>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={
//                         (item, index) => (
//                             <List.Item onClick={() => this.props.deleteItem(index)}>
//                                 {item}
//                             </List.Item>
//                         )
//                     }
//                 />
//                 </div>
//             </div>
//         );
//     }
// }
 
export default TodoListUI;