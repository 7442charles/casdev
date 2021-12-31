function select(el) {
  return document.querySelector(el)
}
var classroom = select('#classroom');
var work_area = select('.workArea');
var dhm = select('.dhm');
var dht = select('.dht');
var classRow = select('.classRow');

classroom.addEventListener('click', manageClassrooms);
function manageClassrooms() {
  let classlist = `<div class="classRow">
  <div class="dhm room">DHM classes</div>
  <div class="dht room">DHT classes</div>
  <div class="tourism room">Tourism classes</div>
  <div class="dca room">DCA classes</div>
  <div class="dpc room">DPC classes</div>
  <div class="it room">IT classes</div>
  <div class="events room">Event classes</div>
  </div>`;
  return work_area.innerHTML = classlist; 
}

//send page template literal
var send_message = select('#message');
send_message.addEventListener('click', sendMsg);
function sendMsg() {
  let msgbody = `<div class="msg">
      <h2 class="msghead">Send msg </h2><br />
      <div class="specialize">
        <span><b>Select target group:</b></span>
        <span>Course: 
          <select name="course name" id="course_select">
            <option>DHM</option>
            <option>DHT</option>
            <option>DCA</option>
            <option>DPC</option>
            <option>ICT</option>
          </select>
        </span>
        <span class="intakeYear">
          Select Year:
          <select name="" id="intake_year">
            <option>2018</option>
            <option>2019</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </span>
        <span class="intakeMonth">
          select month:
          <select name="" id="intake_month">
            <option>Jan</option>
            <option>May</option>
            <option>sep</option>
          </select>
        </span>
        
      </div>
      &nbsp;&nbsp;
      <div class="msg_body">
          <div class="msg_title">
            Msg Tittle:&nbsp;<input type="text" id="messageTitle">
          </div><br />
          <textarea id="theMsg" cols="50" rows="10" placeholder="Msg body here"></textarea><br />
          <button class="btn btn-success send">Send</button>
        </div>
      <div class="msg_sent"></div>
    </div>`;

  return work_area.innerHTML = msgbody, initEl();
}

//init elements
function initEl() {
  var send_btn = select('.send');
  send_btn.addEventListener('click', sending_msg);
}

//sending message
function sending_msg() {
  let data = select('#theMsg').value;
  let data_title = select('#messageTitle').value;
  let no_of_students = Math.floor(Math.random()*500);
  if (data =="") {
    select('#theMsg').focus();
  } else if(data_title =="") {
    select('#messageTitle').focus();
  } else {
    // message sent template literal
      let msg_success = `&nbsp;&nbsp;
      <div class="alert alert-success">
        <strong>Success! ${data_title}</strong> Message sent successfully. Sent to <b>${no_of_students} students</b>
        <span class="close" data-dismiss="alert" aria-label="close">&times;</span>
      </div>`;

      //init the alert close btn
      select('.msg_sent').innerHTML = msg_success;
      let close_alert = select('.close');
      close_alert.addEventListener('click', closeAlert);
      console.log(data);
      

      //display select data
      let course = select('#course_select').value;
      let intake_year = select('#intake_year').value;
      let intake_month = select('#intake_month').value;
      console.log('course=', course);
      console.log('intake Year =', intake_year);
      console.log('intake Month=', intake_month);
    }
}

// alert close func
function closeAlert() {
  var alert_to_close = select('.alert');
  alert_to_close.remove();
}