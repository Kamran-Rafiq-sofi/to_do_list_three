import React from 'react';
// class Todolistitem extends React.Component{
    const Todolistitem=(props)=>{

        // console.log("this.props",this.props)
        // const{text,completed} = this.props.product;
        const{text,completed} = props.product;

        const{ product,onToggleChange }=props;
        
        return(
            <div>
             {/* <input type="checkbox" checked={completed} onChange={this.toggleChange}></input> */}
             <input type="checkbox" checked={completed} 
            //  onChange={()=>onToggleChange(this.props.product.id)}>
            // onChange={()=>this.props.onToggleChange(this.props.product.id)}>
            onChange={()=>onToggleChange(product.id)}>



             </input>

             <label>{text}</label>
            </div>
        )
    }

export default Todolistitem;