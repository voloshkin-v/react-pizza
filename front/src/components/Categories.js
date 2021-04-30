import React from 'react'

// class Categories extends React.Component {
//     state = { 
//         activeItem: 3
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         });
//     }

    

//     render() {
//         const {items} = this.props;

//         return (
//             <div className="categories">    
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) => (
//                         <li 
//                             className={this.state.activeItem === index ? 'active' : ''} 
//                             onClick={() => this.onSelectItem(index)} 
//                             key={`${item}_${index}`}>
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }


function Categories({items, onClick}) {

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((item, index) => {
                    return <li onClick={() => onClick(item)} key={`${item}_${index}`}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories
