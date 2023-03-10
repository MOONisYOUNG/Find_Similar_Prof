const qnaList = [
  {
    q: '1. 당신의 생활패턴은?',
    a: [
      { answer: 'a.	일찍 일어나는 새가 <br> 벌레를 잡는법! 아침형 인간 ', type: ['heekim', 'hjchun'] },
      { answer: 'b. 모든 할 일을 끝내고 잔다! <br> 새벽형 인간', type: ['dongkim'] },
      { answer: 'c. 음…나는 그때 그때 <br> 다른것 같은데? ', type: ['kicho', 'shpark' ] },
    ]
  },
  {
    q: '2. 월요일에 생긴 과제를 <br> 일요일까지 끝내야 한다. <br> 당신은 어떻게 할 것인가?',
    a: [
      { answer: 'a. 수요일에 이거 하고 <br> 목요일에 이거 해서 <br> 금요일까지 끝내야지!', type: ['heekim', 'kicho'] },
      { answer: 'b. 일요일? 한참 남았네~ <br> 나중에 생각해야겠다.', type: ['hjchun', 'shpark'] },
      { answer: 'c. "난감하다~"라고 말하면서 <br> 머리부터 긁는다.', type: ['dongkim'] },
    ]
  },
  {
    q: '3. 산업시찰 (혹은 MT) 참석 <br> 신청을 받는다고 한다. <br> 이때 당신의 결정은?',
    a: [
      { answer: 'a. 무조건 간다!!', type: ['kicho', 'dongkim'] },
      { answer: 'b. 일정 봐서 참여한다. ', type: ['heekim'] },
      { answer: 'c. 안타깝지만 <br> 난 그 날에 다른 할 일이 있다.', type: ['shpark', 'hjchun'] }
    ]
  },
  {
    q: '4. 스마트클래스에 <br> 오늘 휴강이라는 알림이 도착했다. <br> 당신은 이 날을 어떻게 보낼 것인가?',
    a: [
      { answer: 'a. 어라? 지금이 몇시야...? <br> 13시간이나 자버렸네', type: ['dongkim', 'kicho'] },
      { answer: 'b. 여유롭게 취미 활동이나 해볼까~?', type: ['heekim' ] },
      { answer: 'c. 이게 얼마만의 휴일이야! <br> 당장 친구에게 만나자고 전화한다.', type: ['hjchun', 'shpark'] },
    ]
  },
  {
    q: '5. 눈을 떠보니 이세계에 도착한 당신. <br> 어떻게 대처할 것인가?',
    a: [
      { answer: 'a. "여기가 어디인가요??" <br> 사람들에게 물어보며 <br> 상황을 파악한다. ', type: ['kicho', 'shpark'] },
      { answer: 'b. 심호흡을 하고 상황을 관찰하며 <br> 침착하게 대응한다.', type: ['heekim', 'dongkim']},
      { answer: 'c. "이건 꿈이야!!!"라고 외치며 <br> 눈을 다시 감아본다.', type: ['hjchun'] },
    ]
  },

  {
    q: '6. 오늘따라 유독 카톡이 많이 와있다. <br> 당신의 답장 스타일은?',
    a: [
      { answer: 'a. 카톡창이 가득한 건 못참아! <br> 바로 답장을 보내준다.', type: ['heekim'] },
      { answer: 'b. 카톡이 왜 이렇게 많이 왔지? <br> 30분뒤에 몰아서 답장해야겠다.', type: ['dongkim', 'kicho'] },
      { answer: 'c. 바쁘면 늦게 보내고, 한가하면 바로 보내는거지 뭐~', type: ['hjchun', 'shpark'] },
    ]
  },
  {
    q: '7. 내 개그 센스는?',
    a: [
      { answer: 'a. 작정하고 남들 웃기려고 시도하는 걸 좋아한다.', type: ['shpark', 'hjchun'] },
      { answer: 'b. 개그 따위 난 모르겠다~ ', type: ['kicho', 'heekim'] },
      { answer: 'c. 난 아무 짓도 안 했는데 <br> 주변 사람들이 나만 보면 <br> 웃기다고 한다.', type: ['dongkim' ] },
    ]
  },
  {
    q: '8. 내가 자주 사용하는 <br> 프로그래밍 언어는?',
    a: [
      { answer: 'a. R(알)', type: ['hjchun', 'dongkim'] },
      { answer: 'b. Python(파이썬)', type: ['kicho', 'heekim'] },
      { answer: 'c. 둘 다', type: ['shpark' ] },
    ]
  },
  {
    q: '9. MT에서 친구가 나에게 <br> 술 한 잔을 권했다. <br> 그때 나의 반응은?',
    a: [
      { answer: 'a. 술 거절하는 대신에 <br> 콜라/사이다/물 등을 마신다. ', type: ['heekim'] },
      { answer: 'b. 어쩔 수 없이 한 잔 받아서 마신다.', type: ['dongkim', 'shpark' ] },
      { answer: 'c. 같이 텐션 올라서 열심히 마신다.', type: ['kicho', 'hjchun'] },
    ]
  },
  {
    q: '10.	내가 좋아하는 전공 파트는?',
    a: [
      { answer: 'a. 프로그래밍 파트', type: ['kicho', 'heekim', 'shpark'] },
      { answer: 'b. 수리 통계 파트', type: ['dongkim'] },
      { answer: 'c. 데이터 시각화 파트', type: ['hjchun'] },
    ]
  },
  {
    q: '11. 팀플 조원에게서 <br> 답장이 오지를 않는다. <br> 그때 당신의 반응은?',
    a: [
      { answer: 'a. 다시 한번 연락을 남겨 본다.', type: ['heekim', 'kicho'] },
      { answer: 'b. 에라 모르겠다~ <br> 주어진 일부터 하자. <br> 그러면 연락이 오지 않을까?', type: ['dongkim'] },
      { answer: 'c. 나도 요즘따라 정신이 없어서 <br> 답장이 오지 않았다는 <br> 사실조차 몰랐다…^^', type: ['hjchun', 'shpark'] },
    ]
  },
  {
    q: '12.	동기가 나에게 <br> 고민을 털어 놓았다. <br> 이때 난 어떻게 행동할까?',
    a: [
      { answer: 'a. 최대한 열심히 공감해 준다.', type: ['dongkim' ] },
      { answer: 'b. 실질적인 해결책을 제시해 준다.', type: ['heekim', 'kicho', 'hjchun'] },
      { answer: 'c. 친구에게 맛있는 걸 사주면서 <br> 위로해 준다. ', type: ['shpark'] },
    ]
  }
]

