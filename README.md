# Angular step by step

## Practices
1. Add router for each component
2. Add UT for router
3. Call real webapi instead of local data
4. keep all test pass in todo.service.spec.ts

# tips:
##### How to define jasmine spy

```
let httpClientSpy: { get: jasmine.Spy }; 
```
##### How to create jasmine spy
```
httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
```

##### How to response response:

```
function asyncData<T>(data: T) {
  return of(data);
}
  function asyncError<T>(errorObject: any) {
    return throwError(() => errorObject);
  }
```

##### How to create HttpHeaders
```
import { HttpHeaders } from '@angular/common/http';

----
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

```
# Reference:
* https://angular.io/guide/testing-services#testing-http-services
