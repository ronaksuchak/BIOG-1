import { PowersupplyService } from './../../services/powersupply.service';
import { MotherBoardService } from './../../services/mother-board.service';
import { GraphicCardService } from './../../services/graphic-card.service';
import { CpucoolerService } from './../../services/cpucooler.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';
import { CaseService } from 'src/app/services/case.service';
import { RamService } from 'src/app/services/ram.service';


@Component({
  selector: 'app-pc-components',
  templateUrl: './pc-components.component.html',
  styleUrls: ['./pc-components.component.css']
})
export class PcComponentsComponent implements OnInit {

  productObser: Observable<any[]>;
  productHead = [];
  data = [];


  type: String;
  constructor(private productService: ProductService,
    private router: Router,
    private dataService: DataService,
    private cpuCooler: CpucoolerService,
    private graphicsCard: GraphicCardService,
    private caseservice: CaseService,
    private motherBoard: MotherBoardService,
    private powerSupply: PowersupplyService,
    private ramService: RamService,
    private storage: StorageService) { }

  ngOnInit(): void {
    this.listProductCategories();
    this.type = this.dataService.getData();
    this.listProductCategories()
  }
  listProductCategories() {

    console.log(this.type)
    switch (this.type) {
      case ProductConstants.CORE_CPU:
        {
          this.productHead = ["NAME", "IMAGE", "BRAND", "CORE CLOCK", "CORE COUNT", "GRAPHICS TYPE",
            "INTEGRATED GRAPHICS", "MANUFACTURER", "SIMULATED MULTITHREAD", "TDP", "PRICE"
          ]
          this.productObser = this.productService.getProductList();
          // this.productObser.subscribe((p) => {
          //   console.log(p);
          // });


        }
        break;
      case ProductConstants.CORE_CASE:
        {
          console.log("in  case");
          this.productHead = ["ID", "NAME", "IMAGE", "AVAILABLE", "BRAND", "COLOR",
            "EXTERNAL BAY", "INTERNAL BAY", "POWER SUPPLY", "SIDEPANEL TYPE", "TYPE", "PRICE"]
          this.productObser = this.caseservice.getProductList();
          // this.productObser.forEach(p => );
          this.productObser.subscribe((p) => {
            console.log(p);
          });
        }
        break;
      case ProductConstants.CORE_COOLER:
        {

          this.productHead = ["ID", "NAME", "IMAGE", "FANRPM", "NOISELEVEL", "RADIATORSIZE", "PRICE"]
          this.productObser = this.cpuCooler.getProductList();
          // this.productObser.forEach(p => );
          this.productObser.subscribe((p) => {
            console.log(p);
          });

        }
        break;
      case ProductConstants.CORE_GPU:
        {
          this.productHead = ["ID", "NAME", "IMAGE", "CHIPSET", "VIDEO MEMORY", "CORE CLOCK", "BOOST CLOCK",
            "LENGTH", "THICKNESS", "PRICE"]
          this.productObser = this.graphicsCard.getProductList();
        }
        break;
      case ProductConstants.CORE_MOBO:
        {
          this.productHead = ["ID", "NAME", "IMAGE", "SOCKET", "FORM FACTOR", "MAX MEMORY", "MEMORY SLOTS",
            "CHIPSET", "PRICE"]
          this.productObser = this.motherBoard.getProductList();
        }
        break;
      case ProductConstants.CORE_MONITOR:
        {
          this.productHead = ["ID", "NAME", "IMAGE", " SCREEN SIZE", "RESULTION", "REFRESH RATE", "RESPONSE TIME",
            "MONITOR PANEL TYPE", "ASPECT RATIO", "PRICE"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_PSU:
        {
          this.productHead = ["ID", "NAME", "IMAGE", "FORM FACTOR", "WATTAGE", "EFFICIENCY", "MODULAR", "PRICE"]
          this.productObser = this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_RAM:
        {
          this.productHead = ["ID", "NAME", "IMAGE", "NOOFSTICKS", "RAM SIZE", "SPEED", "TOTAL SIZE",
            "TYPE", "PRICE"]
          this.productObser = this.ramService.getProductList();
        }
        break;
      case ProductConstants.CORE_STORAGE:
        {
          this.productHead = ["ID", "NAME", "IMAGE", "CAPACITY", "TYPE", "CACHE", "FORM FACTOR", " INTERFACE",
            "PRICE PER GB"
          ]
          this.productObser = this.storage.getProductList();
        }
        break;


    }
  }
  name: string;
  public performSearch(key, value) {
    // this.type = data;
    this.dataService.setComponent(key, value);
    this.router.navigateByUrl('/cutomize_intel');
  }
}
