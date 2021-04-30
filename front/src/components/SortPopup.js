import React from 'react'

import arrowTop from '../img/arrow-top.svg';

function SortPopup({items}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(1);

    const sortRef = React.useRef();
    const activeName = items[activeItem];

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    const onSelectItem = index => {
        setActiveItem(index);
        setVisiblePopup(false);
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div 
            ref={sortRef} 
            className="sort">
            <div className="sort__label">
                <img src={arrowTop} alt='arrowTop' />
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeName}</span>
            </div>

            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items && items.map((item, index) => (
                            <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''} key={`${item}_${index}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SortPopup
