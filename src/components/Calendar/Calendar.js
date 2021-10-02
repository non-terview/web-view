import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import styled from 'styled-components';

const events = [
  {
    id: 1,
    title: '유저이름',
    description: '면접내용',
    start: '2021-10-02T10:00:00',
    end: '2021-10-03T12:00:00'
  },
  {
    id: 2,
    title: '유저이름',
    description: '면접내용',
    start: '2021-10-13T13:00:00',
    end: '2021-10-13T18:00:00'
  },
  {
    id: 3,
    title: '유저이름',
    description: '면접내용',
    start: '2021-10-15T13:00:00',
    end: '2021-10-15T18:00:00'
  }
];

const Cal = styled.div`
  width: 700px;
  height: 435px;
`;

function Calendar() {
  return (
    <Cal>
      <FullCalendar
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
      />
    </Cal>
  );
}

export default Calendar;
