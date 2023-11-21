import React from "react";
import Todolistitem from "./to_Do_List_Item";
// class ToDoList extends React.Component {
const ToDoList=(props)=>{

    // render() {
        const{products}=props;
        return (
            <div>
                {products.map((product)=>{
                    return(
                        <Todolistitem
                        product={product}
                        key={product.id}
                        // onToggleChange={this.toggleChange}
                        onToggleChange={props.onToggleChange}

                        />
                    )

                })

                }

            </div>
        )
    }
// }
export default ToDoList;