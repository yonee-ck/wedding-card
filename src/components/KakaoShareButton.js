import React, { useEffect } from "react";

const KaKaoShareButton=()=> {
    useEffect(() =>{
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }, [])
    const handleShareClick = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '연희용근의 결혼식에 초대합니다.',
                description: '행복한 결혼식에 오셔서 함께 축복해주세요.',
                imageUrl: 'https://media.tenor.com/images/0a1652de311806ce55820a7115993853/tenor.gif',
                link: {
                    webUrl: '/',
                }
            },
            buttons: [
                {
                    title: '청첩장 보러가기',
                    link: {
                        webUrl: '/'
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
