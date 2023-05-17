import React from "react"
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import emojiList from "../emojiList.json";
import App from "../App";

describe("Emoji Search Test", ()=>{
    let header,emoji,input,filterList;
    beforeEach(() =>{
        render(<App/>);
    });
    test('header render test', () => {
        header = screen.getByText(/Emoji Search/i);
        expect(header).toBeInTheDocument();//header text kontrolü
        const images = screen.getAllByRole("img");
        expect(images[0]);
        expect(images[1]);// 2 tane img olması lazım
    })
    test("emoji list control",()=>{
        emoji = emojiList.slice(0,19); // ilk 20 elamnı alalım
        //listedeki ilk 20 eleman ekranda gösterilmişmi kontrol
        emoji.map((item) =>{expect(screen.getByText(item.title)).toBeInTheDocument();});
    })

    test("emoji list filter and re-render", () => {
        input = screen.getByRole("textbox"); //inputa ulaşma
        const filter = "smile cat";
        filterList = emojiList.filter(it => it.keywords.toLowerCase().match(filter) || it.title.toLowerCase().match(filter));
        fireEvent.change(input,{target:{value:filter}});
        expect(screen.getAllByText(/cat/i)).toHaveLength(2);
    });

    it("proof that after click emoji,copy", async () => {
        const click = screen.getByText("Joy");
        expect(click.parentElement.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
        console.log(click.parentElement.getAttribute("data-clipboard-text"));
        expect(click.parentElement.getAttribute("data-clipboard-text")).toMatch("😂");
    });
    
})