export interface MyWorker  {
    name: string;
    surname: string
    type: number;
    telephone: string;
    id?: number; 
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}