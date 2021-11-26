---
layout: page
title: "Typescript"
permalink: 'coding/typescript'
---
<small class="owner">Owner: Development</small> _Last revision: 12.11.2021_ 

- [HTTP Service](#http-service)
- [Repositories](#repositories)
- [Types](#types)
{: .toc}

## HTTP Service[#](#http-service)
It's generally a good idea to separate frontend logic from the HTTP service. This allows us to easily switch the underlying HTTP client, e.g. from `axios` to `vue-resource`.

```typescript
// services/HttpService.ts
import axios, { AxiosResponse } from 'axios';

export default class HttpService {
    private static instance: HttpService | null = null;

    public static getInstance(): HttpService {
        if (this.instance === null) {
            this.instance = new HttpService();
        }

        return this.instance;
    }

    public get(endpoint: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios.get('/api/' + endpoint)
                .then(response => resolve(response.data))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }
}

// repositories/Repository.ts
import HttpService from '../services/HttpService';
import { ExampleType } from "../types/ExampleType";

export default class ExampleRepository {
    private httpService: HttpService = HttpService.getInstance();
    
    public getExample(project: string): Promise<ExampleType> {
        return new Promise<ExampleType>((resolve, reject) => {
            this.httpService.get('example')
                .then(response => {
                    ...
                })
                .catch(error => {
                    reject(error);
                });
        }
    }
}
```

## Repositories[#](#repositories)
Use the repository pattern to abstract any interaction with an external API or database.

```typescript
import HttpService from '../services/HttpService';
import { ExampleType } from "../types/ExampleType";

export default class ExampleRepository {
    private httpService: HttpService = HttpService.getInstance();
    
    public getExample(project: string): Promise<ExampleType> {
        return new Promise<ExampleType>((resolve, reject) => {
            this.httpService.get('example/1')
                .then(response => {
                    ...
                })
                .catch(error => {
                    reject(error);
                });
        }
    }
    
    public deleteExample(project: string): Promise<boolean> {
        return new Promise<ExampleType>((resolve, reject) => {
            this.httpService.delete('example/1')
                .then(response => {
                    ...
                })
                .catch(error => {
                    reject(error);
                });
        }
    }
}
```

## Types[#](#types)
Use types wherever possible to improve code structure and allow better type hinting. Types are preferred to interfaces or model classes.

```typescript
import { OtherType } from './OtherType';

export type ExampleType = {
    id: number;
    name: string;
    others: OtherType[];
}

```