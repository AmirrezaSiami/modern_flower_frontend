import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Injectable} from "@angular/core"
import {Observable, of} from "rxjs";
import {tap, catchError} from "rxjs/operators";
import {TranslocoService} from "@ngneat/transloco";
import {ToastService} from "../services/toast.service";
import {Router} from "@angular/router";

@Injectable()
export class ApiResponseHttpInterceptor implements HttpInterceptor {

  constructor(
    // private toasterService: ToastService,
    // private translocoService: TranslocoService,
    private router: Router
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          // if (evt.body && evt.body.success)
            // this.toasterService.success(evt.body.success.message);
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {

            // when error message isn't set in API
            // if (!err.error.error) this.toasterService.error(this.translocoService.translate('general', {}, 'errors'));

            // API set single error
            // if (typeof err.error.error === "string") this.toasterService.error(err.error.error);

            // API set list of errors
            if (Array.isArray(err.error.error)) {
              err.error.error.forEach((e: string) => {
                // this.toasterService.error(e);
              });
            }

            // status code handler
            if (+err.status < 200 || +err.status > 300) {
              switch (err.status) {

                case 501:
                  this.router.navigateByUrl('login').then(r => {
                  });
                  break;

                case 401:
                  this.router.navigateByUrl('404').then(r => {
                  });
                  break;

              }
            }

          } catch (e) {
            // this.toasterService.error(this.translocoService.translate('general', {}, 'errors'));
          }
        }
        return of(err);
      }));
  }

}
