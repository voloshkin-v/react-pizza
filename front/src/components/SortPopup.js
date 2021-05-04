import React from 'react'

import arrowTop from '../img/arrow-top.svg';

const SortPopup = React.memo(function SortPopup({items}) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(1);

    const sortRef = React.useRef();
    const activeName = items[activeItem].name;

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
                <img className={visiblePopup ? 'rotated' : ''} src={arrowTop} alt='arrowTop' />
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeName}</span>
            </div>

            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items && items.map((obj, index) => (
                            <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''} key={`${obj.type}_${index}`}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
});

export default SortPopup;
