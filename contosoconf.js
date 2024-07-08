const tracks = [
    {
      id: 1,
      name: "Keynote",
      speaker: "Dr. Jane Smith",
      time: "9:00 AM - 10:00 AM",
      room: "Main Hall",
    },
    {
      id: 2,
      name: "Web Development",
      speaker: "Alice Johnson",
      time: "11:00 AM - 12:00 PM",
      room: "Room A",
    },
    {
      id: 3,
      name: "Data Science",
      speaker: "Charlie Green",
      time: "11:00 AM - 12:00 PM",
      room: "Room B",
    },
    {
      id: 4,
      name: "Cloud Computing",
      speaker: "Eva Black",
      time: "11:00 AM - 12:00 PM",
      room: "Room C",
    },
  ];

$(document).ready(function(event){
    tracks.forEach(track => {
        const trackDiv = $('<div class ="track.id"></div>');
        
        const name = $('<p></p>').text(track.name);
        const speaker = $('<p></p>').text(track.speaker);
        const time = $('<p></p>').text(track.time);
        const room = $('<p></p>').text(track.room);
        
        trackDiv.append(name, speaker, time, room);
        $(trackDiv).hover(function(){
            $(trackDiv).css('background-color', ' rgb(15, 180, 163)')
        },function(){
            $(trackDiv).css('background-color', ' rgb(223, 219, 219)')
        })

        $('body').append(trackDiv);
    });

});