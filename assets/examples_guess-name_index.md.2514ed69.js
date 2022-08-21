import{_ as p,c as F,d as o,w as n,a as s,b as l,r as e,o as r}from"./app.7b4e1434.js";const w=JSON.parse('{"title":"Guess Name","description":"","frontmatter":{},"headers":[],"relativePath":"examples/guess-name/index.md"}'),y={name:"examples/guess-name/index.md"},D=s("h1",{id:"guess-name",tabindex:"-1"},[l("Guess Name "),s("a",{class:"header-anchor",href:"#guess-name","aria-hidden":"true"},"#")],-1),A=s("p",null,"This example shows how to create an app where the user should guess on a name the app is thinking of.",-1),C=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"MyApp"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"App"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createStartPage"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"EnterGuess"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),i=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"EnterGuess"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"I'm thinking of either the name Lily, Peter, Alice or Bob. Guess which one!"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Cols"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"EnterText"),s("span",{style:{color:"#F07178"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"size"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"placeholder"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Enter name"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"aVar"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"enteredName"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"InvalidGuess"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"pages"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"						"),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"NoGuessEntered"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"						"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},"Lily"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"CorrectGuess"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"						"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},"Peter"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"WrongGuess"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"						"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},"Alice"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"WrongGuess"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"						"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},"Bob"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"WrongGuess"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"					"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"\u21E8"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			)"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),u=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"CorrectGuess"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"That's right, "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"a"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"enteredName"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," is the one I'm thinking of!"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Good work!"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),d=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"NoGuessEntered"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"No... That's not a name..."),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Cols"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Guess again"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"EnterGuess"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"I give up"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"GiveUp"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			)"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),g=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"InvalidGuess"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"No, "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"a"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"enteredName"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," is totally wrong! It's not one of the names I mentioned."),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Cols"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Guess again"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"EnterGuess"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"I give up"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"GiveUp"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			)"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),E=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"WrongGuess"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"No, "),s("span",{style:{color:"#89DDFF"}},"${"),s("span",{style:{color:"#A6ACCD"}},"a"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"enteredName"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#C3E88D"}}," is wrong."),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Cols"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Guess again"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"EnterGuess"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#82AAFF"}},"Button"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"I give up"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"page"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"GiveUp"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"				"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			)"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1),_=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"GiveUp"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"extends"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Page"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#F07178"}},"createGui"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		"),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"Rows"),s("span",{style:{color:"#F07178"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Game Over!"),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#82AAFF"}},"Text"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#C3E88D"}},"Correct name was Lily."),s("span",{style:{color:"#89DDFF"}},"`"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"			"),s("span",{style:{color:"#A6ACCD"}},"Space"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"		)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")])])])],-1);function h(B,G,m,S,x,v){const a=e("ShowApp"),t=e("Tab"),c=e("Tabs");return r(),F("div",null,[D,A,o(a,{"class-example-name":"guess-name"}),o(c,null,{default:n(()=>[o(t,{title:"MyApp"},{default:n(()=>[C]),_:1}),o(t,{title:"EnterGuess"},{default:n(()=>[i]),_:1}),o(t,{title:"CorrectGuess"},{default:n(()=>[u]),_:1}),o(t,{title:"NoGuessEntered"},{default:n(()=>[d]),_:1}),o(t,{title:"InvalidGuess"},{default:n(()=>[g]),_:1}),o(t,{title:"WrongGuess"},{default:n(()=>[E]),_:1}),o(t,{title:"GiveUp"},{default:n(()=>[_]),_:1})]),_:1})])}const T=p(y,[["render",h]]);export{w as __pageData,T as default};
