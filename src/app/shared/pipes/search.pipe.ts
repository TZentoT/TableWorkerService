import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(workers: any[],searchStr: string): any[]{
    let mask = searchStr.split(' ')
    if (searchStr == '') return workers
    else{
      //let filteredWorkers = workers.filter(worker =>  worker.name.toLowerCase().indexOf(searchStr) !== -1)
      let filteredWorkers = []

      for (const worker of workers) {
        if (worker.name.toLowerCase().indexOf(mask[0].toLowerCase()) !== -1) {
          if (mask[1] == undefined || mask[1] == '') filteredWorkers.push(worker)
          else {
            if (worker.surname.toLowerCase().indexOf(mask[1].toLowerCase()) !== -1) filteredWorkers.push(worker)
          }
        }
      }

      return filteredWorkers
    }
  
  }

}
