/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, PageRegister, PageController} from "@haztivity/core";
import template from "./page.pug";
import {HzMemoryGameResource} from "../../../resources/hz-memory-game/HzMemoryGame";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "6612",
        resources: [
            HzMemoryGameResource
        ],
        template: template
    }
);
page.on(
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        
    }
);
