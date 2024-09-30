/*
    Horoscopes from:
    https://www.washingtonpost.com/entertainment/horoscopes/
    https://www.elle.com/horoscopes/
    https://astrotalk.com/horoscope/daily-horoscope
*/

let capricorn = [
    "If there's someone in your social group everyone dislikes but you, then maybe you should give this person another, more objective review.",
    "Hold your horses! This weekend's feud between Venus and Pluto puts instant gratification out of reach.",
    "Today, it is very possible that you will have lots of financial luck. Do something risky today."
];
let aquarius = [
    "Checking in with the people you like spending time with is what you need right now to stay grounded.",
    "Is it just a figment of your imagination? This weekend's Venus-Pluto squabble could leave you scratching your head and wondering if you've made a big deal out of nothing.",
    "You are going to have lots and lots of financial good luck. The numbers that you should look out for are 56 and 78."
];
let pisces = [
    "Why do you have to take at face value the rules of someone who is in authority? Dissent is not only acceptable in this situation, it is wise.",
    "Under this weekend's friction-filled square between Venus and Pluto, the push-pull dynamic could get tired. A game of cat-and-mouse can be sexy to a point, but eventually you just want to know whether someone is into you or not.",
    "The numbers 89, 39 and 35 will have a very deep meaning for you today and bring you lots of luck."
];
let aries = [
    "A rude or insensitive person could cause you some complications this morning",
    "A partnership is humming along nicely when suddenly, this weekend's stressful Venus-Pluto dustup pumps the brakes.",
    "Today is not an auspicious day to start anything new. Keeping a positive frame of mind would be challenging."
];
let taurus = [
    "Be careful of other people who seem too good to be true today, because they probably are.",
    "Is it time for a relationship tune-up? Your ruling planet, amorous Venus, is clashing with ominous Pluto this weekend, giving you the feeling that all is not well between you and a certain someone.",
    "You may have lots of financial luck. The number 94, 20 and 47 are going to be your lucky numbers for today."
];
let gemini = [
    "Right now it's your emotional nature that is going to be your driving force in life, but that needs to start changing.",
    "You could get into hot water this weekend as desirous Venus squares off with intense Pluto, turning up the heat in a relationship.",
    "Strive to create your own good fortune."
];
let cancer = [
    "You will be doing yourself a service by taking your time today, especially in terms of any decisions you have to make.",
    "Someone could hit a nerve and hurt your feelings this weekend as sweet Venus feuds with intense Pluto in your interpersonal realm.",
    "Your lucky numbers are going to be 38, 92, 3, 19 and 6 today. If you have a lucky amulet, bring it along today."
];
let leo = [
    "The past is coming back not to haunt you but to thrill you!",
    "Are you really helping people with your 'helpful' input? A stressful square between sweet Venus in your communication center and destructive Pluto in your criticism corner this weekend implies the answer to that question may not be 'yes'.",
    "Jupiter is sending good energy your way. The numbers 38, 90, 34, 22, 81, and 19 are going to bring you a lot of financial luck."
];
let virgo = [
    "Today, you need to move away from multitasking and just try to focus on one thing at a time.",
    "Stability or drama? This weekend, a tense square between amorous Venus in your rock-steady second house and intense Pluto in your theatrical fifth could leave you torn.",
    "You are lucky in property matters."
];
let libra = [
    "Try to make finding out about people from other cultures your new hobby today.",
    "This weekend's stressful square between your ruler, amiable Venus, in your sign and intense Pluto could trigger turbulent emotions that affect your home life or cast a dark cloud over your previously pleasant vibe.",
    "The color red is going to have a very lucky meaning for you. You will have some luck if you are gambling today."
];
let scorpio = [
    "Try to avoid making any impulse buys right now, especially on big-ticket items.",
    "You're likely to put out mixed messages this weekend as sweet Venus in your subliminal sector clashes with your ruler, dominant Pluto, in your communication camp.",
    "Luck is good generally as you have a positive attitude."
];
let sagittarius = [
    "Even without trying you're going to be a source of inspiration for someone today, and they won't be shy about letting you know it.",
    "When Venus and Pluto square off this weekend, one part of you is craving freedom, but another part wants to drop anchor.",
    "The numbers 77 and 5 are going to bring you lots of good luck today. Especially in the financial department."
];

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {

    let month = Number(document.getElementById("search").value);
    const horoscopeDataSection = document.getElementById("horoscope-data");
    horoscopeDataSection.style.display = "flex";
    let fortune = Math.floor(Math.random() * 3);
    let stone = document.getElementById("stone");
    let zodiacSign = document.getElementById("zodiac-sign");

    if (month === 1) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Capricorn</h2>
                <p>${capricorn[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(217,213,215,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczOK5cfLdHUMHW34KX7o7rxXH0zvpXTi_RGZuySmGeeXGhE_PM8obULfslkYjzGD40YHXQVMYh1nznx2OBiqsE0NV3p9U6y_owbYDjZj8O-FvXajemw=w600-h600-p-k";
        stone.style.backgroundColor = "#d9d5d7";
    } else if (month === 2) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Aquarius</h2>
                <p>${aquarius[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(116,194,208,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczOvMAgTKN1EKkhLBHzU3ySO3B4uJZ1Mrd8yKAz9p_OYO7XLczOTBthtiWYXTpvs3M1r8UFaX6ZM3obztiKBwZuB8nWejqeA75sHA66QX13xuNOhMzw=w600-h600-p-k";
        stone.style.backgroundColor = "#74c2d0";
    } else if (month === 3) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Pisces</h2>
                <p>${pisces[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(36,63,94,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczP7co_XwXMt8_9ThuQEyyC5oOmYFxQjmkXLnucYkKrp0oKQPGlZrY5Cnnf1ItOWTRAeDE_P49LYQbBZdhsZHWhC5q5je6Xd_Pp4zmn1sV6B7K_-AwA=w600-h600-p-k";
        stone.style.backgroundColor = "#243f5e";
    } else if (month === 4) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Aries</h2>
                <p>${aries[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(225,50,35,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczPDvGY0ItsyRwHpaVtProzL8yu8DZYa0PHqtQK0fiolTDlM6zOfJbn5fUUwphDNLTOiEdBvCmMCvKBAVKts1RCDSjJzjkwX4kGVritPT_P4UIyRIQc=w600-h600-p-k";
        stone.style.backgroundColor = "#e13223";
    } else if (month === 5) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Taurus</h2>
                <p>${taurus[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(54,87,44,25%)";
        zodiacSign.style.top = "11.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczOYTiLokZ4J5QIsVout6lraq5pIgv6iSD0npghfhNZp7gz6aLMQU9E6mOWgk6e5CXQu_TMBZCoppt7U1ElLXX93tTehU8pQkmsyymEX_mc74kuy4go=w600-h600-p-k";
        stone.style.backgroundColor = "#36572c";
    } else if (month === 6) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Gemini</h2>
                <p>${gemini[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(137,191,117,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczOpUWf-eOFzZ984T-aL5n4Rn07BNn6UK_OtvvZzdkmYfAjSH2IncNZiev5zshUG2vHj0W0L6ktoDq6knuTnpzGwPPoOTxNEMZiql5yoo_5yaY6GZdk=w600-h600-p-k";
        stone.style.backgroundColor = "#89bf75";
    } else if (month === 7) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Cancer</h2>
                <p>${cancer[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(64,135,175,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczPTD6usaAsrT1cFITfPTan0p8p1xKye6spMEIfPce4LQPYzHxTRAa2dPOaozjYXwfe9fU1YWFHVvPKTt6A9BE8w0Xkh1KqXruYoh7rV_0wjB19nwaI=w600-h600-p-k";
        stone.style.backgroundColor = "#4087af";
    } else if (month === 8) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Leo</h2>
                <p>${leo[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(213,117,57,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczNba1BdHRgligZvW2mNxNC0bBKyJRBkLhL6u6p5y47hEQr1dHrsNeDFXDZJE6MgOlgZb30kzIxUoN6TsRdkVlh7V-K-iU3bdjJiyM5DKdpYJY_2OOc=w600-h600-p-k";
        stone.style.backgroundColor = "#d57539";
    } else if (month === 9) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Virgo</h2>
                <p>${virgo[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(134,104,42,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczNZuJ-IWQsYoMTNK3FJdIPH45z82wJVyzCROGy--8xh0DvXifmfdMqdGtV_akm682x24VZGVW1jEXVwhCtyckCSkyNDM6thdiDoMm4B8w5xGlr-6ug=w600-h600-p-k";
        stone.style.backgroundColor = "#86682a";
    } else if (month === 10) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Libra</h2>
                <p>${libra[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(250,177,158,25%)";
        zodiacSign.style.top = "4.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczO0bpKAbYaFTlBdzijHVckaoHXvptRTbmW0r9MZAsrwMjDbv75e5ACmSojoW5cEXh7hBv7ZiGRVeBCRpB5EVDKJ3YyC-ll29wrtMmkU8RxyNDzim8A=w600-h600-p-k";
        stone.style.backgroundColor = "#fab19e";
    } else if (month === 11) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Scorpio</h2>
                <p>${scorpio[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(94,10,24,25%)";
        zodiacSign.style.top = "8.5%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczPF-yXNv8Q33dszxTkgrGsCB2x_CzrO7WnPa4h3M3kNuT2nXFiOEQMDLjz_I9fRDDUdxsMGhRd3bjYgbjEfOGxMAClueEVur2y1nUUQW0es1c6Tlgo=w600-h600-p-k";
        stone.style.backgroundColor = "#5e0a18";
    } else if (month === 12) {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Sagittarius</h2>
                <p>${sagittarius[fortune]}</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(120,104,137,25%)";
        zodiacSign.style.top = "4%";
        zodiacSign.src = "https://lh3.googleusercontent.com/pw/AP1GczON1lEf7eDK8sZl5S2R04GMWfdr2lfoHAobdxgupRS97bZsn4IXqfSYDn0AgLpUc8_CQQPwB97z8xx_tRZkEd_PTg0F_KjBnxVXINqsD2rA8efA-5U=w600-h600-p-k";
        stone.style.backgroundColor = "#786889";
    } else {
        horoscopeDataSection.innerHTML = `
            <div>
                <h2>Invalid Month!</h2>
                <p>Please try again with a valid <u>month</u>.</p>
            </div>
        `;
        horoscopeDataSection.style.backgroundColor = "rgba(204,204,204,25%)";
        zodiacSign.style.top = "";
        zodiacSign.src = "";
        stone.style.backgroundColor = "#ccc";
    }

    document.getElementById("search").value = "";
});
