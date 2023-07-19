import * as React from 'react';
import "./style/Eventtimeline.css";
import EventTimelineItem from './EventTimelineItem';
import fifa from "./img/IMG-20230409-WA0021.avif"
import Clickathon from "./img/IMG-20230409-WA0024.avif"
import Treasure from "./img/IMG-20230409-WA0018.avif"
import Human from "./img/IMG-20230409-WA0023.avif"
import Capitalist from "./img/IMG-20230409-WA0017.avif"
import Art from "./img/IMG-20230409-WA0019.avif"
import Comic from "./img/IMG-20230409-WA0020.avif"
import Code from "./img/IMG-20230409-WA0022.avif"



export default function Eventtimeline() {
  const arrData=([{
    "eventDate":"13 April",
    "titleBlue":"Lost Treasures",
    "timeBlue":"Thu, April 13th 2023",
    "key":1,
    "imgBlue":Treasure,
     "contentBlue":"Do you have what it takes to crack the clues in this roller coaster of unraveling clues hidden all across the campus??",
    "titleRed":"COMIC CHAOS",
    "imgRed":Comic,
    "showGreen":"none",
    "timeRed":"Thu, April 13th 2023",
     "contentRed":"Are you looking for some amusing and creative inspiration? Look no further as UPES-CSI invites you to the Comic Chaos Wacky Caricature Challenge!",
  },{
    "eventDate":"14 April",
    "imgRed":Clickathon,
    "imgGreen":Human,
    "imgBlue":fifa,
    "key":2,
    "titleBlue":"FIFA-23",
    "timeBlue":"Fri, April 14th 2023",
     "contentBlue":"Ronaldo vs Messi might not be the talk of the century anymore, but Fifa remains everyone’s beloved. This event is for our online gamers with a zeal for football.",
    "titleRed":"Clickathon 4.0",
    "timeRed":"Fri, April 14th 2023",
     "contentRed":"UPES-CSI proudly presents the perfect opportunity for photography enthusiasts to showcase their skills and explore new perspectives with Clickathon 4.0.",
    "titleGreen":"Human-Foosball",
    "showGreen":"none",
    "timeGreen":"Fri, April 14th 2023",
     "contentGreen":"Gather your squad and all foosball fans for a thrilling game of Human-Foosball. With restricted moves, show up your skills and win. c",
  },{
    "eventDate":"15 April",
    "imgRed":Code,
    "imgGreen":Capitalist,
    "key":3,
    "imgBlue":Art,
    "showBlue":"none",
    "titleBlue":"Art Across Time",
    "timeBlue":"Sat, April 15th 2023",
     "contentBlue":'Get ready to travel across the world with our upcoming UPES-CSI event, "Art Across Time". ',
    "titleRed":"Code Adventures",
    "timeRed":"Sat, April 15th 2023",
     "contentRed":"It’s time to put that to the test with our event-Code Adventures, divided into three rounds.",
    "titleGreen":"Capitalist Bidding Battle",
    "timeGreen":"Sat, April 15th 2023",
    "showGreen":"flex",
     "contentGreen":"If you’re a fan of monopoly and real estate, we have the event for you.We invite you to come to buy countries,literally and bid for them to earn your position as the winner.",
  }])
  return (
    <div>
      <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">Events Schedule</div>
    {console.log(arrData)}
    {arrData.map((element)=>{
      return     <EventTimelineItem BlueTitle={element.titleBlue} EventDate={element.eventDate} BlueTime={element.timeBlue} BlueContent={element.contentBlue} 
      RedTitle={element.titleRed} RedTime={element.timeRed} RedContent={element.contentRed} 
      GreenTitle={element.titleGreen} GreenTime={element.timeGreen} GreenContent={element.contentGreen} BlueImg={element.imgBlue} RedImg={element.imgRed} GreenImg={element.imgGreen}
      showGreen={element.showGreen} key={element.key} showBlue={element.showBlue}
      />
    })}
	</div>
</section>
    </div>
  );
}
