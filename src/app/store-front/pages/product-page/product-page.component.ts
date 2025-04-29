import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarruselComponent } from "../../../products/components/product-carrusel/product-carrusel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarruselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  activateRoute = inject(ActivatedRoute);
  productSerivec = inject(ProductsService);

  productIdSlug= this.activateRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug}),
    loader: ({ request}) => this.productSerivec.getProductByIdSlug(request.idSlug)
  })
}
