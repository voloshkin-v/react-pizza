import React from 'react'

import arrowTop from '../img/arrow-top.svg';

function SortPopup() {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const sortRef = React.useRef();

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

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
                <span onClick={toggleVisiblePopup}>популярности</span>
            </div>

            {visiblePopup && 
                <div className="sort__popup">
                    <ul>
                        <li className="active">популярности</li>
                        <li>цене</li>
                        <li>алфавиту</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default SortPopup
