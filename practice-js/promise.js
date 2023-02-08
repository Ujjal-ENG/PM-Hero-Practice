// const hasMeeting = false;
// const meeting = new Promise((resolve, reject) => {
//   // do stuff
//   console.log(!hasMeeting);
//   if (!hasMeeting) {
//     const meetingDetails = {
//       name: "Technical Meeting",
//       location: "Google Meet",
//       time: "10:00 PM",
//     };
//     resolve(meetingDetails);
//   } else {
//     reject(new Error("meeting already scheduled"));
//   }
// });

// const addToCalender = (meetingDetails) => {
//   const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//   return Promise.resolve(calender);
// };

// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// console.log("Hello");

// const promise1 = Promise.resolve(`Promise 1 resolved`);

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise 2 resolved`);
//   }, 2000);
// });

// promise1.then((res1) => console.log(res1));
// promise2.then((res2) => console.log(res2));

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  // do stuff
  console.log(!hasMeeting);
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

async function myMeeting() {
  const meetingDetails = await meeting;
  const calender = await addToCalender(meetingDetails);
  console.log(calender);
}

myMeeting();
