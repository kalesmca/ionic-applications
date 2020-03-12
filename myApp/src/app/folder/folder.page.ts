import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Invoice, Entry } from "../models/invoice-model";
import { Constants } from "../config/constant";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;
  invoice = new Invoice();
  entry = new Entry();
  constants = new Constants();
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("constants::", this.constants);
  }
  addItem() {
    console.log("item entry ::", this.entry);
    this.invoice.entryList.push(this.entry);
    this.entry = new Entry();
  }
  clear() {
    this.entry = new Entry();
  }
}
