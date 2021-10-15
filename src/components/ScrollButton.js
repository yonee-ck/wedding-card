import React, {useEffect, useState} from "react";
import KaKaoShareButton from "./KakaoShareButton";
import CopyUrl from "./CopyUrl";
import TopButton from "./TopButton";

const ScrollButton = () => {
    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false);
    const [copyStatus, setCopyStatus] = useState(false);

    const handleCopyCompleteClick = (data) => {
        setCopyStatus(data);
        setTimeout(() => {setCopyStatus(false)}, 1000);
    }

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 100) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })

    return (
        <div className={!BtnStatus ? 'hide' : 'active'}>
            <KaKaoShareButton />
            <CopyUrl onCreate={handleCopyCompleteClick} />
            <TopButton />
        </div>
    );
}

export default ScrollButton;
