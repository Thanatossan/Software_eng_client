// import React from "react";
// const calendar = () => {
//   return (
//     <React.Fragment>
//       <div class="container columns">
//         <div class="column">
//           <h2> calendar</h2>
//         </div>
//         <div class="column"></div>
//       </div>
//     </React.Fragment>
//   );
// };
// export default calendar;
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "../components/calendar_components/main.scss";
var url = "http://13.76.181.113/api/calendar/topic/";
var url2 = "http://13.76.181.113/api/calendar/created/";
var studentCode = "600610780";
export default class calendar extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { id: "", title: "", start: "" },
    ],
    empty: [
      // initial event data
      { id: "", title: "", start: "" },
    ],
  };
  componentDidMount() {
    fetch(url + studentCode)
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ calendarEvents: jsonData });
        // console.log(jsonData);
        // this.setState({
        //   // add new event data
        //   calendarEvents: this.state.calendarEvents.concat({
        //     // creates a new array
        //     id: jsonData.id,
        //     title: jsonData.title,
        //     // start: this.changeDateSql(jsonData.startDate)
        //     start: jsonData.startDate
        //     // allDay: this.changeDateSql(jsonData.endDate)
        //   })
        // });
      });
  }
  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-calendar">
          <br></br>
          <br></br>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
            height="parent"
            editable="true"
            droppable="true"
          />
        </div>
        <div align="center">
          <form onClick={this.handleClick}>
            <button type="reset" className="resetBTN">
              ResetEvent
            </button>
          </form>
          <form onClick={this.handleClicky}>
            <button type="reset" className="resetBTN">
              RemoveNewestEvent
            </button>
          </form>
        </div>
      </div>
    );
  }
  // changeDateSql = date => {
  //   var jsDate = date
  //     .toISOString()
  //     .slice(0, 19)
  //     .replace("T", " ");
  //   return jsDate;
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state.calendarEvents);
  //   fetch(url2 + studentCode, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(this.setState.calendarEvents)
  //   });
  // };
  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends,
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = (arg) => {
    // eslint-disable-next-line no-restricted-globals
    var newEvent = prompt(
      "Create an event in " + arg.dateStr + "\n Enter title"
    );

    if (newEvent) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          id: "",
          title: newEvent,
          start: arg.date,
          allDay: arg.allDay,
        }),
      });
    }
  };

  handleEventClick = (arg) => {
    // eslint-disable-next-line no-restricted-globals
    //console.log(arg);
    //console.log(this.state.calendarEvents);
    /*
    var delEvent = window.confirm(
      "Would you like to delete " + arg.event.title
    );

    if (delEvent) {
      this.setState({
        //copyCalendarEvents: this.state.calendarEvents.splice(1, 1),
        calendarEvents: this.state.calendarEvents.slice(
          0,
          this.state.calendarEvents.length - 1
        ),
      });
    }
    */
  };

  handleClick = () => {
    var delEvent = window.confirm("Would you like to remove all events");

    if (delEvent) {
      this.setState({
        //calendarEvents: this.state.calendarEvents.splice(0, 1),
        calendarEvents: this.state.empty,
      });
    }
  };

  handleClicky = (arg) => {
    // eslint-disable-next-line no-restricted-globals
    var delEvent = window.confirm("Would you like to remove newest event");

    if (delEvent) {
      this.setState({
        //copyCalendarEvents: this.state.calendarEvents.splice(1, 1),
        calendarEvents: this.state.calendarEvents.slice(
          0,
          this.state.calendarEvents.length - 1
        ),
      });
    }
  };
}
