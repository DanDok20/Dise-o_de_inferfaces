import agent1 from '../../agents/agent1.jpg'
import agent2 from '../../agents/agent2.jpg'
import agent3 from '../../agents/agent3.jpg'
import agent4 from '../../agents/agent4.jpg'
import agent5 from '../../agents/agent5.jpg'
import agent6 from '../../agents/agent6.jpg'
import agent7 from '../../agents/agent7.jpg'
import agent8 from '../../agents/agent8.jpg'
import agent9 from '../../agents/agent9.jpg'
import agent10 from '../../agents/agent10.jpg'
import agent11 from '../../agents/agent11.jpg'
import agent12 from '../../agents/agent12.jpg'
import agent13 from '../../agents/agent13.jpg'
import agent14 from '../../agents/agent14.jpg'
import agent15 from '../../agents/agent15.jpg'
import agent16 from '../../agents/agent16.jpg'

let initialState = {
    Atacantes: [{
        id: 1,
        name: 'GRIM',
        image: agent1,
        url: "./contactanos"
    },
    {
        id: 2,
        name: 'SENS',
        image: agent2,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 3,
        name: 'OSA',
        image: agent3,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 4,
        name: 'FLORES',
        image: agent4,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 5,
        name: 'ZERO',
        image: agent5,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 6,
        name: 'ACE',
        image: agent6,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 7,
        name: 'IANA',
        image: agent7,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 8,
        name: 'KALI',
        image: agent8,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    }],
    Defensores: [{
        id: 9,
        name: 'AZAMI',
        image: agent9,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 10,
        name: 'THORN',
        image: agent10,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 11,
        name: 'THUNDERBIRD',
        image: agent11,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 12,
        name: 'ARUNI',
        image: agent12,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 13,
        name: 'MELUSI',
        image: agent13,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 14,
        name: 'ORYX',
        image: agent14,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 15,
        name: 'WAMAI',
        image: agent15,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    },
    {
        id: 16,
        name: 'GOYO',
        image: agent16,
        url: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege"
    }]
};

const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default agentReducer;