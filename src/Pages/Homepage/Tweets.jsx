import React from "react";
import TweetsWrapper from "./TweetsWrapper";
import AVI1 from "../../assets/Images/AVI1.jpg";
import AVI2 from "../../assets/Images/AVI2.jpg";
import AVI3 from "../../assets/Images/AVI3.jpg";
import AVI5 from "../../assets/Images/AVI5.jpg";
import AVI6 from "../../assets/Images/AVI6.jpg";
import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";

const Tweets = () => {
  return (

    
    <div className="tweetsSection">
      <h2 className="sectionHead">Words on the Streets</h2>

      {/* <Marquee className="tweetsWrapper">  */}
      <div className="tweetsMarquee">
        <div className="marqueeContainer"> 

        <div className="scroll"> 
        <TweetsWrapper
          linkUrl="https://twitter.com/okoyechinyerej2/status/1589560816176574464?t=GH0a1DwZfjhgu9j1vhF-WA&s=03"
          name="JoyOkoyexo"
          username="@okoyechinyerej2"
          AVI={AVI1}
          tweet="It was lovely ... Complete package... Good food/variety of food ... Good timing.... Good audience engagement/ on point activities.... And good music..... No fights...... Perfect 💯"
        />
        <TweetsWrapper
          linkUrl="https://twitter.com/Abuja_Fish_Dr/status/1597938389080502272?t=aRxmPRCCYELm89C25-wouQ&s=03"
          name="samson unah"
          AVI={AVI2}
          username="@Abuja_Fish_Dr"
          tweet="How we rolled up on @BOLEbration with @bishop_bisa and @Bolestica2 to give Abuja an epic event.
clips by yours truely @Abuja_Fish_Dr"
        />
        <TweetsWrapper
          linkUrl="https://twitter.com/Muhammedhayatd2/status/1590657037993930752?t=DDM2CJHmMA6EAxLo5inVqA&s=03"
          name="Iam_Yatt"
          AVI={AVI3}
          username="@Muhammedhayatd2"
          tweet="Eccentric looks from the just concluded @BOLEbration @Bolestica2 @abujastreets coming at you real fast.. 🍌 🚀"
        />
        <TweetsWrapper
          linkUrl="https://twitter.com/Abuja_Fish_Dr/status/1590685037602942977?t=m8o8Xat99sxMCpukg680_A&s=03"
          name="samson unah"
          AVI={AVI2}
          username="@Abuja_Fish_Dr"
          tweet="Na only girls do eating competition for @BOLEbration on Sunday fah....
I had fun on Sunday and it was great hooking up with new friends in Abuja.."
        />
        <TweetsWrapper
          linkUrl="https://twitter.com/Activity_queen/status/1590020567498862592?t=NDJfBPd2598-TiwRa5DUaw&s=03"
          AVI={AVI5}
          name="Minister of Enjoyment"
          username="@Activity_queen"
          tweet="I made up my mind to attend @BOLEbration over the weekend  then I patronized @mrkessie  . Omo I can’t lie the parfait was so nice 👍"
        />
        <TweetsWrapper
          linkUrl="https://twitter.com/realsultanoa/status/1589225661264109569?t=mQXh1B080tG5X375HxjcEA&s=03"
          name="Sultan of Abuja🙏"
          username="@realsultanoa"
          AVI={AVI6}
          tweet="I don reach #Bolebration ground o, i no wan here say #Bole don finish, make i chop before i do giveaway for anyone wey recognises me."
        />
        </div>
        </div>
      </div>
     

      <div className="action">
        <Link target="_blank" to="https://twitter.com/BOLEbration">
          Join Our Community
        </Link>
      </div>
    </div>
  );
};

export default Tweets;
