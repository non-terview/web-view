import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import styled from 'styled-components';
//import ReactTooltip from 'react-tooltip';

const events = [
  {
    id: 1,
    title: '1번유저',
    start: '2021-10-04T10:00:00',
    end: '2021-10-05T14:00:00',
    description: '1번의 면접내용'
  },
  {
    id: 2,
    title: '2번유저',
    start: '2021-10-06T10:00:00',
    end: '2021-10-06T14:00:00',
    description: '2번의 면접내용'
  },
  {
    id: 3,
    title: '3번유저',
    start: '2021-10-08T10:00:00',
    end: '2021-10-08T14:00:00',
    description: '3번의 면접내용'
  },
  {
    id: 4,
    title: '4번유저',
    start: '2021-10-08T10:00:00',
    end: '2021-10-08T14:00:00',
    description: '4번의 면접내용'
  },
  {
    id: 5,
    title: '5번유저',
    start: '2021-10-08T10:00:00',
    end: '2021-10-08T14:00:00',
    description: '5번의 면접내용'
  },
  {
    id: 6,
    title: '6번유저',
    start: '2021-10-08T10:00:00',
    end: '2021-10-08T14:00:00',
    description: '6번의 면접내용'
  }
];

const Cal = styled.div`
  width: 700px;
  height: 600px;
`;

function renderEventContent(info) {
  info.el.setAttribute('title', info.event.extendedProps.description);
}

function Calendar() {
  return (
    <Cal>
      <FullCalendar
        height='600px'
        locale={koLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        //초기 설정 뷰 (달로 보여지게 함)
        initialView='dayGridMonth'
        //헤더에 표시할 툴 바
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        //events값을 뿌려줌
        events={events}
        //사용자가 캘린더를 보는 동안 표시기가 자동으로 위치를 조정한다.
        nowIndicator
        //한 날짜에 많은 일정이 있을경우 +more로 표시
        // 예: 5개에 일정일경우 +5 개
        dayMaxEventRows={true}
        //event속성으로 description을 가져오ㅏ서 보여줌
        eventDidMount={renderEventContent}
      />
    </Cal>
  );
}

export default Calendar;
