import { CaseService } from "../services/case.service";
import { CpucoolerService } from "../services/cpucooler.service";
import { DataService } from "../services/data.service";
import { GraphicCardService } from "../services/graphic-card.service";
import { MotherBoardService } from "../services/mother-board.service";
import { PowersupplyService } from "../services/powersupply.service";
import { ProductService } from "../services/product.service";
import { RamService } from "../services/ram.service";
import { StorageService } from "../services/storage.service";
import { ProductConstants } from "./ProductConstants";

export class ApiHelper {
    constructor(
        private dataService: DataService,
        private cpuCooler: CpucoolerService,
        private graphicsCard: GraphicCardService,
        private caseservice: CaseService,
        private motherBoard: MotherBoardService,
        private powerSupply: PowersupplyService,
        private ramService: RamService,
        private storage: StorageService,
        private productService: ProductService
    ) { }
    getSelectedComponent(type: string): any {

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
                    return this.powerSupply.getProductList();
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

