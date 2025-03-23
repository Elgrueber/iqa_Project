import { expect } from "@playwright/test";
import { test } from "../../fixture";

export default class HomePage {
    constructor(page) {
        this.page = page;
    }
}