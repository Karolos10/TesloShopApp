import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCardComponent } from "../../../products/components/product-card/product-card.component";

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {

  route = inject(ActivatedRoute);
  productService = inject(ProductsService);

    productResource = rxResource({
      request: () => ({gender: this.gender()}),
      loader: ({request}) => {
        return this.productService.getProducts({
          gender: request.gender
        });
      },
    });

  gender = toSignal(
    this.route.params.pipe(map(({gender}) => gender))
  );
}
