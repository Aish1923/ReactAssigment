import CardComponent from "./CardComponent";
import ReactDOM from 'react-dom';

const cardDetail=[ {
    name: "xyz",
    email: "xyz@qwerty.com",
    phoneNumber: "123445",
    office: "unknown",
    manager: "xyz@qwerty.com",
    orgUnit: "/Employees",
    mainText:
      "abcd",
    gitHub: "xyzGit",
    twitter: "xyzTwitter",
    stackOverflow: null,
    linkedIn: "xyzLinkedIn",
    imagePortraitUrl: "https://xyz",
    imageWallOfLeetUrl: "https://xyz",
    highlighted: false,
    published: true,
  },
  {
    name: "abc",
    email: "abc@qwerty.com",
    phoneNumber: "123445",
    office: "unknown",
    manager: "abc@qwerty.com",
    orgUnit: "/Employees",
    mainText:
      "abcd",
    gitHub: "abcGit",
    twitter: "abcTwitter",
    stackOverflow: null,
    linkedIn: "abcLinkedIn",
    imagePortraitUrl: "https://abc",
    imageWallOfLeetUrl: "https://abc",
    highlighted: false,
    published: true,
  }]

describe('CardComponent',()=>{
    it("renders without crashing", () => {
    const div=document.createElement('div');
    ReactDOM.render(<CardComponent cardDetail={cardDetail} />,div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
  