import { Component, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';

  workers: MyWorker[] = [];
  myWorkersType = MyWorkerType;

  hideProgrammers: boolean = false;
  hideDesigners: boolean = false;
  hideCopywriters: boolean = false;
  hideManagers: boolean = false;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  searchStr: string = "";

  constructor(
    private httpWorkerService: HttpWorkerService,
  ) { }

  ngOnInit(): void {
    this.dropdownList = [
      { "id": this.myWorkersType.programmer, "itemName": "Программист" },
      { "id": this.myWorkersType.designer, "itemName": "Дизайнер" },
      { "id": this.myWorkersType.copywriter, "itemName": "Рекламщик" },
      { "id": this.myWorkersType.manager, "itemName": "Менеджер" }
    ];

    this.selectedItems = [
      { "id": this.myWorkersType.programmer, "itemName": "Программист" },
      { "id": this.myWorkersType.designer, "itemName": "Дизайнер" },
      { "id": this.myWorkersType.copywriter, "itemName": "Рекламщик" },
      { "id": this.myWorkersType.manager, "itemName": "Менеджер" }];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Выберите сферу",
      selectAllText: 'Выбрать все',
      unSelectAllText: 'Скрыть все',
      // enableSearchFilter: true,
      // classes:"myclass custom-class"
    };

    this.getData()
  }

  onItemSelect(item: any) {
 
    if (item.id == 0) this.hideProgrammers = false;
    if (item.id == 1) this.hideDesigners = false;
    if (item.id == 2) this.hideCopywriters = false;
    if (item.id == 3) this.hideManagers = false;
  }
  OnItemDeSelect(item: any) {
  
    if (item.id == 0) this.hideProgrammers = true;
    if (item.id == 1) this.hideDesigners = true;
    if (item.id == 2) this.hideCopywriters = true;
    if (item.id == 3) this.hideManagers = true;

  }
  onSelectAll(items: any) {

    this.hideProgrammers = false;
    this.hideDesigners = false;
    this.hideCopywriters = false;
    this.hideManagers = false;
  }
  onDeSelectAll(items: any) {
  
    this.hideProgrammers = true;
    this.hideDesigners = true;
    this.hideCopywriters = true;
    this.hideManagers = true;
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerService.getWorker();
    } catch (error) {
      console.log(error)
    }
  }

  async postWorker(){
    try {

    } catch (error) {
      console.log(error)
    }
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type)
  }

  async onDeleteWorker(id: number) {
    try {
     await this.httpWorkerService.deleteWorker(id)
    } catch (error) {
      console.log(error)
    }finally{
      this.getData()
      console.log(this.workers)
    }
  }

  async onAddWorker(worker: MyWorker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    
    try {
      await this.httpWorkerService.postWorker(worker)
    } catch (error) {
      console.log(error)
    }finally{
      this.getData()
    }
  }

  async onChangeWorker(worker) {
    for (let item of this.workers) {
      if (item.id === worker.id) {
        item.name = worker.name;
        item.surname = worker.surname;
        item.telephone = worker.telephone;
      }
    }

    try {
      await this.httpWorkerService.changeWorker(worker);
    } catch (error) {
      console.log(error)
    }finally{
      this.getData()
    }
  }
}

/**
 * {
      "id": 1,
      "name": "Иван",
      "surname": "Иванов",
      "type": 0,
      "telephone": "+7(902) 481-8585"
    },
    {
      "id": 2,
      "name": "Петр",
      "surname": "Петров",
      "type": 1,
      "telephone": "+7(956) 404-7561"
    },
    {
      "id": 3,
      "name": "Сидр",
      "surname": "Сидоров",
      "type": 2,
      "telephone": "+7(999) 536-1245"
    },
    {
      "id": 4,
      "name": "Василий",
      "surname": "Васильев",
      "type": 3,
      "telephone": "+7(943) 487-4545"
    }
 */