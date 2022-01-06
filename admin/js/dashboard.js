function select(el) {
  return document.querySelector(el);
}
var classroom = select('#classroom');
var work_area = select('.workArea');
var dhm = select('.dhm');
var dht = select('.dht');
var classRow = select('.classRow');

classroom.addEventListener('click', manageClassrooms);
function manageClassrooms() {
  let classlist = `
  <div class="classRow">
  <div class="dhm_room btn btn-info">DHM classes</div>
  <div class="dht_room btn btn-info">DHT classes</div>
  <div class="tourism_room btn btn-info">Tourism classes</div>
  <div class="dca_room btn btn-info">DCA classes</div>
  <div class="dpc_room btn btn-info">DPC classes</div>
  <div class="it_room btn btn-info">IT classes</div>
  <div class="events_room btn btn-info">Event classes</div>
  </div>`;

  //adding action buttons on class page
  var classAction = select('#classAction');
  classAction.innerHTML = `
    <button type="button" class="btn btn-sm btn-outline-secondary" id="create_room" data-toggle="modal" data-target="#create_room_modal">Create Room</button>
    <button type="button" class="btn btn-sm btn-outline-secondary" id="delete_room">Delete Room</button>`;
  var create_room_btn = select('#createbtn');
  create_room_btn.addEventListener('click', room_created_success);
  work_area.innerHTML = classlist; 
  
}
function clear_class_action() {
  classAction.remove();
}

//send page template literal
var send_message = select('#message');
send_message.addEventListener('click', sendMsg);
function sendMsg() {
  clear_class_action();
  let msgbody = `
    <div class="msg">
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

let no_of_students = Math.floor(Math.random()*500);

//sending message
function sending_msg() {
  let data = select('#theMsg').value;
  let data_title = select('#messageTitle').value;
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

/*working on classes*/
// function to create new class
    //be able to add student to classes
    //can remove students from a class

function room_created_success() {
  let className = select('#class_Name').value;
  console.log("classname =", className);
  let modal_body = select('#success_modal');
  modal_body.innerHTML = `<strong>${className}</strong> has been created and <strong>${no_of_students}</strong> were added.`

}    


// function to delete a class
    //notifies students of class deletion
    //dletion waits for 24hrs
    //deletion can be cancelled by admin/lecture
    //deletes all class data



//registering units