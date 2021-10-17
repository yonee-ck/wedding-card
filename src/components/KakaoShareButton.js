import React, { useEffect } from "react";

const KaKaoShareButton=()=> {
    useEffect(() =>{
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }, [])
    const handleShareClick = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '연희,용근의 결혼식에 초대합니다.',
                description: '따뜻한 마음으로 새로운 시작을 함께 축복해주세요 :)',
                imageUrl: 'https://static.co-duck.com/wedding/share.jpg',
                link: {
                    webUrl: 'https://wedding.co-duck.com',
                    mobileWebUrl: 'https://wedding.co-duck.com'
                }
            },
            buttons: [
                {
                    title: '청첩장 보러가기',
                    link: {
                        mobileWebUrl: 'https://wedding.co-duck.com'
                    }
                }
            ]
        });
    }

    return (
        <button className='btn__kakao' onClick={handleShareClick} />
    );
};

export default KaKaoShareButton;
