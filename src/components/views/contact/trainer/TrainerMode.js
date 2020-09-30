import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import { UserEnrollInfo, GoReEnrollButton } from './TrainerMode.styled';

import ErrorContainer from 'components/modules/error';
import EnrollVideo from './EnrollVideo';
/* trainer can upload, watch, delete own video */
/* but Only "One" Video is accepted */
const TrainerMode = ({ userObj }) => {
  const [isExist, setExist] = useState(false);

  const restart = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateType
      .update({
        introAvailable: false,
        originSrc: '',
        src: '',
        desc: '',
      })
      .then(() => {
        alert('재등록하시기 바랍니다');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('실패하였습니다');
      });
  };

  useEffect(() => {
    if (userObj.originSrc !== undefined && userObj.originSrc !== '')
      setExist(true);
  });

  return (
    <div>
      {isExist ? (
        <>
          {userObj.introAvailable === 1 ? (
            <div>
              <h2>소개 동영상</h2>
              <iframe
                title={userObj.src}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${
                  userObj.originSrc.split('?v=')[1]
                }?autoplay=1&origin=https://www.youtube.com/watch?v=${
                  userObj.originSrc.split('?v=')[1]
                }`}
                frameborder="0"
              ></iframe>
              <h2>자기 소개</h2>
              <div>{userObj.desc}</div>
            </div>
          ) : (
            <>
              {userObj.introAvailable === -1 ? (
                <>
                  <ErrorContainer txt="등록하신 소개서가 반려되었습니다." />
                  <UserEnrollInfo>
                    YouTube URL : {userObj.originSrc}
                  </UserEnrollInfo>
                  <UserEnrollInfo>소개 : {userObj.desc}</UserEnrollInfo>
                  <GoReEnrollButton onClick={restart}>
                    다시 신청하기
                  </GoReEnrollButton>
                </>
              ) : (
                <ErrorContainer txt="현재 검수 중입니다" />
              )}
            </>
          )}
        </>
      ) : (
        <EnrollVideo userObj={userObj} />
      )}
    </div>
  );
};

export default TrainerMode;