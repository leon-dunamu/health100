import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import Loading from 'components/modules/loading/Loading';
import {
  TableWrapper,
  Title,
  QuestTitle,
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
  FromWrapper,
  SForm,
  TextArea,
  Submit,
  Decline,
  Empty,
} from './TrainerAnswer.styled';

const TrainerAnswer = ({ userObj }) => {
  const [questList, setQuestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [formShow, setFormShow] = useState(false);
  const [input, setInput] = useState('');

  /* 처방 필요한 항목들 불러오기 */
  const getQuestions = async () => {
    FirebaseStore.collection('qna').onSnapshot((snap) => {
      const questObj = snap.docs.map((doc) => {
        if (doc.data().type === 0) {
          return {
            createdAt: doc.data().createdAt,
            uid: doc.data().uid,
            qna: doc.data().qna.split('|'),
            docId: doc.data().docId,
          };
        } else return;
      });
      setQuestList(questObj);
    });
  };

  /* 처방을 db 저장 */
  const submit = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('qna').doc(
      selected.docId,
    );
    updateType
      .update({
        answer: input,
        type: 1,
      })
      .then(() => {
        alert('처방 완료하였습니다!');
        setInput('');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('처방하지 못했습니다');
      });
  };

  useEffect(() => {
    getQuestions().then(setIsLoading(false));
  }, []);
  return (
    <div>
      <Title>트레이너님, 처방 부탁드려요 !</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {questList.map(
            (quest, idx) =>
              quest !== undefined && (
                <TableWrapper>
                  <QuestTitle
                    onClick={() => {
                      setSelected({
                        key: quest.createdAt + idx,
                        docId: quest.docId,
                      });
                      setFormShow(true);
                    }}
                    current={`${quest.createdAt}${idx}` === selected.key}
                  >
                    신청일 : {quest.createdAt}
                  </QuestTitle>
                  <STable current={`${quest.createdAt}${idx}` === selected.key}>
                    <SThead>
                      <STr>
                        <STh title={true}>운동종류</STh>
                        <STh title={true}>운동횟수</STh>
                        <STh title={true}>운동시간</STh>
                      </STr>
                    </SThead>
                    <STbody>
                      {quest.qna.map((qna) => {
                        const item = qna.split(',');
                        if (item[0].length < 3) return;
                        return (
                          <STr>
                            <STd>{item[0]}</STd>
                            <STd>{item[1]}</STd>
                            <STd>{item[2]}</STd>
                          </STr>
                        );
                      })}
                    </STbody>
                  </STable>
                </TableWrapper>
              ),
          )}
        </div>
      )}
      {formShow && (
        <FromWrapper>
          <SForm onSubmit={(e) => submit(e)}>
            <TextArea
              placeholder={`어떠한 운동이 필요해 보이시나요?\n필요한 운동을 적어주세요`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></TextArea>
            <Submit>처방하기</Submit>
            <Decline onClick={() => setFormShow(false)}>취소하기</Decline>
          </SForm>
        </FromWrapper>
      )}
      {formShow && <Empty />}
    </div>
  );
};

export default TrainerAnswer;