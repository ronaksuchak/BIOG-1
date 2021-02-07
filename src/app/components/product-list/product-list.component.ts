import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiHelper } from 'src/app/common/ApiHelper';
import { CartItem } from 'src/app/common/cart-item';
import { ProductConstants } from 'src/app/common/ProductConstants';
import { CartService } from 'src/app/services/cart.service';
import { CaseService } from 'src/app/services/case.service';
import { CpucoolerService } from 'src/app/services/cpucooler.service';
import { DataService } from 'src/app/services/data.service';
import { GraphicCardService } from 'src/app/services/graphic-card.service';
import { MotherBoardService } from 'src/app/services/mother-board.service';
import { PowersupplyService } from 'src/app/services/powersupply.service';
import { ProductService } from 'src/app/services/product.service';
import { RamService } from 'src/app/services/ram.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsecaseService } from './../../services/usecase.service';

@Component({
  selector: 'app-product-list',
  /*   templateUrl: './product-list-grid.component.html', */
  // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //array of product class
  products: Observable<any[]>;
  name: string;
  usecase: string;
  apiHelper: ApiHelper;
  //service injection
  constructor(private usecaseService: UsecaseService,
    private dataService: DataService,
    private cpuCooler: CpucoolerService,
    private graphicsCard: GraphicCardService,
    private caseservice: CaseService,
    private motherBoard: MotherBoardService,
    private powerSupply: PowersupplyService,
    private ramService: RamService,
    private storage: StorageService,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.route.paramMap.subscribe(params => {
      this.name = params.get("comp");
      this.products = this.getSelectedComponent(this.name)

    })
    this.route.queryParamMap.subscribe(params => {
      this.usecase = params.get('use');
      // console.log(usecase);
      if (!!this.usecase)
        this.products = usecaseService.getSystemByUse(this.usecase);
      else
        this.products = usecaseService.getAllPc();
    })
  }





  ngOnInit() {

  }


  listProducts() {

    this.products =
      this.usecaseService.getSystemByBrand
        (this.dataService.getData())


  }
  // public selected(value) {
  //   // this.type = data;
  //   this.dataService.setData(value)
  //   this.router.navigateByUrl('/addcomponent')
  // }

  public addToCart(value) {
    let cartItem = new CartItem(value);
    this.cartService.setCartItem(cartItem);
    console.log("add to cart called!!")
    this.router.navigateByUrl('/addtocart')

  }

  public showdetails(value){
    console.log(value);
    this.router.navigateByUrl('/view')
  }

  getSelectedComponent(type: string): Observable<any[]> {

    switch (type) {
      case ProductConstants.CORE_CPU:
        {
          return this.productService.getProductList();
        }
        break;
      case ProductConstants.CORE_CASE:
        {
          console.log("in  case");
          return this.caseservice.getProductList();
          // this.productObser.forEach(p => );
        }
        break;
      case ProductConstants.CORE_COOLER:
        {
          return this.cpuCooler.getProductList();
          // this.productObser.forEach(p => );
        }
        break;
      case ProductConstants.CORE_GPU:
        {
          return this.graphicsCard.getProductList();
        }
        break;
      case ProductConstants.CORE_MOBO:
        {
          return this.motherBoard.getProductList();
        }
        break;
      case ProductConstants.CORE_MONITOR:
        {
          return this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_PSU:
        {
          return this.powerSupply.getProductList();
        }
        break;
      case ProductConstants.CORE_RAM:
        {
          return this.ramService.getProductList();
        }
        break;
      case ProductConstants.CORE_STORAGE:
        {
          return this.storage.getProductList();
        }
        break;


    }


  }
}