const infoList = [
  {
    name: '<김현희 교수님>이 나온 당신! <br> 세상에서 가장 따뜻한 <br> 논리형 인간 Type',
    share_name: '<김현희 교수님>이 나온 당신! 세상에서 가장 따뜻한 논리형 인간 Type',
    desc: '당신은 매사에 철두철미해 <br> 많은 이들의 신뢰를 받는 사람입니다. <br> <br> 초면인 사람들은 <br> 당신의 철저한 모습을 보고 <br> 다른 사람들에게 무관심할 것이라고 <br> 생각하기도 합니다. <br> <br> 하지만 당신은 <br> 사람들의 고민을 잘 들어주고 <br> 해결책을 제시해주는 <br> 따뜻함도 지니고 있어서 <br> 많은 사람들이 <br> 당신에게 조언을 구하네요. <br> <br> 자신의 일을 사랑하는 워커홀릭인 당신은 <br> 항상 바쁘기 때문에 <br> 번아웃이 오지 않도록 <br> 조심해야 합니다. <br> <br> 바쁜 삶도 좋지만 <br> 가끔은 자신을 위한 휴식 시간을 <br> 보내는 것이 어떨까요?!'
  },
  {
    name: '<전희주 교수님>이 나온 당신! <br> 다양한 사람들과의 교류를 즐기는 파워인싸 Type',
    share_name: '<전희주 교수님>이 나온 당신! 다양한 사람들과의 교류를 즐기는 파워인싸 Type',
    desc: '당신은 낯선 사람과 함께 하는 자리를 <br> 두려워하지 않는 용감한 사람입니다. <br> <br> 다양한 기회들을 <br> 매의 눈으로 포착하는 능력 덕분에 <br> 빠르게 변하는 세상살이에 적합합니다. <br> <br> 자신을 소심하다고 인지하는 사람들은 <br> 아마 당신의 대담함을 <br> 부럽다고 생각할 거예요. <br> <br> 이들의 마음을 <br> 세심하게 이해하려는 시도를 한다면 <br> 서로의 차이에서 비롯된 작은 오해들이 <br> 풀릴지도 몰라요. <br> 세상 사람들이 모두 같지는 않으니까요. <br> <br> 당신의 용기라면 <br> 타인의 마음을 세심하게 읽는 시도 또한 <br> 수월하게 해낼 수 있을 거라 봅니다!'
  },
  {
    name: '<박소현 교수님>이 나온 당신! <br> 활기차고 유쾌한 인간 비타민씨 Type',
    share_name: '<박소현 교수님>이 나온 당신! 활기차고 유쾌한 인간 비타민씨 Type',
    desc: '당신은 활발하고 <br> 유쾌한 성격의 소유자입니다. <br> 배려심이 많아서 주변에 사람들이 많아요. <br> <br> 늘 웃는 얼굴이기 때문에 쉽게 보고 <br> 막 대하는 사람들이 존재할 수도 있겠네요. <br> 하지만 그보다 당신을 <br> 아껴주는 사람들이 더 많을테니 <br> 큰 걱정은 필요 없겠어요! <br> <br> 늘 적극적인 태도이기 때문에 <br> 공동체 속에서도 <br> 문제없이 잘 어울리며 화합을 도모해요. <br> <br> 소통을 좋아하기 때문에 <br> 갈등이 생겨도 <br> 말로 차근차근 조율하는 <br> 능력을 지녔어요. <br> <br> 주변인들에게 해피바이러스가 <br> 되어주는 당신! <br> <br> 사랑과 열정으로 <br> 이 각박한 세상을 잘 헤쳐나가 봅시다!'
  },
  {
    name: '<조권익 교수님>이 나온 당신! <br> 주어진 일은 바로바로 끝내버리는 <br> 부지런한 갓생러 Type',
    share_name: '<조권익 교수님>이 나온 당신! 주어진 일은 바로바로 끝내버리는 부지런한 갓생러 Type',
    desc: '당신은 새로 생긴 과제를 미루지 않는 <br> 부지런한 사람 입니다. <br> 마감일에 쫓기는 다급한 상황을 <br> 좋아하지 않는 당신은 <br> 바쁘게 돌아가는 세상 속에 <br> 적합한 인물입니다. <br> <br> 당신은 침대에 누워 마감을 위한 <br> 최소한의 시간까지 <br> 미루는 사람들을 이해하지 못할 거에요. <br> <br> 하지만 이들에게 <br> 당신의 부지런함을 전파한다면 <br> 주변 사람들에게 좋은 사람으로 <br> 인식될지도 몰라요. <br> 이를 통해 당신은 어떤 상황에서도 <br> 높은 신뢰를 얻게 될 겁니다. <br> <br> 당신의 부지런함이라면 <br> 세상의 어떤 복잡한 일도 <br> 지체없이 신속하게 해결할 수 있을 거에요!'
  },
  {
    name: '<김동건 교수님>이 나온 당신! <br> 큐티앙큼Max이지만 <br> 엄청난 멘탈의 소유자 Type',
    share_name: '<김동건 교수님>이 나온 당신! 큐티앙큼Max이지만 엄청난 멘탈의 소유자 Type',
    desc: '당신은 말랑말랑한 순두부처럼 보이지만 <br> 결단력 있고 정신력이 뛰어난 사랍입니다. <br> <br> 초면인 사람들은 <br> 당신의 부드러움부터 발견하지만 <br> 주변 사람들은 <br> 당신의 성실함과 통찰력에 놀랍니다. <br> <br> 또한 마음의 준비를 하고 무언가를 한다면 <br> 아무리 힘들더라도 <br> 자신이 얻고자하는 바를 <br> 쟁취해 얻어내는 성격입니다. <br> <br> 당신에게는 은은하게 풍겨져 나오는 <br> 큐티함과 유머로 <br> 많은 사람들을 끌어당기는 <br> 매력이 있습니다. <br> 주변인들에게 강한 힘이 되어주죠. <br> <br> 힘든 일이 있더라도 당신이라면 <br> 이겨낼 힘이 충분하니 <br> 금방 해결할 수 있을 거에요!'
  },
]
